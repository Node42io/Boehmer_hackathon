/**
 * 03 Product & Market Analysis
 *
 * Merged page consolidating:
 *   - Functional Promise (FP) for Heuraufe + Paddockbox
 *   - Product Decomposition (features, specs, constraints)
 *   - Market context from Competitive.tsx
 *   - Named competitor tables (Heuraufe + Paddockbox)
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

export default function ProductMarketAnalysis() {
  return (
    <section className="container">
      <PageHeader
        kicker="Phase 1 / Product & Market Analysis"
        title="Product & Market Analysis"
        description="Functional promises, product decomposition with features and specifications, UNSPSC classification, market context, and named competitors for Heuraufe and Paddockbox."
      />
      <div className="md">

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 1 — TECHNOLOGY CLASS & OVERVIEW
        ══════════════════════════════════════════════════════════════════════ */}
        <SectionAnchor id="pma-tech" title="Technology Class" />
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>Technology Class</strong></td><td>Welded Structural Steel Fabrication</td></tr>
            <tr><td><strong>Products</strong></td><td>Heuraufe (hay rack), Paddockbox (mobile paddock enclosure)</td></tr>
            <tr><td><strong>NAICS (manufacturing)</strong></td><td><code>333111</code> — Farm Machinery and Equipment Manufacturing</td></tr>
            <tr><td><strong>NAICS (target market)</strong></td><td><code>112920</code> — Horses and Other Equine Production</td></tr>
          </tbody>
        </table>

        <SectionAnchor id="pma-overview" title="Products at a Glance" />
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
        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 2 — HEURAUFE
        ══════════════════════════════════════════════════════════════════════ */}
        <SectionAnchor id="pma-heuraufe" title="Product 1: Heuraufe (Hay Rack / Outdoor Feeding Station)" />

        <h3>Functional Promise</h3>
        <div className="card" style={{ padding: 20, marginBottom: 16 }}>
          <p style={{ fontStyle: "italic", color: "var(--text-white)", fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>
            "Store and deliver hay to multiple horses simultaneously in outdoor paddock environments — with all-side access, weather-protected storage, and elevated ground clearance that reduces contamination and daily labor compared to floor-feeding"
          </p>
          <table>
            <tbody>
              <tr><td><strong>Verb</strong></td><td>Deliver</td></tr>
              <tr><td><strong>Object</strong></td><td>hay to multiple horses simultaneously</td></tr>
              <tr><td><strong>Context</strong></td><td>in outdoor equestrian environments</td></tr>
              <tr>
                <td><strong>Differentiators</strong></td>
                <td>
                  <ul style={{ margin: 0, paddingLeft: 16 }}>
                    <li>all-side access (prevents feed dominance / Futterneid)</li>
                    <li>weather-protected hay bay (roof section)</li>
                    <li>elevated ground clearance (reduces urine/mud contamination)</li>
                    <li>tractor-movable (no manual repositioning)</li>
                    <li>15-year outdoor service life</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <blockquote>
          <strong>Mechanism-free check:</strong> No reference to steel, welding, laser cutting, or galvanizing. Swap test passes — a timber, aluminium, or GRP structure could fulfill the same statement. ✓
        </blockquote>

        <h3>UNSPSC Classification</h3>
        <table>
          <thead><tr><th>Field</th><th>Value</th><th>Confidence</th></tr></thead>
          <tbody>
            <tr><td><strong>UNSPSC Segment</strong></td><td>22 — Agricultural and Forestry Equipment</td><td>high</td></tr>
            <tr><td><strong>UNSPSC Class</strong></td><td>22111500 — Livestock handling and treatment equipment</td><td>high</td></tr>
            <tr><td><strong>UNSPSC Commodity</strong></td><td>22111509 — Hay feeders / racks / mangers</td><td>~85% [ASM]</td></tr>
          </tbody>
        </table>
        <blockquote>
          No exact 8-digit commodity catalog available for verification; 22111509 is the best structural fit. Custom group "Equestrian Hay Feeding Equipment" as fallback.
        </blockquote>

        <h3>VN / BOM Position</h3>
        <table>
          <thead><tr><th>Value Network</th><th>BOM Level</th><th>Role</th></tr></thead>
          <tbody>
            <tr><td>Manufacturing VN (NAICS 333111): L1 OEM finished good</td><td>L1 — Finished product</td><td>Not a component; standalone equipment unit</td></tr>
            <tr><td>End-beneficiary VN (NAICS 112920): L1 infrastructure asset</td><td>L1 — Installed asset</td><td>No integration into a larger product assembly</td></tr>
          </tbody>
        </table>

        <h3>Required Complements</h3>
        <table>
          <thead><tr><th>Complement</th><th>Criticality</th><th>Rationale</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Hot-dip galvanizing + powder coating (outsourced)</strong></td>
              <td><span className="badge badge--weak">Essential</span></td>
              <td>Without C3+ corrosion protection the product cannot be sold into DACH outdoor market; no in-house capability</td>
            </tr>
            <tr>
              <td><strong>Hay net or hay net ring insert</strong></td>
              <td><span className="badge badge--moderate">Enhancing</span></td>
              <td>Completes the feeding function; prevents large hay waste; often sold as accessory</td>
            </tr>
            <tr>
              <td><strong>Level, firm ground surface</strong></td>
              <td><span className="badge badge--moderate">Enhancing</span></td>
              <td>Required for stable placement; hard standing preferred</td>
            </tr>
            <tr>
              <td><strong>Tractor with front loader</strong></td>
              <td><span className="badge badge--neutral">Optional</span></td>
              <td>Enables repositioning; most Reitställe already own one</td>
            </tr>
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
              <td style={{ fontSize: 12 }}>Horizontal or angled bar-grid (or integrated hay-net frame) spans the hay bay opening. Horses pull hay through the bars, slowing feed rate to match natural grazing pace. Reduces waste 20–40% vs. open floor feeding. Bar spacing sized to prevent leg/head entrapment: typically 6–8 cm clear.</td>
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
          </tbody>
        </table>

        <hr />
        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 3 — PADDOCKBOX
        ══════════════════════════════════════════════════════════════════════ */}
        <SectionAnchor id="pma-paddockbox" title="Product 2: Paddockbox (Mobile Horse Paddock Enclosure)" />

        <h3>Functional Promise</h3>
        <div className="card" style={{ padding: 20, marginBottom: 16 }}>
          <p style={{ fontStyle: "italic", color: "var(--text-white)", fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>
            "Partition and manage outdoor paddock or stable space around horses — with modular reconfigurability, castor-mounted repositionability, and fold-flat post clearance that enables efficient stable operations without fixed construction"
          </p>
          <table>
            <tbody>
              <tr><td><strong>Verb</strong></td><td>Partition</td></tr>
              <tr><td><strong>Object</strong></td><td>outdoor paddock or stable space for equine management</td></tr>
              <tr><td><strong>Context</strong></td><td>in outdoor equestrian and stable environments</td></tr>
              <tr>
                <td><strong>Differentiators</strong></td>
                <td>
                  <ul style={{ margin: 0, paddingLeft: 16 }}>
                    <li>modular layout (reconfigures to any paddock geometry)</li>
                    <li>castor-mounted mobility (reposition without disassembly or tools)</li>
                    <li>fold-flat / removable posts (tractor can pass without obstruction)</li>
                    <li>wall-hinge mount option (saves floor space)</li>
                    <li>no groundwork, foundation, or permanent installation required</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <blockquote>
          <strong>Mechanism-free check:</strong> No reference to steel, welding, castors as mechanisms, or galvanizing. Swap test passes — a heavy-duty plastic-panel or aluminium-frame system could fulfill the same statement. ✓
        </blockquote>

        <h3>VN / BOM Position</h3>
        <table>
          <thead><tr><th>Value Network</th><th>BOM Level</th><th>Role</th></tr></thead>
          <tbody>
            <tr><td>Manufacturing VN (NAICS 333111): L1 OEM finished good</td><td>L1 — Finished product</td><td>Modular system (multiple panels = one installation unit)</td></tr>
            <tr><td>End-beneficiary VN (NAICS 112920): L1 infrastructure asset</td><td>L1 — Installed asset</td><td>Each panel is a sub-unit; the configured set is the deliverable</td></tr>
          </tbody>
        </table>

        <h3>Required Complements</h3>
        <table>
          <thead><tr><th>Complement</th><th>Criticality</th><th>Rationale</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Hot-dip galvanizing + powder coating (outsourced)</strong></td>
              <td><span className="badge badge--weak">Essential</span></td>
              <td>Same outdoor corrosion requirement as Heuraufe</td>
            </tr>
            <tr>
              <td><strong>Wheel brakes rated ≥800 kg lateral load</strong></td>
              <td><span className="badge badge--weak">Essential</span></td>
              <td>Safety requirement under horse contact load; drives CE compliance</td>
            </tr>
            <tr>
              <td><strong>Wall-hinge anchor hardware</strong></td>
              <td><span className="badge badge--weak">Essential (wall-mount variant only)</span></td>
              <td>Required for wall-mounted installation option</td>
            </tr>
            <tr>
              <td><strong>Hard-standing floor surface</strong></td>
              <td><span className="badge badge--moderate">Enhancing</span></td>
              <td>Wheel stability; soft ground causes settling and misalignment</td>
            </tr>
            <tr>
              <td><strong>Tractor (for initial placement)</strong></td>
              <td><span className="badge badge--neutral">Optional</span></td>
              <td>Useful for moving large segment sets; not required for daily use</td>
            </tr>
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
              <td><strong>CE / Machinery Directive Compliance</strong></td>
              <td><span className="badge badge--neutral">regulatory</span></td>
              <td><span className="badge badge--weak">hard</span></td>
              <td style={{ fontSize: 12 }}>Wheeled structure with moving parts (castors, hinges) requires Machinery Directive 2006/42/EC risk assessment: tip-over stability, wheel brake adequacy, hinge load rating. Technical file + CE marking required before DACH market launch.</td>
            </tr>
          </tbody>
        </table>

        <hr />
        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 4 — MARKET CONTEXT
        ══════════════════════════════════════════════════════════════════════ */}
        <SectionAnchor id="pma-market" title="Market Context — DACH Equestrian Market" />
        <table>
          <thead><tr><th>Product</th><th>Category</th><th>Incumbent Count</th><th>Price Tier (Böhmer)</th><th>Switching Cost</th></tr></thead>
          <tbody>
            <tr><td><strong>Heuraufe</strong></td><td>Outdoor Multi-Horse Hay Feeder Stations</td><td>10 named competitors + alternatives</td><td>Premium [EST]</td><td>low–moderate</td></tr>
            <tr><td><strong>Paddockbox</strong></td><td>Mobile Modular Steel Paddock Enclosures</td><td>8 named competitors + alternatives</td><td>Premium [EST]</td><td>moderate</td></tr>
          </tbody>
        </table>

        <h3>Key Market Metrics</h3>
        <table>
          <thead><tr><th>Metric</th><th>Value</th><th>Source</th></tr></thead>
          <tbody>
            <tr><td>Horses in Germany</td><td>~1.3 million</td><td>FN Zahlen &amp; Fakten [SRC]</td></tr>
            <tr><td>People with equestrian interest (DE)</td><td>~11.2 million</td><td>FN [SRC]</td></tr>
            <tr><td>Active riders (DE)</td><td>~2.32 million</td><td>FN [SRC]</td></tr>
            <tr><td>Horse operations (Reitställe, Gestüte, Pferdepensionen)</td><td>~10,000–12,000 [EST]</td><td>Industry estimates</td></tr>
            <tr><td>Market growth driver</td><td>Offenstallhaltung, Aktivstall, animal welfare regulations (BMEL Leitlinien)</td><td>Industry trend [SRC]</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 13, lineHeight: 1.7 }}>
          Germany has ~1.3 million horses (FN Zahlen &amp; Fakten) and ~11.2 million people with interest in equestrian sports. The equestrian equipment market is fragmented, dominated by agricultural supply brands (Patura, Kerbl, GROWI) with distribution via farm supply chains (BayWa, Raiffeisen), specialized equestrian retail (Hofmeister, Loesdau), and online platforms.
        </p>

        <hr />
        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 5 — HEURAUFE COMPETITORS
        ══════════════════════════════════════════════════════════════════════ */}
        <SectionAnchor id="pma-h-competitors" title="Heuraufe — Named Competitors (ranked by revenue)" />
        <p style={{ fontSize: 12, color: "var(--text-gray)", marginBottom: 12 }}>
          Sorted by estimated annual revenue descending. Revenue and employee data sourced from company registers, annual reports, and industry estimates [SRC / EST].
        </p>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>#</th><th>Brand</th><th>Country</th><th>Product / Model</th><th>Material</th>
                <th>Price Range (EUR)</th><th>Annual Revenue [EST]</th><th>Employees [EST]</th>
                <th>Key Features</th><th>Distribution</th><th>URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td><td><strong>Kerbl</strong></td><td>DE</td>
                <td style={{ fontSize: 11 }}>Viereckraufe mit Sicherheitsfressgitter + Dach</td>
                <td style={{ fontSize: 11 }}>Hot-dip galvanized steel</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>1,100–1,750</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>~€250M [SRC]</td>
                <td style={{ fontSize: 11 }}>~500 [SRC]</td>
                <td style={{ fontSize: 11 }}>12 safety feeding places, height-adjustable skids, roof; broad range incl. Hobby line</td>
                <td style={{ fontSize: 11 }}>BayWa, Raiffeisen, Amazon, Stallbedarf24</td>
                <td style={{ fontSize: 11 }}><a href="https://www.kerbl.de" target="_blank" rel="noopener noreferrer">kerbl.de</a></td>
              </tr>
              <tr>
                <td>2</td><td><strong>GROWI</strong> (Grossewinkelmann)</td><td>DE</td>
                <td style={{ fontSize: 11 }}>Heuraufe Kompakt mit Dach</td>
                <td style={{ fontSize: 11 }}>Galvanized steel</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>1,447–1,499</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>n/a [private]</td>
                <td style={{ fontSize: 11 }}>~180–200 [SRC]</td>
                <td style={{ fontSize: 11 }}>8 feeding places, 150x150 cm, roof with edge protection bumpers; also fence systems</td>
                <td style={{ fontSize: 11 }}>Stallbedarf24, Haas Pferdesport, direct</td>
                <td style={{ fontSize: 11 }}><a href="https://www.growi.de" target="_blank" rel="noopener noreferrer">growi.de</a></td>
              </tr>
              <tr>
                <td>3</td><td><strong>Kellfri</strong></td><td>SE</td>
                <td style={{ fontSize: 11 }}>Heuraufe mit Dach und geschlossenen Palisaden</td>
                <td style={{ fontSize: 11 }}>Hot-dip galvanized steel</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>1,890 (excl. VAT)</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>~€28M [SRC]</td>
                <td style={{ fontSize: 11 }}>~46–55 [SRC]</td>
                <td style={{ fontSize: 11 }}>Roof + closed palisade elements, Swedish import, budget-premium; broad agri range</td>
                <td style={{ fontSize: 11 }}>farmtec-online.de, direct import</td>
                <td style={{ fontSize: 11 }}><a href="https://www.kellfri.com" target="_blank" rel="noopener noreferrer">kellfri.com</a></td>
              </tr>
              <tr>
                <td>4</td><td><strong>Patura</strong></td><td>DE</td>
                <td style={{ fontSize: 11 }}>Profi-Viereckraufe / Compact-Raufe range</td>
                <td style={{ fontSize: 11 }}>Galvanized steel, massive full-steel</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>1,257–3,109</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>~€14M [SRC]</td>
                <td style={{ fontSize: 11 }}>~120 [SRC]</td>
                <td style={{ fontSize: 11 }}>12–16 safety feeding places, BMEL-conform, height-adjustable roof, large bale compatible</td>
                <td style={{ fontSize: 11 }}>BayWa, Raiffeisen, Stallbedarf24, direct</td>
                <td style={{ fontSize: 11 }}><a href="https://www.patura.com" target="_blank" rel="noopener noreferrer">patura.com</a></td>
              </tr>
              <tr>
                <td>5</td><td><strong>Rutjes Pferdeboxen</strong></td><td>NL</td>
                <td style={{ fontSize: 11 }}>Heuraufe mit Dach 200x200 cm</td>
                <td style={{ fontSize: 11 }}>Hot-dip galvanized steel</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>1,750 (reduced from 1,885)</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>~€1M [SRC]</td>
                <td style={{ fontSize: 11 }}>11 [SRC]</td>
                <td style={{ fontSize: 11 }}>3-point hitch for tractor, adjustable roof/feet, 2 fillable sides</td>
                <td style={{ fontSize: 11 }}>rutjespferdeboxen.de direct</td>
                <td style={{ fontSize: 11 }}><a href="https://www.rutjespferdeboxen.de" target="_blank" rel="noopener noreferrer">rutjespferdeboxen.de</a></td>
              </tr>
              <tr>
                <td>6</td><td><strong>Kneilmann</strong></td><td>DE</td>
                <td style={{ fontSize: 11 }}>Rundraufe + Heuraufen series</td>
                <td style={{ fontSize: 11 }}>Galvanized steel</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>3,242+</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>€1–5M [SRC]</td>
                <td style={{ fontSize: 11 }}>50–99 [SRC]</td>
                <td style={{ fontSize: 11 }}>Premium specialty products, direct manufacturer; also mobile paddocks on wheels</td>
                <td style={{ fontSize: 11 }}>Stallbedarf24, direct</td>
                <td style={{ fontSize: 11 }}><a href="https://www.kneilmann.de" target="_blank" rel="noopener noreferrer">kneilmann.de</a></td>
              </tr>
              <tr>
                <td>7</td><td><strong>Siepmann</strong></td><td>DE</td>
                <td style={{ fontSize: 11 }}>Heu-Raufe mit Dach + Netzbügel</td>
                <td style={{ fontSize: 11 }}>Galvanized steel + polycarbonate roof</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>1,069–1,159</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>n/a [EST small]</td>
                <td style={{ fontSize: 11 }}>~5–15 [EST]</td>
                <td style={{ fontSize: 11 }}>180 kg, front-loader accessible, no fixed floor (drainage), screw-together system</td>
                <td style={{ fontSize: 11 }}>siepmann.net direct, equestrian trade</td>
                <td style={{ fontSize: 11 }}><a href="https://www.siepmann.net" target="_blank" rel="noopener noreferrer">siepmann.net</a></td>
              </tr>
              <tr>
                <td>8</td><td><strong>Skandwood</strong></td><td>DE</td>
                <td style={{ fontSize: 11 }}>Futterraufe aus Lärchenholz</td>
                <td style={{ fontSize: 11 }}>Larch wood (Lärchenholz)</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>985–6,540</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>n/a [EST small]</td>
                <td style={{ fontSize: 11 }}>~5–10 [EST]</td>
                <td style={{ fontSize: 11 }}>Premium wood construction, large roof overhang, aesthetic design; Oeversee/Schleswig</td>
                <td style={{ fontSize: 11 }}>aussenbox.de direct, equestrian shows</td>
                <td style={{ fontSize: 11 }}><a href="https://www.aussenbox.de" target="_blank" rel="noopener noreferrer">aussenbox.de</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Heuraufe — Price Segmentation</h3>
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
          <strong>Böhmer positioning [EST]:</strong> Premium segment (1,500–2,500 EUR). Competes directly with Patura Profi, Kerbl Sicherheitsfressgitter, and Rutjes.
        </p>

        <hr />
        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 6 — PADDOCKBOX COMPETITORS
        ══════════════════════════════════════════════════════════════════════ */}
        <SectionAnchor id="pma-p-competitors" title="Paddockbox — Named Competitors (ranked by revenue)" />
        <p style={{ fontSize: 12, color: "var(--text-gray)", marginBottom: 12 }}>
          Sorted by estimated annual revenue descending. Revenue and employee data sourced from company registers, annual reports, and industry estimates [SRC / EST].
        </p>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>#</th><th>Brand</th><th>Country</th><th>Product / Model</th><th>Material</th>
                <th>Price Range (EUR)</th><th>Annual Revenue [EST]</th><th>Employees [EST]</th>
                <th>Key Features</th><th>Distribution</th><th>URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td><td><strong>VOSS.farming</strong></td><td>DE</td>
                <td style={{ fontSize: 11 }}>Weidepanel Sets (6-tube)</td>
                <td style={{ fontSize: 11 }}>Hot-dip galvanized steel tube (6-tube)</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>Panel sets from ~2,310</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>n/a [EST ~€10M]</td>
                <td style={{ fontSize: 11 }}>~100+ [SRC]</td>
                <td style={{ fontSize: 11 }}>Complete box sets (single/2er/3er), chain locks, point-pressure feet; also electric fencing brand</td>
                <td style={{ fontSize: 11 }}>weidezaun.info, Amazon</td>
                <td style={{ fontSize: 11 }}><a href="https://www.voss-farming.de" target="_blank" rel="noopener noreferrer">voss-farming.de</a></td>
              </tr>
              <tr>
                <td>2</td><td><strong>Patura</strong></td><td>DE</td>
                <td style={{ fontSize: 11 }}>Sicherheits-Pferdepanel range (Einzelbox through 4er)</td>
                <td style={{ fontSize: 11 }}>Galvanized round steel tube</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>893–4,346</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>~€14M [SRC]</td>
                <td style={{ fontSize: 11 }}>~120 [SRC]</td>
                <td style={{ fontSize: 11 }}>BMEL-conform tube spacing, 3–4 box configurations, professional stables</td>
                <td style={{ fontSize: 11 }}>BayWa, Raiffeisen, Stallbedarf24</td>
                <td style={{ fontSize: 11 }}><a href="https://www.patura.com" target="_blank" rel="noopener noreferrer">patura.com</a></td>
              </tr>
              <tr>
                <td>3</td><td><strong>Kneilmann</strong></td><td>DE</td>
                <td style={{ fontSize: 11 }}>Mobiler Paddock auf Rädern (pentagon/hexagon)</td>
                <td style={{ fontSize: 11 }}>Galvanized round tube (aluminum frame)</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>3,149 (single); panels 583 each</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>€1–5M [SRC]</td>
                <td style={{ fontSize: 11 }}>50–99 [SRC]</td>
                <td style={{ fontSize: 11 }}>Pentagon (9.55 m dia) / hexagon (11.46 m dia), puncture-proof wheels, ~6 m panels</td>
                <td style={{ fontSize: 11 }}>Stallbedarf24, direct</td>
                <td style={{ fontSize: 11 }}><a href="https://www.kneilmann.de" target="_blank" rel="noopener noreferrer">kneilmann.de</a></td>
              </tr>
              <tr>
                <td>4</td><td><strong>Equifarm</strong></td><td>DE</td>
                <td style={{ fontSize: 11 }}>Weidepanel ausziehbar Modell Pferd</td>
                <td style={{ fontSize: 11 }}>Steel tube, galvanized</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>137–415 per panel</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>n/a [EST small]</td>
                <td style={{ fontSize: 11 }}>~10–25 [EST]</td>
                <td style={{ fontSize: 11 }}>Extendable 2.4–4.0 m, 1.70 m height, with/without gate</td>
                <td style={{ fontSize: 11 }}>equifarm.de direct</td>
                <td style={{ fontSize: 11 }}><a href="https://www.equifarm.de" target="_blank" rel="noopener noreferrer">equifarm.de</a></td>
              </tr>
              <tr>
                <td>5</td><td><strong>Rutjes Pferdeboxen</strong></td><td>NL</td>
                <td style={{ fontSize: 11 }}>Paddock panel systems</td>
                <td style={{ fontSize: 11 }}>Hot-dip galvanized steel</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>varies</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>~€1M [SRC]</td>
                <td style={{ fontSize: 11 }}>11 [SRC]</td>
                <td style={{ fontSize: 11 }}>Full stable system supplier incl. panels, direct manufacturer; Enter, Netherlands</td>
                <td style={{ fontSize: 11 }}>rutjespferdeboxen.de direct</td>
                <td style={{ fontSize: 11 }}><a href="https://www.rutjespferdeboxen.de" target="_blank" rel="noopener noreferrer">rutjespferdeboxen.de</a></td>
              </tr>
              <tr>
                <td>6</td><td><strong>Hallertauer Zaun- und Stalldepot</strong></td><td>DE</td>
                <td style={{ fontSize: 11 }}>Mobile Pferdebox Var. 1</td>
                <td style={{ fontSize: 11 }}>Hot-dip galvanized steel (50x30x1.5 mm flat-oval tube)</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>462–707</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>~€1M [SRC]</td>
                <td style={{ fontSize: 11 }}>~5–10 [SRC]</td>
                <td style={{ fontSize: 11 }}>2.4x2.4 to 4.0x4.0 m sizes, chain connection; Siegenburg, Bavaria</td>
                <td style={{ fontSize: 11 }}>zaun-und-stalldepot.de direct</td>
                <td style={{ fontSize: 11 }}><a href="https://www.zaun-und-stalldepot.de" target="_blank" rel="noopener noreferrer">zaun-und-stalldepot.de</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Paddockbox — Price Segmentation</h3>
        <table>
          <thead><tr><th>Segment</th><th>Price Range (EUR, incl. VAT)</th><th>Representative Products</th><th>Configuration</th></tr></thead>
          <tbody>
            <tr><td><span className="badge badge--neutral">Budget (electric fence)</span></td><td style={{ fontFamily: "var(--font-mono)" }}>180–520</td><td style={{ fontSize: 12 }}>AKO Paddock Set 7x7 m (179), WEIDEFIX Basic (224–518)</td><td style={{ fontSize: 12 }}>Electric tape/band on fiberglass posts, no physical barrier</td></tr>
            <tr><td><span className="badge badge--neutral">Budget (panel)</span></td><td style={{ fontFamily: "var(--font-mono)" }}>460–700</td><td style={{ fontSize: 12 }}>Hallertauer Zaun-Stalldepot box (462–707), Equifarm panels (137–415 each)</td><td style={{ fontSize: 12 }}>4-panel static box, chain connection, basic galvanized</td></tr>
            <tr><td><span className="badge badge--neutral">Mid-range (panel)</span></td><td style={{ fontFamily: "var(--font-mono)" }}>700–1,500</td><td style={{ fontSize: 12 }}>Patura Weidepanel Einzelbox (893), ROFLEXS Premium (874–904)</td><td style={{ fontSize: 12 }}>Better connectors, safety features, rollup systems</td></tr>
            <tr><td><span className="badge badge--moderate">Premium (safety panel)</span></td><td style={{ fontFamily: "var(--font-mono)" }}>1,400–4,500</td><td style={{ fontSize: 12 }}>Patura Sicherheits-Pferdepanel (1,366–4,346), VOSS.farming sets (2,310)</td><td style={{ fontSize: 12 }}>BMEL-conform, round tube, professional grade</td></tr>
            <tr><td><span className="badge badge--accent">Premium (mobile on wheels)</span></td><td style={{ fontFamily: "var(--font-mono)" }}>3,000–6,000+</td><td style={{ fontSize: 12 }}>Kneilmann Mobiler Paddock (3,149+), <strong>Böhmer Paddockbox</strong> [EST]</td><td style={{ fontSize: 12 }}>Wheeled/castor systems, true mobility without disassembly</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>
          <strong>Böhmer positioning [EST]:</strong> Premium-mobile segment (2,000–5,000 EUR for typical 4-panel configurations). The only direct competitor in the "castor-mounted steel enclosure" category is <strong>Kneilmann</strong> (wheeled aluminum/steel). Böhmer adds fold-flat posts, modular polygon geometry, and higher 800 kg lateral load rating.
        </p>

        <hr />
        <SectionAnchor id="pma-summary" title="Product Summary" />
        <table>
          <thead><tr><th>Field</th><th>Heuraufe</th><th>Paddockbox</th></tr></thead>
          <tbody>
            <tr><td><strong>Technology class</strong></td><td>Outdoor Multi-Horse Hay Feeder Stations</td><td>Mobile Modular Steel Tube Paddock Enclosures</td></tr>
            <tr><td><strong>Functional promise (short)</strong></td><td style={{ fontSize: 12 }}>Supply protected hay, eliminate feed competition, natural posture</td><td style={{ fontSize: 12 }}>Enclose horses in repositionable perimeter with tractor access</td></tr>
            <tr><td><strong>UNSPSC result</strong></td><td>custom_product_group</td><td>custom_product_group</td></tr>
            <tr><td><strong>Features (technology)</strong></td><td>5</td><td>4</td></tr>
            <tr><td><strong>Features (vendor)</strong></td><td>1</td><td>2</td></tr>
            <tr><td><strong>Constraints (hard)</strong></td><td>1</td><td>3</td></tr>
            <tr><td><strong>Constraints (soft)</strong></td><td>3</td><td>1</td></tr>
            <tr><td><strong>Estimated price</strong></td><td>1,500–2,500 EUR [EST]</td><td>2,000–5,000 EUR [EST]</td></tr>
            <tr><td><strong>Competitive position</strong></td><td>Premium segment, differentiated by C3+ + tractor mobility</td><td>Category of one — only castor-mounted steel paddock</td></tr>
            <tr><td><strong>Manufacturing NAICS</strong></td><td><code>333111</code></td><td><code>333111</code></td></tr>
            <tr><td><strong>Target market NAICS</strong></td><td><code>112920</code></td><td><code>112920</code></td></tr>
          </tbody>
        </table>

      </div>
    </section>
  );
}
