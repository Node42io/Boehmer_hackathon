/**
 * 07 End-Beneficiary VN — Reitstall / Equine Production (NAICS 112920)
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

const outputTypes = [
  { id: "OT-A", name: "Reitstall / Pension", relevance: "primary" },
  { id: "OT-B", name: "Gestüt / Breeding", relevance: "secondary" },
  { id: "OT-C", name: "Schulpferd / Reitschule", relevance: "primary" },
  { id: "OT-D", name: "Turnierstall", relevance: "secondary" },
  { id: "OT-E", name: "Freizeitpferd / Privathaltung", relevance: "tertiary" },
];

const l6Steps = [
  { id: "L6a", name: "Facility Infrastructure & Site Preparation", serves: "All", bohmer: false },
  { id: "L6b", name: "Animal Intake & Identity Management", serves: "A,B,C,D", bohmer: false },
  { id: "L6c", name: "Daily Feeding & Nutrition Management", serves: "All", bohmer: true, product: "Heuraufe" },
  { id: "L6d", name: "Housing & Paddock Space Management", serves: "All", bohmer: true, product: "Paddockbox" },
  { id: "L6e", name: "Health & Veterinary Care", serves: "All", bohmer: false },
  { id: "L6f", name: "Manure & Waste Management", serves: "All", bohmer: false },
  { id: "L6g", name: "Training & Conditioning", serves: "A,C,D", bohmer: false },
  { id: "L6h", name: "Breeding & Reproduction", serves: "B only", bohmer: false },
  { id: "L6i", name: "Animal Sales, Transfer & Dispatch", serves: "B,D", bohmer: false },
];

const heuraufeAlts = [
  { name: "Multi-horse outdoor hay rack/station (roofed, galvanized)", share: 20, bohmer: true },
  { name: "Round bale ring feeder", share: 35, bohmer: false },
  { name: "Wall-mounted hay rack / corner feeder (single-horse)", share: 25, bohmer: false },
  { name: "Slow-feed hay net station", share: 15, bohmer: false },
  { name: "Automated RFID hay dispenser", share: 5, bohmer: false },
];

const paddockboxAlts = [
  { name: "Mobile modular panel system (wheeled steel frames)", share: 15, bohmer: true },
  { name: "Permanent post-and-rail fence (timber or galv. steel)", share: 45, bohmer: false },
  { name: "Electric tape / wire fencing", share: 25, bohmer: false },
  { name: "High-tensile wire / V-mesh perimeter fencing", share: 10, bohmer: false },
  { name: "Aluminium portable corral panels (pin-hinge, no castors)", share: 5, bohmer: false },
];

const adjacencies = [
  { unit: "Manure Bunker / Container", level: "L4", adaptation: "LOW", fit: 6 },
  { unit: "Stable Stall Grid / Partition", level: "L4", adaptation: "LOW", fit: 8 },
  { unit: "Hay Barn Steel Frame Sub-Assembly", level: "L5", adaptation: "MEDIUM", fit: 5 },
  { unit: "Prefab Steel Stall System", level: "L5", adaptation: "MEDIUM", fit: 8 },
];

export default function VnReitstall() {
  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 06 / End-Beneficiary VN"
        title="VN Reitstall (NAICS 112920)"
        description="End-beneficiary value network for equine production facilities in the DACH region."
      />
      <div className="md">
        <SectionAnchor id="vr-overview" title="VN Overview" />
        <table>
          <tbody>
            <tr><td><strong>NAICS</strong></td><td><code>112920</code> — Horses and Other Equine Production</td></tr>
            <tr><td><strong>L7 Ecosystem</strong></td><td>Equine Husbandry & Sport Ecosystem</td></tr>
            <tr><td><strong>CFJ</strong></td><td>Raise, house, feed, and condition horses in managed facilities so that animals remain healthy, tractable, and available for their designated use</td></tr>
          </tbody>
        </table>

        <h3>Output Types</h3>
        <table>
          <thead><tr><th>ID</th><th>Output Type</th><th>Böhmer Relevance</th></tr></thead>
          <tbody>
            {outputTypes.map((o) => (
              <tr key={o.id}>
                <td><strong>{o.id}</strong></td>
                <td>{o.name}</td>
                <td><span className={`badge badge--${o.relevance === "primary" ? "strong" : o.relevance === "secondary" ? "moderate" : "neutral"}`}>{o.relevance}</span></td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="vr-l6" title="L6 Core Process Steps" />
        <table>
          <thead><tr><th>ID</th><th>Process Step</th><th>Serves</th><th>Böhmer Product</th></tr></thead>
          <tbody>
            {l6Steps.map((s) => (
              <tr key={s.id} style={s.bohmer ? { background: "rgba(253,255,152,0.04)" } : undefined}>
                <td><strong>{s.id}</strong></td>
                <td><strong>{s.name}</strong></td>
                <td style={{ fontSize: 12 }}>{s.serves}</td>
                <td>{s.bohmer ? <span className="badge badge--accent">{s.product}</span> : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="vr-heuraufe" title="Heuraufe Position — L6c Feeding" />
        <p>L5 Node: <strong>Multi-Horse Outdoor Hay Rack / Station</strong></p>
        <table>
          <thead><tr><th>Alternative</th><th>Share %</th><th>Böhmer</th></tr></thead>
          <tbody>
            {heuraufeAlts.map((a) => (
              <tr key={a.name} style={a.bohmer ? { background: "rgba(253,255,152,0.04)" } : undefined}>
                <td>{a.bohmer ? <strong>{a.name}</strong> : a.name}</td>
                <td style={{ fontFamily: "var(--font-mono)", textAlign: "center" }}>{a.share}%</td>
                <td>{a.bohmer ? <span className="badge badge--accent">Böhmer</span> : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="vr-paddockbox" title="Paddockbox Position — L6d Housing" />
        <p>L5 Node: <strong>Mobile Modular Panel System</strong></p>
        <table>
          <thead><tr><th>Alternative</th><th>Share %</th><th>Böhmer</th></tr></thead>
          <tbody>
            {paddockboxAlts.map((a) => (
              <tr key={a.name} style={a.bohmer ? { background: "rgba(253,255,152,0.04)" } : undefined}>
                <td>{a.bohmer ? <strong>{a.name}</strong> : a.name}</td>
                <td style={{ fontFamily: "var(--font-mono)", textAlign: "center" }}>{a.share}%</td>
                <td>{a.bohmer ? <span className="badge badge--accent">Böhmer</span> : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="vr-adjacency" title="Strategic Adjacency Analysis" />
        <table>
          <thead><tr><th>VN Unit</th><th>Level</th><th>Adaptation</th><th>Strategic Fit</th></tr></thead>
          <tbody>
            {adjacencies.map((a) => (
              <tr key={a.unit}>
                <td><strong>{a.unit}</strong></td>
                <td>{a.level}</td>
                <td><span className={`badge badge--${a.adaptation === "LOW" ? "strong" : "moderate"}`}>{a.adaptation}</span></td>
                <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>{a.fit}/10</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)", marginTop: 8 }}>
          <strong>Highest-value adjacency:</strong> Prefab steel stall equipment (L5 under L6d) — 60% competence overlap, same buyer persona, 8/10 strategic fit.
        </p>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>
          <strong>Vertical move-ups</strong> to L6c or L6d integrator level both score LOW feasibility organically — require software/civil/construction competences Böhmer does not possess.
        </p>
      </div>
    </section>
  );
}
