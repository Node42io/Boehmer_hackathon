/**
 * 09 Adjacent Capabilities — Constraints analysis for 4 adjacent opportunities
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

const adjacencies = [
  { id: "A1", name: "Manure Bunker / Container", vn: "L4 under L6f", fit: 6, unitValue: "200-800", knockouts: 0, mitigable: 3, none: 5, scopeLimits: 0, note: "Very low unit value; viable only as catalog add-on" },
  { id: "A2", name: "Stable Stall Grid / Partition", vn: "L4 under L6d", fit: 8, unitValue: "600-2,000", knockouts: 0, mitigable: 4, none: 4, scopeLimits: 0, note: "Direct competence transfer; same buyer as Paddockbox" },
  { id: "A3", name: "Hay Barn Steel Frame Sub-Assembly", vn: "L5 under L6c", fit: 5, unitValue: "8,000-25,000", knockouts: 0, mitigable: 2, none: 5, scopeLimits: 1, note: "Highest unit value; requires new Agrarbau contractor channel" },
  { id: "A4", name: "Prefab Steel Stall System", vn: "L5 under L6d", fit: 8, unitValue: "1,500-5,000", knockouts: 0, mitigable: 4, none: 4, scopeLimits: 1, note: "Highest strategic fit; 60% capability overlap; joinery partner needed for interior" },
];

const ranking = [
  { rank: 1, id: "A4", name: "Prefab Steel Stall System", why: "Highest strategic fit (8/10); mitigable only; scope limit is commercial negotiation, not capability blocker" },
  { rank: 2, id: "A2", name: "Stall Grid / Partition", why: "Direct competence transfer; same buyer; lowest channel investment; cross-sell without new launch overhead" },
  { rank: 3, id: "A3", name: "Hay Barn Frame", why: "Lowest constraint burden (2 mitigable); highest unit value; blocked only by Agrarbau contractor channel" },
  { rank: 4, id: "A1", name: "Manure Bunker", why: "Lowest risk but also lowest value; justified only as bundled catalog add-on" },
];

export default function AdjacentCapabilities() {
  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 08 / Adjacent Opportunities"
        title="Adjacent NAICS Capabilities"
        description="Four adjacent capability opportunities from the Reitstall VN screened against all 8 constraints."
      />
      <div className="md">
        <SectionAnchor id="adj-summary" title="Aggregate Results" />
        <table>
          <thead><tr><th>ID</th><th>Opportunity</th><th>VN Position</th><th>Fit</th><th>Unit Value (EUR)</th><th>KO</th><th>Mitigable</th><th>None</th><th>Status</th></tr></thead>
          <tbody>
            {adjacencies.map((a) => (
              <tr key={a.id}>
                <td><strong>{a.id}</strong></td>
                <td><strong>{a.name}</strong></td>
                <td style={{ fontSize: 12 }}>{a.vn}</td>
                <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>{a.fit}/10</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{a.unitValue}</td>
                <td style={{ textAlign: "center", color: "var(--status-good)" }}>{a.knockouts}</td>
                <td style={{ textAlign: "center" }}>{a.mitigable}</td>
                <td style={{ textAlign: "center" }}>{a.none}</td>
                <td><span className="badge badge--strong">SURVIVING</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)", marginTop: 8 }}>
          <strong>No adjacencies eliminated.</strong> All four pass constraint screening. Zero physics impossibilities or regulatory hard stops.
        </p>

        <hr />
        <SectionAnchor id="adj-ranking" title="Priority Ranking" />
        <table>
          <thead><tr><th>Rank</th><th>Opportunity</th><th>Rationale</th></tr></thead>
          <tbody>
            {ranking.map((r) => (
              <tr key={r.id}>
                <td style={{ textAlign: "center", fontWeight: 700 }}>{r.rank}</td>
                <td><strong>{r.name}</strong></td>
                <td style={{ fontSize: 12 }}>{r.why}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="adj-detail" title="Per-Adjacency Detail" />

        {adjacencies.map((a) => (
          <div key={a.id} style={{ marginBottom: 24 }}>
            <h3>{a.id}: {a.name}</h3>
            <div className="card" style={{ padding: 16 }}>
              <table>
                <tbody>
                  <tr><td><strong>VN Position</strong></td><td>{a.vn}</td></tr>
                  <tr><td><strong>Strategic Fit</strong></td><td>{a.fit}/10</td></tr>
                  <tr><td><strong>Unit Value</strong></td><td>EUR {a.unitValue}</td></tr>
                  <tr><td><strong>Constraint Profile</strong></td><td>{a.knockouts} knockouts, {a.mitigable} mitigable, {a.none} none{a.scopeLimits > 0 ? `, ${a.scopeLimits} scope limit` : ""}</td></tr>
                  <tr><td><strong>Note</strong></td><td style={{ fontSize: 12 }}>{a.note}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <hr />
        <SectionAnchor id="adj-barrier" title="Dominant Barrier" />
        <div className="card" style={{ padding: 16, borderLeft: "3px solid var(--accent-yellow)" }}>
          <p style={{ marginBottom: 0 }}>
            The constraint landscape is dominated by <strong>channel (C5)</strong> and <strong>commercial model (C4, C6)</strong> barriers — not manufacturing physics.
            The bottleneck is market access, not production capability. All adjacencies share the same channel build requirement as the core products.
          </p>
        </div>
      </div>
    </section>
  );
}
