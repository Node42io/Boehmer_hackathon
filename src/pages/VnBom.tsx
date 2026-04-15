/**
 * 05 VN + BOM (333111) — Manufacturing value network and bill of materials
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

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

const scaleBadge = (s: string) => {
  const colors: Record<string, string> = {
    "fixed": "badge--strong",
    "sub-linear": "badge--moderate",
    "linear": "badge--neutral",
    "step-function": "badge--weak",
    "exponential": "badge--weak",
  };
  return <span className={`badge ${colors[s] || "badge--neutral"}`} style={{ fontSize: 10 }}>{s}</span>;
};

export default function VnBom() {
  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 04 / Value Network + BOM"
        title="VN + BOM (NAICS 333111)"
        description="14-step manufacturing value network with per-step scaling analysis. Full L4-to-L0 bill of materials for both products."
      />
      <div className="md">
        <SectionAnchor id="vn-summary" title="Value Network Summary" />
        <table>
          <thead><tr><th>Metric</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>Total L6 steps</strong></td><td>14</td></tr>
            <tr><td><strong>In-house steps</strong></td><td>13 (Steps 1-8, 10-14)</td></tr>
            <tr><td><strong>Outsourced steps</strong></td><td>1 (Step 9: Surface Treatment)</td></tr>
            <tr><td><strong>Primary labor bottleneck</strong></td><td>Step 7: Welding & Assembly (linear scaling, certified welder constraint)</td></tr>
            <tr><td><strong>Primary capital bottleneck</strong></td><td>Step 4: Laser Cutting (step-function, shared with contract business)</td></tr>
            <tr><td><strong>Critical quality gate</strong></td><td>Step 10: QC — first-article inspection per DIN EN 1090</td></tr>
            <tr><td><strong>Est. labor / Heuraufe</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>14-22 hrs</td></tr>
            <tr><td><strong>Est. labor / Paddockbox (4-seg)</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>24-38 hrs</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="vn-steps" title="L6 Manufacturing Process Steps" />
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
        <SectionAnchor id="vn-bom-heuraufe" title="BOM — Heuraufe" />
        <table>
          <thead><tr><th>L4 Subsystem</th><th>Key Components</th><th>Est. Weight</th></tr></thead>
          <tbody>
            <tr><td><strong>L4-H01: Base Frame Assembly</strong></td><td>Main frame rails (80x80x5 SHS), cross members, tractor fork pockets, skid runners</td><td>~81 kg</td></tr>
            <tr><td><strong>L4-H02: Support Post Assembly</strong></td><td>4-6 vertical posts (80x80x5 SHS), base plates, cap plates</td><td>~70 kg</td></tr>
            <tr><td><strong>L4-H03: Roof Assembly</strong></td><td>Ridge beam, eave beams, rafters, purlins (40x40x3), corrugated roofing sheet</td><td>~42 kg</td></tr>
            <tr><td><strong>L4-H04: Hay Containment System</strong></td><td>Bar-grid frames (3-4 per unit), grid bars (16mm round), hay net option</td><td>~42 kg</td></tr>
            <tr><td><strong>L4-H05: Surface Treatment</strong></td><td>Hot-dip galvanizing ISO 1461 + powder topcoat (outsourced service)</td><td>—</td></tr>
            <tr><td><strong>L4-H06: Hardware & Fasteners</strong></td><td>Roof screws, bolts, labels, accessory fittings</td><td>~5 kg</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>Estimated total unit weight: ~250 kg. Primary material: S355J2 structural steel tube.</p>

        <hr />
        <SectionAnchor id="vn-bom-paddockbox" title="BOM — Paddockbox (per segment)" />
        <table>
          <thead><tr><th>L4 Subsystem</th><th>Key Components</th><th>Est. Weight</th></tr></thead>
          <tbody>
            <tr><td><strong>L4-P01: Rail Frame</strong></td><td>2-3 horizontal rails (60x60x4 SHS), 3.0m per rail</td><td>~42 kg</td></tr>
            <tr><td><strong>L4-P02: Post Assembly</strong></td><td>2-3 vertical posts (80x80x3 SHS) with fatigue-rated hinge joints</td><td>~25 kg</td></tr>
            <tr><td><strong>L4-P03: Castor Assembly</strong></td><td>{"2-4 heavy-duty castors (>=800kg lateral), wheel brakes, socket plates"}</td><td>~12 kg</td></tr>
            <tr><td><strong>L4-P04: Connectors</strong></td><td>Pinned/flanged end-plate connectors, panel lock pins</td><td>~4 kg</td></tr>
            <tr><td><strong>L4-P05: Wall-Mount Option</strong></td><td>Wall-hinge anchor brackets (fixed-position variant)</td><td>~3 kg</td></tr>
            <tr><td><strong>L4-P06: Surface Treatment</strong></td><td>Hot-dip galvanizing + powder topcoat; castor thread masking required</td><td>—</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>Estimated weight per segment: ~90 kg. 4-segment configuration: ~360 kg total.</p>
      </div>
    </section>
  );
}
