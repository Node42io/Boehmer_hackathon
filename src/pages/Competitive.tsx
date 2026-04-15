/**
 * 11 Competitive Landscape — Named competitors, price segmentation, positioning
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

const heuraufeCompetitors = [
  { brand: "Patura", product: "Profi-Viereckraufe", price: "2,034-2,303", places: "12", roof: "Optional", material: "Full steel, standard galv." },
  { brand: "Patura", product: "Großballenraufe + Dach", price: "2,996-3,109", places: "16", roof: "Yes", material: "Full steel, standard galv." },
  { brand: "Kerbl", product: "Viereckraufe + Dach", price: "1,650-1,750", places: "12", roof: "Yes", material: "Standard galv. steel" },
  { brand: "Kerbl", product: "Hobby mit Dach", price: "1,100-1,195", places: "8", roof: "Yes", material: "Standard galv. steel" },
  { brand: "GROWI", product: "Heuraufe Kompakt + Dach", price: "1,447-1,499", places: "8", roof: "Yes", material: "Standard galv. steel" },
  { brand: "Kellfri", product: "Heuraufe mit Dach", price: "1,890", places: "Var.", roof: "Yes", material: "Standard galv. steel" },
  { brand: "Siepmann", product: "Heu-Raufe mit Dach", price: "1,069-1,159", places: "Var.", roof: "Polycarb.", material: "Standard galv. steel" },
  { brand: "Rutjes", product: "Heuraufe mit Dach", price: "1,750", places: "Var.", roof: "Yes", material: "Hot-dip galv. steel" },
  { brand: "Skandwood", product: "Futterraufe Lärchenholz", price: "985-6,540", places: "Var.", roof: "Yes", material: "Larch wood" },
];

const paddockboxCompetitors = [
  { brand: "Patura", product: "Sicherheits-Pferdepanel Einzelbox", price: "1,366-1,394", mobility: "Static", barrier: "BMEL-conform", material: "Round tube, galv." },
  { brand: "Patura", product: "Pferdepanel 3er Boxenreihe", price: "3,495-3,567", mobility: "Static", barrier: "BMEL-conform", material: "Round tube, galv." },
  { brand: "Kneilmann", product: "Mobiler Paddock auf Rädern", price: "3,149+", mobility: "Wheeled", barrier: "~265-318 kg", material: "Round tube/aluminium" },
  { brand: "Hallertauer", product: "Mobile Pferdebox", price: "462-707", mobility: "Static", barrier: "Standard", material: "Flat-oval tube, galv." },
  { brand: "Equifarm", product: "Weidepanel ausziehbar", price: "137-415/panel", mobility: "Static", barrier: "Standard", material: "Steel tube, galv." },
  { brand: "VOSS.farming", product: "Weidepanel Sets", price: "2,310+", mobility: "Static", barrier: "Standard", material: "Steel tube, galv." },
];

const competitiveGaps = [
  { gap: "No competitor offers C3+ (galv. + powder coat) as standard", products: "Both", opportunity: "Charge premium for guaranteed 15-year outdoor life" },
  { gap: "No castor-mounted steel paddock exists in DACH", products: "Paddockbox", opportunity: "Category creation — define the standard before others enter" },
  { gap: "No fold-flat tractor-access feature in any paddock panel", products: "Paddockbox", opportunity: "Patent-worthy feature; solves real daily pain point" },
  { gap: "Closed-profile tubes (SHS/RHS) rare in equestrian panels", products: "Both", opportunity: "Zero horse entrapment risk vs. open round tube" },
  { gap: "Custom OEM sizing unavailable from mass-market brands", products: "Both", opportunity: "Böhmer manufacturing flexibility enables bespoke configs" },
];

export default function Competitive() {
  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 10 / Competitive Landscape"
        title="Competitive Landscape"
        description="Named competitors, price segmentation, positioning maps, distribution channels, and competitive gaps."
      />
      <div className="md">
        <SectionAnchor id="comp-context" title="Market Context" />
        <table>
          <tbody>
            <tr><td><strong>Horses in Germany</strong></td><td>~1.3 million (FN Zahlen & Fakten)</td></tr>
            <tr><td><strong>Equestrian interest</strong></td><td>~11.2 million people</td></tr>
            <tr><td><strong>Active riders</strong></td><td>~2.32 million</td></tr>
            <tr><td><strong>Horse operations (DACH)</strong></td><td>~10,000-12,000 (Reitställe, Gestüte, Pferdepensionen)</td></tr>
            <tr><td><strong>Market growth driver</strong></td><td>Trend toward Offenstallhaltung, Aktivstall, BMEL animal welfare guidelines</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="comp-heuraufe" title="Heuraufe — Named Competitors" />
        <p>Böhmer positioning: <strong>Premium segment (1,500-2,500 EUR)</strong>. Differentiates through ISO 12944 C3+ corrosion protection, S355 structural steel grade, and closed-profile safety design.</p>
        <table>
          <thead><tr><th>Brand</th><th>Product</th><th>Price (EUR)</th><th>Places</th><th>Roof</th><th>Material</th></tr></thead>
          <tbody>
            {heuraufeCompetitors.map((c, i) => (
              <tr key={i}>
                <td><strong>{c.brand}</strong></td>
                <td style={{ fontSize: 12 }}>{c.product}</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{c.price}</td>
                <td style={{ textAlign: "center" }}>{c.places}</td>
                <td style={{ fontSize: 12 }}>{c.roof}</td>
                <td style={{ fontSize: 11, color: "var(--text-gray)" }}>{c.material}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Heuraufe — Key Competitive Advantages</h3>
        <ul>
          <li><strong>Superior corrosion protection:</strong> ISO 12944 C3+ (galv. + powder) vs. standard galvanizing</li>
          <li><strong>Closed-profile safety tubes:</strong> SHS/RHS with no open edges in horse contact zone</li>
          <li><strong>Tractor fork compatibility:</strong> Standard feature, enabling one-person repositioning</li>
          <li><strong>Custom sizing:</strong> OEM flexibility vs. fixed standard sizes from Patura/Kerbl</li>
        </ul>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>
          Recommended positioning: <strong>"The 15-year hay rack"</strong> — emphasize lifecycle cost advantage.
        </p>

        <hr />
        <SectionAnchor id="comp-paddockbox" title="Paddockbox — Named Competitors" />
        <p>Böhmer positioning: <strong>Premium-mobile segment (2,000-5,000 EUR)</strong>. Only direct competitor in castor-mounted category is Kneilmann (wheeled, fixed geometry).</p>
        <table>
          <thead><tr><th>Brand</th><th>Product</th><th>Price (EUR)</th><th>Mobility</th><th>Barrier</th><th>Material</th></tr></thead>
          <tbody>
            {paddockboxCompetitors.map((c, i) => (
              <tr key={i}>
                <td><strong>{c.brand}</strong></td>
                <td style={{ fontSize: 12 }}>{c.product}</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{c.price}</td>
                <td><span className={`badge badge--${c.mobility === "Wheeled" ? "accent" : "neutral"}`}>{c.mobility}</span></td>
                <td style={{ fontSize: 11 }}>{c.barrier}</td>
                <td style={{ fontSize: 11, color: "var(--text-gray)" }}>{c.material}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="card" style={{ padding: 16, marginTop: 16, borderLeft: "3px solid var(--accent-yellow)" }}>
          <p style={{ marginBottom: 0, fontSize: 13 }}>
            <strong>Key insight:</strong> Böhmer occupies a <strong>category of one</strong>. No current competitor offers castor-mounted steel panels with fold-flat posts for tractor corridor access.
            Kneilmann's wheeled paddock is the nearest competitor but uses rigid pentagon/hexagon geometry (not reconfigurable) and has lower lateral load ratings.
          </p>
        </div>

        <p style={{ fontSize: 12, color: "var(--text-gray)", marginTop: 12 }}>
          Recommended positioning: <strong>"The paddock that moves with you"</strong> — zero-disassembly repositioning for Offenställe.
        </p>

        <hr />
        <SectionAnchor id="comp-gaps" title="Competitive Gaps Böhmer Can Exploit" />
        <table>
          <thead><tr><th>Gap</th><th>Products</th><th>Opportunity</th></tr></thead>
          <tbody>
            {competitiveGaps.map((g, i) => (
              <tr key={i}>
                <td><strong>{g.gap}</strong></td>
                <td style={{ fontSize: 12 }}>{g.products}</td>
                <td style={{ fontSize: 12 }}>{g.opportunity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="comp-channels" title="Distribution Channels" />
        <table>
          <thead><tr><th>Channel</th><th>Key Players</th><th>Böhmer Fit</th></tr></thead>
          <tbody>
            <tr><td><strong>Farm supply chains</strong></td><td>BayWa, Raiffeisen, Agravis</td><td>Requires listing; high volume needed</td></tr>
            <tr><td><strong>Equestrian specialist retail</strong></td><td>Hofmeister, Loesdau, Krämer</td><td>Good fit for premium; demo model needed</td></tr>
            <tr><td><strong>Online specialist shops</strong></td><td>Stallbedarf24, Agrarzone, weidezaun.info</td><td>Low barrier; requires logistics setup</td></tr>
            <tr><td><strong>Direct manufacturer sales</strong></td><td>Siepmann, Skandwood, meineheuraufe.de</td><td><span className="badge badge--strong">Best fit</span> — custom OEM + direct</td></tr>
            <tr><td><strong>Trade shows</strong></td><td>EQUITANA, Pferd & Jagd, spoga horse</td><td>Critical for live demos (esp. Paddockbox)</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="comp-threats" title="Competitive Threat Assessment" />
        <table>
          <thead><tr><th>Threat</th><th>Heuraufe</th><th>Paddockbox</th><th>Mitigation</th></tr></thead>
          <tbody>
            <tr><td><strong>Patura price reduction</strong></td><td>High</td><td>High</td><td>Differentiate on C3+ durability, custom OEM</td></tr>
            <tr><td><strong>Chinese/EE import</strong></td><td>Low-moderate</td><td>Low</td><td>"Made in Germany", DIN EN ISO 3834-2</td></tr>
            <tr><td><strong>Plastic/composite alternatives</strong></td><td>Low</td><td>Very low</td><td>Steel advantage permanent in horse-contact</td></tr>
            <tr><td><strong>Kneilmann mobile expansion</strong></td><td>N/A</td><td>Moderate</td><td>Superior castor rating, fold-flat posts</td></tr>
            <tr><td><strong>DIY trend</strong></td><td>Moderate</td><td>Low</td><td>Competitive entry-level model; emphasize safety</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
