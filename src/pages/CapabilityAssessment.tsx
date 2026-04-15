/**
 * 02 Capability Assessment — Constraints analysis for both products
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

export default function CapabilityAssessment() {
  const constraints = [
    { id: "C1", name: "Laser Bed Dimension Limit", type: "physical", mechanism: "Standard laser table max 3000x1500mm", threshold: "3000x1500 mm", absolute: false, products: "Heuraufe roof truss" },
    { id: "C2", name: "Material Thickness Envelope", type: "physical", mechanism: "Laser cutting economical for 1-20mm steel", threshold: "1-20 mm", absolute: false, products: "neither (both within range)" },
    { id: "C3", name: "Corrosion Protection Gap", type: "chemical", mechanism: "No in-house hot-dip galvanizing or powder coating", threshold: "C3 ISO 12944", absolute: false, products: "Heuraufe, Paddockbox" },
    { id: "C4", name: "JIT-to-Push Transition", type: "operational", mechanism: "All current production is customer-pull JIT", threshold: "—", absolute: false, products: "Heuraufe, Paddockbox" },
    { id: "C5", name: "No Outbound Sales / Distribution", type: "operational", mechanism: "Zero dealer network, no equestrian trade relationships", threshold: "—", absolute: false, products: "Heuraufe, Paddockbox" },
    { id: "C6", name: "Small-Batch OEM Economics", type: "economic", mechanism: "Estimated DACH volume 50-300 units/year", threshold: "50-300 units/yr", absolute: false, products: "Heuraufe, Paddockbox" },
    { id: "C7", name: "CE / Machinery Directive", type: "regulatory", mechanism: "Technical file + risk assessment required before launch", threshold: "2006/42/EC", absolute: false, products: "Paddockbox (higher), Heuraufe (lower)" },
    { id: "C8", name: "Outdoor Animal-Contact Durability", type: "environmental", mechanism: "Horses exert 500-800kg impact loads, 15-year outdoor life required", threshold: "15 years", absolute: false, products: "Heuraufe, Paddockbox" },
  ];

  const heuraufeVerdicts = [
    { constraint: "C1", verdict: "none", rationale: "Roof truss spans <=2m fit within 3000x1500mm bed" },
    { constraint: "C2", verdict: "none", rationale: "Tubing 40x40x3mm to 80x80x5mm within envelope" },
    { constraint: "C3", verdict: "mitigable", rationale: "Qualify external galvanizer in BW region", cost: "low", time: "1-2 mo" },
    { constraint: "C4", verdict: "mitigable", rationale: "Pilot 10-unit batch to validate cost model", cost: "low", time: "3-6 mo" },
    { constraint: "C5", verdict: "mitigable", rationale: "Trade fair + Fachhandel partnership", cost: "low", time: "6-12 mo" },
    { constraint: "C6", verdict: "mitigable", rationale: "Scheduled batch windows for OEM production", cost: "low", time: "1-3 mo" },
    { constraint: "C7", verdict: "mitigable", rationale: "Static structure; GPSR self-declaration", cost: "low", time: "2-3 mo" },
    { constraint: "C8", verdict: "mitigable", rationale: "S355 steel, 80x80x5mm closed-profile, galvanize+powder", cost: "low", time: "2-4 mo" },
  ];

  const paddockboxVerdicts = [
    { constraint: "C1", verdict: "none", rationale: "Panels <=3m x 1.2m within bed" },
    { constraint: "C2", verdict: "none", rationale: "Profiles 40x40x3 to 60x60x4mm within envelope" },
    { constraint: "C3", verdict: "mitigable", rationale: "Same galvanizing path; castor threads masked", cost: "low", time: "1-2 mo" },
    { constraint: "C4", verdict: "mitigable", rationale: "Modular panel reuse simplifies inventory", cost: "low", time: "3-6 mo" },
    { constraint: "C5", verdict: "mitigable", rationale: "Higher-value product easier to demo at fairs", cost: "low", time: "6-12 mo" },
    { constraint: "C6", verdict: "mitigable", rationale: "Modular design enables build-to-order flexibility", cost: "low", time: "1-3 mo" },
    { constraint: "C7", verdict: "mitigable", rationale: "Wheeled structure: tip-over stability + brake + hinge assessment", cost: "low-medium", time: "3-4 mo" },
    { constraint: "C8", verdict: "mitigable", rationale: "Fatigue-rated hinge joints, 10,000-cycle test protocol", cost: "low-medium", time: "3-5 mo" },
  ];

  const gaps = [
    { gap: "No surface treatment (galvanizing/powder coating)", severity: "HIGH", blocks: "market launch" },
    { gap: "No OEM sales channel", severity: "HIGH", blocks: "revenue generation" },
    { gap: "No working capital management process", severity: "MEDIUM", blocks: "operational risk" },
    { gap: "Paddockbox hinge joint fatigue spec", severity: "MEDIUM", blocks: "product quality" },
    { gap: "CE technical file (Paddockbox)", severity: "MEDIUM", blocks: "regulatory compliance" },
  ];

  const verdictBadge = (v: string) => {
    if (v === "none") return <span className="badge badge--strong">none</span>;
    if (v === "mitigable") return <span className="badge badge--moderate">mitigable</span>;
    return <span className="badge badge--weak">knockout</span>;
  };

  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 01 / Constraints Analysis"
        title="Capability Assessment"
        description="Eight capability constraints assessed against both products. All constraints are engineering-addressable."
      />
      <div className="md">
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
        <table>
          <thead><tr><th>#</th><th>Name</th><th>Type</th><th>Mechanism</th><th>Threshold</th><th>Affected Products</th></tr></thead>
          <tbody>
            {constraints.map((c) => (
              <tr key={c.id}>
                <td><strong>{c.id}</strong></td>
                <td><strong>{c.name}</strong></td>
                <td><span className="badge badge--neutral">{c.type}</span></td>
                <td style={{ fontSize: 12 }}>{c.mechanism}</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{c.threshold}</td>
                <td style={{ fontSize: 12 }}>{c.products}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>No <code>is_absolute=true</code> constraints identified. All constraints are engineering-addressable or process-addressable.</p>

        <hr />
        <SectionAnchor id="ca-heuraufe" title="Heuraufe — Constraint Compatibility" />
        <table>
          <thead><tr><th>Constraint</th><th>Verdict</th><th>Rationale</th><th>Cost</th><th>Time</th></tr></thead>
          <tbody>
            {heuraufeVerdicts.map((v) => (
              <tr key={v.constraint}>
                <td><strong>{v.constraint}</strong></td>
                <td>{verdictBadge(v.verdict)}</td>
                <td style={{ fontSize: 12 }}>{v.rationale}</td>
                <td style={{ fontSize: 12 }}>{"cost" in v ? v.cost : "—"}</td>
                <td style={{ fontSize: 12 }}>{"time" in v ? v.time : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="card" style={{ padding: 16, marginTop: 12 }}>
          <strong style={{ color: "var(--accent-yellow)" }}>Verdict: SURVIVING</strong> — 0 knockouts, 6 mitigable, 2 none
        </div>

        <hr />
        <SectionAnchor id="ca-paddockbox" title="Paddockbox — Constraint Compatibility" />
        <table>
          <thead><tr><th>Constraint</th><th>Verdict</th><th>Rationale</th><th>Cost</th><th>Time</th></tr></thead>
          <tbody>
            {paddockboxVerdicts.map((v) => (
              <tr key={v.constraint}>
                <td><strong>{v.constraint}</strong></td>
                <td>{verdictBadge(v.verdict)}</td>
                <td style={{ fontSize: 12 }}>{v.rationale}</td>
                <td style={{ fontSize: 12 }}>{"cost" in v ? v.cost : "—"}</td>
                <td style={{ fontSize: 12 }}>{"time" in v ? v.time : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="card" style={{ padding: 16, marginTop: 12 }}>
          <strong style={{ color: "var(--accent-yellow)" }}>Verdict: SURVIVING</strong> — 0 knockouts, 6 mitigable, 2 none
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
