/**
 * 03 Functional Promise — Two-level FP for both products
 * Source: sections/02_functional_promise.md
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

export default function FunctionalPromise() {
  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 02 / Functional Promise"
        title="Functional Promise"
        description="Mechanism-free functional promises for both products at product and commodity level, including UNSPSC classification, VN/BOM position, and required complements."
      />
      <div className="md">

        <SectionAnchor id="fp-tech" title="Technology Class" />
        <table>
          <thead><tr><th>Field</th><th>Value</th><th>Source</th></tr></thead>
          <tbody>
            <tr><td><strong>Technology Class</strong></td><td>Welded Structural Steel Fabrication</td><td>01_capability_assessment.md</td></tr>
            <tr><td><strong>Products</strong></td><td>Heuraufe (hay rack), Paddockbox (mobile paddock enclosure)</td><td>capability brief</td></tr>
            <tr><td><strong>NAICS (manufacturing)</strong></td><td><code>333111</code> — Farm Machinery and Equipment Manufacturing</td><td>INSTRUCTIONS.md</td></tr>
            <tr><td><strong>NAICS (target market)</strong></td><td><code>112920</code> — Horses and Other Equine Production</td><td>INSTRUCTIONS.md</td></tr>
          </tbody>
        </table>

        <hr />
        {/* ═══════════════════════════════════════════ HEURAUFE ═══════════════════════════════════════════ */}
        <SectionAnchor id="fp-heuraufe" title="Product 1: Heuraufe (Hay Rack)" />

        <h3>Step 01 — Underlying Mechanism</h3>
        <p>
          Welded carbon steel (S355) tube-frame structure — laser-cut and CNC-bent rectangular hollow sections (RHS), joined by certified MIG/MAG welding (DIN EN ISO 3834-2) — assembled into an inclined hay-net cradle with pitched roof section and open-perimeter access frame; outsourced hot-dip galvanizing + powder topcoat for outdoor corrosion protection.
        </p>

        <h3>Step 02 — Product Functional Promise</h3>
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

        <h3>Step 03 — UNSPSC Classification</h3>
        <table>
          <thead><tr><th>Field</th><th>Value</th><th>Confidence</th></tr></thead>
          <tbody>
            <tr><td><strong>UNSPSC Segment</strong></td><td>22 — Agricultural and Forestry Equipment</td><td>high</td></tr>
            <tr><td><strong>UNSPSC Class</strong></td><td>22111500 — Livestock handling and treatment equipment</td><td>high</td></tr>
            <tr><td><strong>UNSPSC Commodity</strong></td><td>22111509 — Hay feeders / racks / mangers</td><td>~85% [ASM]</td></tr>
          </tbody>
        </table>
        <blockquote>
          No exact 8-digit commodity catalog available for verification; 22111509 is the best structural fit. Treat as ~85% confidence; custom group "Equestrian Hay Feeding Equipment" as fallback if rejected at validation.
        </blockquote>

        <h3>Step 04 — Commodity Functional Promise</h3>
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>Commodity / Group</strong></td><td>UNSPSC 22111509 — Hay feeders, racks, and mangers</td></tr>
            <tr><td><strong>Functional Promise</strong></td><td>Store and dispense roughage for multiple livestock simultaneously in outdoor agricultural environments</td></tr>
            <tr><td><strong>Reasoning</strong></td><td>Any hay feeder — regardless of material or form factor — performs this one function: hold forage off the ground and accessible to animals. No vendor differentiators included.</td></tr>
          </tbody>
        </table>

        <h3>Step 04a — FP Extension</h3>
        <p>
          No FP Extension warranted. The commodity (hay feeder/rack) is narrowly defined and the underlying manufacturing capability (welded steel structures) is broader, but the <em>product itself</em> does not have cross-domain applications beyond equestrian/livestock feeding. No secondary search query required. [ASM]
        </p>

        <h3>Step 05 — VN / BOM Position</h3>
        <table>
          <thead><tr><th>Value Network</th><th>BOM Level</th><th>Role</th></tr></thead>
          <tbody>
            <tr><td>Manufacturing VN (NAICS 333111): L1 OEM finished good</td><td>L1 — Finished product</td><td>Not a component; standalone equipment unit</td></tr>
            <tr><td>End-beneficiary VN (NAICS 112920): L1 infrastructure asset</td><td>L1 — Installed asset</td><td>No integration into a larger product assembly</td></tr>
          </tbody>
        </table>

        <h3>Step 06 — Required Complements</h3>
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

        <hr />
        {/* ═══════════════════════════════════════════ PADDOCKBOX ═══════════════════════════════════════════ */}
        <SectionAnchor id="fp-paddockbox" title="Product 2: Paddockbox (Mobile Paddock Enclosure)" />

        <h3>Step 01 — Underlying Mechanism</h3>
        <p>
          Welded carbon steel (S355) rectangular hollow section (RHS) tube-frame modular panels on heavy-duty industrial castors with wheel brakes (rated 800 kg lateral load); hinged and removable post connections at panel joints; certified MIG/MAG welding (DIN EN ISO 3834-2) with fatigue-rated hinge joints; outsourced hot-dip galvanizing + powder topcoat. Wall-hinge mounting brackets for fixed-position variant.
        </p>

        <h3>Step 02 — Product Functional Promise</h3>
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

        <h3>Step 03 — UNSPSC Classification</h3>
        <table>
          <thead><tr><th>Field</th><th>Value</th><th>Confidence</th></tr></thead>
          <tbody>
            <tr><td><strong>UNSPSC Segment</strong></td><td>22 — Agricultural and Forestry Equipment</td><td>high</td></tr>
            <tr><td><strong>UNSPSC Class</strong></td><td>22111500 — Livestock handling and treatment equipment</td><td>high</td></tr>
            <tr><td><strong>UNSPSC Commodity</strong></td><td>Custom group — Mobile Modular Livestock Enclosure Systems</td><td>~70% [ASM]</td></tr>
          </tbody>
        </table>
        <blockquote>
          No 8-digit UNSPSC commodity maps precisely to a wheeled modular paddock enclosure system. Using custom product group name "Mobile Modular Livestock Enclosure Systems" as primary anchor; closest UNSPSC approximation is 22111504 (livestock pens / enclosures) if catalog lookup confirms existence.
        </blockquote>

        <h3>Step 04 — Commodity Functional Promise</h3>
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>Commodity / Group</strong></td><td>Mobile Modular Livestock Enclosure Systems</td></tr>
            <tr><td><strong>Functional Promise</strong></td><td>Partition and contain livestock in defined outdoor areas using portable, repositionable enclosure elements</td></tr>
            <tr><td><strong>Reasoning</strong></td><td>Any mobile paddock system — regardless of material or drive mechanism — performs this: create a temporary or semi-permanent bounded area for one or more animals that can be repositioned as operations require.</td></tr>
          </tbody>
        </table>

        <h3>Step 04a — FP Extension</h3>
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>FP Extension</strong></td>
              <td>The underlying capability (modular mobile steel enclosure panels) extends beyond equestrian use to: temporary animal control enclosures at veterinary facilities and livestock shows; event safety barriers; mobile outdoor kennel runs for working dogs.</td>
            </tr>
            <tr>
              <td><strong>Use in Market Discovery</strong></td>
              <td>Secondary search query: "markets that need portable, repositionable enclosure systems for live animals or personnel safety" — adds NAICS 812910 (kennels), 711310 (event promoters), 541940 (veterinary services) to candidate set.</td>
            </tr>
          </tbody>
        </table>
        <blockquote>
          FP Extension warranted: the modular panel-on-castors form factor is broader than equestrian paddock use. [ASM]
        </blockquote>

        <h3>Step 05 — VN / BOM Position</h3>
        <table>
          <thead><tr><th>Value Network</th><th>BOM Level</th><th>Role</th></tr></thead>
          <tbody>
            <tr><td>Manufacturing VN (NAICS 333111): L1 OEM finished good</td><td>L1 — Finished product</td><td>Modular system (multiple panels = one installation unit)</td></tr>
            <tr><td>End-beneficiary VN (NAICS 112920): L1 infrastructure asset</td><td>L1 — Installed asset</td><td>Each panel is a sub-unit; the configured set is the deliverable</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>
          Both products are standalone finished goods, not components inside a higher-level assembly. The Paddockbox is a modular system where panels are sub-units; the functional promise belongs at the configured-set level. [ASM]
        </p>

        <h3>Step 06 — Required Complements</h3>
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

        <hr />
        <SectionAnchor id="fp-summary" title="Summary" />
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Mechanism</th>
              <th>UNSPSC Commodity</th>
              <th>Product FP (short)</th>
              <th>Commodity FP (short)</th>
              <th>FP Extension?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Heuraufe</strong></td>
              <td style={{ fontSize: 12 }}>Welded steel tube-frame, galvanized</td>
              <td style={{ fontSize: 12 }}>22111509 — Hay feeders / racks</td>
              <td style={{ fontSize: 12 }}>Deliver hay to multiple horses with all-side access, weather cover, and ground clearance</td>
              <td style={{ fontSize: 12 }}>Store and dispense roughage for multiple livestock in outdoor environments</td>
              <td><span className="badge badge--neutral">No</span></td>
            </tr>
            <tr>
              <td><strong>Paddockbox</strong></td>
              <td style={{ fontSize: 12 }}>Welded steel modular panels on castors, galvanized</td>
              <td style={{ fontSize: 12 }}>Custom: Mobile Modular Livestock Enclosure Systems</td>
              <td style={{ fontSize: 12 }}>Partition outdoor paddock space with modular, mobile, tractor-clearable enclosure elements</td>
              <td style={{ fontSize: 12 }}>Partition and contain livestock in defined areas using portable, repositionable enclosure elements</td>
              <td><span className="badge badge--moderate">Yes — vet, event, kennel</span></td>
            </tr>
          </tbody>
        </table>

      </div>
    </section>
  );
}
