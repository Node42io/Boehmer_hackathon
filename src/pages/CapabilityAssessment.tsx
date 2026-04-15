/**
 * 02 Capability Assessment — Constraints analysis for both products
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

export default function CapabilityAssessment() {
  const constraints = [
    { id: "C1", name: "Laser Bed Dimension Limit", type: "physical", mechanism: "Standard laser table max 3000x1500mm", absolute: false, products: "Heuraufe roof truss" },
    { id: "C2", name: "Material Thickness Envelope", type: "physical", mechanism: "Laser cutting economical for 1-20mm steel", absolute: false, products: "neither (both within range)" },
    { id: "C3", name: "Corrosion Protection Gap", type: "chemical", mechanism: "No in-house hot-dip galvanizing or powder coating", absolute: false, products: "Heuraufe, Paddockbox" },
    { id: "C4", name: "JIT-to-Push Transition", type: "operational", mechanism: "All current production is customer-pull JIT", absolute: false, products: "Heuraufe, Paddockbox" },
    { id: "C5", name: "No Outbound Sales / Distribution", type: "operational", mechanism: "Zero dealer network, no equestrian trade relationships", absolute: false, products: "Heuraufe, Paddockbox" },
    { id: "C6", name: "Small-Batch OEM Economics", type: "economic", mechanism: "Estimated DACH volume 50-300 units/year", absolute: false, products: "Heuraufe, Paddockbox" },
    { id: "C7", name: "CE / Machinery Directive", type: "regulatory", mechanism: "Technical file + risk assessment required before launch", absolute: false, products: "Paddockbox (higher), Heuraufe (lower)" },
    { id: "C8", name: "Outdoor Animal-Contact Durability", type: "environmental", mechanism: "Horses exert 500-800kg impact loads, 15-year outdoor life required", absolute: false, products: "Heuraufe, Paddockbox" },
  ];

  type CompatRow = {
    constraint: string;
    effort: "low" | "medium" | "high";
    rationale: string;
  };

  const heuraufeCompat: CompatRow[] = [
    { constraint: "C1", effort: "low", rationale: "Roof truss spans ≤2 m fit comfortably within the 3000×1500 mm laser bed. No special tooling or splitting of parts is needed, so no adaptation effort is required." },
    { constraint: "C2", effort: "low", rationale: "Tubing from 40×40×3 mm to 80×80×5 mm sits well within the 1–20 mm economical envelope. Material selection is straightforward with no process changes." },
    { constraint: "C3", effort: "low", rationale: "A single qualification visit to a Feuerverzinkung provider in the Baden-Württemberg region takes one to two months and minimal cost. This is a standard subcontractor onboarding with no technical risk." },
    { constraint: "C4", effort: "low", rationale: "A pilot run of ten units is sufficient to validate the push-mode cost model. Scheduling a dedicated production window within existing capacity requires only internal planning effort." },
    { constraint: "C5", effort: "low", rationale: "First sales can be initiated through trade fairs and direct Fachhandel outreach within six to twelve months. Investment is primarily time, not capital — no warehouse or logistics infrastructure required at launch." },
    { constraint: "C6", effort: "low", rationale: "Batching hay rack production into quarterly windows optimises galvanizing transport and minimises setup changeover. The constraint is process-scheduling, not technical, and is addressable with a simple production calendar." },
    { constraint: "C7", effort: "low", rationale: "The Heuraufe is a static ground-mounted structure exempt from the Machinery Directive 2006/42/EC. A GPSR self-declaration and technical file can be prepared by an external CE consultant in two to three months at low cost." },
    { constraint: "C8", effort: "low", rationale: "S355 closed-profile tube frame with 80×80×5 mm base members and C3+ galvanizing meets the 500–800 kg contact load and 15-year durability requirement without design change. Material selection is within Böhmer's standard scope." },
  ];

  const paddockboxCompat: CompatRow[] = [
    { constraint: "C1", effort: "low", rationale: "Standard 3.0 m panels with 1.60 m height fit well within the laser bed with panels at ≤3 m × 1.2 m. No splitting or special nesting is needed across any component." },
    { constraint: "C2", effort: "low", rationale: "Rail and post profiles from 40×40×3 to 80×80×3 mm remain within the envelope. Material selection is identical to the Heuraufe and requires no new process capability." },
    { constraint: "C3", effort: "low", rationale: "Same galvanizing path as the Heuraufe; the only additional step is masking castor socket threads during the zinc bath to prevent seizing. This is a documented standard procedure at qualified Feuerverzinkung providers." },
    { constraint: "C4", effort: "low", rationale: "Modular panel reuse across configurations simplifies finished-goods inventory. A small standing stock of three to five panel sets is sufficient to enable build-to-order flexibility without large working capital commitment." },
    { constraint: "C5", effort: "low", rationale: "The Paddockbox is a higher-value product (EUR 2,000–5,000 per configuration) and is easier to demonstrate visually at equestrian trade fairs. Direct-to-operator sales require the same channel effort as the Heuraufe." },
    { constraint: "C6", effort: "low", rationale: "Modular standardised panels share a single SKU, allowing order batching without customised production runs. Inventory management is simpler than for the Heuraufe because each panel segment is interchangeable." },
    { constraint: "C7", effort: "medium", rationale: "Wheeled structure with moving parts (castors, hinges) falls under Machinery Directive 2006/42/EC, requiring a formal risk assessment covering tip-over stability, brake adequacy, and hinge load rating. The technical file and CE marking process is more involved than for the static Heuraufe, typically requiring an external notified body or specialised consultant." },
    { constraint: "C8", effort: "medium", rationale: "The fold-flat hinge weld root must pass a 10,000-cycle fatigue test at 800 kg lateral load under DIN EN ISO 3834-2 scope. Prototype testing and potential weld geometry iteration adds engineering effort before series production can begin. Böhmer's welding expertise is the core asset here, but the test protocol is new work." },
  ];

  const gaps = [
    { gap: "No surface treatment (galvanizing/powder coating)", severity: "HIGH", blocks: "market launch" },
    { gap: "No OEM sales channel", severity: "HIGH", blocks: "revenue generation" },
    { gap: "No working capital management process", severity: "MEDIUM", blocks: "operational risk" },
    { gap: "Paddockbox hinge joint fatigue spec", severity: "MEDIUM", blocks: "product quality" },
    { gap: "CE technical file (Paddockbox)", severity: "MEDIUM", blocks: "regulatory compliance" },
  ];

  const effortBadge = (e: "low" | "medium" | "high") => {
    if (e === "low") return <span className="badge badge--strong">low</span>;
    if (e === "medium") return <span className="badge badge--moderate">medium</span>;
    return <span className="badge badge--weak">high</span>;
  };

  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 01 / Constraints Analysis"
        title="Capability Assessment"
        description="Eight capability constraints assessed against both products. All constraints are engineering-addressable."
      />
      <div className="md">

        {/* ── Existing Strengths ─────────────────────────────────────────────── */}
        <SectionAnchor id="ca-strengths" title="Existing Strengths & Assets" />
        <table>
          <thead><tr><th>Strength</th><th>Type</th><th>Relevance to Equestrian Products</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Certified MIG/MAG-TIG Welding</strong></td>
              <td><span className="badge badge--strong">core capability</span></td>
              <td style={{ fontSize: 12 }}>DIN EN ISO 3834-2 and DIN EN 1090-1/2 certification covers all structural steel joining required for Heuraufe and Paddockbox. Welding quality is the primary physical differentiator vs. competitors using lighter-gauge or uncertified fabrication. This is Böhmer's single strongest manufacturing asset for the equestrian entry.</td>
            </tr>
            <tr>
              <td><strong>Horse Business Expertise (shareholder)</strong></td>
              <td><span className="badge badge--strong">domain knowledge</span></td>
              <td style={{ fontSize: 12 }}>A company shareholder brings direct equestrian operations experience — knowledge of stable management, horse welfare requirements, equipment pain points, and DACH buyer behaviour. This provides privileged market insight that competing fabricators lack entirely: product requirements, distribution contacts, and credibility with Reitstall operators come pre-validated.</td>
            </tr>
            <tr>
              <td><strong>Laser Cutting + CNC Bending</strong></td>
              <td><span className="badge badge--moderate">production asset</span></td>
              <td style={{ fontSize: 12 }}>In-house laser bed (3000×1500 mm) and CNC press brake cover all cutting and forming steps for both products without subcontracting. This eliminates a major constraint for small-series OEM production and enables rapid iteration on prototypes.</td>
            </tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="ca-tech" title="Technology Class" />
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>Technology Class</strong></td><td>Welded Structural Steel Fabrication</td></tr>
            <tr><td><strong>Mechanism</strong></td><td>Laser cutting + CNC bending + MIG/MAG-TIG welding; certified DIN EN ISO 3834-2 and DIN EN 1090-1/2</td></tr>
            <tr><td><strong>Products</strong></td><td>Heuraufe (hay rack), Paddockbox (mobile paddock enclosure)</td></tr>
            <tr><td><strong>NAICS</strong></td><td><code>332312</code> primary / <code>333111</code> product scope</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="ca-constraints" title="Constraint Register (C1-C8)" />
        <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>
          Identifying constraints before launch is a core step in the Böhmer Archetype 3 workflow. Constraints are not disqualifiers — they are conditions that must either be eliminated, mitigated, or accepted before a product can reach market. The register below catalogues the eight constraints identified for Böhmer's manufacturing capabilities and business position. Each constraint is then mapped to both products (Heuraufe and Paddockbox) in the compatibility tables that follow, where the effort required to address each constraint is assessed. This mapping directly determines whether each product can proceed to production — all constraints must have a feasible mitigation path, or the product cannot launch. Both products have zero knockout constraints, which means all gaps are bridgeable with engineering and process work.
        </p>
        <table>
          <thead><tr><th>#</th><th>Name</th><th>Type</th><th>Mechanism</th><th>Affected Products</th></tr></thead>
          <tbody>
            {constraints.map((c) => (
              <tr key={c.id}>
                <td><strong>{c.id}</strong></td>
                <td><strong>{c.name}</strong></td>
                <td><span className="badge badge--neutral">{c.type}</span></td>
                <td style={{ fontSize: 12 }}>{c.mechanism}</td>
                <td style={{ fontSize: 12 }}>{c.products}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>No <code>is_absolute=true</code> constraints identified. All constraints are engineering-addressable or process-addressable.</p>

        <hr />
        <SectionAnchor id="ca-heuraufe" title="Heuraufe — Constraint Compatibility" />
        <table>
          <thead><tr><th>Constraint</th><th>Effort</th><th>Rationale</th></tr></thead>
          <tbody>
            {heuraufeCompat.map((v) => (
              <tr key={v.constraint}>
                <td><strong>{v.constraint}</strong></td>
                <td>{effortBadge(v.effort)}</td>
                <td style={{ fontSize: 12 }}>{v.rationale}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="card" style={{ padding: 16, marginTop: 12 }}>
          <strong style={{ color: "var(--accent-yellow)" }}>Verdict: SURVIVING</strong> — 0 knockouts, all 8 constraints low effort
        </div>

        <hr />
        <SectionAnchor id="ca-paddockbox" title="Paddockbox — Constraint Compatibility" />
        <table>
          <thead><tr><th>Constraint</th><th>Effort</th><th>Rationale</th></tr></thead>
          <tbody>
            {paddockboxCompat.map((v) => (
              <tr key={v.constraint}>
                <td><strong>{v.constraint}</strong></td>
                <td>{effortBadge(v.effort)}</td>
                <td style={{ fontSize: 12 }}>{v.rationale}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="card" style={{ padding: 16, marginTop: 12 }}>
          <strong style={{ color: "var(--accent-yellow)" }}>Verdict: SURVIVING</strong> — 0 knockouts, 6 low effort, 2 medium effort
        </div>

        <hr />
        <SectionAnchor id="ca-gaps" title="Capability Gap Register" />
        <table>
          <thead><tr><th>Gap</th><th>Severity</th><th>Blocks</th></tr></thead>
          <tbody>
            {gaps.map((g) => (
              <tr key={g.gap}>
                <td><strong>{g.gap}</strong></td>
                <td><span className={`badge badge--${g.severity === "HIGH" ? "weak" : "moderate"}`}>{g.severity}</span></td>
                <td style={{ fontSize: 12 }}>{g.blocks}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)", marginTop: 8 }}>
          <strong>Key gap:</strong> C3 (corrosion protection) is the most operationally critical — both products cannot go to market without a qualified outsourced surface treatment provider.
        </p>
      </div>
    </section>
  );
}
