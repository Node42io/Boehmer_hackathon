/**
 * 10 JTBD + Stakeholder Needs — Burleson JTBD, Ulwick ODI, P1-P5 Pyramid
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

const topNeeds = [
  { rank: 1, id: "HN-02", statement: "Minimize sand colic / intestinal impaction from ground debris ingestion", product: "Heuraufe", imp: 10, sat: 3, opp: 17, impact: "safety" },
  { rank: 2, id: "PN-08", statement: "Minimize structural displacement / tip-over under 500-800 kg horse push", product: "Paddockbox", imp: 10, sat: 4, opp: 16, impact: "safety" },
  { rank: 3, id: "HN-08", statement: "Minimize horse injury (leg entrapment, laceration) during feeding", product: "Heuraufe", imp: 10, sat: 5, opp: 15, impact: "safety" },
  { rank: 4, id: "PN-01", statement: "Minimize time to reconfigure enclosure layout when herd changes", product: "Paddockbox", imp: 9, sat: 3, opp: 15, impact: "time" },
  { rank: 5, id: "PN-02", statement: "Minimize horse escape through panel gaps / connector failures", product: "Paddockbox", imp: 10, sat: 5, opp: 15, impact: "safety" },
  { rank: 6, id: "PN-03", statement: "Minimize horse injury from enclosure structure contact", product: "Paddockbox", imp: 10, sat: 5, opp: 15, impact: "safety" },
  { rank: 7, id: "PN-15", statement: "Minimize hinge joint failure under repeated fold cycles + lateral load", product: "Paddockbox", imp: 9, sat: 3, opp: 15, impact: "reliability" },
  { rank: 8, id: "VT-03", statement: "Minimize feed contamination by urine/feces/soil pathogens", product: "Heuraufe", imp: 9, sat: 3, opp: 15, impact: "safety" },
  { rank: 9, id: "SO-01", statement: "Minimize daily labor-hours for feeding infrastructure management", product: "Heuraufe", imp: 9, sat: 4, opp: 14, impact: "time" },
  { rank: 10, id: "HN-01", statement: "Minimize hay lost to trampling, wind scatter, ground contamination", product: "Heuraufe", imp: 9, sat: 4, opp: 14, impact: "cost" },
];

const stakeholders = [
  { role: "Stable operator / manager", burleson: "Job Executor + Purchase Executor", pyramid: "P1, P2, P3, P4, P5" },
  { role: "Horse owner (Pferdebesitzer)", burleson: "Job Overseer + Purchase Influencer", pyramid: "P2, P4, P5" },
  { role: "Stable hand (Stallarbeiter)", burleson: "Job Executor (operational)", pyramid: "P1, P2" },
  { role: "Veterinarian", burleson: "Purchase Influencer", pyramid: "P2 (safety)" },
  { role: "Procurement / facility manager", burleson: "Purchase Executor (delegated)", pyramid: "P1 (Acquisition)" },
];

const segments = [
  { name: "Multi-horse outdoor boarding", circumstance: "10-30+ horses, daily outdoor paddock rotation, high labor pressure" },
  { name: "Small private paddock (1-4)", circumstance: "Owner-operated, minimal labor budget, low capital tolerance" },
  { name: "High-performance training", circumstance: "Horse welfare premium, injury avoidance paramount, facility image" },
  { name: "Breeding & foaling", circumstance: "Frequent reconfiguration for mares/foals, seasonal rhythm" },
  { name: "Riding school / instruction", circumstance: "High throughput, rapid paddock turnover, public-facing" },
];

const impactBadge = (impact: string) => {
  const cls: Record<string, string> = { safety: "badge--weak", time: "badge--moderate", cost: "badge--neutral", reliability: "badge--accent" };
  return <span className={`badge ${cls[impact] || "badge--neutral"}`}>{impact}</span>;
};

export default function Jtbd() {
  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 09 / JTBD Analysis"
        title="JTBD + Stakeholder Needs"
        description="Burleson JTBD framework, Ulwick ODI scoring, 5 stakeholder roles, 52 needs across P1-P5 pyramid."
      />
      <div className="md">
        <SectionAnchor id="jtbd-cfj" title="Core Functional Job" />
        <div className="card" style={{ padding: 20, borderLeft: "3px solid var(--accent-yellow)", marginBottom: 20 }}>
          <p style={{ fontStyle: "italic", fontSize: 14, lineHeight: 1.6, marginBottom: 0, color: "var(--text-white)" }}>
            "Raise, house, feed, and condition horses in managed facilities so that animals remain healthy, tractable, and available for their designated use — breeding, sport, recreation, or instruction."
          </p>
        </div>
        <table>
          <tbody>
            <tr><td><strong>NAICS</strong></td><td><code>112920</code> — Horses and Other Equine Production</td></tr>
            <tr><td><strong>Transaction</strong></td><td>B2B — sold to equestrian facility operators</td></tr>
            <tr><td><strong>Primary Executor</strong></td><td>Stable operator / manager (Stallbetreiber)</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="jtbd-segments" title="Market Segments (by circumstance)" />
        <table>
          <thead><tr><th>#</th><th>Segment</th><th>Circumstance</th></tr></thead>
          <tbody>
            {segments.map((s, i) => (
              <tr key={s.name}>
                <td style={{ textAlign: "center" }}>S{i + 1}</td>
                <td><strong>{s.name}</strong></td>
                <td style={{ fontSize: 12 }}>{s.circumstance}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="jtbd-stakeholders" title="Stakeholder Roles" />
        <table>
          <thead><tr><th>Role</th><th>Burleson Classification</th><th>Pyramid Levels</th></tr></thead>
          <tbody>
            {stakeholders.map((s) => (
              <tr key={s.role}>
                <td><strong>{s.role}</strong></td>
                <td style={{ fontSize: 12 }}>{s.burleson}</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{s.pyramid}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="jtbd-top10" title="Top 10 Underserved Needs (by Opportunity Score)" />
        <table>
          <thead><tr><th>#</th><th>ID</th><th>Need Statement</th><th>Product</th><th>Imp.</th><th>Sat.</th><th>Opp.</th><th>Impact</th></tr></thead>
          <tbody>
            {topNeeds.map((n) => (
              <tr key={n.id}>
                <td style={{ textAlign: "center", fontWeight: 700 }}>{n.rank}</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>{n.id}</td>
                <td style={{ fontSize: 12 }}>{n.statement}</td>
                <td style={{ fontSize: 11 }}>{n.product}</td>
                <td style={{ fontFamily: "var(--font-mono)", textAlign: "center" }}>{n.imp}</td>
                <td style={{ fontFamily: "var(--font-mono)", textAlign: "center" }}>{n.sat}</td>
                <td style={{ fontFamily: "var(--font-mono)", textAlign: "center", fontWeight: 700, color: "var(--accent-yellow)" }}>{n.opp}</td>
                <td>{impactBadge(n.impact)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="card" style={{ padding: 16, marginTop: 16 }}>
          <p style={{ marginBottom: 0, fontSize: 13 }}>
            <strong>Pattern:</strong> Horse safety/welfare needs dominate the top of the opportunity ranking.
            "Minimize risk of horse injury" is the highest-importance, lowest-satisfaction market need across both products.
            This confirms that the sales message should lead with safety and welfare, not price or convenience.
          </p>
        </div>

        <hr />
        <SectionAnchor id="jtbd-identity" title="P3-P5: Identity and Emotional Needs" />
        <h3>P3 — Role Identity</h3>
        <p>
          "By getting feeding/enclosure management done well, the stable operator becomes a <strong>professional, welfare-compliant Stallbetreiber</strong> who runs an efficient operation that horse owners trust."
        </p>
        <h3>P4 — Image Identity</h3>
        <p>
          Watchers: horse owners (paying clients), veterinarian on routine visit, Tierschutz inspector, prospective boarders.
          Products must signal <strong>permanent-grade quality</strong> to these observers.
        </p>
        <h3>P5 — Emotional</h3>
        <p>
          <strong>Want to feel:</strong> In control, confident that horses are safe, proud of the facility.<br />
          <strong>Want to avoid:</strong> Anxiety about horse injury, guilt after a welfare incident, stress from equipment failure during busy mornings.
        </p>
      </div>
    </section>
  );
}
