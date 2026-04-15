/**
 * Source registry helpers — Böhmer app (simplified).
 * No external sources.json needed; sources are inline in analysis pages.
 */

export interface Source {
  id: string;
  label: string;
  url?: string;
  description?: string;
  confidence?: "high" | "medium" | "low";
  quotedText?: string;
}

const sourceMap = new Map<string, Source>();

/**
 * Return typed Source objects for the given IDs.
 * Unknown IDs are returned as stub entries.
 */
export function getSources(ids: string[]): Source[] {
  return ids.map((id) => {
    const found = sourceMap.get(id);
    if (found) return found;
    return {
      id,
      label: id,
      url: undefined,
      description: "Source pending.",
    } satisfies Source;
  });
}

export function getSource(id: string): Source | undefined {
  return sourceMap.get(id);
}

export function hasSource(id: string): boolean {
  return sourceMap.has(id);
}
