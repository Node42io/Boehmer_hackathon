/**
 * 08 Capability-Market Fit — 6-factor composite scoring
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

const dimensions = [
  { name: "ODI Opportunity", weight: 0.25, heuraufe: 5.40, paddockbox: 5.63 },
  { name: "Feature Fit", weight: 0.15, heuraufe: 8.00, paddockbox: 7.50 },
  { name: "Constraint Compatibility", weight: 0.15, heuraufe: 7.00, paddockbox: 6.00 },
  { name: "Job Coverage", weight: 0.15, heuraufe: 6.25, paddockbox: 7.50 },
  { name: "VN Hierarchy", weight: 0.10, heuraufe: 9.00, paddockbox: 9.00 },
  { name: "Incumbent Vulnerability", weight: 0.20, heuraufe: 6.35, paddockbox: 5.65 },
];

const heuraufeEntry = [
  { step: 1, action: "Qualify galvanizer (Month 1-2)", detail: "External hot-dip galvanizer in Baden-Württemberg; sample-weld + galvanize + pull-test" },
  { step: 2, action: "Pilot with 3 Reitställe (Month 3-5)", detail: "Units at cost + 20%; document >25% hay waste reduction vs. prior method" },
  { step: 3, action: "CE technical file (Month 3-4)", detail: "External CE consultant for GPSR self-declaration; EUR 2-4K" },
  { step: 4, action: "Trade fair launch (Month 6-8)", detail: "Pferdemesse Stuttgart or regional equestrian fair; capture 10-20 leads" },
  { step: 5, action: "Fachhandel approach (Month 9-12)", detail: "Present pilot data + CE file to Kerbl, Loesdau, or Krämer for wholesale" },
];

const paddockboxEntry = [
  { step: 1, action: "Hinge fatigue test (Month 2-5)", detail: "10,000-cycle + 800 kg lateral load per DIN EN ISO 3834-2; critical gate" },
  { step: 2, action: "Castor sourcing (Month 1-3)", detail: "Qualify >=800 kg lateral rated castors from 2+ suppliers" },
  { step: 3, action: "Pilot at 2 Reitschulen (Month 4-6)", detail: ">15 horses, daily tractor access; document cycle time savings" },
  { step: 4, action: "CE Machinery Directive (Month 3-5)", detail: "Tip-over stability, brake, hinge assessment; EUR 5-9K" },
  { step: 5, action: "Trade fair demo (Month 8-12)", detail: "Live fold-flat + tractor pass demo; bundle with Heuraufe" },
];

export default function CapabilityFit() {
  const hComp = dimensions.reduce((s, d) => s + d.weight * d.heuraufe, 0);
  const pComp = dimensions.reduce((s, d) => s + d.weight * d.paddockbox, 0);

  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 07 / Market Prioritization"
        title="Capability-Market Fit"
        description="6-factor composite scoring: ODI opportunity, feature fit, constraints, job coverage, VN hierarchy, incumbent vulnerability."
      />
      <div className="md">
        <SectionAnchor id="cf-scores" title="Weighted Composite Score" />
        <table>
          <thead><tr><th>Dimension</th><th>Weight</th><th>Heuraufe</th><th>Paddockbox</th></tr></thead>
          <tbody>
            {dimensions.map((d) => (
              <tr key={d.name}>
                <td><strong>{d.name}</strong></td>
                <td style={{ fontFamily: "var(--font-mono)", textAlign: "center" }}>{d.weight.toFixed(2)}</td>
                <td style={{ fontFamily: "var(--font-mono)", textAlign: "center" }}>{d.heuraufe.toFixed(2)}</td>
                <td style={{ fontFamily: "var(--font-mono)", textAlign: "center" }}>{d.paddockbox.toFixed(2)}</td>
              </tr>
            ))}
            <tr style={{ fontWeight: 700, background: "rgba(253,255,152,0.04)" }}>
              <td>COMPOSITE</td>
              <td style={{ textAlign: "center" }}>1.00</td>
              <td style={{ fontFamily: "var(--font-mono)", textAlign: "center", color: "var(--accent-yellow)" }}>{hComp.toFixed(2)}</td>
              <td style={{ fontFamily: "var(--font-mono)", textAlign: "center", color: "var(--accent-yellow)" }}>{pComp.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="cf-recommendation" title="Recommendation" />
        <table>
          <thead><tr><th>Rank</th><th>Product</th><th>Composite</th><th>Recommendation</th><th>Est. Time to Revenue</th><th>Est. Investment</th></tr></thead>
          <tbody>
            <tr>
              <td style={{ textAlign: "center", fontWeight: 700 }}>1</td>
              <td><strong>Heuraufe</strong></td>
              <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>{hComp.toFixed(2)}</td>
              <td><span className="badge badge--moderate">investigate</span></td>
              <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>4-6 months</td>
              <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>EUR 30-60K</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: 700 }}>2</td>
              <td><strong>Paddockbox</strong></td>
              <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>{pComp.toFixed(2)}</td>
              <td><span className="badge badge--moderate">investigate</span></td>
              <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>8-12 months</td>
              <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>EUR 60-100K</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)", marginTop: 8 }}>
          Neither product clears the 7.5 <strong>pursue</strong> threshold. Both comfortably above 5.0 (no defer). Score delta 0.12 — effectively tied.
        </p>

        <hr />
        <SectionAnchor id="cf-heuraufe-entry" title="Heuraufe — Entry Strategy" />
        <div className="card" style={{ padding: 16, marginBottom: 16 }}>
          <p style={{ fontSize: 13, lineHeight: 1.7 }}>
            Composite 6.71 driven by strong feature fit (8.0/10) and customer-facing VN position (9.0/10).
            Five product features map directly to underserved needs in L6c. Incumbent vulnerability (6.35) is moderate:
            Kerbl's ring feeders are entrenched at 35% but switching costs are low.
          </p>
        </div>
        <table>
          <thead><tr><th>Step</th><th>Action</th><th>Detail</th></tr></thead>
          <tbody>
            {heuraufeEntry.map((e) => (
              <tr key={e.step}>
                <td style={{ textAlign: "center", fontWeight: 700 }}>{e.step}</td>
                <td><strong>{e.action}</strong></td>
                <td style={{ fontSize: 12 }}>{e.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="cf-paddockbox-entry" title="Paddockbox — Entry Strategy" />
        <div className="card" style={{ padding: 16, marginBottom: 16 }}>
          <p style={{ fontSize: 13, lineHeight: 1.7 }}>
            Composite 6.59 driven by customer-facing VN position (9.0/10) and high job coverage (7.5/10 — 6/8 L6d steps).
            The fold-flat post enabling tractor corridor access is a genuine market gap. Paddockbox occupies a category of one in the DACH market.
          </p>
        </div>
        <table>
          <thead><tr><th>Step</th><th>Action</th><th>Detail</th></tr></thead>
          <tbody>
            {paddockboxEntry.map((e) => (
              <tr key={e.step}>
                <td style={{ textAlign: "center", fontWeight: 700 }}>{e.step}</td>
                <td><strong>{e.action}</strong></td>
                <td style={{ fontSize: 12 }}>{e.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
