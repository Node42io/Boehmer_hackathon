/**
 * 03 Functional Promise — Two-level FP for both products
 */
import { functionalPromise } from "@/data";
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

export default function FunctionalPromise() {
  const { technologyClass, products: fps } = functionalPromise;

  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 02 / Functional Promise"
        title="Functional Promise"
        description="Mechanism-free functional promises for both products at product and commodity level."
      />
      <div className="md">
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>Technology Class</strong></td><td>{technologyClass}</td></tr>
            <tr><td><strong>NAICS (manufacturing)</strong></td><td><code>333111</code> — Farm Machinery and Equipment Manufacturing</td></tr>
            <tr><td><strong>NAICS (target market)</strong></td><td><code>112920</code> — Horses and Other Equine Production</td></tr>
          </tbody>
        </table>

        {fps.map((fp) => (
          <div key={fp.name}>
            <hr />
            <SectionAnchor id={`fp-${fp.name.toLowerCase()}`} title={`Product: ${fp.name}`} />

            <h3>Underlying Mechanism</h3>
            <p style={{ fontSize: 13, color: "var(--text-gray-light)", lineHeight: 1.7 }}>{fp.mechanism}</p>

            <h3>Product Functional Promise</h3>
            <div className="card" style={{ padding: 20, marginBottom: 16 }}>
              <p style={{ fontStyle: "italic", color: "var(--text-white)", fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>
                "{fp.productFP.statement}"
              </p>
              <table>
                <tbody>
                  <tr><td><strong>Verb</strong></td><td>{fp.productFP.verb}</td></tr>
                  <tr><td><strong>Object</strong></td><td>{fp.productFP.object}</td></tr>
                  <tr><td><strong>Context</strong></td><td>{fp.productFP.context}</td></tr>
                </tbody>
              </table>
            </div>

            <h4>Differentiators</h4>
            <ul>
              {fp.productFP.differentiators.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
            {fp.productFP.mechanismFree && (
              <p style={{ fontSize: 12, color: "var(--text-gray)" }}>Mechanism-free check: No reference to steel, welding, or galvanizing. Swap test passes.</p>
            )}

            <h3>Commodity Functional Promise</h3>
            <table>
              <tbody>
                <tr><td><strong>Commodity</strong></td><td>{fp.commodityFP.commodity}</td></tr>
                <tr><td><strong>FP</strong></td><td>{fp.commodityFP.statement}</td></tr>
                {fp.commodityFP.fpExtension && (
                  <tr><td><strong>FP Extension</strong></td><td>{fp.commodityFP.fpExtension}</td></tr>
                )}
              </tbody>
            </table>

            <h3>BOM Position</h3>
            <table>
              <tbody>
                <tr><td><strong>Level</strong></td><td>{fp.bomPosition.level}</td></tr>
                <tr><td><strong>Role</strong></td><td>{fp.bomPosition.role}</td></tr>
                <tr><td><strong>Note</strong></td><td>{fp.bomPosition.note}</td></tr>
              </tbody>
            </table>

            <h3>Required Complements</h3>
            <table>
              <thead><tr><th>Complement</th><th>Criticality</th></tr></thead>
              <tbody>
                {fp.complements.map((c) => (
                  <tr key={c.name}>
                    <td><strong>{c.name}</strong></td>
                    <td><span className={`badge badge--${c.criticality === "essential" ? "weak" : c.criticality === "enhancing" ? "moderate" : "neutral"}`}>{c.criticality}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
}
