/**
 * Value Network helpers — pure utility functions, no React imports.
 */

import type { VNUnit, L6System } from "@/types";

/**
 * Derive a 2-sentence plain-language description for a VN unit.
 * Uses the unit's description field if present; derives from functionalJob otherwise.
 */
export function deriveDescription(unit: VNUnit, systemName: string): string {
  if (unit.description && unit.description.trim()) {
    // Strip Böhmer anchor markers for display
    const clean = unit.description
      .replace(/BÖHMER PRIMARY/gi, "")
      .replace(/BÖHMER SECONDARY/gi, "")
      .replace(/BÖHMER TERTIARY/gi, "")
      .trim();
    return clean;
  }

  // Build from functionalJob
  const clean = unit.functionalJob
    .replace(/\[SRC:[^\]]*\]/gi, "")
    .trim()
    .replace(/\s+/g, " ");

  const sentences = clean.split(/(?<=[.!?])\s+/);
  const first = sentences[0] ?? clean;
  const second = `It is part of the ${systemName} process step in the Böhmer manufacturing chain.`;

  return `${first.endsWith(".") ? first : first + "."} ${second}`;
}

/**
 * Return the Böhmer anchor label for a VN unit, if any.
 * Used to highlight Böhmer's own positions in the value network.
 */
export function böhmerPositionLabel(unit: VNUnit): string | null {
  const text = unit.functionalJob + " " + unit.description;
  if (/BÖHMER PRIMARY/i.test(text)) return "PRIMARY";
  if (/BÖHMER SECONDARY/i.test(text)) return "SECONDARY";
  if (/BÖHMER TERTIARY/i.test(text)) return "TERTIARY";
  if (/BÖHMER/i.test(text)) return "ANCHOR";
  return null;
}

// Alias kept for backward compatibility with VNDiagram import
export const marquardtPositionLabel = böhmerPositionLabel;

/**
 * Extract the L6 prefix from an L5 unit ID.
 * Handles formats like "L5.1.1" → "1", "L5.a.1" → "a", "L5.QA.1" → "QA"
 */
export function getL6Prefix(l5Id: string): string {
  const parts = l5Id.split(".");
  if (parts.length >= 2) {
    return parts[1] ?? "";
  }
  return "";
}

/**
 * Group L5 units by their parent L6 system.
 * Supports both numeric IDs (L5.1.1 → L6.1) and alpha IDs (L5.a.1 → L6.a, L5.QA.1 → L6.QA).
 */
export function groupUnitsByL6(
  units: VNUnit[],
  systems: L6System[]
): Map<string, VNUnit[]> {
  const map = new Map<string, VNUnit[]>();

  for (const sys of systems) {
    map.set(sys.id, []);
  }

  for (const unit of units) {
    // Parse section from unit ID: "L5.1.1" → "1", "L5.a.1" → "a", "L5.QA.1" → "QA"
    const parts = unit.id.split(".");
    const section = parts[1] ?? "";

    // Try direct match first: L5.a.1 → L6.a
    const directKey = `L6.${section}`;
    const directBucket = map.get(directKey);
    if (directBucket) {
      directBucket.push(unit);
      continue;
    }

    // Numeric fallback: section "1" → systems[0]
    const sectionNum = parseInt(section, 10);
    if (!isNaN(sectionNum)) {
      const fallbackKey = systems[sectionNum - 1]?.id;
      if (fallbackKey && map.has(fallbackKey)) {
        map.get(fallbackKey)!.push(unit);
      }
    }
  }

  return map;
}

/**
 * Clean a functional job string for display (remove source tags, tidy whitespace).
 */
export function cleanFunctionalJob(raw: string): string {
  return raw
    .replace(/\[SRC:[^\]]*\]/gi, "")
    .replace(/\*\*/g, "")
    .replace(/BÖHMER PRIMARY/gi, "")
    .replace(/BÖHMER SECONDARY/gi, "")
    .replace(/BÖHMER TERTIARY/gi, "")
    .trim()
    .replace(/\s{2,}/g, " ");
}
