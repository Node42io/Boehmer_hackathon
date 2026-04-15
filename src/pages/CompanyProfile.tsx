/**
 * 01 Company Profile
 */
import { company } from "@/data";
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

export default function CompanyProfile() {
  const { profile, crossValidation, divisions, keyPersons, certifications, strategicContext, keyConstraintsOnTransformation } = company;

  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 00a"
        title="Company Profile"
        description="Böhmer Systemtechnik GmbH — legal entity, divisions, key persons, certifications, and strategic context."
      />
      <div className="md">
        <SectionAnchor id="cp-profile" title="Company Profile" />
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>Legal Name</strong></td><td>{profile.legalName}</td></tr>
            <tr><td><strong>Legal Form</strong></td><td>{profile.legalForm}</td></tr>
            <tr><td><strong>Headquarters</strong></td><td>{profile.headquarters}</td></tr>
            <tr><td><strong>Founded</strong></td><td>{profile.founded} <span style={{ fontSize: 11, color: "var(--text-gray-dark)" }}>({profile.foundedNote})</span></td></tr>
            <tr><td><strong>Ownership</strong></td><td>{profile.ownershipDetail}</td></tr>
            <tr><td><strong>Employees</strong></td><td>~{profile.employees} <span style={{ fontSize: 11, color: "var(--text-gray-dark)" }}>({profile.employeesNote})</span></td></tr>
            <tr><td><strong>Revenue</strong></td><td>{profile.revenueEurM} EUR M <span style={{ fontSize: 11, color: "var(--text-gray-dark)" }}>({profile.revenueConfidence})</span></td></tr>
            <tr><td><strong>Primary NAICS</strong></td><td><code>{profile.naicsPrimary}</code></td></tr>
            <tr><td><strong>Secondary NAICS</strong></td><td>{profile.naicsSecondary.join(", ")}</td></tr>
            <tr><td><strong>VAT-ID</strong></td><td>{profile.vatId}</td></tr>
            <tr><td><strong>Handelsregister</strong></td><td>{profile.handelsregister}</td></tr>
          </tbody>
        </table>

        <SectionAnchor id="cp-validation" title="Cross-Validation" />
        <table>
          <thead><tr><th>Metric</th><th>INSTRUCTIONS.md</th><th>Web Research</th><th>Delta</th><th>Status</th></tr></thead>
          <tbody>
            {crossValidation.map((cv) => (
              <tr key={cv.metric}>
                <td><strong>{cv.metric}</strong></td>
                <td>{cv.instructionsMd}</td>
                <td>{cv.webResearch}</td>
                <td>{cv.delta}</td>
                <td><span className={`badge badge--${cv.status === "FLAG" ? "weak" : "neutral"}`}>{cv.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="cp-divisions" title="Business Units / Divisions" />
        <table>
          <thead><tr><th>Unit</th><th>Local Name</th><th>Focus</th><th>Status</th><th>Description</th></tr></thead>
          <tbody>
            {divisions.map((d) => (
              <tr key={d.name}>
                <td><strong>{d.name}</strong></td>
                <td style={{ fontSize: 12, color: "var(--text-gray)" }}>{d.nameLocal}</td>
                <td><span className={`badge badge--${d.focus === "growth" ? "strong" : "neutral"}`}>{d.focus}</span></td>
                <td style={{ fontSize: 12 }}>{d.status}</td>
                <td style={{ fontSize: 12 }}>{d.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="cp-persons" title="Key Persons" />
        <table>
          <thead><tr><th>Name</th><th>Role</th><th>Gen.</th><th>Relevance</th></tr></thead>
          <tbody>
            {keyPersons.map((p) => (
              <tr key={p.name}>
                <td><strong>{p.name}</strong></td>
                <td>{p.role}</td>
                <td style={{ textAlign: "center" }}>{p.generation ?? "—"}</td>
                <td style={{ fontSize: 12 }}>{p.relevance}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="cp-certs" title="Certifications" />
        <table>
          <thead><tr><th>Certification</th><th>Standard</th><th>Scope</th></tr></thead>
          <tbody>
            {certifications.map((c) => (
              <tr key={c.name}><td><strong>{c.name}</strong></td><td>{c.standard}</td><td>{c.scope}</td></tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="cp-strategy" title="Strategic Context" />
        <p>{strategicContext}</p>

        <h3>Key Constraints on Transformation</h3>
        <ul>
          {keyConstraintsOnTransformation.map((k, i) => <li key={i}>{k}</li>)}
        </ul>
      </div>
    </section>
  );
}
