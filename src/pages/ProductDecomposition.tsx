/**
 * 04 Product Decomposition — Features, specs, constraints, UNSPSC classification per product
 * Source: sections/03_product_decomposition.md
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

export default function ProductDecomposition() {
  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 03 / Product Decomposition"
        title="Product Decomposition"
        description="Functional abstraction, features (with long descriptions), specifications, constraints, and UNSPSC classification for Heuraufe and Paddockbox."
      />
      <div className="md">

        <SectionAnchor id="pd-overview" title="Overview" />
        <p>Two products decomposed. Both are welded structural steel outdoor equestrian equipment for NAICS 112920. Vendor: Böhmer Systemtechnik GmbH.</p>
        <table>
          <thead><tr><th>Product</th><th>Technology Class</th><th>UNSPSC Outcome</th><th>Manufacturing NAICS</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Heuraufe</strong></td>
              <td>Outdoor Multi-Horse Hay Feeder Stations</td>
              <td>custom_product_group (no 8-digit validated)</td>
              <td><code>333111</code></td>
            </tr>
            <tr>
              <td><strong>Paddockbox</strong></td>
              <td>Mobile Modular Steel Tube Paddock Enclosures</td>
              <td>custom_product_group (no 8-digit validated)</td>
              <td><code>333111</code></td>
            </tr>
          </tbody>
        </table>

        <hr />
        {/* ═══════════════════════════════════════════ HEURAUFE ═══════════════════════════════════════════ */}
        <SectionAnchor id="pd-heuraufe" title="Product 1: Heuraufe (Hay Rack / Outdoor Feeding Station)" />

        <h3>Technology Class &amp; Mechanism</h3>
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>technology_class</strong></td><td>Outdoor Multi-Horse Hay Feeder Stations</td></tr>
            <tr><td><strong>underlying_mechanism</strong></td><td style={{ fontSize: 12 }}>Welded closed-profile steel tube frame with pitched roof structure and bar-grid / hay-net retainer; multi-side open access; ground-mounted skid with tractor fork compatibility; no powered components</td></tr>
          </tbody>
        </table>

        <h3>Functional Promise</h3>
        <blockquote>
          <strong>Supply protected hay to multiple horses simultaneously in a ground-mounted outdoor station that eliminates feed competition, reduces waste, and preserves natural head-down eating posture.</strong>
        </blockquote>
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>Verb</strong></td><td>Supply</td></tr>
            <tr><td><strong>Object</strong></td><td>protected hay to multiple horses simultaneously</td></tr>
            <tr><td><strong>Context</strong></td><td>in a ground-mounted outdoor station with multi-side open access</td></tr>
            <tr><td><strong>Differentiator 1</strong></td><td>Roof-protected hay bay prevents contamination from rain/snow (unlike open troughs or floor feeding)</td></tr>
            <tr><td><strong>Differentiator 2</strong></td><td>Multi-side access eliminates Futterneid (feed envy) without physical dividers</td></tr>
            <tr><td><strong>Differentiator 3</strong></td><td>Tractor skid/fork compatibility enables solo repositioning without disassembly</td></tr>
            <tr><td><strong>Differentiator 4</strong></td><td>Bar-grid / hay-net limits pull-through rate, reducing waste 20–40% vs. open feeder</td></tr>
          </tbody>
        </table>

        <h3>Features</h3>
        <table>
          <thead><tr><th>#</th><th>Name</th><th>Description</th><th>Long Description</th><th>Scope</th><th>Category</th></tr></thead>
          <tbody>
            <tr>
              <td>F1</td>
              <td><strong>Multi-Side Open Frame</strong></td>
              <td style={{ fontSize: 12 }}>Open on 3–4 sides; horses access from any direction without crowding</td>
              <td style={{ fontSize: 12 }}>Frame left open on 3–4 sides with no wall panels. Horses approach simultaneously from any direction. Open geometry eliminates Futterneid that arises in single-access feeders. Requires sufficient footprint for simultaneous multi-horse access.</td>
              <td><span className="badge badge--neutral">technology</span></td>
              <td style={{ fontSize: 11, color: "var(--text-gray)" }}>usability</td>
            </tr>
            <tr>
              <td>F2</td>
              <td><strong>Pitched Roof Structure</strong></td>
              <td style={{ fontSize: 12 }}>Steel roof panel over hay bay sheds vertical rain, snow, and UV</td>
              <td style={{ fontSize: 12 }}>Welded tube purlins and ridge beam support corrugated or flat steel roof panels. Protects the hay storage volume from vertical precipitation. Wind-driven rain from open sides is not fully excluded. Roof load must account for DACH 50-year snow load (typically 0.75–2.5 kN/m² depending on altitude).</td>
              <td><span className="badge badge--neutral">technology</span></td>
              <td style={{ fontSize: 11, color: "var(--text-gray)" }}>reliability</td>
            </tr>
            <tr>
              <td>F3</td>
              <td><strong>Hay Net / Bar-Grid Retainer</strong></td>
              <td style={{ fontSize: 12 }}>Bar-grid or net frame limits pull-through rate and mimics natural grazing pace</td>
              <td style={{ fontSize: 12 }}>Horizontal or angled bar-grid (or integrated hay-net frame) spans the hay bay opening. Horses pull hay through the bars, slowing feed rate to match natural grazing pace. Reduces waste 20–40% vs. open floor feeding (per equine nutrition literature). Bar spacing sized to prevent leg/head entrapment: typically 6–8 cm clear.</td>
              <td><span className="badge badge--neutral">technology</span></td>
              <td style={{ fontSize: 11, color: "var(--text-gray)" }}>performance</td>
            </tr>
            <tr>
              <td>F4</td>
              <td><strong>Tractor Fork / Skid Compatibility</strong></td>
              <td style={{ fontSize: 12 }}>Base skids / fork pockets allow front-loader repositioning without disassembly</td>
              <td style={{ fontSize: 12 }}>Base frame includes tractor-fork skids or pockets welded into the bottom chord. Front-loader fork lifts loaded or empty unit and relocates it without disassembly. Enables one-person repositioning — critical for small stable operations. Requires minimum ~1,200 kg tractor lift capacity.</td>
              <td><span className="badge badge--neutral">technology</span></td>
              <td style={{ fontSize: 11, color: "var(--text-gray)" }}>usability</td>
            </tr>
            <tr>
              <td>F5</td>
              <td><strong>Closed-Profile Tube Frame</strong></td>
              <td style={{ fontSize: 12 }}>Hollow RHS/SHS sections — no open edges or sharp cuts in horse contact zone</td>
              <td style={{ fontSize: 12 }}>All structural members use closed rectangular or square hollow sections. No open C-sections or angle iron in horse contact zone. Weld seams ground flush where horses contact frame. Prevents hoof snagging and leg entrapment.</td>
              <td><span className="badge badge--neutral">technology</span></td>
              <td style={{ fontSize: 11, color: "var(--text-gray)" }}>safety</td>
            </tr>
            <tr>
              <td>F6</td>
              <td><strong>Hot-Dip Galvanized Finish</strong></td>
              <td style={{ fontSize: 12 }}>Feuerverzinkung (ISO 1461) + powder topcoat → ISO 12944 C3+ (outsourced step)</td>
              <td style={{ fontSize: 12 }}>Böhmer-specified outsourced surface treatment: full-unit hot-dip galvanizing to ISO 1461, minimum zinc layer 45–70 µm, followed by powder topcoat for UV and urine acid resistance. Must be applied after all welding is complete. Outsourced step adds 1–2 weeks lead time per batch.</td>
              <td><span className="badge badge--moderate">vendor</span></td>
              <td style={{ fontSize: 11, color: "var(--text-gray)" }}>reliability</td>
            </tr>
          </tbody>
        </table>

        <h3>Specifications</h3>
        <table>
          <thead><tr><th>Name</th><th>Value</th><th>Unit</th><th>Test Condition</th></tr></thead>
          <tbody>
            <tr><td><strong>Base frame tube</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>80 × 80 × 5</td><td>mm SHS</td><td>S355 structural steel, closed profile</td></tr>
            <tr><td><strong>Roof / superstructure tube</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>40 × 40 × 3</td><td>mm SHS</td><td>S235 / S355</td></tr>
            <tr><td><strong>External footprint (typical)</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>2.5 × 1.7</td><td>m</td><td>4–5 horse configuration</td></tr>
            <tr><td><strong>Eave clearance height</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>~2.0</td><td>m</td><td>Ground to eave</td></tr>
            <tr><td><strong>Design service life</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>15</td><td>years</td><td>Outdoor horse contact, C3 environment</td></tr>
            <tr><td><strong>Corrosion protection class</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>C3+</td><td>ISO 12944 class</td><td>Post hot-dip galvanize + powder coat</td></tr>
            <tr><td><strong>Design lateral load</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>500–800</td><td>kg</td><td>Horse push/contact on frame members</td></tr>
          </tbody>
        </table>

        <h3>Constraints</h3>
        <table>
          <thead><tr><th>#</th><th>Name</th><th>Type</th><th>Severity</th><th>Description</th></tr></thead>
          <tbody>
            <tr>
              <td>C1</td>
              <td><strong>Corrosion Protection Outsourcing</strong></td>
              <td><span className="badge badge--neutral">operational</span></td>
              <td><span className="badge badge--moderate">soft</span></td>
              <td style={{ fontSize: 12 }}>No in-house galvanizing. Hot-dip + powder coat are outsourced BOM steps; ~1–2 weeks lead time added. Vendor must be qualified before market launch.</td>
            </tr>
            <tr>
              <td>C2</td>
              <td><strong>Vertical-Only Roof Coverage</strong></td>
              <td><span className="badge badge--neutral">physical</span></td>
              <td><span className="badge badge--moderate">soft</span></td>
              <td style={{ fontSize: 12 }}>Pitched roof covers vertical precipitation. Wind-driven rain from open sides still reaches hay. Full hay protection requires optional side mesh / tarpaulin.</td>
            </tr>
            <tr>
              <td>C3</td>
              <td><strong>Fixed Unit Footprint</strong></td>
              <td><span className="badge badge--neutral">operational</span></td>
              <td><span className="badge badge--moderate">soft</span></td>
              <td style={{ fontSize: 12 }}>One-piece welded construction. Cannot extend or reconfigure without new tooling. Horse capacity fixed at order specification.</td>
            </tr>
            <tr>
              <td>C4</td>
              <td><strong>CE / GPSR Compliance</strong></td>
              <td><span className="badge badge--neutral">regulatory</span></td>
              <td><span className="badge badge--weak">hard</span></td>
              <td style={{ fontSize: 12 }}>Static structure; exempt from Machinery Directive 2006/42/EC. General Product Safety Regulation (GPSR) self-declaration and technical file required before DACH market sale.</td>
            </tr>
            <tr>
              <td>C5</td>
              <td><strong>Steel / Metal Materials Only</strong></td>
              <td><span className="badge badge--neutral">physical</span></td>
              <td><span className="badge badge--moderate">soft</span></td>
              <td style={{ fontSize: 12 }}>Laser/bending/welding scope limited to steel, stainless, aluminum. No composite or polymer structural elements in current capability.</td>
            </tr>
          </tbody>
        </table>

        <h3>UNSPSC Classification (Steps 01d–01e)</h3>
        <table>
          <thead><tr><th>Rank</th><th>Code</th><th>Title</th><th>Confidence</th><th>Reasoning</th></tr></thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><code>21101900</code></td>
              <td>Poultry and livestock equipment (class)</td>
              <td>72%</td>
              <td style={{ fontSize: 12 }}>Best class match for livestock feeding equipment; no 8-digit commodity for outdoor hay feeder stations confirmed in reference set</td>
            </tr>
            <tr>
              <td>2</td>
              <td><code>21102001</code></td>
              <td>Livestock feeders (unvalidated estimate)</td>
              <td>62%</td>
              <td style={{ fontSize: 12 }}>Probable commodity under class 21101900; feeding is the primary function; code unconfirmed without database</td>
            </tr>
            <tr>
              <td>3</td>
              <td><code>27112004</code></td>
              <td>Agricultural shelters (unvalidated)</td>
              <td>30%</td>
              <td style={{ fontSize: 12 }}>Roof structure matches shelter profile; product function is feeding, not shelter — sub-component match only</td>
            </tr>
          </tbody>
        </table>
        <div className="card" style={{ padding: 16, marginBottom: 12 }}>
          <strong>Result:</strong> No code reaches 80% validated confidence → <code>custom_product_group = "Outdoor Multi-Horse Hay Feeder Stations"</code>
        </div>
        <blockquote>
          <strong>Commodity-level Functional Promise (01e):</strong> "Supply forage to livestock at controlled access points that limit waste and support natural feeding behavior"
        </blockquote>

        <hr />
        {/* ═══════════════════════════════════════════ PADDOCKBOX ═══════════════════════════════════════════ */}
        <SectionAnchor id="pd-paddockbox" title="Product 2: Paddockbox (Mobile Horse Paddock Enclosure)" />

        <h3>Technology Class &amp; Mechanism</h3>
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>technology_class</strong></td><td>Mobile Modular Steel Tube Paddock Enclosures</td></tr>
            <tr><td><strong>underlying_mechanism</strong></td><td style={{ fontSize: 12 }}>Welded steel tube panel segments on heavy-duty brake-lockable castors; pinned or flanged inter-panel connectors; fold-flat / removable post hinge joints; configurable polygon perimeter; optional wall-hinge anchor</td></tr>
          </tbody>
        </table>

        <h3>Functional Promise</h3>
        <blockquote>
          <strong>Enclose horses in a repositionable, configurable perimeter that allows tractor access through foldable posts without disassembly, enabling efficient yard management.</strong>
        </blockquote>
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>Verb</strong></td><td>Enclose</td></tr>
            <tr><td><strong>Object</strong></td><td>horses in a configurable outdoor perimeter</td></tr>
            <tr><td><strong>Context</strong></td><td>on lockable castors with fold-flat posts for tractor corridor access</td></tr>
            <tr><td><strong>Differentiator 1</strong></td><td>Castor-mounted: full assembled enclosure repositioned by tractor or manually, no dismantling</td></tr>
            <tr><td><strong>Differentiator 2</strong></td><td>Hinge / removable posts: tractor-width corridor opens without removing panels</td></tr>
            <tr><td><strong>Differentiator 3</strong></td><td>Modular panel segments: perimeter size and shape adjusted by adding / removing panels</td></tr>
            <tr><td><strong>Differentiator 4</strong></td><td>Wall-hinge mounting option: stable wall as anchor eliminates one full panel side</td></tr>
          </tbody>
        </table>

        <h3>Features</h3>
        <table>
          <thead><tr><th>#</th><th>Name</th><th>Description</th><th>Long Description</th><th>Scope</th><th>Category</th></tr></thead>
          <tbody>
            <tr>
              <td>F1</td>
              <td><strong>Castor-Mounted Panel Segments</strong></td>
              <td style={{ fontSize: 12 }}>Heavy-duty lockable castors per segment enable repositioning of assembled enclosure</td>
              <td style={{ fontSize: 12 }}>Each panel segment is fitted with two or more heavy-duty swivel castors with load-rated foot brakes. Brakes lock in operating position; released for repositioning. Enclosure can be pushed or tractor-assisted across yard surfaces without dismantling. Castors must be rated ≥400 kg per unit; four castors per panel yields ≥1,600 kg lateral resistance per panel.</td>
              <td><span className="badge badge--neutral">technology</span></td>
              <td style={{ fontSize: 11, color: "var(--text-gray)" }}>usability</td>
            </tr>
            <tr>
              <td>F2</td>
              <td><strong>Fold-Flat / Removable Post System</strong></td>
              <td style={{ fontSize: 12 }}>Welded hinge joints allow posts to fold flat parallel to rail, opening tractor-width corridor</td>
              <td style={{ fontSize: 12 }}>Vertical posts connect to the rail frame via a fatigue-rated welded hinge joint. In folded position, post lies parallel to the lower rail, creating a flat corridor passable by a standard compact tractor (width ~1.5–1.8 m). Post locks upright via pin or latch. Hinge weld root is the primary fatigue point and must meet 10,000-cycle test protocol per DIN EN ISO 3834-2 scope.</td>
              <td><span className="badge badge--neutral">technology</span></td>
              <td style={{ fontSize: 11, color: "var(--text-gray)" }}>usability</td>
            </tr>
            <tr>
              <td>F3</td>
              <td><strong>Modular Segment Configurability</strong></td>
              <td style={{ fontSize: 12 }}>Pinned / flanged end-plate connectors enable square, rectangular, L-shaped, or custom polygon configurations</td>
              <td style={{ fontSize: 12 }}>Segments connect via standardized pinned or flanged end-plate joints. Configuration changes in the field by adding or removing panels. Enables different enclosure geometries per stable layout. High segment reuse ratio: same panel SKU serves multiple configurations, simplifying inventory management.</td>
              <td><span className="badge badge--neutral">technology</span></td>
              <td style={{ fontSize: 11, color: "var(--text-gray)" }}>usability</td>
            </tr>
            <tr>
              <td>F4</td>
              <td><strong>Closed-Tube Rail Construction</strong></td>
              <td style={{ fontSize: 12 }}>RHS / CHS profiles throughout — no open edges or cut faces in horse contact zone</td>
              <td style={{ fontSize: 12 }}>All rails and posts use closed hollow sections. No open C-sections or sharp cut edges within the horse perimeter. Eliminates risk of leg laceration or entrapment. Minimum 2-rail design at 1.40 m height; 3-rail at 1.60 m recommended for horses over 160 cm at withers.</td>
              <td><span className="badge badge--neutral">technology</span></td>
              <td style={{ fontSize: 11, color: "var(--text-gray)" }}>safety</td>
            </tr>
            <tr>
              <td>F5</td>
              <td><strong>Wall-Hinge Mounting Option</strong></td>
              <td style={{ fontSize: 12 }}>Böhmer-specific: one end pins to wall hinge plate, eliminating one full panel side</td>
              <td style={{ fontSize: 12 }}>A welded steel hinge plate is bolted to the stable wall. One panel end is pinned to this wall hinge, allowing the panel to swing open/closed around the wall anchor. Eliminates one full panel side from the enclosure perimeter, reducing material cost. Wall anchor must be rated for horse lateral load (≥800 kg) and bolted to structural masonry or steel element.</td>
              <td><span className="badge badge--moderate">vendor</span></td>
              <td style={{ fontSize: 11, color: "var(--text-gray)" }}>integration</td>
            </tr>
            <tr>
              <td>F6</td>
              <td><strong>Hot-Dip Galvanized Finish</strong></td>
              <td style={{ fontSize: 12 }}>Full-unit Feuerverzinkung (ISO 1461) + powder topcoat; castor sockets protected during galvanizing</td>
              <td style={{ fontSize: 12 }}>Same C3+ corrosion path as Heuraufe. Castor socket threads must be masked or protected during galvanizing process (zinc can seize threaded inserts). Powder topcoat applied after galvanizing for UV and urine acid resistance.</td>
              <td><span className="badge badge--moderate">vendor</span></td>
              <td style={{ fontSize: 11, color: "var(--text-gray)" }}>reliability</td>
            </tr>
          </tbody>
        </table>

        <h3>Specifications</h3>
        <table>
          <thead><tr><th>Name</th><th>Value</th><th>Unit</th><th>Test Condition</th></tr></thead>
          <tbody>
            <tr><td><strong>Rail tube</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>60 × 60 × 4</td><td>mm SHS</td><td>S355, closed profile</td></tr>
            <tr><td><strong>Post tube</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>80 × 80 × 3</td><td>mm SHS</td><td>S355</td></tr>
            <tr><td><strong>Panel height (2-rail)</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>1.40</td><td>m</td><td>Standard option</td></tr>
            <tr><td><strong>Panel height (3-rail)</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>1.60</td><td>m</td><td>Recommended for horses &gt; 160 cm withers</td></tr>
            <tr><td><strong>Standard segment length</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>3.0</td><td>m</td><td>Per panel, one-piece welded</td></tr>
            <tr><td><strong>Castor brake load rating</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>≥ 800</td><td>kg lateral</td><td>Per castor brake, locked operating position</td></tr>
            <tr><td><strong>Hinge fatigue test target</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>10,000</td><td>cycles</td><td>Fold / unfold + 800 kg lateral load</td></tr>
            <tr><td><strong>Design service life</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>15</td><td>years</td><td>Outdoor horse contact, C3 environment</td></tr>
            <tr><td><strong>Corrosion protection class</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>C3+</td><td>ISO 12944 class</td><td>Post hot-dip galvanize + powder coat</td></tr>
          </tbody>
        </table>

        <h3>Constraints</h3>
        <table>
          <thead><tr><th>#</th><th>Name</th><th>Type</th><th>Severity</th><th>Description</th></tr></thead>
          <tbody>
            <tr>
              <td>C1</td>
              <td><strong>Hinge Joint Fatigue</strong></td>
              <td><span className="badge badge--neutral">physical</span></td>
              <td><span className="badge badge--weak">hard</span></td>
              <td style={{ fontSize: 12 }}>Fold-flat hinge weld root accumulates fatigue stress under repeated fold cycles + horse lateral load. 10,000-cycle prototype test per DIN EN ISO 3834-2 scope is mandatory before series production.</td>
            </tr>
            <tr>
              <td>C2</td>
              <td><strong>Castor Brake Load Adequacy</strong></td>
              <td><span className="badge badge--neutral">physical</span></td>
              <td><span className="badge badge--weak">hard</span></td>
              <td style={{ fontSize: 12 }}>Each castor must resist 500–800 kg sustained lateral horse pressure. Standard light-industrial castors (100–200 kg rating) are insufficient. Heavy-duty brake castors must be specified and tested.</td>
            </tr>
            <tr>
              <td>C3</td>
              <td><strong>Corrosion Protection Outsourcing</strong></td>
              <td><span className="badge badge--neutral">operational</span></td>
              <td><span className="badge badge--moderate">soft</span></td>
              <td style={{ fontSize: 12 }}>Same outsourced galvanizing step as Heuraufe. Additional complexity: castor socket threads must be masked during galvanizing to preserve thread integrity.</td>
            </tr>
            <tr>
              <td>C4</td>
              <td><strong>No Weather Protection</strong></td>
              <td><span className="badge badge--neutral">physical</span></td>
              <td><span className="badge badge--moderate">soft</span></td>
              <td style={{ fontSize: 12 }}>Open-air perimeter provides containment only — no shelter from precipitation, wind, or sun. Cannot substitute for enclosed housing; horses require separate run-in access.</td>
            </tr>
            <tr>
              <td>C5</td>
              <td><strong>CE / Machinery Directive Compliance</strong></td>
              <td><span className="badge badge--neutral">regulatory</span></td>
              <td><span className="badge badge--weak">hard</span></td>
              <td style={{ fontSize: 12 }}>Wheeled structure with moving parts (castors, hinges) requires Machinery Directive 2006/42/EC risk assessment: tip-over stability, wheel brake adequacy, hinge load rating. Technical file + CE marking required before DACH market launch. Higher compliance burden than Heuraufe.</td>
            </tr>
            <tr>
              <td>C6</td>
              <td><strong>Steel / Metal Materials Only</strong></td>
              <td><span className="badge badge--neutral">physical</span></td>
              <td><span className="badge badge--moderate">soft</span></td>
              <td style={{ fontSize: 12 }}>Same scope constraint as Heuraufe.</td>
            </tr>
          </tbody>
        </table>

        <h3>UNSPSC Classification (Steps 01d–01e)</h3>
        <table>
          <thead><tr><th>Rank</th><th>Code</th><th>Title</th><th>Confidence</th><th>Reasoning</th></tr></thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><code>21101900</code></td>
              <td>Poultry and livestock equipment (class)</td>
              <td>65%</td>
              <td style={{ fontSize: 12 }}>Class-level match for livestock containment; no 8-digit commodity for mobile horse paddock enclosures confirmed in reference set</td>
            </tr>
            <tr>
              <td>2</td>
              <td><code>30171500</code></td>
              <td>Fencing and enclosures (class level)</td>
              <td>45%</td>
              <td style={{ fontSize: 12 }}>Matches enclosure function; Segment 30 covers structural components but class addresses fixed fencing, not mobile animal containment</td>
            </tr>
            <tr>
              <td>3</td>
              <td><code>21102300</code></td>
              <td>Animal handling equipment (unvalidated)</td>
              <td>38%</td>
              <td style={{ fontSize: 12 }}>Captures mobility / management aspect; "handling" typically means chutes / squeeze cages, not paddock perimeters</td>
            </tr>
          </tbody>
        </table>
        <div className="card" style={{ padding: 16, marginBottom: 12 }}>
          <strong>Result:</strong> No code reaches 80% validated confidence → <code>custom_product_group = "Mobile Modular Horse Paddock Enclosures"</code>
        </div>
        <blockquote>
          <strong>Commodity-level Functional Promise (01e):</strong> "Contain livestock in a repositionable perimeter that can be reconfigured and relocated without permanent ground fixtures"
        </blockquote>

        <hr />
        <SectionAnchor id="pd-summary" title="Summary" />
        <table>
          <thead><tr><th>Field</th><th>Heuraufe</th><th>Paddockbox</th></tr></thead>
          <tbody>
            <tr><td><strong>Technology class</strong></td><td>Outdoor Multi-Horse Hay Feeder Stations</td><td>Mobile Modular Steel Tube Paddock Enclosures</td></tr>
            <tr><td><strong>Functional promise</strong></td><td style={{ fontSize: 12 }}>Supply protected hay, eliminate feed competition, natural posture</td><td style={{ fontSize: 12 }}>Enclose horses in repositionable perimeter with tractor access</td></tr>
            <tr><td><strong>UNSPSC result</strong></td><td>custom_product_group</td><td>custom_product_group</td></tr>
            <tr><td><strong>Features (technology)</strong></td><td>5</td><td>4</td></tr>
            <tr><td><strong>Features (vendor)</strong></td><td>1</td><td>2</td></tr>
            <tr><td><strong>Constraints (hard)</strong></td><td>1</td><td>3</td></tr>
            <tr><td><strong>Constraints (soft)</strong></td><td>4</td><td>3</td></tr>
            <tr><td><strong>Critical design gates</strong></td><td>CE/GPSR technical file</td><td>Hinge fatigue test + castor brake spec</td></tr>
            <tr><td><strong>Manufacturing NAICS</strong></td><td><code>333111</code></td><td><code>333111</code></td></tr>
            <tr><td><strong>Target market NAICS</strong></td><td><code>112920</code></td><td><code>112920</code></td></tr>
          </tbody>
        </table>

      </div>
    </section>
  );
}
