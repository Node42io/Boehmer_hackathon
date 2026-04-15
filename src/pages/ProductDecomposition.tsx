/**
 * 04 Product Decomposition — Features, specs, constraints per product
 */
import { products } from "@/data";
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

export default function ProductDecomposition() {
  const { products: prods } = products;

  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 03 / Product Decomposition"
        title="Product Decomposition"
        description="Functional abstraction, features, specifications, and constraints for Heuraufe and Paddockbox."
      />
      <div className="md">
        {prods.map((p) => (
          <div key={p.name}>
            <SectionAnchor id={`pd-${p.name.toLowerCase()}`} title={`${p.name} (${p.nameEn})`} />

            <table>
              <tbody>
                <tr><td><strong>Technology Class</strong></td><td>{p.technologyClass}</td></tr>
                <tr><td><strong>Mechanism</strong></td><td style={{ fontSize: 12 }}>{p.underlyingMechanism}</td></tr>
              </tbody>
            </table>

            <h3>Functional Promise</h3>
            <div className="card" style={{ padding: 16, marginBottom: 12 }}>
              <p style={{ fontStyle: "italic", color: "var(--text-white)", fontSize: 14, lineHeight: 1.6, marginBottom: 0 }}>
                "{p.functionalPromise}"
              </p>
            </div>
            <ul>
              {p.differentiators.map((d, i) => <li key={i}>{d}</li>)}
            </ul>

            <h3>Features</h3>
            <table>
              <thead><tr><th>#</th><th>Name</th><th>Description</th><th>Scope</th><th>Category</th></tr></thead>
              <tbody>
                {p.features.map((f, i) => (
                  <tr key={f.name}>
                    <td>F{i + 1}</td>
                    <td><strong>{f.name}</strong></td>
                    <td style={{ fontSize: 12 }}>{f.description}</td>
                    <td><span className={`badge badge--${f.scope === "technology" ? "neutral" : "moderate"}`}>{f.scope}</span></td>
                    <td style={{ fontSize: 11, color: "var(--text-gray)" }}>{f.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>Specifications</h3>
            <table>
              <thead><tr><th>Name</th><th>Value</th><th>Unit</th></tr></thead>
              <tbody>
                {p.specifications.map((s) => (
                  <tr key={s.name}>
                    <td><strong>{s.name}</strong></td>
                    <td style={{ fontFamily: "var(--font-mono)" }}>{s.value}</td>
                    <td style={{ fontSize: 12, color: "var(--text-gray)" }}>{s.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>Constraints</h3>
            <table>
              <thead><tr><th>Name</th><th>Type</th><th>Severity</th><th>Description</th></tr></thead>
              <tbody>
                {p.constraints.map((c) => (
                  <tr key={c.name}>
                    <td><strong>{c.name}</strong></td>
                    <td><span className="badge badge--neutral">{c.type}</span></td>
                    <td><span className={`badge badge--${c.severity === "hard" ? "weak" : "moderate"}`}>{c.severity}</span></td>
                    <td style={{ fontSize: 12 }}>{c.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}
