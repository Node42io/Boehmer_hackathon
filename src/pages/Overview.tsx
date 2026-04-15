/**
 * 00 Overview — Executive summary for the Böhmer equestrian product analysis.
 */
import { overview } from "@/data";
import Hero from "@/components/Hero";
import SectionAnchor from "@/components/SectionAnchor";

export default function Overview() {
  const { company, divisions, products, certifications, briefingQuestion, briefingAnswer, stats } = overview;

  return (
    <section className="container">
      <Hero
        eyebrow="Clayton Analysis / Product Business Launch / 2026-04-15"
        headline={<>From contract welder to <span className="accent">equestrian OEM</span></>}
        subhead="Böhmer Systemtechnik — launching Heuraufe + Paddockbox into NAICS 112920 (Horses and Other Equine Production)"
      >
        {/* Stat tiles */}
        <div className="stat-row" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
          {[
            { label: "Products", value: String(stats.products) },
            { label: "VN Steps (333111)", value: String(stats.vnSteps) },
            { label: "Market Needs", value: String(stats.marketNeeds) },
            { label: "Target Market", value: stats.targetMarketNaics },
          ].map((s) => (
            <div key={s.label} className="card" style={{ textAlign: "center", padding: "16px 12px" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "var(--accent-yellow)", fontFamily: "var(--font-mono)" }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "var(--text-gray)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Answer box */}
        <div style={{
          border: "1px solid var(--border-subtle)",
          borderLeft: "3px solid var(--accent-yellow)",
          borderRadius: 8,
          padding: "20px 24px",
          background: "var(--bg-card)",
        }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-gray-dark)", marginBottom: 8 }}>
            Briefing Question
          </div>
          <p style={{ fontStyle: "italic", color: "var(--text-gray-light)", marginBottom: 12, fontSize: 14 }}>
            "{briefingQuestion}"
          </p>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-gray-dark)", marginBottom: 6 }}>
            Answer
          </div>
          <p style={{ color: "var(--text-white)", fontSize: 13, lineHeight: 1.6, marginBottom: 0 }}>
            {briefingAnswer}
          </p>
        </div>
      </Hero>

      <div className="md">
        <SectionAnchor id="ovw-company" title="About Böhmer Systemtechnik" />
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>Legal name</strong></td><td>{company.legalName} ({company.legalForm})</td></tr>
            <tr><td><strong>Founded</strong></td><td>{company.founded} <span style={{ fontSize: 11, color: "var(--text-gray-dark)" }}>({company.foundedNote})</span></td></tr>
            <tr><td><strong>Headquarters</strong></td><td>{company.headquarters}</td></tr>
            <tr><td><strong>Ownership</strong></td><td>{company.ownership}</td></tr>
            <tr><td><strong>Employees</strong></td><td>~{company.employees} <span style={{ fontSize: 11, color: "var(--text-gray-dark)" }}>({company.employeesNote})</span></td></tr>
            <tr><td><strong>Revenue</strong></td><td>{company.revenueEurM} EUR M <span style={{ fontSize: 11, color: "var(--text-gray-dark)" }}>({company.revenueConfidence})</span></td></tr>
            <tr><td><strong>Primary NAICS</strong></td><td><code>{company.naicsPrimary}</code> {company.naicsPrimaryTitle}</td></tr>
            <tr><td><strong>Secondary NAICS</strong></td><td>{company.naicsSecondary.join(", ")}</td></tr>
          </tbody>
        </table>

        <h3>Certifications</h3>
        <table>
          <thead><tr><th>Certification</th><th>Standard</th></tr></thead>
          <tbody>
            {certifications.map((c) => (
              <tr key={c.name}><td><strong>{c.name}</strong></td><td>{c.standard}</td></tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="ovw-divisions" title="Business Divisions" />
        <table>
          <thead><tr><th>Division</th><th>Focus</th><th>Status</th><th>Description</th></tr></thead>
          <tbody>
            {divisions.map((d) => (
              <tr key={d.name}>
                <td><strong>{d.name}</strong></td>
                <td><span className={`badge badge--${d.focus === "growth" ? "strong" : "neutral"}`}>{d.focus}</span></td>
                <td style={{ fontSize: 12 }}>{d.status}</td>
                <td style={{ fontSize: 12 }}>{d.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="ovw-products" title="Products at a Glance" />
        <table>
          <thead><tr><th>Product</th><th>Functional Promise</th><th>Price (EST)</th><th>Fit Score</th><th>Rec.</th></tr></thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.name}>
                <td><strong>{p.name}</strong><br /><span style={{ fontSize: 11, color: "var(--text-gray)" }}>{p.nameEn}</span></td>
                <td style={{ fontSize: 12 }}>{p.fp}</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{p.estimatedPrice}</td>
                <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>{p.capabilityFitScore.toFixed(2)}</td>
                <td><span className="badge badge--moderate">{p.recommendation}</span></td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="ovw-scores" title="Capability-Market Fit — Weighted Composite Score" />
        <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>
          Both products were scored against NAICS 112920 (Equine Production, DACH) using a six-factor composite model combining ODI opportunity score, feature fit, constraint compatibility, job coverage, value network hierarchy position, and incumbent vulnerability. The scores below represent the weighted aggregate result.
        </p>
        <table>
          <thead>
            <tr><th>Dimension</th><th>Weight</th><th>Heuraufe</th><th>Heuraufe contrib.</th><th>Paddockbox</th><th>Paddockbox contrib.</th></tr>
          </thead>
          <tbody>
            <tr><td>ODI Opportunity</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.25</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>5.40</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.350</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>5.63</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.408</td></tr>
            <tr><td>Feature Fit</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.15</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>8.00</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.200</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>7.50</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.125</td></tr>
            <tr><td>Constraint Compatibility</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.15</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>7.00</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.050</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>6.00</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.900</td></tr>
            <tr><td>Job Coverage</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.15</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>6.25</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.938</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>7.50</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.125</td></tr>
            <tr><td>VN Hierarchy</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.10</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>9.00</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.900</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>9.00</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.900</td></tr>
            <tr><td>Incumbent Vulnerability</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.20</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>6.35</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.270</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>5.65</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.130</td></tr>
            <tr style={{ fontWeight: 700, background: "rgba(253,255,152,0.04)" }}>
              <td><strong>COMPOSITE</strong></td>
              <td style={{ textAlign: "center" }}>1.00</td>
              <td colSpan={2} style={{ textAlign: "center", fontFamily: "var(--font-mono)", color: "var(--accent-yellow)", fontSize: 18 }}>6.71</td>
              <td colSpan={2} style={{ textAlign: "center", fontFamily: "var(--font-mono)", color: "var(--accent-yellow)", fontSize: 18 }}>6.59</td>
            </tr>
          </tbody>
        </table>

        <div className="card" style={{ padding: "20px 24px", marginTop: 20, borderLeft: "3px solid var(--accent-yellow)" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-gray-dark)", marginBottom: 8 }}>
            Executive Recommendation
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>
            Both scores sit in the <strong>5.0–7.5 "investigate" band</strong> — above the 5.0 threshold that would warrant deferring, but short of the 7.5 threshold that would indicate a clear "pursue" decision. Neither product has a knockout constraint (all eight capability constraints are mitigable), and both achieve direct-to-operator customer-facing positions in the value network — the strongest possible hierarchy placement.
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>
            The <strong>Heuraufe (6.71)</strong> leads slightly due to better constraint compatibility (all low effort, vs. two medium-effort constraints for the Paddockbox) and slightly higher feature fit. The market for hay racks is larger and better established — Böhmer enters an existing product category where buyer familiarity exists. However, the competitive landscape is also more crowded: Patura, Kerbl, and GROWI hold established BayWa/Raiffeisen distribution positions.
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 0 }}>
            The <strong>Paddockbox (6.59)</strong> is the more strategically interesting product because it creates a new category (castor-mounted steel paddock with fold-flat posts) where Böhmer has no direct steel-tube competitor. The constraint gap (Machinery Directive CE compliance + hinge fatigue test) is addressable with Böhmer's existing DIN EN ISO 3834-2 welding certification. <strong>Recommended sequencing:</strong> Launch Heuraufe first to establish market presence and distribution relationships at lower compliance cost, then bring Paddockbox to market once CE file and prototype fatigue testing are complete.
          </p>
        </div>

        <hr />
        <SectionAnchor id="ovw-howto" title="How to Read This Report" />
        <table>
          <thead><tr><th>Section</th><th>What it covers</th></tr></thead>
          <tbody>
            {[
              ["01 Company Profile", "Legal entity, divisions, key persons, certifications, strategic context"],
              ["02 Capability Assessment", "8 capability constraints (C1-C8), per-product compatibility with effort ratings, gap register"],
              ["03 Product & Market Analysis", "Functional promises, product decomposition (features, specs, constraints), market context, named competitors (ranked by revenue)"],
              ["04 Manufacturing VN & Product BOMs", "14-step manufacturing value network with Böhmer welding competence markers, scaling analysis, full L4-to-L0 BOM"],
              ["05 Equine Production VN (112920)", "End-beneficiary VN with L6 segments, Böhmer positions in L6c/L6d, adjacency analysis"],
              ["06 Adjacent Capabilities", "4 adjacent opportunities (A1-A4) screened against all 8 constraints"],
              ["07 JTBD + Stakeholder Needs", "Burleson JTBD, Ulwick ODI, 5 stakeholder roles, 52 needs, P1-P5 pyramid, top-10 underserved needs"],
            ].map(([ch, what]) => (
              <tr key={ch}><td><strong>{ch}</strong></td><td style={{ fontSize: 12 }}>{what}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
