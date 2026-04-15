/**
 * 10 Competitive Landscape — Full analysis from 10_competitive.md
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

export default function Competitive() {
  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 10 / Competitive Landscape"
        title="Competitive Landscape"
        description="Named competitors, price segmentation, positioning maps, distribution channels, competitive gaps, and threat assessment for both products in the DACH equestrian market."
      />
      <article className="md">

        <SectionAnchor id="comp-context" title="Overview" />
        <p>Two products analyzed against the DACH equestrian equipment market (NAICS 112920). Both target the same end-market segment (horse owners, Reitställe, Offenstallbetriebe) but compete in distinct product categories with different incumbent sets.</p>
        <table>
          <thead><tr><th>Product</th><th>Category</th><th>Incumbent Count</th><th>Price Tier (Böhmer)</th><th>Switching Cost</th></tr></thead>
          <tbody>
            <tr><td><strong>Heuraufe</strong></td><td>Outdoor Multi-Horse Hay Feeder Stations</td><td>10 named competitors + alternatives</td><td>Premium [EST]</td><td>low–moderate</td></tr>
            <tr><td><strong>Paddockbox</strong></td><td>Mobile Modular Steel Paddock Enclosures</td><td>8 named competitors + alternatives</td><td>Premium [EST]</td><td>moderate</td></tr>
          </tbody>
        </table>
        <p><strong>Market context:</strong> Germany has ~1.3 million horses (FN Zahlen &amp; Fakten) and ~11.2 million people with interest in equestrian sports. The equestrian equipment market is fragmented, dominated by agricultural supply brands (Patura, Kerbl, GROWI) with distribution via farm supply chains (BayWa, Raiffeisen), specialized equestrian retail (Hofmeister, Loesdau), and online platforms.</p>

        <hr />
        <SectionAnchor id="comp-h-summary" title="Product 1: Heuraufe — Product Summary" />
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>Functional promise</strong></td><td>Supply protected hay to multiple horses simultaneously; eliminate feed competition; reduce waste 20–40%; preserve natural head-down posture</td></tr>
            <tr><td><strong>Construction</strong></td><td>Welded S355 steel tube frame (80x80x5 mm base, 40x40x3 mm roof), pitched steel roof, bar-grid retainer</td></tr>
            <tr><td><strong>Surface</strong></td><td>Hot-dip galvanized (ISO 1461) + powder coat = ISO 12944 C3+</td></tr>
            <tr><td><strong>Footprint</strong></td><td>2.5 x 1.7 m (4–5 horse configuration)</td></tr>
            <tr><td><strong>Service life</strong></td><td>15 years</td></tr>
            <tr><td><strong>Mobility</strong></td><td>Tractor fork/skid compatible, one-person repositioning</td></tr>
            <tr><td><strong>Key differentiators</strong></td><td>Multi-side open access, roofed, tractor-movable, closed-profile safety tubes, 15-year C3+ design life</td></tr>
            <tr><td><strong>Estimated price</strong></td><td>1,500–2,500 EUR [EST]</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="comp-h-competitors" title="Heuraufe — Named Competitors" />
        <table>
          <thead>
            <tr><th>#</th><th>Brand</th><th>Country</th><th>Product / Model</th><th>Material</th><th>Price Range (EUR)</th><th>Key Features</th><th>Distribution</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td><strong>Patura</strong></td><td>DE</td><td style={{ fontSize: 12 }}>Profi-Viereckraufe mit Sicherheits-Pferdefressgittern</td><td style={{ fontSize: 12 }}>Galvanized steel, massive full-steel</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>2,034–2,303</td><td style={{ fontSize: 12 }}>12 safety feeding places, height-adjustable, bales up to 1.80 m, BMEL-conform</td><td style={{ fontSize: 11 }}>BayWa, Raiffeisen, Stallbedarf24, direct</td></tr>
            <tr><td>2</td><td><strong>Patura</strong></td><td>DE</td><td style={{ fontSize: 12 }}>Großballenraufe mit Sicherheits-Pferdefressgittern + Dach</td><td style={{ fontSize: 12 }}>Galvanized steel</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>2,996–3,109</td><td style={{ fontSize: 12 }}>16 feeding places, height-adjustable roof, premium segment</td><td style={{ fontSize: 11 }}>BayWa, Raiffeisen, Stallbedarf24, direct</td></tr>
            <tr><td>3</td><td><strong>Patura</strong></td><td>DE</td><td style={{ fontSize: 12 }}>Compact-Viereckraufe</td><td style={{ fontSize: 12 }}>Galvanized steel</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>1,257–1,359</td><td style={{ fontSize: 12 }}>12 feeding places, 5 cm grid spacing, fold-out sides</td><td style={{ fontSize: 11 }}>BayWa, Raiffeisen, Stallbedarf24</td></tr>
            <tr><td>4</td><td><strong>Kerbl</strong></td><td>DE</td><td style={{ fontSize: 12 }}>Viereckraufe mit Sicherheitsfressgitter + Dach</td><td style={{ fontSize: 12 }}>Hot-dip galvanized steel</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>1,650–1,750</td><td style={{ fontSize: 12 }}>12 feeding places, height-adjustable skids, bales up to 1.8 m, roof</td><td style={{ fontSize: 11 }}>BayWa, Raiffeisen, Amazon, Stallbedarf24</td></tr>
            <tr><td>5</td><td><strong>Kerbl</strong></td><td>DE</td><td style={{ fontSize: 12 }}>Viereckraufe Hobby mit Dach</td><td style={{ fontSize: 12 }}>Galvanized steel</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>1,100–1,195</td><td style={{ fontSize: 12 }}>8 feeding places, budget segment with roof, 150x150x240 cm</td><td style={{ fontSize: 11 }}>BayWa, Raiffeisen, Stallbedarf24</td></tr>
            <tr><td>6</td><td><strong>GROWI</strong> (Grossewinkelmann)</td><td>DE</td><td style={{ fontSize: 12 }}>Heuraufe Kompakt mit Dach</td><td style={{ fontSize: 12 }}>Galvanized steel</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>1,447–1,499</td><td style={{ fontSize: 12 }}>8 feeding places, 150x150 cm, roof with edge protection bumpers</td><td style={{ fontSize: 11 }}>Stallbedarf24, Haas Pferdesport, direct</td></tr>
            <tr><td>7</td><td><strong>Kellfri</strong></td><td>SE</td><td style={{ fontSize: 12 }}>Heuraufe mit Dach und geschlossenen Palisaden</td><td style={{ fontSize: 12 }}>Hot-dip galvanized steel</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>1,890 (excl. VAT)</td><td style={{ fontSize: 12 }}>Roof + closed palisade elements, Swedish import, budget-premium</td><td style={{ fontSize: 11 }}>farmtec-online.de, direct import</td></tr>
            <tr><td>8</td><td><strong>Siepmann</strong></td><td>DE</td><td style={{ fontSize: 12 }}>Heu-Raufe mit Dach + Netzbügel</td><td style={{ fontSize: 12 }}>Galvanized steel + polycarbonate roof</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>1,069–1,159</td><td style={{ fontSize: 12 }}>180 kg, front-loader accessible, no fixed floor (drainage), screw-together system</td><td style={{ fontSize: 11 }}>siepmann.net direct, equestrian trade</td></tr>
            <tr><td>9</td><td><strong>Rutjes Pferdeboxen</strong></td><td>NL</td><td style={{ fontSize: 12 }}>Heuraufe mit Dach 200x200 cm</td><td style={{ fontSize: 12 }}>Hot-dip galvanized steel</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>1,750 (reduced from 1,885)</td><td style={{ fontSize: 12 }}>3-point hitch for tractor, adjustable roof/feet, 2 fillable sides</td><td style={{ fontSize: 11 }}>rutjespferdeboxen.de direct</td></tr>
            <tr><td>10</td><td><strong>Skandwood</strong></td><td>DE</td><td style={{ fontSize: 12 }}>Futterraufe aus Lärchenholz</td><td style={{ fontSize: 12 }}>Larch wood (Lärchenholz)</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>985–6,540</td><td style={{ fontSize: 12 }}>Premium wood construction, large roof overhang, aesthetic design</td><td style={{ fontSize: 11 }}>aussenbox.de direct, equestrian shows</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="comp-h-price" title="Heuraufe — Price Segmentation" />
        <table>
          <thead><tr><th>Segment</th><th>Price Range (EUR, incl. VAT)</th><th>Representative Products</th><th>Material</th></tr></thead>
          <tbody>
            <tr><td><span className="badge badge--neutral">Budget</span></td><td style={{ fontFamily: "var(--font-mono)" }}>290–700</td><td style={{ fontSize: 12 }}>Kellfri Bodenheuraufe (290), Kellfri Sechseckige mit Dach (660), Rundraufen without roof</td><td style={{ fontSize: 12 }}>Steel, basic galvanized</td></tr>
            <tr><td><span className="badge badge--neutral">Mid-range</span></td><td style={{ fontFamily: "var(--font-mono)" }}>700–1,500</td><td style={{ fontSize: 12 }}>Kerbl Hobby mit Dach (1,100), Siepmann mit Dach (1,069–1,159), GROWI Kompakt (1,447), Patura Compact (1,257)</td><td style={{ fontSize: 12 }}>Galvanized steel, basic roofs</td></tr>
            <tr><td><span className="badge badge--moderate">Premium</span></td><td style={{ fontFamily: "var(--font-mono)" }}>1,500–3,500</td><td style={{ fontSize: 12 }}>Patura Profi (2,034–2,303), Kerbl Sicherheitsfressgitter (1,650), Rutjes (1,750), Patura Großballenraufe (2,996–3,109)</td><td style={{ fontSize: 12 }}>Heavy galvanized steel, safety grids, adjustable components</td></tr>
            <tr><td><span className="badge badge--accent">Ultra-premium</span></td><td style={{ fontFamily: "var(--font-mono)" }}>3,500–11,000</td><td style={{ fontSize: 12 }}>Kneilmann Rundraufe (3,242), HAU Heudepot (3,878+), Skandwood Lärche (2,035–6,540), GROWI Zeitgesteuert (10,999)</td><td style={{ fontSize: 12 }}>Specialty materials, automated systems, wood/stainless</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>
          <strong>Böhmer positioning [EST]:</strong> Premium segment (1,500–2,500 EUR). Competes directly with Patura Profi, Kerbl Sicherheitsfressgitter, and Rutjes. Differentiates through superior corrosion protection (C3+ vs. standard galvanizing), structural steel grade (S355 vs. S235), and closed-profile safety design.
        </p>

        <hr />
        <SectionAnchor id="comp-h-alternatives" title="Heuraufe — Alternative Solutions (Non-Direct Competitors)" />
        <table>
          <thead><tr><th>#</th><th>Alternative</th><th>Mechanism</th><th>Price Range (EUR)</th><th>Advantages</th><th>Disadvantages</th></tr></thead>
          <tbody>
            <tr><td>A1</td><td><strong>DIY wooden hay rack</strong></td><td style={{ fontSize: 12 }}>Self-built timber frame, corrugated roof</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>200–600 [EST]</td><td style={{ fontSize: 12 }}>Lowest cost, customizable, locally sourced timber</td><td style={{ fontSize: 12 }}>Short lifespan (3–5 years), rot, splinter risk, no safety certification</td></tr>
            <tr><td>A2</td><td><strong>Rundballenraufe (round bale ring)</strong></td><td style={{ fontSize: 12 }}>Open steel ring, no roof</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>270–870 [SRC]</td><td style={{ fontSize: 12 }}>Simple, cheap, fast setup</td><td style={{ fontSize: 12 }}>No weather protection, high hay waste (30–50%), no feed-rate control</td></tr>
            <tr><td>A3</td><td><strong>Floor feeding (Bodenfütterung)</strong></td><td style={{ fontSize: 12 }}>Hay placed directly on ground or on tarpaulin</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>0–50 [EST]</td><td style={{ fontSize: 12 }}>Zero equipment cost</td><td style={{ fontSize: 12 }}>Maximum waste (40–60%), contamination (urine, mud), parasite risk, Futterneid</td></tr>
            <tr><td>A4</td><td><strong>Hay nets without frame</strong></td><td style={{ fontSize: 12 }}>Knotted polypropylene net, suspended from post or tree</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>30–150 [SRC]</td><td style={{ fontSize: 12 }}>Cheapest slow-feeder, reduces waste 30–50%</td><td style={{ fontSize: 12 }}>No weather protection, net wear/replacement, entanglement risk, limited capacity</td></tr>
            <tr><td>A5</td><td><strong>Permanent built shelter with integrated feeder</strong></td><td style={{ fontSize: 12 }}>Masonry/wood shelter with built-in trough</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>5,000–15,000+ [EST]</td><td style={{ fontSize: 12 }}>Complete weather protection, integrated design</td><td style={{ fontSize: 12 }}>Immobile, building permit required, high cost, long construction time</td></tr>
            <tr><td>A6</td><td><strong>Plastic hay feeder (Heuglocke)</strong></td><td style={{ fontSize: 12 }}>Rotomolded PE dome over round bale</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>720–770 [SRC]</td><td style={{ fontSize: 12 }}>Lightweight, no corrosion, 5–10 feeding places</td><td style={{ fontSize: 12 }}>UV degradation, limited lifespan (5–8 years), no structural strength, wind-sensitive</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="comp-h-dimensions" title="Heuraufe — Competitive Dimensions" />
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Dimension</th>
                <th>Böhmer (Target)</th>
                <th>Patura Profi</th>
                <th>Kerbl Sicherheit</th>
                <th>GROWI Kompakt</th>
                <th>Kellfri Dach</th>
                <th>Skandwood Holz</th>
                <th>Siepmann</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Price</strong></td>
                <td><strong>Premium [EST]</strong></td>
                <td style={{ fontSize: 12 }}>Premium</td>
                <td style={{ fontSize: 12 }}>Premium</td>
                <td style={{ fontSize: 12 }}>Mid-range</td>
                <td style={{ fontSize: 12 }}>Mid-range</td>
                <td style={{ fontSize: 12 }}>Ultra-premium</td>
                <td style={{ fontSize: 12 }}>Mid-range</td>
              </tr>
              <tr>
                <td><strong>Material quality</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}>S355 closed-profile, C3+</td>
                <td style={{ fontSize: 12 }}>Full steel, standard galv.</td>
                <td style={{ fontSize: 12 }}>Standard galv. steel</td>
                <td style={{ fontSize: 12 }}>Standard galv. steel</td>
                <td style={{ fontSize: 12 }}>Standard galv. steel</td>
                <td style={{ fontSize: 12 }}>Larch wood</td>
                <td style={{ fontSize: 12 }}>Standard galv. steel</td>
              </tr>
              <tr>
                <td><strong>Corrosion protection</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}>ISO 12944 C3+ (galv. + powder)</td>
                <td style={{ fontSize: 12 }}>Standard galvanized</td>
                <td style={{ fontSize: 12 }}>Standard galvanized</td>
                <td style={{ fontSize: 12 }}>Standard galvanized</td>
                <td style={{ fontSize: 12 }}>Standard galvanized</td>
                <td style={{ fontSize: 12 }}>Wood treatment</td>
                <td style={{ fontSize: 12 }}>Standard galvanized</td>
              </tr>
              <tr>
                <td><strong>Design service life</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}>15 years</td>
                <td style={{ fontSize: 12 }}>10–15 years [EST]</td>
                <td style={{ fontSize: 12 }}>10–12 years [EST]</td>
                <td style={{ fontSize: 12 }}>10–12 years [EST]</td>
                <td style={{ fontSize: 12 }}>10–12 years [EST]</td>
                <td style={{ fontSize: 12 }}>8–15 years [EST]</td>
                <td style={{ fontSize: 12 }}>10–12 years [EST]</td>
              </tr>
              <tr>
                <td><strong>Feeding places</strong></td>
                <td style={{ fontSize: 12 }}>4–5 (multi-side open)</td>
                <td style={{ fontSize: 12 }}>12–16</td>
                <td style={{ fontSize: 12 }}>8–12</td>
                <td style={{ fontSize: 12 }}>8</td>
                <td style={{ fontSize: 12 }}>Variable</td>
                <td style={{ fontSize: 12 }}>Variable</td>
                <td style={{ fontSize: 12 }}>Variable</td>
              </tr>
              <tr>
                <td><strong>Weather protection</strong></td>
                <td style={{ fontSize: 12 }}>Pitched steel roof</td>
                <td style={{ fontSize: 12 }}>Optional/with roof</td>
                <td style={{ fontSize: 12 }}>With roof</td>
                <td style={{ fontSize: 12 }}>With roof</td>
                <td style={{ fontSize: 12 }}>With roof</td>
                <td style={{ fontSize: 12 }}>Large wood roof</td>
                <td style={{ fontSize: 12 }}>Polycarbonate roof</td>
              </tr>
              <tr>
                <td><strong>Mobility</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}>Tractor fork/skid</td>
                <td style={{ fontSize: 12 }}>Skid-mounted [EST]</td>
                <td style={{ fontSize: 12 }}>Height-adjustable skids</td>
                <td style={{ fontSize: 12 }}>Stationary [EST]</td>
                <td style={{ fontSize: 12 }}>Stationary [EST]</td>
                <td style={{ fontSize: 12 }}>Stationary</td>
                <td style={{ fontSize: 12 }}>Front-loader accessible</td>
              </tr>
              <tr>
                <td><strong>Safety (horse)</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}>Closed-profile SHS, no sharp edges</td>
                <td style={{ fontSize: 12 }}>BMEL-conform grid</td>
                <td style={{ fontSize: 12 }}>Safety feed grid</td>
                <td style={{ fontSize: 12 }}>Standard palisade</td>
                <td style={{ fontSize: 12 }}>Closed palisade</td>
                <td style={{ fontSize: 12 }}>Wood (no sharp edges)</td>
                <td style={{ fontSize: 12 }}>Standard grid</td>
              </tr>
              <tr>
                <td><strong>Customization</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}>Made-to-order (Böhmer as OEM)</td>
                <td style={{ fontSize: 12 }}>Standard sizes</td>
                <td style={{ fontSize: 12 }}>Standard sizes</td>
                <td style={{ fontSize: 12 }}>Standard sizes</td>
                <td style={{ fontSize: 12 }}>Standard sizes</td>
                <td style={{ fontSize: 12 }}>Project-specific</td>
                <td style={{ fontSize: 12 }}>Standard sizes</td>
              </tr>
              <tr>
                <td><strong>Delivery time</strong></td>
                <td style={{ fontSize: 12 }}>4–8 weeks [EST]</td>
                <td style={{ fontSize: 12 }}>1–4 weeks [EST]</td>
                <td style={{ fontSize: 12 }}>1–2 weeks (stock)</td>
                <td style={{ fontSize: 12 }}>4–6 weeks [SRC]</td>
                <td style={{ fontSize: 12 }}>2–4 weeks [EST]</td>
                <td style={{ fontSize: 12 }}>Project-based</td>
                <td style={{ fontSize: 12 }}>1–2 weeks [EST]</td>
              </tr>
              <tr>
                <td><strong>After-sales</strong></td>
                <td style={{ fontSize: 12 }}>Direct manufacturer</td>
                <td style={{ fontSize: 12 }}>Via dealer network</td>
                <td style={{ fontSize: 12 }}>Via dealer network</td>
                <td style={{ fontSize: 12 }}>Via dealer network</td>
                <td style={{ fontSize: 12 }}>Import, limited</td>
                <td style={{ fontSize: 12 }}>Direct</td>
                <td style={{ fontSize: 12 }}>Direct</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />
        <SectionAnchor id="comp-h-map" title="Heuraufe — Competitive Positioning Map" />
        <pre style={{ fontSize: 12, lineHeight: 1.5, overflowX: "auto", background: "rgba(255,255,255,0.03)", padding: "12px 16px", borderRadius: 4 }}>
{`  Price (EUR)
  ^
  |                                          Skandwood Lärche XL
  6000|                                          (6,540)
  |
  |
  |
  3000|  Patura Großballenraufe    Kneilmann
  |  (2,996)                    (3,242)
  |
  2500|                 *** BÖHMER ***
  |                 (1,500-2,500 EST)
  2000|  Patura Profi   Kellfri Dach    Rutjes
  |  (2,034)        (1,890)         (1,750)
  |
  1500|  Kerbl Sicherh.  GROWI Kompakt
  |  (1,650)          (1,447)
  |
  1200|  Patura Compact   Siepmann Dach
  |  (1,257)           (1,069-1,159)
  |
  1000|  Kerbl Hobby
  |  (1,100)
  |
  700 |  Kellfri Sechseck
  |  (660)
  |
  300 |  Kellfri Boden     DIY Holz       Hay nets
  |  (290)             (200-600)       (30-150)
  |
  +-----+-----+-----+-----+-----+-----+------> Quality / Durability
       Low    Basic   Standard  Good   High   Premium  Ultra`}
        </pre>

        <hr />
        <SectionAnchor id="comp-h-channels" title="Heuraufe — Distribution Channels" />
        <table>
          <thead><tr><th>Channel</th><th>Key Players</th><th>Market Role</th><th>Böhmer Access</th></tr></thead>
          <tbody>
            <tr><td><strong>Farm supply chains (Landhandel)</strong></td><td style={{ fontSize: 12 }}>BayWa, Raiffeisen, Agravis</td><td style={{ fontSize: 12 }}>Largest reach (~60% of market [EST]). Stock Patura, Kerbl, GROWI.</td><td style={{ fontSize: 12 }}>Requires listing agreement; high volume required</td></tr>
            <tr><td><strong>Equestrian specialist retail (Reitsporthandel)</strong></td><td style={{ fontSize: 12 }}>Hofmeister, Loesdau, Krämer</td><td style={{ fontSize: 12 }}>Premium-oriented customers, smaller volumes</td><td style={{ fontSize: 12 }}>Good fit for premium positioning; demo/display model required</td></tr>
            <tr><td><strong>Online specialized shops</strong></td><td style={{ fontSize: 12 }}>Stallbedarf24, Agrarzone, weidezaun.info, Stallshop24</td><td style={{ fontSize: 12 }}>Growing channel, price-transparent, 15–25% of market [EST]</td><td style={{ fontSize: 12 }}>Low barrier to entry; requires logistics setup</td></tr>
            <tr><td><strong>Amazon / eBay / Kleinanzeigen</strong></td><td style={{ fontSize: 12 }}>Various resellers</td><td style={{ fontSize: 12 }}>Price-sensitive, mostly budget/mid-range products</td><td style={{ fontSize: 12 }}>Not recommended for premium positioning</td></tr>
            <tr><td><strong>Direct manufacturer sales</strong></td><td style={{ fontSize: 12 }}>Siepmann, Skandwood, meineheuraufe.de, Rutjes</td><td style={{ fontSize: 12 }}>Higher margins, direct customer relationship</td><td style={{ fontSize: 12 }}><strong>Best fit for Böhmer</strong>: custom/OEM + direct relationships</td></tr>
            <tr><td><strong>Agricultural machinery trade</strong></td><td style={{ fontSize: 12 }}>farmtec-online.de, Landwirt.com, traktorpool.de</td><td style={{ fontSize: 12 }}>Used/new machinery audience, farm-oriented</td><td style={{ fontSize: 12 }}>Secondary channel, reaches professional operations</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="comp-p-summary" title="Product 2: Paddockbox — Product Summary" />
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>Functional promise</strong></td><td>Enclose horses in a repositionable, configurable perimeter; tractor access through foldable posts; no disassembly needed</td></tr>
            <tr><td><strong>Construction</strong></td><td>Welded S355 steel tube panels (60x60x4 mm rail, 80x80x3 mm post), heavy-duty brake-lockable castors (800 kg lateral)</td></tr>
            <tr><td><strong>Surface</strong></td><td>Hot-dip galvanized (ISO 1461) + powder coat = ISO 12944 C3+</td></tr>
            <tr><td><strong>Panel height</strong></td><td>1.40 m (2-rail) / 1.60 m (3-rail)</td></tr>
            <tr><td><strong>Segment length</strong></td><td>3.0 m standard</td></tr>
            <tr><td><strong>Service life</strong></td><td>15 years</td></tr>
            <tr><td><strong>Mobility</strong></td><td>Castor-mounted, full enclosure repositionable without dismantling</td></tr>
            <tr><td><strong>Key differentiators</strong></td><td>Castors (unique vs. static panels), fold-flat posts (tractor corridor), wall-hinge option, modular configurability, 10,000-cycle hinge fatigue rating</td></tr>
            <tr><td><strong>Estimated price</strong></td><td>2,000–5,000 EUR (4-panel configuration) [EST]</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="comp-p-competitors" title="Paddockbox — Named Competitors" />
        <table>
          <thead>
            <tr><th>#</th><th>Brand</th><th>Country</th><th>Product / Model</th><th>Material</th><th>Price Range (EUR)</th><th>Key Features</th><th>Distribution</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td><strong>Patura</strong></td><td>DE</td><td style={{ fontSize: 12 }}>Sicherheits-Pferdepanel Einzelbox (1.70 m)</td><td style={{ fontSize: 12 }}>Galvanized round steel tube</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>1,366–1,394</td><td style={{ fontSize: 12 }}>BMEL-conform tube spacing, 3x3 m or 3.6x3.6 m, safety-focused</td><td style={{ fontSize: 11 }}>BayWa, Raiffeisen, Stallbedarf24</td></tr>
            <tr><td>2</td><td><strong>Patura</strong></td><td>DE</td><td style={{ fontSize: 12 }}>Sicherheits-Pferdepanel 3er Boxenreihe</td><td style={{ fontSize: 12 }}>Galvanized round steel tube</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>3,495–3,567</td><td style={{ fontSize: 12 }}>3-box layout, BMEL-conform, professional stables</td><td style={{ fontSize: 11 }}>BayWa, Raiffeisen, Stallbedarf24</td></tr>
            <tr><td>3</td><td><strong>Patura</strong></td><td>DE</td><td style={{ fontSize: 12 }}>Sicherheits-Pferdepanel 4er Boxen</td><td style={{ fontSize: 12 }}>Galvanized round steel tube</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>4,258–4,346</td><td style={{ fontSize: 12 }}>4-box layout, largest standard config</td><td style={{ fontSize: 11 }}>BayWa, Raiffeisen, Stallbedarf24</td></tr>
            <tr><td>4</td><td><strong>Patura</strong></td><td>DE</td><td style={{ fontSize: 12 }}>Weidepanel Einzelbox (Panel-6, complete set)</td><td style={{ fontSize: 12 }}>Galvanized flat-oval tube (50x30x1.5 mm)</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>893–912</td><td style={{ fontSize: 12 }}>6-tube design, spring-bolt gate, leg protection on end tubes</td><td style={{ fontSize: 11 }}>BayWa, Raiffeisen, Stallbedarf24</td></tr>
            <tr><td>5</td><td><strong>Kneilmann</strong></td><td>DE</td><td style={{ fontSize: 12 }}>Mobiler Paddock auf Rädern</td><td style={{ fontSize: 12 }}>Galvanized round tube (aluminum frame)</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>3,149 (single); panels 583 each</td><td style={{ fontSize: 12 }}>Pentagon (9.55 m dia) / hexagon (11.46 m dia), puncture-proof wheels, ~6 m panels</td><td style={{ fontSize: 11 }}>Stallbedarf24, direct</td></tr>
            <tr><td>6</td><td><strong>Hallertauer Zaun- und Stalldepot</strong></td><td>DE</td><td style={{ fontSize: 12 }}>Mobile Pferdebox Var. 1</td><td style={{ fontSize: 12 }}>Hot-dip galvanized steel (50x30x1.5 mm flat-oval tube)</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>462–707</td><td style={{ fontSize: 12 }}>2.4x2.4 to 4.0x4.0 m sizes, chain connection</td><td style={{ fontSize: 11 }}>zaun-und-stalldepot.de direct</td></tr>
            <tr><td>7</td><td><strong>Equifarm</strong></td><td>DE</td><td style={{ fontSize: 12 }}>Weidepanel ausziehbar Modell Pferd</td><td style={{ fontSize: 12 }}>Steel tube, galvanized</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>137–415 per panel</td><td style={{ fontSize: 12 }}>Extendable 2.4–4.0 m, 1.70 m height, with/without gate</td><td style={{ fontSize: 11 }}>equifarm.de direct</td></tr>
            <tr><td>8</td><td><strong>VOSS.farming</strong></td><td>DE</td><td style={{ fontSize: 12 }}>Weidepanel Sets</td><td style={{ fontSize: 12 }}>Hot-dip galvanized steel tube (6-tube)</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>Panel sets from ~2,310</td><td style={{ fontSize: 12 }}>Complete box sets (single/2er/3er), chain locks, point-pressure feet</td><td style={{ fontSize: 11 }}>weidezaun.info, Amazon</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="comp-p-price" title="Paddockbox — Price Segmentation" />
        <table>
          <thead><tr><th>Segment</th><th>Price Range (EUR, incl. VAT)</th><th>Representative Products</th><th>Configuration</th></tr></thead>
          <tbody>
            <tr><td><span className="badge badge--neutral">Budget (electric fence)</span></td><td style={{ fontFamily: "var(--font-mono)" }}>180–520</td><td style={{ fontSize: 12 }}>AKO Paddock Set 7x7 m (179), WEIDEFIX Basic (224–518), PATURA Wanderreiterset (215)</td><td style={{ fontSize: 12 }}>Electric tape/band on fiberglass posts, no physical barrier</td></tr>
            <tr><td><span className="badge badge--neutral">Budget (panel)</span></td><td style={{ fontFamily: "var(--font-mono)" }}>460–700</td><td style={{ fontSize: 12 }}>Hallertauer Zaun-Stalldepot box (462–707), Equifarm panels (137–415 each), Stallbedarf24 Panel Box (690)</td><td style={{ fontSize: 12 }}>4-panel static box, chain connection, basic galvanized</td></tr>
            <tr><td><span className="badge badge--neutral">Mid-range (panel)</span></td><td style={{ fontFamily: "var(--font-mono)" }}>700–1,500</td><td style={{ fontSize: 12 }}>ROFLEXS Basic (624–658), Patura Weidepanel Einzelbox (893), ROFLEXS Premium (874–904)</td><td style={{ fontSize: 12 }}>Better connectors, safety features, rollup systems</td></tr>
            <tr><td><span className="badge badge--moderate">Premium (safety panel)</span></td><td style={{ fontFamily: "var(--font-mono)" }}>1,400–4,500</td><td style={{ fontSize: 12 }}>Patura Sicherheits-Pferdepanel Einzelbox (1,366), Patura 3er (3,495), Patura 4er (4,258), VOSS.farming sets (2,310)</td><td style={{ fontSize: 12 }}>BMEL-conform, round tube, professional grade</td></tr>
            <tr><td><span className="badge badge--accent">Premium (mobile on wheels)</span></td><td style={{ fontFamily: "var(--font-mono)" }}>3,000–6,000+</td><td style={{ fontSize: 12 }}>Kneilmann Mobiler Paddock (3,149+), <strong>Böhmer Paddockbox</strong> [EST]</td><td style={{ fontSize: 12 }}>Wheeled/castor systems, true mobility without disassembly</td></tr>
            <tr><td><span className="badge badge--neutral">Ultra-premium (electric rollup)</span></td><td style={{ fontFamily: "var(--font-mono)" }}>1,400–1,440</td><td style={{ fontSize: 12 }}>ROFLEXS Premium E (1,404–1,438)</td><td style={{ fontSize: 12 }}>Integrated electric fencing + rollup, battery-powered</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>
          <strong>Böhmer positioning [EST]:</strong> Premium-mobile segment (2,000–5,000 EUR for typical 4-panel configurations). The only direct competitor in the "castor-mounted steel enclosure" category is <strong>Kneilmann</strong> (wheeled aluminum/steel). All other panel competitors are static (no wheels/castors) and require manual disassembly for repositioning. This is Böhmer's primary differentiation axis.
        </p>

        <hr />
        <SectionAnchor id="comp-p-alternatives" title="Paddockbox — Alternative Solutions (Non-Direct Competitors)" />
        <table>
          <thead><tr><th>#</th><th>Alternative</th><th>Mechanism</th><th>Price Range (EUR)</th><th>Advantages</th><th>Disadvantages</th></tr></thead>
          <tbody>
            <tr><td>A1</td><td><strong>Electric fencing (mobile)</strong></td><td style={{ fontSize: 12 }}>Electrified tape/rope on fiberglass posts, battery/solar energizer</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>180–520 [SRC]</td><td style={{ fontSize: 12 }}>Cheapest mobile solution, ultralight, rapid setup (3 min claimed for ROFLEXS)</td><td style={{ fontSize: 12 }}>No physical containment barrier, horse escape risk, battery maintenance, not suitable for stallions or panicking horses</td></tr>
            <tr><td>A2</td><td><strong>Static panel box (standard)</strong></td><td style={{ fontSize: 12 }}>Galvanized steel panels connected via chains/pins, no wheels</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>460–1,400 [SRC]</td><td style={{ fontSize: 12 }}>Proven technology, many suppliers, simple design</td><td style={{ fontSize: 12 }}>Not repositionable without full disassembly; no tractor corridor; manual labor for each move</td></tr>
            <tr><td>A3</td><td><strong>Permanent wooden paddock</strong></td><td style={{ fontSize: 12 }}>Timber posts (round/sawn) with rail boards or wire, concreted footings</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>1,500–8,000 [EST]</td><td style={{ fontSize: 12 }}>Aesthetic, strong physical barrier, long life (pressure-treated)</td><td style={{ fontSize: 12 }}>Permanently fixed, building permit may be required, no reconfigurability, splintering risk</td></tr>
            <tr><td>A4</td><td><strong>Permanent pipe/tube fencing</strong></td><td style={{ fontSize: 12 }}>Welded or bolted steel tube rails on concreted steel posts</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>3,000–12,000+ [EST]</td><td style={{ fontSize: 12 }}>Maximum durability, professional appearance</td><td style={{ fontSize: 12 }}>Permanently fixed, groundwork required, high cost, zero mobility</td></tr>
            <tr><td>A5</td><td><strong>ROFLEXS rollup fence</strong></td><td style={{ fontSize: 12 }}>Spring-loaded rollup cassette with tensioned tape, metal posts</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>624–1,438 [SRC]</td><td style={{ fontSize: 12 }}>Fast setup/teardown (claimed 3 min), electric variants available</td><td style={{ fontSize: 12 }}>Single-tape barrier (not physical steel rail), height limited, no containment strength vs. panicking horse</td></tr>
            <tr><td>A6</td><td><strong>DIY pallet/wood enclosure</strong></td><td style={{ fontSize: 12 }}>Recycled pallets, timber offcuts, rope/wire lashing</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>50–300 [EST]</td><td style={{ fontSize: 12 }}>Near-zero cost, available materials</td><td style={{ fontSize: 12 }}>Extremely short life, injury risk (nails, splinters), no load rating, unprofessional appearance</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="comp-p-dimensions" title="Paddockbox — Competitive Dimensions" />
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Dimension</th>
                <th>Böhmer (Target)</th>
                <th>Patura Sicherheit</th>
                <th>Kneilmann Mobil</th>
                <th>Hallertauer Panel</th>
                <th>Electric Fence (ROFLEXS)</th>
                <th>Permanent Wood</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Price (single box)</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}>2,000–5,000 [EST]</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>1,366 [SRC]</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>3,149+ [SRC]</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>462–707 [SRC]</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>624–1,438 [SRC]</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>1,500–8,000 [EST]</td>
              </tr>
              <tr>
                <td><strong>Material</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}>S355 SHS, C3+ galv.+powder</td>
                <td style={{ fontSize: 12 }}>Round tube, standard galv.</td>
                <td style={{ fontSize: 12 }}>Round tube, galv./aluminum</td>
                <td style={{ fontSize: 12 }}>Flat-oval tube, galv.</td>
                <td style={{ fontSize: 12 }}>Tape + fiberglass posts</td>
                <td style={{ fontSize: 12 }}>Timber, pressure-treated</td>
              </tr>
              <tr>
                <td><strong>Mobility</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}><strong>Castor-mounted (unique)</strong></td>
                <td style={{ fontSize: 12 }}>Static (disassembly req.)</td>
                <td style={{ fontSize: 12 }}>Wheels (puncture-proof)</td>
                <td style={{ fontSize: 12 }}>Static (disassembly req.)</td>
                <td style={{ fontSize: 12 }}>Carry-in/carry-out</td>
                <td style={{ fontSize: 12 }}>Fixed (permanent)</td>
              </tr>
              <tr>
                <td><strong>Repositioning effort</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}>Push/tractor, 0 disassembly</td>
                <td style={{ fontSize: 12 }}>Full disassemble/reassemble</td>
                <td style={{ fontSize: 12 }}>Roll/tractor, 0 disassembly</td>
                <td style={{ fontSize: 12 }}>Full disassemble/reassemble</td>
                <td style={{ fontSize: 12 }}>~3–10 min rollup/redeploy</td>
                <td style={{ fontSize: 12 }}>Not possible</td>
              </tr>
              <tr>
                <td><strong>Physical barrier strength</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}>800 kg lateral per castor</td>
                <td style={{ fontSize: 12 }}>BMEL-conform</td>
                <td style={{ fontSize: 12 }}>~265–318 kg total [SRC]</td>
                <td style={{ fontSize: 12 }}>Standard panel strength</td>
                <td style={{ fontSize: 12 }}>No physical barrier</td>
                <td style={{ fontSize: 12 }}>High</td>
              </tr>
              <tr>
                <td><strong>Tractor access</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}>Fold-flat posts (unique)</td>
                <td style={{ fontSize: 12 }}>Remove panels</td>
                <td style={{ fontSize: 12 }}>Open one panel section</td>
                <td style={{ fontSize: 12 }}>Remove panels</td>
                <td style={{ fontSize: 12 }}>Walk through tape</td>
                <td style={{ fontSize: 12 }}>Gate required</td>
              </tr>
              <tr>
                <td><strong>Configurability</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}>Modular (square/L/polygon)</td>
                <td style={{ fontSize: 12 }}>Fixed box sizes</td>
                <td style={{ fontSize: 12 }}>Pentagon/hexagon only</td>
                <td style={{ fontSize: 12 }}>Fixed box sizes</td>
                <td style={{ fontSize: 12 }}>Free-form</td>
                <td style={{ fontSize: 12 }}>Fixed layout</td>
              </tr>
              <tr>
                <td><strong>Panel height</strong></td>
                <td style={{ fontSize: 12 }}>1.40–1.60 m</td>
                <td style={{ fontSize: 12 }}>1.70 m</td>
                <td style={{ fontSize: 12 }}>1.50 m</td>
                <td style={{ fontSize: 12 }}>1.70 m</td>
                <td style={{ fontSize: 12 }}>0.98–1.60 m</td>
                <td style={{ fontSize: 12 }}>1.20–1.50 m typical</td>
              </tr>
              <tr>
                <td><strong>Design service life</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}>15 years</td>
                <td style={{ fontSize: 12 }}>10–15 years [EST]</td>
                <td style={{ fontSize: 12 }}>10–15 years [EST]</td>
                <td style={{ fontSize: 12 }}>8–12 years [EST]</td>
                <td style={{ fontSize: 12 }}>3–8 years [EST]</td>
                <td style={{ fontSize: 12 }}>10–20 years [EST]</td>
              </tr>
              <tr>
                <td><strong>CE compliance complexity</strong></td>
                <td style={{ fontSize: 12 }}>High (Machinery Dir.)</td>
                <td style={{ fontSize: 12 }}>Low (static)</td>
                <td style={{ fontSize: 12 }}>Moderate</td>
                <td style={{ fontSize: 12 }}>Low (static)</td>
                <td style={{ fontSize: 12 }}>N/A</td>
                <td style={{ fontSize: 12 }}>N/A</td>
              </tr>
              <tr>
                <td><strong>Customization</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}>Full (OEM, any config)</td>
                <td style={{ fontSize: 12 }}>Standard sizes only</td>
                <td style={{ fontSize: 12 }}>Pentagon/hexagon only</td>
                <td style={{ fontSize: 12 }}>Standard sizes only</td>
                <td style={{ fontSize: 12 }}>Length only</td>
                <td style={{ fontSize: 12 }}>Project-specific</td>
              </tr>
              <tr>
                <td><strong>Wall-hinge mount</strong></td>
                <td style={{ fontSize: 12, color: "var(--accent-yellow)" }}>Yes (unique)</td>
                <td style={{ fontSize: 12 }}>No</td>
                <td style={{ fontSize: 12 }}>No</td>
                <td style={{ fontSize: 12 }}>No</td>
                <td style={{ fontSize: 12 }}>N/A</td>
                <td style={{ fontSize: 12 }}>N/A</td>
              </tr>
              <tr>
                <td><strong>Delivery time</strong></td>
                <td style={{ fontSize: 12 }}>4–8 weeks [EST]</td>
                <td style={{ fontSize: 12 }}>1–4 weeks [EST]</td>
                <td style={{ fontSize: 12 }}>2–4 weeks [EST]</td>
                <td style={{ fontSize: 12 }}>1–2 weeks [EST]</td>
                <td style={{ fontSize: 12 }}>In stock, 1–3 days</td>
                <td style={{ fontSize: 12 }}>2–8 weeks [EST]</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />
        <SectionAnchor id="comp-p-map" title="Paddockbox — Competitive Positioning Map" />
        <pre style={{ fontSize: 12, lineHeight: 1.5, overflowX: "auto", background: "rgba(255,255,255,0.03)", padding: "12px 16px", borderRadius: 4 }}>
{`  Price (EUR, full config)
  ^
  |
  |
  5000|              *** BÖHMER Paddockbox ***
  |              (2,000-5,000 EST)
  |
  4000|                                    Patura 4er Sicherheit
  |                                    (4,258)
  |
  3500|  Patura 3er Sicherheit
  |  (3,495)
  |
  3000|              Kneilmann Mobil
  |              (3,149)
  |
  2500|
  |
  |                              VOSS.farming Set
  2000|                              (2,310)
  |
  |
  1500|              ROFLEXS Premium E     Patura Sicherheit Einzel
  |              (1,404-1,438)          (1,366)
  |
  1000|  Patura Weidepanel Box
  |  (893)
  |
  700 |  Hallertauer Box   Stallbedarf24 Box
  |  (462-707)         (690)
  |
  500 |
  |
  250 |  WEIDEFIX Basic    AKO Paddock Set
  |  (224)             (179)
  |
  +------+------+------+------+------+-------> Mobility / Flexibility
       Fixed    Disassemble  Rollup   Wheeled  Castor-  Castor+
       (perm.)  & reassemble (tape)   (rigid)  mounted  fold-flat`}
        </pre>
        <div className="card" style={{ padding: 16, marginTop: 16, borderLeft: "3px solid var(--accent-yellow)" }}>
          <p style={{ marginBottom: 0, fontSize: 13 }}>
            <strong>Key insight:</strong> Böhmer occupies a <strong>category of one</strong>. No current competitor offers castor-mounted steel panels with fold-flat posts for tractor corridor access. Kneilmann's wheeled paddock is the nearest competitor but uses rigid pentagon/hexagon geometry (not reconfigurable) and has lower lateral load ratings.
          </p>
        </div>

        <hr />
        <SectionAnchor id="comp-cross" title="3. Cross-Product Market Analysis" />

        <h3>3.1 DACH Equestrian Equipment Market — Key Metrics</h3>
        <table>
          <thead><tr><th>Metric</th><th>Value</th><th>Source</th></tr></thead>
          <tbody>
            <tr><td>Horses in Germany</td><td>~1.3 million</td><td>FN Zahlen &amp; Fakten [SRC]</td></tr>
            <tr><td>People with equestrian interest (DE)</td><td>~11.2 million</td><td>FN [SRC]</td></tr>
            <tr><td>Active riders (DE)</td><td>~2.32 million</td><td>FN [SRC]</td></tr>
            <tr><td>Horse operations (Reitställe, Gestüte, Pferdepensionen)</td><td>~10,000–12,000 [EST]</td><td>Industry estimates</td></tr>
            <tr><td>Average hay feeders per operation</td><td>1–3 [EST]</td><td>Based on typical herd sizes</td></tr>
            <tr><td>Average paddock panels per operation</td><td>4–20 [EST]</td><td>Depending on box count</td></tr>
            <tr><td>Market growth driver</td><td>Trend toward Offenstallhaltung, Aktivstall, animal welfare regulations (BMEL Leitlinien)</td><td>Industry trend [SRC]</td></tr>
          </tbody>
        </table>

        <h3>3.2 Distribution Channel Matrix</h3>
        <table>
          <thead><tr><th>Channel</th><th>Heuraufe Relevance</th><th>Paddockbox Relevance</th><th>Key Players</th></tr></thead>
          <tbody>
            <tr><td><strong>BayWa / Raiffeisen</strong> (farm supply)</td><td>High (stocks Patura, Kerbl)</td><td>High (stocks Patura panels)</td><td style={{ fontSize: 12 }}>BayWa AG, Raiffeisen regional, Agravis</td></tr>
            <tr><td><strong>Stallbedarf24.de</strong> (online specialist)</td><td>Very high (widest online range)</td><td>Very high (widest panel range)</td><td style={{ fontSize: 12 }}>Stallbedarf24 GmbH [SRC]</td></tr>
            <tr><td><strong>Hofmeister Pferdesport</strong></td><td>High (curated equestrian selection)</td><td>Moderate</td><td style={{ fontSize: 12 }}>Hofmeister Handel GmbH, Gevelsberg [SRC]</td></tr>
            <tr><td><strong>weidezaun.info</strong> (online)</td><td>Moderate</td><td>High (VOSS.farming panels)</td><td style={{ fontSize: 12 }}>Agri-Versand GmbH</td></tr>
            <tr><td><strong>Agrarzone.at/.de</strong></td><td>Moderate</td><td>Moderate</td><td style={{ fontSize: 12 }}>Agrarzone GmbH (AT/DE)</td></tr>
            <tr><td><strong>Direct-to-customer</strong> (manufacturer)</td><td style={{ color: "var(--status-good)" }}>Strong for premium (Siepmann, Skandwood, meineheuraufe.de)</td><td style={{ color: "var(--status-good)" }}>Strong for custom configs (Kneilmann, Equifarm)</td><td style={{ fontSize: 12 }}>Various manufacturers</td></tr>
            <tr><td><strong>Equestrian trade shows</strong></td><td>Important for demos</td><td>Very important for mobility demo</td><td style={{ fontSize: 12 }}>spoga horse, EQUITANA, Pferd &amp; Jagd</td></tr>
            <tr><td><strong>Amazon.de</strong></td><td>Budget/mid-range only</td><td>Limited (panels too heavy/large)</td><td style={{ fontSize: 12 }}>Third-party sellers</td></tr>
            <tr><td><strong>Kleinanzeigen.de</strong> (used market)</td><td>Active used market</td><td>Active used market</td><td style={{ fontSize: 12 }}>Private sellers, dealers</td></tr>
          </tbody>
        </table>

        <h3>3.3 Switching Cost Assessment</h3>
        <table>
          <thead><tr><th>Product</th><th>Switching Cost</th><th>Rationale</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Heuraufe</strong></td>
              <td><span className="badge badge--neutral">Low to moderate</span></td>
              <td style={{ fontSize: 12 }}>Standalone equipment, no installation integration. Switching = purchase new unit + dispose old. Lock-in only through accessories (hay nets, ground anchors) and familiarity. Price of replacement is the primary barrier.</td>
            </tr>
            <tr>
              <td><strong>Paddockbox</strong></td>
              <td><span className="badge badge--moderate">Moderate</span></td>
              <td style={{ fontSize: 12 }}>Panel systems create mild lock-in through proprietary connectors (Patura chain vs. pin vs. bolt). Switching from static panels to Böhmer castors requires full replacement. Switching from electric fence to steel panels is significant upgrade cost but no technical barrier. Wall-hinge mount creates moderate Böhmer-specific lock-in.</td>
            </tr>
          </tbody>
        </table>

        <h3>3.4 Competitive Threat Assessment</h3>
        <table>
          <thead><tr><th>Threat</th><th>Heuraufe Impact</th><th>Paddockbox Impact</th><th>Mitigation</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Patura price reduction</strong></td>
              <td><span className="badge badge--weak">High</span></td>
              <td><span className="badge badge--weak">High</span></td>
              <td style={{ fontSize: 12 }}>Differentiate on C3+ durability, custom OEM, closed-profile safety</td>
            </tr>
            <tr>
              <td><strong>Kerbl range extension</strong></td>
              <td><span className="badge badge--moderate">Moderate</span></td>
              <td><span className="badge badge--neutral">Low</span></td>
              <td style={{ fontSize: 12 }}>Stay in premium tier where Kerbl is weak</td>
            </tr>
            <tr>
              <td><strong>Chinese/Eastern European import</strong></td>
              <td><span className="badge badge--neutral">Low-moderate</span></td>
              <td><span className="badge badge--neutral">Low</span></td>
              <td style={{ fontSize: 12 }}>Emphasize "Made in Germany", DIN EN ISO 3834-2 welding cert, BMEL conformity</td>
            </tr>
            <tr>
              <td><strong>Plastic/composite alternatives</strong></td>
              <td><span className="badge badge--neutral">Low</span></td>
              <td><span className="badge badge--neutral">Very low</span></td>
              <td style={{ fontSize: 12 }}>Steel structural advantage is permanent in horse-contact applications</td>
            </tr>
            <tr>
              <td><strong>Kneilmann expanding mobile paddock</strong></td>
              <td>N/A</td>
              <td><span className="badge badge--moderate">Moderate</span></td>
              <td style={{ fontSize: 12 }}>Superior castor load rating (800 kg vs. unspecified), fold-flat posts (unique), modular polygon vs. fixed pentagon/hexagon</td>
            </tr>
            <tr>
              <td><strong>DIY/self-build trend</strong></td>
              <td><span className="badge badge--moderate">Moderate</span></td>
              <td><span className="badge badge--neutral">Low</span></td>
              <td style={{ fontSize: 12 }}>Offer competitive pricing for entry-level model; emphasize safety certification</td>
            </tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="comp-positioning" title="4. Summary &amp; Strategic Implications" />

        <h3>Heuraufe — Competitive Position</h3>
        <table>
          <thead><tr><th>Aspect</th><th>Assessment</th></tr></thead>
          <tbody>
            <tr><td><strong>Market entry difficulty</strong></td><td style={{ fontSize: 12 }}>Moderate — crowded market (Patura, Kerbl, GROWI dominate), but differentiation through C3+ corrosion protection, S355 steel, and tractor mobility is defensible</td></tr>
            <tr><td><strong>Price competitiveness</strong></td><td style={{ fontSize: 12 }}>Competitive in premium segment (1,500–2,500 EUR), below Patura Großballenraufe (2,996) and Skandwood (2,035+)</td></tr>
            <tr><td><strong>Key advantages vs. incumbents</strong></td><td style={{ fontSize: 12 }}>(1) Superior corrosion protection (ISO 12944 C3+ vs. standard galvanizing), (2) closed-profile safety tubes, (3) tractor fork compatibility as standard, (4) custom sizing (OEM flexibility)</td></tr>
            <tr><td><strong>Key disadvantages vs. incumbents</strong></td><td style={{ fontSize: 12 }}>(1) No established brand in equestrian market, (2) no existing distribution network (Patura/Kerbl have BayWa/Raiffeisen), (3) longer delivery time (galvanizing outsourced), (4) unknown to equestrian end-customers</td></tr>
            <tr><td><strong>Recommended positioning</strong></td><td><strong>"The 15-year hay rack"</strong> — emphasize lifecycle cost advantage (15-year C3+ life vs. 10-year standard galvanized = lower EUR/year)</td></tr>
          </tbody>
        </table>

        <h3>Paddockbox — Competitive Position</h3>
        <table>
          <thead><tr><th>Aspect</th><th>Assessment</th></tr></thead>
          <tbody>
            <tr><td><strong>Market entry difficulty</strong></td><td style={{ fontSize: 12 }}><strong>Low</strong> — category creation (castor-mounted + fold-flat posts = no direct competitor). Böhmer defines the segment.</td></tr>
            <tr><td><strong>Price competitiveness</strong></td><td style={{ fontSize: 12 }}>Premium but justified — only alternative with true mobility. Static panel boxes are 50–70% cheaper but lack core mobility function.</td></tr>
            <tr><td><strong>Key advantages vs. incumbents</strong></td><td style={{ fontSize: 12 }}>(1) Only castor-mounted steel paddock on market (category of one), (2) fold-flat posts for tractor access (unique), (3) wall-hinge mount option (unique), (4) modular polygon configurability (unique vs. Kneilmann fixed pentagon/hexagon), (5) 800 kg lateral castor load rating (horse-rated)</td></tr>
            <tr><td><strong>Key disadvantages vs. incumbents</strong></td><td style={{ fontSize: 12 }}>(1) Higher cost vs. static panels, (2) CE Machinery Directive compliance burden (hard constraint), (3) no established brand, (4) hinge fatigue must be proven (10,000-cycle test gate), (5) castor-on-soft-ground limitation</td></tr>
            <tr><td><strong>Recommended positioning</strong></td><td><strong>"The paddock that moves with you"</strong> — emphasize zero-disassembly repositioning for Reitställe and Offenställe with changing yard layouts</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="comp-gaps" title="Key Competitive Gaps Böhmer Can Exploit" />
        <table>
          <thead><tr><th>Gap</th><th>Products Affected</th><th>Opportunity</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>No competitor offers C3+ (galv. + powder coat) as standard</strong></td>
              <td>Heuraufe, Paddockbox</td>
              <td style={{ fontSize: 12 }}>Charge premium for guaranteed 15-year outdoor life; most competitors only standard galvanize</td>
            </tr>
            <tr>
              <td><strong>No castor-mounted steel paddock exists</strong></td>
              <td>Paddockbox</td>
              <td style={{ fontSize: 12 }}>Category creation — define the standard before others enter</td>
            </tr>
            <tr>
              <td><strong>No fold-flat tractor-access feature in any paddock panel</strong></td>
              <td>Paddockbox</td>
              <td style={{ fontSize: 12 }}>Patent-worthy feature; solves real daily pain point for Stallbetreiber</td>
            </tr>
            <tr>
              <td><strong>Closed-profile tubes (SHS/RHS) rare in equestrian panels</strong></td>
              <td>Both</td>
              <td style={{ fontSize: 12 }}>Most competitors use open round tube or flat-oval; closed profile = zero horse entrapment risk</td>
            </tr>
            <tr>
              <td><strong>Custom OEM sizing is unavailable from mass-market brands</strong></td>
              <td>Both</td>
              <td style={{ fontSize: 12 }}>Patura/Kerbl only offer standard sizes; Böhmer's manufacturing flexibility enables bespoke configurations</td>
            </tr>
          </tbody>
        </table>

      </article>
    </section>
  );
}
