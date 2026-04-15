/**
 * VnBom — Manufacturing Value Network + Bill of Materials (NAICS 333111)
 *
 * Three tabs:
 *   1. "Manufacturing VN" — interactive VNDiagram for the 14-step fabrication VN
 *   2. "Heuraufe BOM"    — interactive BOMTab for Heuraufe L4-L0 BOM
 *   3. "Paddockbox BOM"  — interactive BOMTab for Paddockbox L4-L0 BOM
 *
 * Static L6 scaling table and summary are shown BELOW the interactive diagrams.
 */

import { useState } from "react";
import type { CSSProperties } from "react";
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";
import VNDiagram from "./analysis/tabs/valuenetwork/VNDiagram";
import BOMTab from "./analysis/tabs/BOMTab";

import vnManufacturing from "@/data/vnManufacturing.json";
import bomHeuraufe from "@/data/bomHeuraufe.json";
import bomPaddockbox from "@/data/bomPaddockbox.json";

import type { ValueNetworkData, BOMData } from "@/types";

/* ── Tab strip styles (inline — no external CSS needed) ─────────────────── */
const TAB_STRIP_STYLE: CSSProperties = {
  display: "flex",
  gap: 0,
  borderBottom: "1px solid var(--border-subtle)",
  marginBottom: 28,
};

const TAB_BASE: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  padding: "10px 20px",
  fontSize: 13,
  fontWeight: 500,
  color: "var(--text-gray)",
  cursor: "pointer",
  background: "none",
  border: "none",
  borderBottom: "2px solid transparent",
  marginBottom: -1,
  transition: "color 0.13s",
  userSelect: "none",
  fontFamily: "inherit",
};

const TAB_ACTIVE: CSSProperties = {
  ...TAB_BASE,
  color: "var(--text-white)",
  borderBottom: "2px solid var(--accent-yellow)",
};

/* ── L6 scaling data ─────────────────────────────────────────────────────── */
const l6Steps = [
  { n: 1, name: "Design & Engineering", job: "Translate product requirements into manufacturing-ready drawings, BOM, and WPS", pScale: "fixed", prScale: "fixed", tScale: "fixed" },
  { n: 2, name: "Material Procurement", job: "Source steel tube, sheet, and hardware at target cost, quality, and lead time", pScale: "fixed", prScale: "sub-linear", tScale: "fixed" },
  { n: 3, name: "Material Receiving & Storage", job: "Verify incoming material identity, grade, dimensions; store in staging area", pScale: "linear", prScale: "linear", tScale: "fixed" },
  { n: 4, name: "Laser Cutting / Plasma Cutting", job: "Cut flat sheet steel into 2D profiles per DXF nesting layout", pScale: "step-function", prScale: "sub-linear", tScale: "step-function" },
  { n: 5, name: "Tube Cutting & Preparation", job: "Cut steel tube stock to specified lengths with clean, square ends", pScale: "step-function", prScale: "linear", tScale: "step-function" },
  { n: 6, name: "Bending / Forming", job: "Form steel tube and sheet into required angles, radii, and profiles", pScale: "step-function", prScale: "sub-linear", tScale: "step-function" },
  { n: 7, name: "Welding & Assembly", job: "Join components into structural assemblies per WPS (DIN EN ISO 3834-2)", pScale: "linear", prScale: "linear", tScale: "step-function" },
  { n: 8, name: "Grinding & Deburring", job: "Remove weld spatter, grind flush in horse-contact zones, deburr all edges", pScale: "linear", prScale: "linear", tScale: "fixed" },
  { n: 9, name: "Surface Treatment (outsourced)", job: "Hot-dip galvanize + powder coat for ISO 12944 C3+ (15-year life)", pScale: "sub-linear", prScale: "sub-linear", tScale: "fixed" },
  { n: 10, name: "Quality Control & Inspection", job: "Verify dimensions, weld quality, coating integrity against DIN EN 1090", pScale: "sub-linear", prScale: "sub-linear", tScale: "fixed" },
  { n: 11, name: "Final Assembly & Hardware", job: "Install bolts, hay nets, castors, hinge pins, connector hardware, labels", pScale: "linear", prScale: "linear", tScale: "fixed" },
  { n: 12, name: "Packaging", job: "Protect finished product for transport — prevent galvanizing damage", pScale: "linear", prScale: "linear", tScale: "fixed" },
  { n: 13, name: "Storage & Logistics", job: "Hold finished goods until dispatch; manage inventory turns", pScale: "step-function", prScale: "step-function", tScale: "step-function" },
  { n: 14, name: "Shipping & Delivery", job: "Deliver to customer within DACH region", pScale: "sub-linear", prScale: "sub-linear", tScale: "fixed" },
];

const scaleLabel: Record<string, string> = {
  "fixed": "low effort",
  "sub-linear": "low effort",
  "linear": "medium effort",
  "step-function": "high effort",
  "exponential": "high effort",
};

const scaleBadge = (s: string) => {
  const colors: Record<string, string> = {
    "fixed": "badge--strong",
    "sub-linear": "badge--strong",
    "linear": "badge--moderate",
    "step-function": "badge--weak",
    "exponential": "badge--weak",
  };
  return <span className={`badge ${colors[s] || "badge--neutral"}`} style={{ fontSize: 10 }}>{scaleLabel[s] || s}</span>;
};

/* ── Tab IDs ─────────────────────────────────────────────────────────────── */
type TabId = "vn" | "bom-heuraufe" | "bom-paddockbox";

const TABS: { id: TabId; label: string }[] = [
  { id: "vn", label: "Manufacturing VN" },
  { id: "bom-heuraufe", label: "Heuraufe BOM" },
  { id: "bom-paddockbox", label: "Paddockbox BOM" },
];

/* ── Main page ───────────────────────────────────────────────────────────── */
export default function VnBom() {
  const [activeTab, setActiveTab] = useState<TabId>("vn");

  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 04 / Value Network + BOM"
        title="Manufacturing VN & Product BOMs"
        description="Interactive manufacturing value network and bill of materials for Böhmer's 14-step fabrication chain."
      />

      {/* ── Tab strip ── */}
      <div style={TAB_STRIP_STYLE}>
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            style={activeTab === t.id ? TAB_ACTIVE : TAB_BASE}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Tab content ── */}
      {activeTab === "vn" && (
        <div>
          <div style={{ marginBottom: 24 }}>
            <div className="section__eyebrow">Value Network · NAICS 333111</div>
            <h2 className="section__title">Manufacturing Process Value Network</h2>
            <p className="section__sub">
              14-step fabrication chain — Böhmer Systemtechnik GmbH · Farm Machinery & Equipment Manufacturing
            </p>
          </div>
          <VNDiagram data={vnManufacturing as ValueNetworkData} />
          <div className="card" style={{ padding: 12, marginTop: 16, display: "flex", alignItems: "flex-start", gap: 12 }}>
            <span style={{ color: "var(--accent-yellow)", fontSize: 14, lineHeight: 1 }}>★</span>
            <p style={{ margin: 0, fontSize: 12, color: "var(--text-gray-light)", lineHeight: 1.6 }}>
              <strong style={{ color: "var(--accent-yellow)" }}>Böhmer welding competence advantage:</strong> Yellow "Primary" markers on L5 units indicate steps where Böhmer's DIN EN ISO 3834-2 certified MIG/MAG-TIG welding capability provides a direct structural or quality advantage over uncertified fabricators. Step 7 (Welding & Assembly) and steps requiring fatigue-rated weld joints (Paddockbox hinge assembly) are the primary competence positions.
            </p>
          </div>
        </div>
      )}

      {activeTab === "bom-heuraufe" && (
        <BOMTab bomData={bomHeuraufe as BOMData} />
      )}

      {activeTab === "bom-paddockbox" && (
        <BOMTab bomData={bomPaddockbox as BOMData} />
      )}

      {/* ── Static content below diagrams ── */}
      <div className="md" style={{ marginTop: 48 }}>
        <hr />
        <SectionAnchor id="vn-summary" title="Value Network Summary" />
        <table>
          <thead><tr><th>Metric</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>Total L6 steps</strong></td><td>14</td></tr>
            <tr><td><strong>In-house steps</strong></td><td>13 (Steps 1–8, 10–14)</td></tr>
            <tr><td><strong>Outsourced steps</strong></td><td>1 (Step 9: Surface Treatment)</td></tr>
            <tr><td><strong>Primary labor bottleneck</strong></td><td>Step 7: Welding & Assembly (linear scaling, certified welder constraint)</td></tr>
            <tr><td><strong>Primary capital bottleneck</strong></td><td>Step 4: Laser Cutting (step-function, shared with contract business)</td></tr>
            <tr><td><strong>Critical quality gate</strong></td><td>Step 10: QC — first-article inspection per DIN EN 1090</td></tr>
            <tr><td><strong>New capability required</strong></td><td>Step 13: Finished-goods storage (zero inventory today per C4 constraint)</td></tr>
            <tr><td><strong>Est. labor / Heuraufe</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>14–22 hrs</td></tr>
            <tr><td><strong>Est. labor / Paddockbox (4-seg)</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>24–38 hrs</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="vn-steps" title="Manufacturing Process Steps Analysis" />
        <table>
          <thead><tr><th>#</th><th>Step</th><th>Core Functional Job</th><th>People</th><th>Process</th><th>Tech</th></tr></thead>
          <tbody>
            {l6Steps.map((s) => (
              <tr key={s.n} style={s.n === 9 ? { background: "rgba(253,255,152,0.04)" } : undefined}>
                <td style={{ fontWeight: 700, textAlign: "center" }}>{s.n}</td>
                <td><strong>{s.name}</strong></td>
                <td style={{ fontSize: 12 }}>{s.job}</td>
                <td>{scaleBadge(s.pScale)}</td>
                <td>{scaleBadge(s.prScale)}</td>
                <td>{scaleBadge(s.tScale)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: 11, color: "var(--text-gray)" }}>
          Step 9 (highlighted) is the only outsourced step. All other steps use existing Böhmer equipment and personnel.
        </p>

        <hr />
        <SectionAnchor id="vn-bom-heuraufe" title="BOM Summary — Heuraufe" />
        <table>
          <thead><tr><th>L4 Subsystem</th><th>Key Components</th><th>Est. Weight</th><th>BOM Cost %</th></tr></thead>
          <tbody>
            <tr><td><strong>L4-H01: Base Frame Assembly</strong></td><td>Main frame rails (80×80×5 SHS), cross members, tractor fork pockets, skid runners</td><td>~81 kg</td><td>~32%</td></tr>
            <tr><td><strong>L4-H02: Support Post Assembly</strong></td><td>4–6 vertical posts (80×80×5 SHS), base plates, cap plates</td><td>~70 kg</td><td>~28%</td></tr>
            <tr><td><strong>L4-H03: Roof Assembly</strong></td><td>Ridge beam, eave beams, rafters, purlins (40×40×3), corrugated roofing sheet</td><td>~42 kg</td><td>~17%</td></tr>
            <tr style={{ background: "rgba(253,255,152,0.04)" }}><td><strong>L4-H04: Hay Containment System</strong></td><td>Bar-grid frames (3–4 per unit), 16 mm round bar, hay net option — <strong>Böhmer anchor</strong></td><td>~42 kg</td><td>~16%</td></tr>
            <tr><td><strong>L4-H05: Surface Treatment</strong></td><td>Hot-dip galvanizing ISO 1461 + powder topcoat (outsourced service)</td><td>—</td><td>~5%</td></tr>
            <tr><td><strong>L4-H06: Hardware & Fasteners</strong></td><td>Roof screws, bolts, CE/GPSR labels, accessory fittings</td><td>~5 kg</td><td>~2%</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>Estimated total unit weight: ~255 kg. Primary material: S355J2 structural steel tube.</p>

        <hr />
        <SectionAnchor id="vn-bom-paddockbox" title="BOM Summary — Paddockbox (per segment)" />
        <table>
          <thead><tr><th>L4 Subsystem</th><th>Key Components</th><th>Est. Weight / Segment</th><th>BOM Cost %</th></tr></thead>
          <tbody>
            <tr><td><strong>L4-P01: Panel Segment Frame</strong></td><td>2 posts (80×80×3 SHS) + 3 rails (60×60×4 SHS, 3000 mm) + end connector plates</td><td>~59 kg</td><td>~45%</td></tr>
            <tr><td><strong>L4-P02: Gate Segment Assembly</strong></td><td>SHS 60×60×4 gate frame + weld-on barrel hinges + slide bolt latch (1 per enclosure)</td><td>~23 kg</td><td>~18%</td></tr>
            <tr style={{ background: "rgba(253,255,152,0.04)" }}><td><strong>L4-P03: Castor / Wheel Assembly</strong></td><td>2× heavy-duty swivel castor (≥400 kg, 200 mm dia., foot brake) — <strong>Böhmer anchor</strong></td><td>~9 kg</td><td>~14%</td></tr>
            <tr style={{ background: "rgba(253,255,152,0.04)" }}><td><strong>L4-P04: Hinge Assembly (fold-flat)</strong></td><td>S355J2 barrel hinge + fatigue-rated WPS + drop-in locking pin — <strong>Böhmer anchor</strong></td><td>~2 kg</td><td>~12%</td></tr>
            <tr><td><strong>L4-P05: Segment Connection Hardware</strong></td><td>Pinned / flanged connectors, R-clip quick-release pins (4 sets per enclosure)</td><td>~1 kg</td><td>~6%</td></tr>
            <tr><td><strong>L4-P07: Surface Treatment</strong></td><td>Hot-dip galvanizing + powder topcoat; castor thread masking required</td><td>—</td><td>~3%</td></tr>
            <tr><td><strong>L4-P08: Hardware & Labels</strong></td><td>Bolts, CE/GPSR marking plate, safety instruction plate, Böhmer branding</td><td>~1 kg</td><td>~1%</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>Estimated weight per segment: ~90 kg. 4-segment configuration: ~360 kg total.</p>
      </div>
    </section>
  );
}
