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
        <SectionAnchor id="ovw-howto" title="How to Read This Report" />
        <table>
          <thead><tr><th>Section</th><th>What it covers</th></tr></thead>
          <tbody>
            {[
              ["01 Company Profile", "Legal entity, divisions, key persons, certifications, strategic context"],
              ["02 Capability Assessment", "8 capability constraints (C1-C8), per-product compatibility, gap register"],
              ["03 Functional Promise", "Two-level FP for both products, UNSPSC classification, complements"],
              ["04 Product Decomposition", "Features, specifications, constraints per product"],
              ["05 VN + BOM (333111)", "14-step manufacturing value network with per-step scaling analysis and full L4-to-L0 BOM"],
              ["06 Production Value Chain", "SCOR model: Source, Plan, Make, Deliver, Return — supplier matrix, costs, QC gates"],
              ["07 Equine Production VN (112920)", "End-beneficiary VN with L6 process steps, Böhmer position, adjacency analysis"],
              ["08 Capability-Market Fit", "6-factor composite scoring: ODI, feature fit, constraints, job coverage, VN hierarchy, incumbents"],
              ["09 Adjacent Capabilities", "4 adjacent opportunities (A1-A4) screened against all 8 constraints"],
              ["10 JTBD + Stakeholder Needs", "Burleson JTBD, Ulwick ODI, 5 stakeholder roles, 52 needs, P1-P5 pyramid"],
              ["11 Competitive Landscape", "10+ named competitors per product, price segmentation, positioning maps, distribution channels"],
            ].map(([ch, what]) => (
              <tr key={ch}><td><strong>{ch}</strong></td><td style={{ fontSize: 12 }}>{what}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
