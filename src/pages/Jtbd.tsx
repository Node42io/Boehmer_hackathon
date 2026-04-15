/**
 * 09 JTBD Analysis — Full analysis from 09_jtbd.md
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

export default function Jtbd() {
  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 09 / JTBD Analysis"
        title="JTBD + Stakeholder Needs"
        description="Burleson JTBD framework, Ulwick ODI scoring, 5 stakeholder roles, 52 needs across P1–P5 pyramid for Heuraufe and Paddockbox."
      />
      <article className="md">

        <SectionAnchor id="jtbd-scope" title="Scope" />
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>Company</strong></td><td>Böhmer Systemtechnik GmbH</td></tr>
            <tr><td><strong>NAICS (target market)</strong></td><td><code>112920</code> — Horses and Other Equine Production</td></tr>
            <tr><td><strong>NAICS (manufacturing)</strong></td><td><code>333111</code> — Farm Machinery and Equipment Manufacturing</td></tr>
            <tr><td><strong>Products</strong></td><td>Heuraufe (hay rack), Paddockbox (mobile paddock enclosure)</td></tr>
            <tr><td><strong>Transaction type</strong></td><td><strong>B2B</strong> — sold to equestrian facility operators</td></tr>
            <tr><td><strong>Primary job executor</strong></td><td>Stable operator / manager (Stallbetreiber)</td></tr>
            <tr><td><strong>VN Reference</strong></td><td>06_vn_reitstall.md (End-Beneficiary VN)</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="jtbd-phase1" title="Phase 1 — Industry Landscape (NAICS 112920)" />

        <h3>1.1 CFJ, Output Types, Offering Level</h3>
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>CFJ</strong></td><td>Raise, house, feed, and condition horses in managed facilities so that animals remain healthy, tractable, and available for their designated use</td></tr>
            <tr><td><strong>Extracted from</strong></td><td>NAICS 112920 description + VN CFJ (06_vn_reitstall.md)</td></tr>
            <tr><td><strong>Offering Level</strong></td><td>L7 (Ecosystem — the facility IS the ecosystem)</td></tr>
          </tbody>
        </table>

        <p><strong>Output Types:</strong></p>
        <table>
          <thead><tr><th>ID</th><th>Output Type</th><th>Description</th><th>Böhmer Relevance</th></tr></thead>
          <tbody>
            <tr><td>OT-A</td><td>Reitstall / Pension</td><td>Commercial horse boarding + riding school</td><td><strong>Primary</strong></td></tr>
            <tr><td>OT-B</td><td>Gestüt / Breeding</td><td>Stud farm, breeding operations</td><td>Secondary</td></tr>
            <tr><td>OT-C</td><td>Schulpferd / Reitschule</td><td>Riding school with school horses</td><td><strong>Primary</strong></td></tr>
            <tr><td>OT-D</td><td>Turnierstall</td><td>Competition stable, premium welfare</td><td>Secondary</td></tr>
            <tr><td>OT-E</td><td>Freizeitpferd / Privathaltung</td><td>Private leisure horse, 1–4 horses</td><td>Tertiary</td></tr>
          </tbody>
        </table>

        <h3>1.2 Segments (by circumstance, not demographics)</h3>
        <table>
          <thead><tr><th>#</th><th>Segment</th><th>Circumstance</th><th>Distinguishing Alternatives</th></tr></thead>
          <tbody>
            <tr><td>S1</td><td><strong>Multi-horse outdoor boarding</strong></td><td style={{ fontSize: 12 }}>10–30+ horses, daily outdoor paddock rotation, high labor pressure, cost-sensitive operations</td><td style={{ fontSize: 12 }}>Mobile panel systems vs. permanent fencing; multi-horse feeders vs. individual rations</td></tr>
            <tr><td>S2</td><td><strong>Small private paddock (1–4 horses)</strong></td><td style={{ fontSize: 12 }}>Owner-operated, minimal labor budget, low capital tolerance, manual positioning acceptable</td><td style={{ fontSize: 12 }}>Simple ring feeders vs. floor feeding; electric tape vs. permanent fencing</td></tr>
            <tr><td>S3</td><td><strong>High-performance training &amp; competition</strong></td><td style={{ fontSize: 12 }}>Horse welfare premium, injury avoidance paramount, facility image matters to clients</td><td style={{ fontSize: 12 }}>Premium infrastructure vs. standard; automated feeding vs. manual</td></tr>
            <tr><td>S4</td><td><strong>Breeding &amp; foaling</strong></td><td style={{ fontSize: 12 }}>Frequent reconfiguration for mares/foals, separating groups, seasonal rhythm</td><td style={{ fontSize: 12 }}>Modular enclosures vs. permanent stall division; controlled feeding vs. ad-lib grazing</td></tr>
            <tr><td>S5</td><td><strong>Riding school / instruction</strong></td><td style={{ fontSize: 12 }}>High throughput of horse-rider pairs, rapid turnover of paddock space, public-facing operations</td><td style={{ fontSize: 12 }}>Efficient space management vs. fixed layouts; visible welfare standards</td></tr>
          </tbody>
        </table>

        <h3>1.3–1.5 Process VN, Product BOM, Edges</h3>
        <p>Referenced from <code>06_vn_reitstall.md</code>. Key L6 process steps relevant to Böhmer products:</p>
        <table>
          <thead><tr><th>L6 Node</th><th>Job Family</th><th>Böhmer Product</th></tr></thead>
          <tbody>
            <tr><td><strong>L6c — Daily Feeding &amp; Nutrition Management</strong></td><td style={{ fontSize: 12 }}>Deliver correct type, quantity, and timing of feed while minimizing waste and contamination</td><td><strong>Heuraufe</strong></td></tr>
            <tr><td><strong>L6d — Housing &amp; Paddock Space Management</strong></td><td style={{ fontSize: 12 }}>Configure, operate, and reconfigure paddocks and exercise areas for equine welfare and workflow</td><td><strong>Paddockbox</strong></td></tr>
          </tbody>
        </table>
        <p>Both L6c and L6d activate across <strong>all 5 output types</strong> — universal infrastructure demand.</p>

        <hr />
        <SectionAnchor id="jtbd-phase2" title="Phase 2 — Company Enters" />

        <h3>Product 1: Heuraufe</h3>

        <h4>2.1 VN Anchor</h4>
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Anchor VN unit</td><td>Multi-Horse Outdoor Hay Rack / Station</td></tr>
            <tr><td>Anchor level</td><td><strong>L5</strong></td></tr>
            <tr><td>Parent VN unit</td><td>L6c — Daily Feeding &amp; Nutrition Management</td></tr>
            <tr><td>Parent level</td><td>L6</td></tr>
            <tr><td>Anchor type</td><td>PROCESS_VN — product is infrastructure equipment, does not become part of the horse or the feed</td></tr>
          </tbody>
        </table>

        <h4>2.2 Lens</h4>
        <blockquote>"What <strong>feeding equipment</strong> does a <strong>multi-horse outdoor boarding operation</strong> need to deliver forage reliably while minimizing waste and labor?"</blockquote>

        <h4>2.3 Core Functional Job (solution-independent)</h4>
        <blockquote><strong>Supply forage to multiple horses simultaneously in outdoor environments such that each animal receives adequate intake, waste is minimized, contamination is prevented, and feeding labor is reduced — regardless of which equipment is used.</strong></blockquote>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>Abstraction test: Round bale ring feeder, wall-mounted rack, slow-feed net, automated RFID dispenser, floor feeding with tarp — 5+ alternatives from different categories. Passes.</p>

        <h4>2.4 Alternatives (5 retained)</h4>
        <table>
          <thead><tr><th>#</th><th>Alternative</th><th>Category</th><th>Trade-offs</th></tr></thead>
          <tbody>
            <tr><td>A1</td><td><strong>Multi-horse roofed hay rack/station</strong> (Böhmer's category)</td><td style={{ fontSize: 12 }}>Structural steel feeder</td><td style={{ fontSize: 12 }}>Higher unit cost (~EUR 1,500–3,000); requires tractor for repositioning; fixed footprint per unit; galvanizing lead time [EST]</td></tr>
            <tr><td>A2</td><td>Round bale ring feeder</td><td style={{ fontSize: 12 }}>Circular metal frame</td><td style={{ fontSize: 12 }}>No weather protection; high waste (30–40% of bale lost to trampling); hay contamination from mud/urine; single-bale format lock-in [EST]</td></tr>
            <tr><td>A3</td><td>Wall-mounted hay rack / corner feeder</td><td style={{ fontSize: 12 }}>Fixed indoor/shelter feeder</td><td style={{ fontSize: 12 }}>Single-horse access only; requires building structure; no outdoor use; unnatural elevated eating posture stresses cervical spine [EST]</td></tr>
            <tr><td>A4</td><td>Slow-feed hay net station</td><td style={{ fontSize: 12 }}>Fabric/net-based feeder</td><td style={{ fontSize: 12 }}>Low durability (horses chew through nets); entanglement risk (hooves in net); frequent replacement; no weather protection [EST]</td></tr>
            <tr><td>A5</td><td>Floor feeding (hay placed directly on ground)</td><td style={{ fontSize: 12 }}>No equipment — status quo</td><td style={{ fontSize: 12 }}>Zero capital cost; highest waste (40–60%); maximum contamination (sand colic risk); no portion control; dominance-driven feed competition [EST]</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}><strong>Existential flag:</strong> A5 (floor feeding) is the "do nothing" alternative. Zero P1 burden, but maximum P2 failure on waste, contamination, and welfare.</p>

        <h4>2.5 Scenarios and Output Type Activation</h4>
        <table>
          <thead><tr><th>Scenario</th><th>Context</th><th>Output Types Activated</th><th>Active Alternatives</th></tr></thead>
          <tbody>
            <tr><td>SC1: Daily outdoor roughage provision (10+ horses)</td><td style={{ fontSize: 12 }}>Year-round, mixed herd, paddock-based feeding</td><td>OT-A, OT-C, OT-D</td><td>A1, A2, A5</td></tr>
            <tr><td>SC2: Winter hay feeding under precipitation</td><td style={{ fontSize: 12 }}>Rain/snow, hay must stay dry, horses eat outdoors</td><td>OT-A, OT-B, OT-C, OT-D, OT-E</td><td>A1, A3 (if shelter available), A5</td></tr>
            <tr><td>SC3: Pasture rotation / seasonal repositioning</td><td style={{ fontSize: 12 }}>Feeding station must follow herd between paddocks</td><td>OT-A, OT-B</td><td>A1, A2, A5</td></tr>
            <tr><td>SC4: Small private paddock feeding (1–4 horses)</td><td style={{ fontSize: 12 }}>Low capital tolerance, infrequent repositioning</td><td>OT-E</td><td>A2, A3, A4, A5</td></tr>
          </tbody>
        </table>

        <hr />
        <h3>Product 2: Paddockbox</h3>

        <h4>2.1 VN Anchor</h4>
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Anchor VN unit</td><td>Mobile Modular Panel System</td></tr>
            <tr><td>Anchor level</td><td><strong>L5</strong></td></tr>
            <tr><td>Parent VN unit</td><td>L6d — Housing &amp; Paddock Space Management</td></tr>
            <tr><td>Parent level</td><td>L6</td></tr>
            <tr><td>Anchor type</td><td>PROCESS_VN — product is yard infrastructure, does not become part of the horse or the facility building</td></tr>
          </tbody>
        </table>

        <h4>2.2 Lens</h4>
        <blockquote>"What <strong>paddock enclosure system</strong> does a <strong>multi-horse stable operation</strong> need to partition, reconfigure, and manage outdoor space efficiently while ensuring horse safety?"</blockquote>

        <h4>2.3 Core Functional Job (solution-independent)</h4>
        <blockquote><strong>Contain and partition horses in defined outdoor areas such that space can be reconfigured as operational needs change, horses remain safely enclosed, and tractor/vehicle access to the enclosed area is maintained — regardless of which enclosure system is used.</strong></blockquote>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>Abstraction test: Mobile panel system, permanent post-and-rail, electric tape fencing, high-tensile wire, portable aluminium corral — 5+ alternatives from different categories. Passes.</p>

        <h4>2.4 Alternatives (5 retained)</h4>
        <table>
          <thead><tr><th>#</th><th>Alternative</th><th>Category</th><th>Trade-offs</th></tr></thead>
          <tbody>
            <tr><td>B1</td><td><strong>Mobile modular panel system on castors</strong> (Böhmer's category)</td><td style={{ fontSize: 12 }}>Wheeled steel/aluminium tube frames</td><td style={{ fontSize: 12 }}>Higher unit cost (~EUR 2,000–5,000 per configuration); requires hard standing for castors; CE Machinery Directive compliance burden; weight requires tractor for large moves [EST]</td></tr>
            <tr><td>B2</td><td>Permanent post-and-rail fence (timber or galvanized steel)</td><td style={{ fontSize: 12 }}>Fixed fence infrastructure</td><td style={{ fontSize: 12 }}>No reconfiguration without demolition; groundwork/foundation required; 20+ year lifespan but zero flexibility; blocks tractor access without gate installation [EST]</td></tr>
            <tr><td>B3</td><td>Electric tape / wire fencing (plastic posts, stranded wire)</td><td style={{ fontSize: 12 }}>Temporary electric fence</td><td style={{ fontSize: 12 }}>Low cost (~EUR 200–500); fast setup; relies on psychological barrier only (horses learn to break through); maintenance of energizer; no physical containment for panicking horse; no tractor clearance [EST]</td></tr>
            <tr><td>B4</td><td>High-tensile wire / V-mesh perimeter fencing</td><td style={{ fontSize: 12 }}>Semi-permanent wire fence</td><td style={{ fontSize: 12 }}>Moderate cost; good visibility; permanent installation; limited reconfigurability; wire tension maintenance required; injury risk if horse impacts at speed [EST]</td></tr>
            <tr><td>B5</td><td>Aluminium portable corral panels (pin-hinge, no castors)</td><td style={{ fontSize: 12 }}>Lightweight portable panels</td><td style={{ fontSize: 12 }}>Lower weight; no castors (must be lifted/carried); smaller sections; no fold-flat post clearance for tractor; pin connections loosen over time [EST]</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}><strong>Existential flag:</strong> B3 (electric tape) is the low-cost incumbent at ~45% combined share (B2 + B3). Böhmer must overcome the "good enough" barrier of cheap temporary fencing.</p>

        <h4>2.5 Scenarios and Output Type Activation</h4>
        <table>
          <thead><tr><th>Scenario</th><th>Context</th><th>Output Types Activated</th><th>Active Alternatives</th></tr></thead>
          <tbody>
            <tr><td>SC1: Daily paddock rotation for group turnout</td><td style={{ fontSize: 12 }}>Horses moved between paddocks; space reconfigured by herd size/composition</td><td>OT-A, OT-C</td><td>B1, B3, B5</td></tr>
            <tr><td>SC2: Temporary isolation (sick/injured horse, new arrival)</td><td style={{ fontSize: 12 }}>Quick partition of existing space; must be deployed within minutes</td><td>OT-A, OT-B, OT-D</td><td>B1, B3, B5</td></tr>
            <tr><td>SC3: Seasonal yard reconfiguration</td><td style={{ fontSize: 12 }}>Winter vs. summer layout; permanent fencing is over-committed</td><td>OT-A, OT-B, OT-C</td><td>B1, B2 (if accepted as permanent), B3</td></tr>
            <tr><td>SC4: Stable yard with tractor corridor requirement</td><td style={{ fontSize: 12 }}>Tractor must pass through/into enclosed area for feeding, mucking, bedding delivery</td><td>OT-A, OT-C, OT-D</td><td>B1, B2 (with gate)</td></tr>
            <tr><td>SC5: Breeding separation (mare/foal groups)</td><td style={{ fontSize: 12 }}>Frequent re-grouping; foal-safe panel spacing critical</td><td>OT-B</td><td>B1, B2, B5</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="jtbd-phase3" title="Phase 3 — Needs Derivation" />

        <h3>Stakeholder Role Mapping</h3>
        <table>
          <thead><tr><th>Stakeholder</th><th>Burleson Role</th><th>Relationship to Products</th><th>Pyramid Levels</th></tr></thead>
          <tbody>
            <tr><td><strong>Stable operator / manager (Stallbetreiber)</strong></td><td style={{ fontSize: 12 }}>Job Executor + Purchase Executor</td><td style={{ fontSize: 12 }}>Primary decision maker, daily user, bears cost</td><td><code>P1, P2, P3, P4, P5</code></td></tr>
            <tr><td><strong>Horse owner (Pferdebesitzer)</strong></td><td style={{ fontSize: 12 }}>Job Overseer + Purchase Influencer</td><td style={{ fontSize: 12 }}>Demands quality care; influences stable choice; does not operate equipment</td><td><code>P2, P4, P5</code></td></tr>
            <tr><td><strong>Stable hand (Stallarbeiter/Bereiter)</strong></td><td style={{ fontSize: 12 }}>Job Executor (operational) + Product Lifecycle Support</td><td style={{ fontSize: 12 }}>Daily positioning, filling, cleaning; values ergonomics</td><td><code>P1, P2</code></td></tr>
            <tr><td><strong>Veterinarian</strong></td><td style={{ fontSize: 12 }}>Purchase Influencer</td><td style={{ fontSize: 12 }}>Horse-safe design, injury prevention, natural feeding posture</td><td><code>P2 (safety-related subset)</code></td></tr>
            <tr><td><strong>Procurement / facility manager</strong></td><td style={{ fontSize: 12 }}>Purchase Executor (delegated)</td><td style={{ fontSize: 12 }}>Durability, TCO, supplier reliability</td><td><code>P1 (Acquisition stage)</code></td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="jtbd-p1" title="3.1 Product Jobs per Lifecycle Stage (P1)" />

        <h3>Heuraufe — P1 Product Jobs by Alternative</h3>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Lifecycle Stage</th>
                <th>A1: Roofed Hay Rack (Böhmer)</th>
                <th>A2: Round Bale Ring Feeder</th>
                <th>A4: Slow-Feed Hay Net</th>
                <th>A5: Floor Feeding (Status Quo)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Purchase</strong></td>
                <td style={{ fontSize: 11 }}>Evaluate unit size vs. horse count; specify galvanizing tier; order custom dimensions; wait 4–6 week lead time [EST]</td>
                <td style={{ fontSize: 11 }}>Select ring diameter for bale size; buy from agricultural dealer; 1–2 day delivery [EST]</td>
                <td style={{ fontSize: 11 }}>Select net mesh size; order online; 2–3 day delivery</td>
                <td style={{ fontSize: 11 }}>No purchase required</td>
              </tr>
              <tr>
                <td><strong>Install / Position</strong></td>
                <td style={{ fontSize: 11 }}>Tractor-lift onto prepared surface; orient for wind protection; level on skids</td>
                <td style={{ fontSize: 11 }}>Place ring on ground; no tools needed; 10 min [EST]</td>
                <td style={{ fontSize: 11 }}>Hang from post or lay on ground; tie or stake</td>
                <td style={{ fontSize: 11 }}>Place hay on ground</td>
              </tr>
              <tr>
                <td><strong>Daily Use (Fill)</strong></td>
                <td style={{ fontSize: 11 }}>Load hay bale into bay; roof retains weather protection; horses access from all sides</td>
                <td style={{ fontSize: 11 }}>Drop round bale into ring; single loading event per bale</td>
                <td style={{ fontSize: 11 }}>Stuff net manually; 10–15 min per net [EST]</td>
                <td style={{ fontSize: 11 }}>Fork hay onto ground; horses scatter and trample</td>
              </tr>
              <tr>
                <td><strong>Refill / Clean</strong></td>
                <td style={{ fontSize: 11 }}>Remove residual stems; hose down base; 15–20 min [EST]</td>
                <td style={{ fontSize: 11 }}>Pull out bale twine; minimal cleaning; hay debris around ring</td>
                <td style={{ fontSize: 11 }}>Replace torn nets; untangle caught material</td>
                <td style={{ fontSize: 11 }}>No cleaning; contaminated residue remains</td>
              </tr>
              <tr>
                <td><strong>Move / Reposition</strong></td>
                <td style={{ fontSize: 11 }}>Tractor front-loader lift; 1 person; 10–15 min [EST]</td>
                <td style={{ fontSize: 11 }}>2 people drag/roll; or tractor chain-pull; 10 min [EST]</td>
                <td style={{ fontSize: 11 }}>Carry by hand; 2 min</td>
                <td style={{ fontSize: 11 }}>Move hay pile by fork; 5 min</td>
              </tr>
              <tr>
                <td><strong>Maintain</strong></td>
                <td style={{ fontSize: 11 }}>Inspect welds annually; touch up powder coat chips; replace hay net insert (if equipped); 15-year service life [EST]</td>
                <td style={{ fontSize: 11 }}>Check for bent rails; limited repair options; 5–10 year life [EST]</td>
                <td style={{ fontSize: 11 }}>Replace nets every 3–6 months [EST]</td>
                <td style={{ fontSize: 11 }}>No maintenance</td>
              </tr>
              <tr>
                <td><strong>Replace / Dispose</strong></td>
                <td style={{ fontSize: 11 }}>Scrap steel is recyclable; heavy unit requires tractor removal</td>
                <td style={{ fontSize: 11 }}>Steel recyclable; lighter removal</td>
                <td style={{ fontSize: 11 }}>Dispose fabric nets (landfill)</td>
                <td style={{ fontSize: 11 }}>N/A</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Paddockbox — P1 Product Jobs by Alternative</h3>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Lifecycle Stage</th>
                <th>B1: Mobile Panel System (Böhmer)</th>
                <th>B2: Permanent Post-and-Rail</th>
                <th>B3: Electric Tape Fence</th>
                <th>B5: Aluminium Portable Corral</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Purchase</strong></td>
                <td style={{ fontSize: 11 }}>Evaluate panel count + layout; specify height (2-rail vs 3-rail); order wall-hinge option; wait 4–8 week lead time [EST]</td>
                <td style={{ fontSize: 11 }}>Source posts + rails; plan layout; hire fencing contractor; 2–4 week project [EST]</td>
                <td style={{ fontSize: 11 }}>Buy energizer + tape + posts from dealer; 1 day setup purchase [EST]</td>
                <td style={{ fontSize: 11 }}>Buy panel set from agricultural dealer; 1–3 day delivery [EST]</td>
              </tr>
              <tr>
                <td><strong>Install / Position</strong></td>
                <td style={{ fontSize: 11 }}>Roll panels into position on castors; connect via pin/flange joints; lock castor brakes; 30–60 min for 4-panel config [EST]</td>
                <td style={{ fontSize: 11 }}>Dig post holes; concrete footings; mount rails; 2–5 days per paddock [EST]</td>
                <td style={{ fontSize: 11 }}>Push posts into ground; string tape; connect energizer; 1–2 hours [EST]</td>
                <td style={{ fontSize: 11 }}>Carry panels; connect via hinge pins; no castors — manual lifting; 20–40 min [EST]</td>
              </tr>
              <tr>
                <td><strong>Daily Use</strong></td>
                <td style={{ fontSize: 11 }}>Open fold-flat post for tractor corridor; close and latch after passage; manage horse groups within modular perimeter</td>
                <td style={{ fontSize: 11 }}>Open/close gate; no reconfiguration possible without tools</td>
                <td style={{ fontSize: 11 }}>Check tape tension; verify energizer charge; re-tension after wind/animal contact [EST]</td>
                <td style={{ fontSize: 11 }}>Open pin-hinge gate; limited reconfigurability without disconnecting panels</td>
              </tr>
              <tr>
                <td><strong>Refill / Clean</strong></td>
                <td style={{ fontSize: 11 }}>Hose down panels; mud accumulation on castors; 20 min per config [EST]</td>
                <td style={{ fontSize: 11 }}>Pressure-wash rails; 20 min per section [EST]</td>
                <td style={{ fontSize: 11 }}>Wipe tape (rarely needed); 5 min</td>
                <td style={{ fontSize: 11 }}>Hose panels; 15 min [EST]</td>
              </tr>
              <tr>
                <td><strong>Move / Reposition</strong></td>
                <td style={{ fontSize: 11 }}>Unlock castors; push/pull with tractor or manually; entire assembled config moves without disassembly; 10–20 min [EST]</td>
                <td style={{ fontSize: 11 }}><strong>Not possible</strong> without demolition and re-installation</td>
                <td style={{ fontSize: 11 }}>Pull up posts; re-string in new location; 1–2 hours [EST]</td>
                <td style={{ fontSize: 11 }}>Disconnect pins; carry each panel; reconnect at new location; 30–60 min [EST]</td>
              </tr>
              <tr>
                <td><strong>Maintain</strong></td>
                <td style={{ fontSize: 11 }}>Inspect hinge joints for fatigue cracks; lubricate castors; touch up galvanizing chips; 15-year service life [EST]</td>
                <td style={{ fontSize: 11 }}>Replace rotted timber posts (every 8–12 years for wood); re-tension rails [EST]</td>
                <td style={{ fontSize: 11 }}>Replace tape (UV degradation every 2–3 years); maintain energizer battery [EST]</td>
                <td style={{ fontSize: 11 }}>Tighten loose pin connections; check for corrosion; 10-year life [EST]</td>
              </tr>
              <tr>
                <td><strong>Replace / Dispose</strong></td>
                <td style={{ fontSize: 11 }}>Steel recyclable; castors may need separate disposal; tractor required for removal of large configs</td>
                <td style={{ fontSize: 11 }}>Demolish posts; remove concrete footings; extensive labor [EST]</td>
                <td style={{ fontSize: 11 }}>Remove posts + tape; minimal disposal effort</td>
                <td style={{ fontSize: 11 }}>Aluminium fully recyclable; lightweight removal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />
        <SectionAnchor id="jtbd-p2" title="3.2 Core Job Needs (P2) — Solution-Independent" />
        <p>These needs apply regardless of which feeding or enclosure technology is chosen. Scored per Ulwick ODI (importance 0–10, satisfaction 0–10).</p>

        <h3>Heuraufe — Core Job: "Supply forage to multiple horses simultaneously in outdoor environments"</h3>

        <h4>Ulwick 8-Step Job Map</h4>
        <table>
          <thead><tr><th>#</th><th>Step</th><th>Statement</th><th>Relevant to Product?</th><th>Rationale</th></tr></thead>
          <tbody>
            <tr><td>1</td><td><strong>DEFINE</strong></td><td style={{ fontSize: 12 }}>Determine required feed quantity, hay type, and horse count per feeding station</td><td>Yes</td><td style={{ fontSize: 12 }}>Station capacity must match herd size</td></tr>
            <tr><td>2</td><td><strong>LOCATE</strong></td><td style={{ fontSize: 12 }}>Identify the optimal paddock position for the feeding station relative to water, shelter, and drainage</td><td>Yes</td><td style={{ fontSize: 12 }}>Station placement directly affects feeding efficiency</td></tr>
            <tr><td>3</td><td><strong>PREPARE</strong></td><td style={{ fontSize: 12 }}>Load hay into the station and ensure it is accessible from all feeding positions</td><td><strong>Yes</strong></td><td style={{ fontSize: 12 }}>Core daily task the product serves</td></tr>
            <tr><td>4</td><td><strong>CONFIRM</strong></td><td style={{ fontSize: 12 }}>Verify that all horses have access and no individual is blocked from feeding</td><td><strong>Yes</strong></td><td style={{ fontSize: 12 }}>Multi-access design is the primary differentiator</td></tr>
            <tr><td>5</td><td><strong>EXECUTE</strong></td><td style={{ fontSize: 12 }}>Horses consume forage at controlled intake rate with minimal waste and contamination</td><td><strong>Yes</strong></td><td style={{ fontSize: 12 }}>Core value-creating function</td></tr>
            <tr><td>6</td><td><strong>MONITOR</strong></td><td style={{ fontSize: 12 }}>Observe feed consumption levels, hay quality deterioration, and horse behavior during feeding</td><td>Yes</td><td style={{ fontSize: 12 }}>Hay condition under weather is a key variable</td></tr>
            <tr><td>7</td><td><strong>MODIFY</strong></td><td style={{ fontSize: 12 }}>Adjust feeding position, replenish supply, or intervene if feed competition arises</td><td>Yes</td><td style={{ fontSize: 12 }}>Repositioning and refill are daily tasks</td></tr>
            <tr><td>8</td><td><strong>CONCLUDE</strong></td><td style={{ fontSize: 12 }}>Remove residual contaminated feed; reset station for next feeding cycle</td><td>Yes</td><td style={{ fontSize: 12 }}>Hygiene between cycles</td></tr>
          </tbody>
        </table>

        <h4>P2 Market Needs (Heuraufe)</h4>
        <table>
          <thead><tr><th>#</th><th>Need Statement</th><th>Job Step</th><th>Error Type</th><th>Impact</th><th>Imp.</th><th>Sat.</th><th>Opp.</th><th>Conf.</th></tr></thead>
          <tbody>
            <tr><td>HN-01</td><td style={{ fontSize: 12 }}>Minimize the percentage of provided hay lost to trampling, wind scatter, or ground contamination per feeding cycle</td><td>EXECUTE</td><td>ACCURACY</td><td>cost</td><td style={{ textAlign: "center" }}>9</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700, color: "var(--accent-yellow)" }}>14</td><td style={{ fontSize: 11 }}>0.8</td></tr>
            <tr><td>HN-02</td><td style={{ fontSize: 12 }}>Minimize the likelihood of sand colic or intestinal impaction caused by horses ingesting ground debris while feeding</td><td>EXECUTE</td><td>ROBUSTNESS</td><td>safety</td><td style={{ textAlign: "center" }}>10</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700, color: "var(--accent-yellow)" }}>17</td><td style={{ fontSize: 11 }}>0.8</td></tr>
            <tr><td>HN-03</td><td style={{ fontSize: 12 }}>Minimize the number of horses excluded from simultaneous feeding access due to dominance hierarchies (Futterneid)</td><td>EXECUTE</td><td>ACCURACY</td><td>safety</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>12</td><td style={{ fontSize: 11 }}>0.7</td></tr>
            <tr><td>HN-04</td><td style={{ fontSize: 12 }}>Minimize the daily labor-minutes required to load, distribute, and manage hay for a 10+ horse herd</td><td>PREPARE</td><td>EFFORT</td><td>time</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>11</td><td style={{ fontSize: 11 }}>0.7</td></tr>
            <tr><td>HN-05</td><td style={{ fontSize: 12 }}>Minimize hay quality degradation from rain, snow, or UV exposure between refill cycles</td><td>EXECUTE</td><td>ROBUSTNESS</td><td>cost</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700 }}>13</td><td style={{ fontSize: 11 }}>0.7</td></tr>
            <tr><td>HN-06</td><td style={{ fontSize: 12 }}>Maximize the number of feeding cycles achievable without repositioning the station</td><td>EXECUTE</td><td>THROUGHPUT</td><td>time</td><td style={{ textAlign: "center" }}>6</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>7</td><td style={{ fontSize: 11 }}>0.6</td></tr>
            <tr><td>HN-07</td><td style={{ fontSize: 12 }}>Minimize the time required to reposition the feeding station to a new paddock location</td><td>MODIFY</td><td>EFFORT</td><td>time</td><td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>10</td><td style={{ fontSize: 11 }}>0.6</td></tr>
            <tr><td>HN-08</td><td style={{ fontSize: 12 }}>Minimize the likelihood of horse injury (leg entrapment, laceration, head-catch) during feeding</td><td>EXECUTE</td><td>ROBUSTNESS</td><td>safety</td><td style={{ textAlign: "center" }}>10</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>15</td><td style={{ fontSize: 11 }}>0.8</td></tr>
            <tr><td>HN-09</td><td style={{ fontSize: 12 }}>Minimize the number of personnel required to reposition a loaded or empty feeding station</td><td>MODIFY</td><td>EFFORT</td><td>skill</td><td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>9</td><td style={{ fontSize: 11 }}>0.6</td></tr>
            <tr><td>HN-10</td><td style={{ fontSize: 12 }}>Minimize the rate of hay intake per horse to approximate natural grazing pace (slow feeding)</td><td>EXECUTE</td><td>ACCURACY</td><td>safety</td><td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>10</td><td style={{ fontSize: 11 }}>0.7</td></tr>
            <tr><td>HN-11</td><td style={{ fontSize: 12 }}>Minimize the accumulation of urine-soaked or mud-contaminated feed residue at the station base</td><td>CONCLUDE</td><td>CONSISTENCY</td><td>safety</td><td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700 }}>11</td><td style={{ fontSize: 11 }}>0.6</td></tr>
            <tr><td>HN-12</td><td style={{ fontSize: 12 }}>Maximize the ability to visually confirm that all horses in the group are actively feeding</td><td>MONITOR</td><td>DETECTION</td><td>safety</td><td style={{ textAlign: "center" }}>6</td><td style={{ textAlign: "center" }}>6</td><td style={{ textAlign: "center", fontWeight: 700 }}>6</td><td style={{ fontSize: 11 }}>0.5</td></tr>
            <tr><td>HN-13</td><td style={{ fontSize: 12 }}>Minimize the total cost of ownership per horse-feeding-year including waste, labor, maintenance, and capital amortization</td><td>DEFINE</td><td>EFFORT</td><td>cost</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>12</td><td style={{ fontSize: 11 }}>0.6</td></tr>
            <tr><td>HN-14</td><td style={{ fontSize: 12 }}>Minimize the rate of structural corrosion degradation under outdoor equestrian conditions (urine, mud, UV, frost)</td><td>MONITOR</td><td>ROBUSTNESS</td><td>reliability</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>11</td><td style={{ fontSize: 11 }}>0.7</td></tr>
            <tr><td>HN-15</td><td style={{ fontSize: 12 }}>Minimize the elapsed time between detecting low hay level and completing a refill</td><td>MODIFY</td><td>EFFORT</td><td>time</td><td style={{ textAlign: "center" }}>6</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>7</td><td style={{ fontSize: 11 }}>0.5</td></tr>
          </tbody>
        </table>

        <h3>Paddockbox — Core Job: "Contain and partition horses in defined outdoor areas"</h3>

        <h4>Ulwick 8-Step Job Map</h4>
        <table>
          <thead><tr><th>#</th><th>Step</th><th>Statement</th><th>Relevant to Product?</th><th>Rationale</th></tr></thead>
          <tbody>
            <tr><td>1</td><td><strong>DEFINE</strong></td><td style={{ fontSize: 12 }}>Determine required enclosure perimeter, height, and configuration for the horse group</td><td><strong>Yes</strong></td><td style={{ fontSize: 12 }}>Modular configuration is core differentiator</td></tr>
            <tr><td>2</td><td><strong>LOCATE</strong></td><td style={{ fontSize: 12 }}>Identify optimal yard position considering drainage, surface, tractor access routes</td><td><strong>Yes</strong></td><td style={{ fontSize: 12 }}>Castor-based mobility depends on surface</td></tr>
            <tr><td>3</td><td><strong>PREPARE</strong></td><td style={{ fontSize: 12 }}>Deploy and configure enclosure panels into the required layout</td><td><strong>Yes</strong></td><td style={{ fontSize: 12 }}>Assembly/reconfiguration is the primary operational task</td></tr>
            <tr><td>4</td><td><strong>CONFIRM</strong></td><td style={{ fontSize: 12 }}>Verify enclosure integrity — all panels connected, brakes locked, no gaps for horse escape</td><td><strong>Yes</strong></td><td style={{ fontSize: 12 }}>Safety-critical verification</td></tr>
            <tr><td>5</td><td><strong>EXECUTE</strong></td><td style={{ fontSize: 12 }}>Horses are safely contained within the perimeter while tractor/personnel access is maintained</td><td><strong>Yes</strong></td><td style={{ fontSize: 12 }}>Core value-creating function</td></tr>
            <tr><td>6</td><td><strong>MONITOR</strong></td><td style={{ fontSize: 12 }}>Observe horse behavior near panels; check for panel displacement, brake slippage, hinge wear</td><td><strong>Yes</strong></td><td style={{ fontSize: 12 }}>Ongoing structural integrity under horse contact</td></tr>
            <tr><td>7</td><td><strong>MODIFY</strong></td><td style={{ fontSize: 12 }}>Reconfigure layout, open tractor corridor, add/remove panels for changed herd composition</td><td><strong>Yes</strong></td><td style={{ fontSize: 12 }}>Reconfigurability is the primary job dimension</td></tr>
            <tr><td>8</td><td><strong>CONCLUDE</strong></td><td style={{ fontSize: 12 }}>Secure panels for overnight/idle position; verify locking mechanisms</td><td>Yes</td><td style={{ fontSize: 12 }}>End-of-day securing</td></tr>
          </tbody>
        </table>

        <h4>P2 Market Needs (Paddockbox)</h4>
        <table>
          <thead><tr><th>#</th><th>Need Statement</th><th>Job Step</th><th>Error Type</th><th>Impact</th><th>Imp.</th><th>Sat.</th><th>Opp.</th><th>Conf.</th></tr></thead>
          <tbody>
            <tr><td>PN-01</td><td style={{ fontSize: 12 }}>Minimize the time required to reconfigure enclosure layout when herd composition changes</td><td>MODIFY</td><td>EFFORT</td><td>time</td><td style={{ textAlign: "center" }}>9</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700, color: "var(--accent-yellow)" }}>15</td><td style={{ fontSize: 11 }}>0.8</td></tr>
            <tr><td>PN-02</td><td style={{ fontSize: 12 }}>Minimize the likelihood of horse escape through panel gaps, connector failures, or brake slippage</td><td>EXECUTE</td><td>ROBUSTNESS</td><td>safety</td><td style={{ textAlign: "center" }}>10</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700, color: "var(--accent-yellow)" }}>15</td><td style={{ fontSize: 11 }}>0.8</td></tr>
            <tr><td>PN-03</td><td style={{ fontSize: 12 }}>Minimize the likelihood of horse injury from contact with enclosure structure (sharp edges, entrapment, crushing)</td><td>EXECUTE</td><td>ROBUSTNESS</td><td>safety</td><td style={{ textAlign: "center" }}>10</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700, color: "var(--accent-yellow)" }}>15</td><td style={{ fontSize: 11 }}>0.8</td></tr>
            <tr><td>PN-04</td><td style={{ fontSize: 12 }}>Minimize the number of personnel required to reposition a fully assembled enclosure</td><td>MODIFY</td><td>EFFORT</td><td>skill</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700 }}>13</td><td style={{ fontSize: 11 }}>0.7</td></tr>
            <tr><td>PN-05</td><td style={{ fontSize: 12 }}>Minimize the elapsed time to open and close a tractor-width corridor through the enclosed area</td><td>MODIFY</td><td>EFFORT</td><td>time</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700 }}>13</td><td style={{ fontSize: 11 }}>0.7</td></tr>
            <tr><td>PN-06</td><td style={{ fontSize: 12 }}>Maximize the number of distinct layout configurations achievable from a fixed inventory of panel segments</td><td>DEFINE</td><td>THROUGHPUT</td><td>cost</td><td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>10</td><td style={{ fontSize: 11 }}>0.6</td></tr>
            <tr><td>PN-07</td><td style={{ fontSize: 12 }}>Minimize the requirement for groundwork, foundations, or permanent site preparation before deployment</td><td>PREPARE</td><td>EFFORT</td><td>cost</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>11</td><td style={{ fontSize: 11 }}>0.7</td></tr>
            <tr><td>PN-08</td><td style={{ fontSize: 12 }}>Minimize structural displacement or tip-over under sustained horse lateral push (500–800 kg)</td><td>EXECUTE</td><td>ROBUSTNESS</td><td>safety</td><td style={{ textAlign: "center" }}>10</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700, color: "var(--accent-yellow)" }}>16</td><td style={{ fontSize: 11 }}>0.8</td></tr>
            <tr><td>PN-09</td><td style={{ fontSize: 12 }}>Minimize the rate of structural degradation (corrosion, fatigue) under outdoor equestrian conditions across a 15-year service life</td><td>MONITOR</td><td>ROBUSTNESS</td><td>reliability</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>11</td><td style={{ fontSize: 11 }}>0.7</td></tr>
            <tr><td>PN-10</td><td style={{ fontSize: 12 }}>Minimize the total cost of ownership per horse-containment-year including capital, maintenance, and reconfiguration labor</td><td>DEFINE</td><td>EFFORT</td><td>cost</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>12</td><td style={{ fontSize: 11 }}>0.7</td></tr>
            <tr><td>PN-11</td><td style={{ fontSize: 12 }}>Maximize the ability to detect panel connector loosening or castor brake degradation before failure</td><td>MONITOR</td><td>DETECTION</td><td>safety</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700 }}>13</td><td style={{ fontSize: 11 }}>0.6</td></tr>
            <tr><td>PN-12</td><td style={{ fontSize: 12 }}>Minimize the time required to deploy an emergency isolation enclosure for a sick or injured horse</td><td>PREPARE</td><td>EFFORT</td><td>time</td><td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700 }}>11</td><td style={{ fontSize: 11 }}>0.6</td></tr>
            <tr><td>PN-13</td><td style={{ fontSize: 12 }}>Minimize enclosure immobility on soft or uneven ground surfaces</td><td>EXECUTE</td><td>ROBUSTNESS</td><td>reliability</td><td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700 }}>11</td><td style={{ fontSize: 11 }}>0.6</td></tr>
            <tr><td>PN-14</td><td style={{ fontSize: 12 }}>Minimize the number of tools and specialized skills required to assemble, connect, or disconnect panels</td><td>PREPARE</td><td>EFFORT</td><td>skill</td><td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>9</td><td style={{ fontSize: 11 }}>0.6</td></tr>
            <tr><td>PN-15</td><td style={{ fontSize: 12 }}>Minimize the likelihood of panel hinge joint failure under repeated fold/unfold cycles combined with lateral horse load</td><td>EXECUTE</td><td>ROBUSTNESS</td><td>reliability</td><td style={{ textAlign: "center" }}>9</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700, color: "var(--accent-yellow)" }}>15</td><td style={{ fontSize: 11 }}>0.7</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="jtbd-stakeholder-needs" title="3.3 Stakeholder-Specific Needs" />

        <h3>Stable Operator / Manager (Stallbetreiber) — Job Executor + Purchase Executor</h3>
        <table>
          <thead><tr><th>#</th><th>Need Statement</th><th>Product</th><th>Pyramid Level</th><th>Error Type</th><th>Impact</th><th>Imp.</th><th>Sat.</th><th>Opp.</th></tr></thead>
          <tbody>
            <tr><td>SO-01</td><td style={{ fontSize: 12 }}>Minimize the daily labor-hours allocated to feeding infrastructure management across all paddocks</td><td>Heuraufe</td><td>P2</td><td>EFFORT</td><td>time</td><td style={{ textAlign: "center" }}>9</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>14</td></tr>
            <tr><td>SO-02</td><td style={{ fontSize: 12 }}>Minimize the capital expenditure required per horse-place for feeding and enclosure infrastructure</td><td>Both</td><td>P1-Acquisition</td><td>EFFORT</td><td>cost</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>12</td></tr>
            <tr><td>SO-03</td><td style={{ fontSize: 12 }}>Maximize the operational flexibility to reconfigure yard layout within a single working day</td><td>Paddockbox</td><td>P2</td><td>THROUGHPUT</td><td>time</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700 }}>13</td></tr>
            <tr><td>SO-04</td><td style={{ fontSize: 12 }}>Minimize the likelihood of a horse welfare incident that triggers Tierschutzgesetz liability</td><td>Both</td><td>P2</td><td>ROBUSTNESS</td><td>safety</td><td style={{ textAlign: "center" }}>10</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>15</td></tr>
            <tr><td>SO-05</td><td style={{ fontSize: 12 }}>Minimize the frequency of infrastructure replacement or major repair within a 15-year planning horizon</td><td>Both</td><td>P1-Maintain</td><td>CONSISTENCY</td><td>cost</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>11</td></tr>
          </tbody>
        </table>

        <h3>Horse Owner (Pferdebesitzer) — Job Overseer + Purchase Influencer</h3>
        <table>
          <thead><tr><th>#</th><th>Need Statement</th><th>Product</th><th>Pyramid Level</th><th>Error Type</th><th>Impact</th><th>Imp.</th><th>Sat.</th><th>Opp.</th></tr></thead>
          <tbody>
            <tr><td>HO-01</td><td style={{ fontSize: 12 }}>Minimize the risk of horse injury caused by feeding or enclosure infrastructure</td><td>Both</td><td>P2</td><td>ROBUSTNESS</td><td>safety</td><td style={{ textAlign: "center" }}>10</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>15</td></tr>
            <tr><td>HO-02</td><td style={{ fontSize: 12 }}>Maximize visible evidence that feeding infrastructure supports natural head-down grazing posture</td><td>Heuraufe</td><td>P4-Image</td><td>DETECTION</td><td>safety</td><td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>10</td></tr>
            <tr><td>HO-03</td><td style={{ fontSize: 12 }}>Minimize the perception that the horse is confined in substandard or improvised enclosure conditions</td><td>Paddockbox</td><td>P4-Image</td><td>ACCURACY</td><td>safety</td><td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>10</td></tr>
            <tr><td>HO-04</td><td style={{ fontSize: 12 }}>Minimize the variation in hay quality and availability experienced by the horse across feeding cycles</td><td>Heuraufe</td><td>P2</td><td>CONSISTENCY</td><td>safety</td><td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>10</td></tr>
          </tbody>
        </table>

        <h3>Stable Hand (Stallarbeiter/Bereiter) — Operational Executor + Lifecycle Support</h3>
        <table>
          <thead><tr><th>#</th><th>Need Statement</th><th>Product</th><th>Pyramid Level</th><th>Error Type</th><th>Impact</th><th>Imp.</th><th>Sat.</th><th>Opp.</th></tr></thead>
          <tbody>
            <tr><td>SH-01</td><td style={{ fontSize: 12 }}>Minimize the physical lifting force required to reposition, open, or close enclosure elements</td><td>Paddockbox</td><td>P1-Daily Use</td><td>EFFORT</td><td>skill</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>12</td></tr>
            <tr><td>SH-02</td><td style={{ fontSize: 12 }}>Minimize the elapsed time to refill a feeding station for 10+ horses</td><td>Heuraufe</td><td>P1-Daily Use</td><td>EFFORT</td><td>time</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>11</td></tr>
            <tr><td>SH-03</td><td style={{ fontSize: 12 }}>Minimize the likelihood of finger/hand pinch injury during panel connection or hinge operation</td><td>Paddockbox</td><td>P1-Daily Use</td><td>ROBUSTNESS</td><td>safety</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>12</td></tr>
            <tr><td>SH-04</td><td style={{ fontSize: 12 }}>Minimize the number of steps required to open a tractor corridor and re-close it after passage</td><td>Paddockbox</td><td>P1-Daily Use</td><td>EFFORT</td><td>time</td><td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700 }}>11</td></tr>
            <tr><td>SH-05</td><td style={{ fontSize: 12 }}>Minimize the time required to clean feeding station between cycles</td><td>Heuraufe</td><td>P1-Clean</td><td>EFFORT</td><td>time</td><td style={{ textAlign: "center" }}>6</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>7</td></tr>
          </tbody>
        </table>

        <h3>Veterinarian — Purchase Influencer</h3>
        <table>
          <thead><tr><th>#</th><th>Need Statement</th><th>Product</th><th>Pyramid Level</th><th>Error Type</th><th>Impact</th><th>Imp.</th><th>Sat.</th><th>Opp.</th></tr></thead>
          <tbody>
            <tr><td>VT-01</td><td style={{ fontSize: 12 }}>Minimize the likelihood of leg entrapment in feeding grid openings or enclosure rail spacing</td><td>Both</td><td>P2</td><td>ROBUSTNESS</td><td>safety</td><td style={{ textAlign: "center" }}>10</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>15</td></tr>
            <tr><td>VT-02</td><td style={{ fontSize: 12 }}>Minimize deviation from natural head-down eating posture angle during hay consumption</td><td>Heuraufe</td><td>P2</td><td>ACCURACY</td><td>safety</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>12</td></tr>
            <tr><td>VT-03</td><td style={{ fontSize: 12 }}>Minimize the exposure of horses to feed contaminated by urine, feces, or soil pathogens (sand colic vector)</td><td>Heuraufe</td><td>P2</td><td>ROBUSTNESS</td><td>safety</td><td style={{ textAlign: "center" }}>9</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700 }}>15</td></tr>
            <tr><td>VT-04</td><td style={{ fontSize: 12 }}>Minimize the likelihood of hoof injury from castor mechanisms or panel base elements at ground level</td><td>Paddockbox</td><td>P2</td><td>ROBUSTNESS</td><td>safety</td><td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>12</td></tr>
          </tbody>
        </table>

        <h3>Procurement / Facility Manager — Purchase Executor (delegated)</h3>
        <table>
          <thead><tr><th>#</th><th>Need Statement</th><th>Product</th><th>Pyramid Level</th><th>Error Type</th><th>Impact</th><th>Imp.</th><th>Sat.</th><th>Opp.</th></tr></thead>
          <tbody>
            <tr><td>PM-01</td><td style={{ fontSize: 12 }}>Minimize the total cost of ownership per unit-year including amortization, maintenance, labor, and waste</td><td>Both</td><td>P1-Acquisition</td><td>EFFORT</td><td>cost</td><td style={{ textAlign: "center" }}>9</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>14</td></tr>
            <tr><td>PM-02</td><td style={{ fontSize: 12 }}>Minimize the lead time from order to operational deployment</td><td>Both</td><td>P1-Acquisition</td><td>THROUGHPUT</td><td>time</td><td style={{ textAlign: "center" }}>6</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>8</td></tr>
            <tr><td>PM-03</td><td style={{ fontSize: 12 }}>Minimize the likelihood of supplier delivery failure or quality non-conformance</td><td>Both</td><td>P1-Acquisition</td><td>ROBUSTNESS</td><td>reliability</td><td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>9</td></tr>
            <tr><td>PM-04</td><td style={{ fontSize: 12 }}>Maximize the documented service life guarantee with defined corrosion protection standard</td><td>Both</td><td>P1-Acquisition</td><td>DETECTION</td><td>reliability</td><td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>10</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="jtbd-p3p5" title="3.4 P3–P5 Identity and Emotional Needs" />

        <h3>P3 — Role Identity</h3>
        <blockquote>
          <strong>Retrieval:</strong> "By getting feeding/enclosure management done well, who does the stable operator become?"<br />
          <strong>Answer:</strong> A professional, welfare-compliant Stallbetreiber who runs an efficient operation that horse owners trust.
        </blockquote>
        <table>
          <thead><tr><th>#</th><th>Need Statement</th><th>Product</th><th>Bridge</th><th>Imp.</th><th>Sat.</th><th>Opp.</th><th>Confidence</th></tr></thead>
          <tbody>
            <tr>
              <td>RI-01</td>
              <td style={{ fontSize: 12 }}>Maximize the visible professionalism of stable infrastructure as perceived by visiting horse owners and prospective boarders</td>
              <td>Both</td>
              <td style={{ fontSize: 12 }}>"What must the product do so they CAN become a trusted, professional operator?"</td>
              <td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>10</td>
              <td style={{ fontSize: 11 }}>0.5 [hypothesis]</td>
            </tr>
            <tr>
              <td>RI-02</td>
              <td style={{ fontSize: 12 }}>Maximize the operator's ability to demonstrate Tierschutzgesetz compliance through infrastructure design choices</td>
              <td>Both</td>
              <td style={{ fontSize: 12 }}>"What must the product do so they CAN become a welfare-first operator?"</td>
              <td style={{ textAlign: "center" }}>8</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>12</td>
              <td style={{ fontSize: 11 }}>0.6 [hypothesis]</td>
            </tr>
          </tbody>
        </table>

        <h3>P4 — Image Identity</h3>
        <blockquote>
          <strong>Retrieval:</strong> "Who is watching, and what must they think?"<br />
          <strong>Watchers:</strong> Horse owners (paying clients), veterinarian on routine visit, Tierschutz inspector, prospective boarders.
        </blockquote>
        <table>
          <thead><tr><th>#</th><th>Need Statement</th><th>Product</th><th>Bridge</th><th>Imp.</th><th>Sat.</th><th>Opp.</th><th>Confidence</th></tr></thead>
          <tbody>
            <tr>
              <td>IM-01</td>
              <td style={{ fontSize: 12 }}>Minimize the impression that horse feeding is managed through improvised or inadequate equipment</td>
              <td>Heuraufe</td>
              <td style={{ fontSize: 12 }}>"What must the product do so watchers SEE professional feeding management?"</td>
              <td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>10</td>
              <td style={{ fontSize: 11 }}>0.5 [hypothesis]</td>
            </tr>
            <tr>
              <td>IM-02</td>
              <td style={{ fontSize: 12 }}>Minimize the impression that paddock containment relies on temporary or unsafe barriers</td>
              <td>Paddockbox</td>
              <td style={{ fontSize: 12 }}>"What must the product do so watchers SEE permanent-grade enclosure quality?"</td>
              <td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700 }}>11</td>
              <td style={{ fontSize: 11 }}>0.5 [hypothesis]</td>
            </tr>
          </tbody>
        </table>

        <h3>P5 — Emotional</h3>
        <blockquote>
          <strong>Retrieval:</strong> "What does the stable operator want to feel? What do they want to avoid feeling?"<br />
          <strong>Want to feel:</strong> In control, confident that horses are safe, proud of the facility.<br />
          <strong>Want to avoid:</strong> Anxiety about horse injury, guilt after a welfare incident, stress from equipment failure during busy mornings.
        </blockquote>
        <table>
          <thead><tr><th>#</th><th>Need Statement</th><th>Product</th><th>Bridge</th><th>Imp.</th><th>Sat.</th><th>Opp.</th><th>Confidence</th></tr></thead>
          <tbody>
            <tr>
              <td>EM-01</td>
              <td style={{ fontSize: 12 }}>Minimize the operator's anxiety about undetected horse injury at outdoor feeding/enclosure infrastructure overnight</td>
              <td>Both</td>
              <td style={{ fontSize: 12 }}>"What must the product do so they FEEL confident about horse safety?"</td>
              <td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>10</td>
              <td style={{ fontSize: 11 }}>0.4 [hypothesis]</td>
            </tr>
            <tr>
              <td>EM-02</td>
              <td style={{ fontSize: 12 }}>Minimize the frustration caused by equipment that fails to move, reconfigure, or function as designed under daily operational pressure</td>
              <td>Both</td>
              <td style={{ fontSize: 12 }}>"What must the product do so they FEEL in control of their morning routine?"</td>
              <td style={{ textAlign: "center" }}>7</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>10</td>
              <td style={{ fontSize: 11 }}>0.4 [hypothesis]</td>
            </tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="jtbd-top10" title="Opportunity Score Summary — Top 10 Underserved Needs" />
        <p>Sorted by opportunity score (descending). These represent the strongest innovation/sales messaging opportunities.</p>
        <table>
          <thead><tr><th>Rank</th><th>ID</th><th>Need Statement (abbreviated)</th><th>Product</th><th>Imp.</th><th>Sat.</th><th>Opp.</th><th>Impact</th></tr></thead>
          <tbody>
            <tr><td style={{ textAlign: "center", fontWeight: 700 }}>1</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>HN-02</td><td style={{ fontSize: 12 }}>Minimize sand colic / intestinal impaction from ground debris ingestion</td><td>Heuraufe</td><td style={{ textAlign: "center" }}>10</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700, color: "var(--accent-yellow)" }}>17</td><td><span className="badge badge--weak">safety</span></td></tr>
            <tr><td style={{ textAlign: "center", fontWeight: 700 }}>2</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>PN-08</td><td style={{ fontSize: 12 }}>Minimize structural displacement / tip-over under 500–800 kg horse lateral push</td><td>Paddockbox</td><td style={{ textAlign: "center" }}>10</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700, color: "var(--accent-yellow)" }}>16</td><td><span className="badge badge--weak">safety</span></td></tr>
            <tr><td style={{ textAlign: "center", fontWeight: 700 }}>3</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>HN-08</td><td style={{ fontSize: 12 }}>Minimize horse injury (leg entrapment, laceration) during feeding</td><td>Heuraufe</td><td style={{ textAlign: "center" }}>10</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>15</td><td><span className="badge badge--weak">safety</span></td></tr>
            <tr><td style={{ textAlign: "center", fontWeight: 700 }}>4</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>PN-01</td><td style={{ fontSize: 12 }}>Minimize time to reconfigure enclosure layout when herd changes</td><td>Paddockbox</td><td style={{ textAlign: "center" }}>9</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700 }}>15</td><td><span className="badge badge--moderate">time</span></td></tr>
            <tr><td style={{ textAlign: "center", fontWeight: 700 }}>5</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>PN-02</td><td style={{ fontSize: 12 }}>Minimize horse escape through panel gaps / connector failures</td><td>Paddockbox</td><td style={{ textAlign: "center" }}>10</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>15</td><td><span className="badge badge--weak">safety</span></td></tr>
            <tr><td style={{ textAlign: "center", fontWeight: 700 }}>6</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>PN-03</td><td style={{ fontSize: 12 }}>Minimize horse injury from enclosure structure contact</td><td>Paddockbox</td><td style={{ textAlign: "center" }}>10</td><td style={{ textAlign: "center" }}>5</td><td style={{ textAlign: "center", fontWeight: 700 }}>15</td><td><span className="badge badge--weak">safety</span></td></tr>
            <tr><td style={{ textAlign: "center", fontWeight: 700 }}>7</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>PN-15</td><td style={{ fontSize: 12 }}>Minimize hinge joint failure under repeated fold cycles + lateral load</td><td>Paddockbox</td><td style={{ textAlign: "center" }}>9</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700 }}>15</td><td><span className="badge badge--accent">reliability</span></td></tr>
            <tr><td style={{ textAlign: "center", fontWeight: 700 }}>8</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>VT-03</td><td style={{ fontSize: 12 }}>Minimize feed contamination by urine/feces/soil pathogens</td><td>Heuraufe</td><td style={{ textAlign: "center" }}>9</td><td style={{ textAlign: "center" }}>3</td><td style={{ textAlign: "center", fontWeight: 700 }}>15</td><td><span className="badge badge--weak">safety</span></td></tr>
            <tr><td style={{ textAlign: "center", fontWeight: 700 }}>9</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>SO-01</td><td style={{ fontSize: 12 }}>Minimize daily labor-hours for feeding infrastructure management</td><td>Heuraufe</td><td style={{ textAlign: "center" }}>9</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>14</td><td><span className="badge badge--moderate">time</span></td></tr>
            <tr><td style={{ textAlign: "center", fontWeight: 700 }}>10</td><td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>HN-01</td><td style={{ fontSize: 12 }}>Minimize hay lost to trampling, wind scatter, ground contamination</td><td>Heuraufe</td><td style={{ textAlign: "center" }}>9</td><td style={{ textAlign: "center" }}>4</td><td style={{ textAlign: "center", fontWeight: 700 }}>14</td><td><span className="badge badge--neutral">cost</span></td></tr>
          </tbody>
        </table>
        <div className="card" style={{ padding: 16, marginTop: 16 }}>
          <p style={{ marginBottom: 0, fontSize: 13 }}>
            <strong>Pattern:</strong> Horse safety/welfare needs dominate the top of the opportunity ranking. "Minimize risk of horse injury" is not merely emotional — it is the highest-importance, lowest-satisfaction market need across both products. This confirms that the sales message should lead with safety and welfare, not price or convenience.
          </p>
        </div>

        <hr />
        <SectionAnchor id="jtbd-yield" title="Yield Summary" />
        <table>
          <thead><tr><th>Metric</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Total market needs</td><td style={{ fontFamily: "var(--font-mono)" }}>52</td></tr>
            <tr><td>P1/P2 needs</td><td style={{ fontFamily: "var(--font-mono)" }}>48</td></tr>
            <tr><td>P3–P5 needs</td><td style={{ fontFamily: "var(--font-mono)" }}>6 (all hypothesis-level)</td></tr>
            <tr><td>Market-inherent (product_related = false)</td><td style={{ fontFamily: "var(--font-mono)" }}>~67%</td></tr>
            <tr><td>Technology-specific (product_related = true)</td><td style={{ fontFamily: "var(--font-mono)" }}>~33%</td></tr>
            <tr><td>Underserved needs (opp. score ≥ 14)</td><td style={{ fontFamily: "var(--font-mono)" }}>10</td></tr>
            <tr><td>Mean opportunity score</td><td style={{ fontFamily: "var(--font-mono)" }}>12.1</td></tr>
          </tbody>
        </table>

      </article>
    </section>
  );
}
