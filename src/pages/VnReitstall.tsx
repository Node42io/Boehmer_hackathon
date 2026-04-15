/**
 * VnReitstall — End-Beneficiary Value Network (NAICS 112920)
 * Source: sections/06_vn_reitstall.md
 *
 * Full VN hierarchy (L7→L4), output types, Böhmer positions, adjacency analysis,
 * vertical move-up assessment, and output type activation matrix.
 */

import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";
import VNDiagram from "./analysis/tabs/valuenetwork/VNDiagram";

import vnReitstall from "@/data/vnReitstall.json";
import type { ValueNetworkData } from "@/types";

export default function VnReitstall() {
  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 06 / End-Beneficiary VN"
        title="Equine Production VN (112920)"
        description="End-beneficiary value network for equine production facilities (DACH). Böhmer product positions highlighted. Includes full L7→L4 hierarchy, adjacency analysis, and strategic move-up assessment."
      />

      {/* ── Interactive VN Diagram ── */}
      <div style={{ marginBottom: 40 }}>
        <div className="section__eyebrow">Value Network · NAICS 112920</div>
        <h2 className="section__title">Reitstall / Equine Production Value Network</h2>
        <p className="section__sub">
          Equine Husbandry &amp; Sport Ecosystem — DACH region · Böhmer primary positions highlighted
        </p>
        <div style={{ marginTop: 20 }}>
          <VNDiagram data={vnReitstall as ValueNetworkData} />
        </div>
      </div>

      {/* ── Static content below diagram ── */}
      <div className="md">

        <SectionAnchor id="vr-scope" title="Scope" />
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>NAICS</strong></td><td><code>112920</code> — Horses and Other Equine Production</td></tr>
            <tr><td><strong>VN Type</strong></td><td>End-Beneficiary Process VN (operators: Reitställe, Gestüte, Pferdepensionen)</td></tr>
            <tr><td><strong>Geography</strong></td><td>DACH region (DE, AT, CH)</td></tr>
            <tr><td><strong>Böhmer Position</strong></td><td>L5 in two process segments (L6c and L6d)</td></tr>
            <tr><td><strong>Source VN</strong></td><td>Separate from the manufacturing VN (NAICS 333111) in 04_vn_bom.md</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="vr-overview" title="VN Overview" />
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>L7 Ecosystem</strong></td><td>Equine Husbandry &amp; Sport Ecosystem</td></tr>
            <tr>
              <td><strong>CFJ</strong></td>
              <td>Raise, house, feed, and condition horses in managed facilities so that animals remain healthy, tractable, and available for their designated use — breeding, sport, recreation, or instruction</td>
            </tr>
            <tr><td><strong>Top Level</strong></td><td>L7</td></tr>
          </tbody>
        </table>

        <h3>Segments (NAICS 112920 in DACH context)</h3>
        <table>
          <thead><tr><th>ID</th><th>Segment</th><th>Description</th><th>Böhmer Relevance</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Seg-A</strong></td>
              <td>Reitstall / Pension</td>
              <td style={{ fontSize: 12 }}>Commercial horse boarding + riding school. Multi-horse. Daily feed + paddock operations.</td>
              <td><span className="badge badge--strong">Primary target</span></td>
            </tr>
            <tr>
              <td><strong>Seg-B</strong></td>
              <td>Gestüt / Breeding</td>
              <td style={{ fontSize: 12 }}>Stud farm, breeding operations. Larger land, permanent infrastructure preferred.</td>
              <td><span className="badge badge--moderate">Secondary</span></td>
            </tr>
            <tr>
              <td><strong>Seg-C</strong></td>
              <td>Schulpferd / Reitschule</td>
              <td style={{ fontSize: 12 }}>Riding school with school horses. Intensive daily operations, high labor pressure.</td>
              <td><span className="badge badge--strong">Primary target</span></td>
            </tr>
            <tr>
              <td><strong>Seg-D</strong></td>
              <td>Turnierstall</td>
              <td style={{ fontSize: 12 }}>Competition stable. Premium infrastructure, horse welfare emphasis.</td>
              <td><span className="badge badge--moderate">Secondary</span></td>
            </tr>
            <tr>
              <td><strong>Seg-E</strong></td>
              <td>Freizeitpferd / Privathaltung</td>
              <td style={{ fontSize: 12 }}>Private leisure horse, 1–4 horses. Small scale.</td>
              <td><span className="badge badge--neutral">Tertiary</span></td>
            </tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="vr-l6" title="L6 Core Process Steps" />
        <table>
          <thead><tr><th>#</th><th>L6 Node</th><th>Job Family</th><th>Serves</th><th>Böhmer L5</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>L6a</strong></td>
              <td>Facility Infrastructure &amp; Site Preparation</td>
              <td style={{ fontSize: 12 }}>Establish and maintain the physical environment required to house and operate a horse facility</td>
              <td style={{ fontSize: 12 }}>Seg-A, Seg-B, Seg-C, Seg-D, Seg-E</td>
              <td>—</td>
            </tr>
            <tr>
              <td><strong>L6b</strong></td>
              <td>Animal Intake &amp; Identity Management</td>
              <td style={{ fontSize: 12 }}>Register, assess, and onboard incoming animals; establish individual health and nutrition baseline</td>
              <td style={{ fontSize: 12 }}>Seg-A, Seg-B, Seg-C, Seg-D</td>
              <td>—</td>
            </tr>
            <tr style={{ background: "rgba(253,255,152,0.04)" }}>
              <td><strong>L6c</strong></td>
              <td><strong>Daily Feeding &amp; Nutrition Management</strong></td>
              <td style={{ fontSize: 12 }}>Deliver correct type, quantity, and timing of feed to each animal while minimizing waste and contamination</td>
              <td style={{ fontSize: 12 }}>Seg-A, Seg-B, Seg-C, Seg-D, Seg-E</td>
              <td><span style={{ color: "var(--accent-yellow)", fontWeight: 700 }}>● Heuraufe</span></td>
            </tr>
            <tr style={{ background: "rgba(253,255,152,0.04)" }}>
              <td><strong>L6d</strong></td>
              <td><strong>Housing &amp; Paddock Space Management</strong></td>
              <td style={{ fontSize: 12 }}>Configure, operate, and reconfigure stable boxes, paddocks, and outdoor exercise areas for daily equine welfare and workflow</td>
              <td style={{ fontSize: 12 }}>Seg-A, Seg-B, Seg-C, Seg-D, Seg-E</td>
              <td><span style={{ color: "var(--accent-yellow)", fontWeight: 700 }}>● Paddockbox</span></td>
            </tr>
            <tr>
              <td><strong>L6e</strong></td>
              <td>Health &amp; Veterinary Care</td>
              <td style={{ fontSize: 12 }}>Maintain animal health through preventive protocols, farriery, and veterinary treatment</td>
              <td style={{ fontSize: 12 }}>Seg-A, Seg-B, Seg-C, Seg-D, Seg-E</td>
              <td>—</td>
            </tr>
            <tr>
              <td><strong>L6f</strong></td>
              <td>Manure &amp; Waste Management</td>
              <td style={{ fontSize: 12 }}>Remove, store, and dispose of dung and soiled bedding daily to meet Tierschutz and biosecurity standards</td>
              <td style={{ fontSize: 12 }}>Seg-A, Seg-B, Seg-C, Seg-D, Seg-E</td>
              <td>—</td>
            </tr>
            <tr>
              <td><strong>L6g</strong></td>
              <td>Training &amp; Conditioning</td>
              <td style={{ fontSize: 12 }}>Develop and maintain fitness, responsiveness, and gait quality in horses for their designated purpose</td>
              <td style={{ fontSize: 12 }}>Seg-A, Seg-C, Seg-D</td>
              <td>—</td>
            </tr>
            <tr>
              <td><strong>L6h</strong></td>
              <td>Breeding &amp; Reproduction</td>
              <td style={{ fontSize: 12 }}>Manage estrus cycles, breeding events, gestation, and foaling</td>
              <td style={{ fontSize: 12 }}>Seg-B</td>
              <td>—</td>
            </tr>
            <tr>
              <td><strong>L6i</strong></td>
              <td>Animal Sales, Transfer &amp; Dispatch</td>
              <td style={{ fontSize: 12 }}>Document ownership transfer, prepare animals for transport, arrange logistics</td>
              <td style={{ fontSize: 12 }}>Seg-B, Seg-D</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>

        <h3>L6 Horizontal Process Steps</h3>
        <table>
          <thead><tr><th>L6H Node</th><th>Job Family</th><th>Rationale</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>L6H-QA</strong></td>
              <td>Records, Compliance &amp; Tierschutz</td>
              <td style={{ fontSize: 12 }}>Equine ID passports (EU 504/2008), Tierschutzgesetz records, feeding logs — mandatory across all core steps</td>
            </tr>
            <tr>
              <td><strong>L6H-MNT</strong></td>
              <td>Facility Maintenance</td>
              <td style={{ fontSize: 12 }}>Structural repairs, equipment servicing — required for all L6 steps to run safely</td>
            </tr>
            <tr>
              <td><strong>L6H-HSE</strong></td>
              <td>Biosecurity &amp; Worker Safety</td>
              <td style={{ fontSize: 12 }}>Infection control, chemical handling, accident prevention — parallel to all core steps</td>
            </tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="vr-hierarchy" title="Full VN Hierarchy (L7 → L4)" />

        <h3>L6a — Facility Infrastructure &amp; Site Preparation</h3>
        <table>
          <thead><tr><th>Level</th><th>Node</th><th>Alternatives / Components</th></tr></thead>
          <tbody>
            <tr>
              <td>L5</td>
              <td><strong>Stable Building / Barn Structure</strong></td>
              <td style={{ fontSize: 12 }}>1. Prefab steel hall [~45%] · 2. Timber barn [~35%] · 3. Masonry construction [~20%] | Confidence: LOW</td>
            </tr>
            <tr>
              <td>L4</td>
              <td colSpan={2} style={{ fontSize: 12, color: "var(--text-gray)" }}>Structural frame (steel portal frame or timber post-and-beam) · Roof cladding and guttering · Floor drainage system · Ventilation and light openings</td>
            </tr>
            <tr>
              <td>L5</td>
              <td><strong>Riding Arena Surface &amp; Enclosure</strong></td>
              <td style={{ fontSize: 12 }}>1. Sand/fibre surface arena [~55%] · 2. Natural turf paddock [~30%] · 3. Synthetic surface (Equisand) [~15%] | Confidence: LOW</td>
            </tr>
            <tr>
              <td>L4</td>
              <td colSpan={2} style={{ fontSize: 12, color: "var(--text-gray)" }}>Surface substrate layer · Perimeter board / fence · Lighting fixtures (indoor arenas)</td>
            </tr>
            <tr>
              <td>L5</td>
              <td><strong>Site Access &amp; Hard Standing</strong></td>
              <td style={{ fontSize: 12 }}>1. Poured concrete/tarmac [~60%] · 2. Compacted gravel [~35%] · 3. Permeable pavers [~5%] | Confidence: LOW</td>
            </tr>
            <tr>
              <td>L4</td>
              <td colSpan={2} style={{ fontSize: 12, color: "var(--text-gray)" }}>Sub-base layer · Surface layer · Drainage channels</td>
            </tr>
          </tbody>
        </table>

        <h3>L6b — Animal Intake &amp; Identity Management</h3>
        <table>
          <thead><tr><th>Level</th><th>Node</th><th>Alternatives / Components</th></tr></thead>
          <tbody>
            <tr>
              <td>L5</td>
              <td><strong>Equine Identification System</strong></td>
              <td style={{ fontSize: 12 }}>1. EU passport + RFID microchip (mandatory) [~100%] | Confidence: HIGH [EU Reg. 504/2008]</td>
            </tr>
            <tr>
              <td>L4</td>
              <td colSpan={2} style={{ fontSize: 12, color: "var(--text-gray)" }}>Microchip transponder (ISO 11784/11785) · Passport document storage · Digital management software (e.g., StableMate, eHorse)</td>
            </tr>
            <tr>
              <td>L5</td>
              <td><strong>Animal Assessment Equipment</strong></td>
              <td style={{ fontSize: 12 }}>1. Veterinary triage kit (manual) [~65%] · 2. Digital health monitoring (wearable) [~35%] | Confidence: LOW</td>
            </tr>
            <tr>
              <td>L4</td>
              <td colSpan={2} style={{ fontSize: 12, color: "var(--text-gray)" }}>Body condition scoring tools · Temperature / vital sign instruments · Farriery assessment (hoof pick, stand)</td>
            </tr>
          </tbody>
        </table>

        <h3>L6c — Daily Feeding &amp; Nutrition Management</h3>
        <div className="card" style={{ padding: 12, marginBottom: 16 }}>
          <strong style={{ color: "var(--accent-yellow)" }}>← BÖHMER HEURAUFE PRIMARY POSITION (L5)</strong>
        </div>
        <table>
          <thead><tr><th>Level</th><th>Node</th><th>Alternatives / Components</th></tr></thead>
          <tbody>
            <tr style={{ background: "rgba(253,255,152,0.04)" }}>
              <td>L5</td>
              <td><strong>Multi-Horse Outdoor Hay Rack / Station ← Böhmer Heuraufe</strong></td>
              <td style={{ fontSize: 12 }}>Roofed, galvanized, multi-access outdoor hay feeding station; tractor-movable</td>
            </tr>
            <tr>
              <td>L4</td>
              <td colSpan={2} style={{ fontSize: 12, color: "var(--text-gray)" }}>Structural base frame with tractor fork pockets · Roof assembly (pitched profile, corrugated sheet) · Hay containment grid / net frame · Post &amp; upright support structure · Surface coating system (hot-dip galvanizing + powder topcoat) · Skid runner / ground contact</td>
            </tr>
            <tr>
              <td>L5</td>
              <td><strong>Grain &amp; Concentrate Dispensing</strong></td>
              <td style={{ fontSize: 12 }}>1. Manual trough/bucket (individual or shared) [~55%] · 2. Automatic RFID-controlled station (per-horse dosing) [~30%] · 3. Semi-auto drop dispenser [~15%] | Confidence: LOW</td>
            </tr>
            <tr>
              <td>L4</td>
              <td colSpan={2} style={{ fontSize: 12, color: "var(--text-gray)" }}>Feed trough / bin · Dosing gate or portion mechanism · Trough cleaning / drainage port</td>
            </tr>
            <tr>
              <td>L5</td>
              <td><strong>Automatic Waterers</strong></td>
              <td style={{ fontSize: 12 }}>1. Individual heated ball-valve drinker [~50%] · 2. Shared heated trough [~35%] · 3. Frost-free tank [~15%] | Confidence: LOW</td>
            </tr>
            <tr>
              <td>L4</td>
              <td colSpan={2} style={{ fontSize: 12, color: "var(--text-gray)" }}>Drinking bowl / basin · Float valve or pressure regulator · Heating element (frost protection) · Water supply line and connection</td>
            </tr>
            <tr>
              <td>L5</td>
              <td><strong>Feed Storage Infrastructure</strong></td>
              <td style={{ fontSize: 12 }}>1. Hay barn / covered bulk storage [~50%] · 2. Grain silo / bins [~35%] · 3. Mobile container storage [~15%] | Confidence: LOW</td>
            </tr>
            <tr>
              <td>L4</td>
              <td colSpan={2} style={{ fontSize: 12, color: "var(--text-gray)" }}>Structural storage enclosure · Loading / unloading access (door, ramp) · Vermin exclusion barrier · Ventilation openings</td>
            </tr>
          </tbody>
        </table>

        <h4>Heuraufe L5 Alternatives — Market Share Breakdown</h4>
        <table>
          <thead><tr><th>Alternative</th><th>Share % [EST]</th><th>Böhmer</th></tr></thead>
          <tbody>
            {[
              { name: "Multi-horse outdoor hay rack/station (roofed, galvanized steel, multi-access)", share: 20, bohmer: true },
              { name: "Round bale ring feeder (circular frame for large round bales)", share: 35, bohmer: false },
              { name: "Wall-mounted hay rack / corner feeder (single-horse, indoor/shelter)", share: 25, bohmer: false },
              { name: "Slow-feed hay net station (net bag or frame, individual)", share: 15, bohmer: false },
              { name: "Automated dispensing hay feeder (RFID-controlled portion release)", share: 5, bohmer: false },
            ].map((a) => (
              <tr key={a.name} style={a.bohmer ? { background: "rgba(253,255,152,0.04)" } : undefined}>
                <td>{a.bohmer ? <strong>{a.name}</strong> : a.name}</td>
                <td style={{ fontFamily: "var(--font-mono)", textAlign: "center" }}>{a.share}%</td>
                <td>{a.bohmer ? <span className="badge badge--accent">Böhmer</span> : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>
          Confidence: LOW [SRC: market inference from GMI Equestrian Equipment Report 2025, Kerbl/Farmco product category observation]
        </p>

        <h3>L6d — Housing &amp; Paddock Space Management</h3>
        <div className="card" style={{ padding: 12, marginBottom: 16 }}>
          <strong style={{ color: "var(--accent-yellow)" }}>← BÖHMER PADDOCKBOX PRIMARY POSITION (L5)</strong>
        </div>
        <table>
          <thead><tr><th>Level</th><th>Node</th><th>Alternatives / Components</th></tr></thead>
          <tbody>
            <tr style={{ background: "rgba(253,255,152,0.04)" }}>
              <td>L5</td>
              <td><strong>Mobile Modular Panel System ← Böhmer Paddockbox</strong></td>
              <td style={{ fontSize: 12 }}>Galvanized steel RHS tube-frame panels on heavy-duty castors with hinged/removable connectors; repositionable without disassembly; wall-hinge variant available</td>
            </tr>
            <tr>
              <td>L4</td>
              <td colSpan={2} style={{ fontSize: 12, color: "var(--text-gray)" }}>Panel tube-frame structure (RHS welded) · Castor &amp; wheel brake assembly (≥800 kg lateral load) · Post hinge &amp; panel lock connector · Wall-mount anchor bracket (fixed-position variant) · Surface coating system (hot-dip galvanizing + powder topcoat)</td>
            </tr>
            <tr>
              <td>L5</td>
              <td><strong>Stable Stall Equipment (interior box stalls)</strong></td>
              <td style={{ fontSize: 12 }}>1. Traditional fixed timber box [~50%] · 2. Prefab steel/modular stall system [~35%] · 3. Open-front / group housing [~15%] | Confidence: LOW</td>
            </tr>
            <tr>
              <td>L4</td>
              <td colSpan={2} style={{ fontSize: 12, color: "var(--text-gray)" }}>Stall partition walls / grids · Stall door with hinge and latch · Rubber matting / floor lining · Hay ring / corner net holder (interior)</td>
            </tr>
            <tr>
              <td>L5</td>
              <td><strong>Bedding Management Equipment</strong></td>
              <td style={{ fontSize: 12 }}>1. Wheelbarrow + fork (manual) [~60%] · 2. Mechanical stall cleaner / skid-steer attachment [~25%] · 3. Rubber mat system (minimal bedding) [~15%] | Confidence: LOW</td>
            </tr>
            <tr>
              <td>L4</td>
              <td colSpan={2} style={{ fontSize: 12, color: "var(--text-gray)" }}>Mucking-out cart / wheelbarrow · Dung fork / scraper · Rubber floor mat · Shavings/straw delivery chute or screw conveyor</td>
            </tr>
          </tbody>
        </table>

        <h4>Paddockbox L5 Alternatives — Market Share Breakdown</h4>
        <table>
          <thead><tr><th>Alternative</th><th>Share % [EST]</th><th>Böhmer</th></tr></thead>
          <tbody>
            {[
              { name: "Mobile modular panel system (wheeled steel/aluminium tube frames)", share: 15, bohmer: true },
              { name: "Permanent post-and-rail fence (timber or galv. steel)", share: 45, bohmer: false },
              { name: "Electric tape / wire fencing (plastic posts, stranded wire)", share: 25, bohmer: false },
              { name: "High-tensile wire / V-mesh perimeter fencing", share: 10, bohmer: false },
              { name: "Aluminium portable corral panels (pin-hinge, no castors)", share: 5, bohmer: false },
            ].map((a) => (
              <tr key={a.name} style={a.bohmer ? { background: "rgba(253,255,152,0.04)" } : undefined}>
                <td>{a.bohmer ? <strong>{a.name}</strong> : a.name}</td>
                <td style={{ fontFamily: "var(--font-mono)", textAlign: "center" }}>{a.share}%</td>
                <td>{a.bohmer ? <span className="badge badge--accent">Böhmer</span> : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>
          Confidence: LOW [SRC: retail catalogue observation, Cattlefence.de, RoFlexs, Loesdau assortment 2025]
        </p>

        <h3>L6e — Health &amp; Veterinary Care</h3>
        <table>
          <thead><tr><th>L5</th><th>L4 Components</th></tr></thead>
          <tbody>
            <tr><td><strong>Farriery Equipment</strong></td><td style={{ fontSize: 12 }}>Farrier stand / foot support · Hoof pick, trimming tools · Forge / anvil (traveling farrier's kit)</td></tr>
            <tr><td><strong>Veterinary Treatment Stocks / Restraint</strong></td><td style={{ fontSize: 12 }}>Examination stocks (crushes) · Restraint halter / twitch · Treatment cabinet / trolley</td></tr>
            <tr><td><strong>Health Monitoring Systems</strong></td><td style={{ fontSize: 12 }}>Temperature probe (rectal / non-contact) · Heart rate / respiratory monitor · Digital health log (software)</td></tr>
          </tbody>
        </table>

        <h3>L6f — Manure &amp; Waste Management</h3>
        <table>
          <thead><tr><th>L5</th><th>L4 Components</th></tr></thead>
          <tbody>
            <tr><td><strong>Manure Collection Equipment</strong></td><td style={{ fontSize: 12 }}>Wheelbarrow or manure cart · Loading ramp / spreader hitch</td></tr>
            <tr><td><strong>Manure Storage / Mist</strong></td><td style={{ fontSize: 12 }}>Manure bunker or container · Leachate drainage system · Cover / ventilation</td></tr>
            <tr><td><strong>Spreader / Disposal Equipment</strong></td><td style={{ fontSize: 12 }}>Manure spreader (mechanical or outsourced service) · Biogas inlet (if on-site digester)</td></tr>
          </tbody>
        </table>

        <h3>L6g — Training &amp; Conditioning</h3>
        <table>
          <thead><tr><th>L5</th><th>L4 Components</th></tr></thead>
          <tbody>
            <tr><td><strong>Lunging &amp; Groundwork Equipment</strong></td><td style={{ fontSize: 12 }}>Lunging caveson / halter · Long reins · Marker cones / poles</td></tr>
            <tr><td><strong>Mechanical Walker / Hot Walker</strong></td><td style={{ fontSize: 12 }}>Motorized arm structure · Rope/lead attachment · Timer / speed control</td></tr>
            <tr><td><strong>Rider Training Aids</strong></td><td style={{ fontSize: 12 }}>Cavaletti / pole set · Jump standards and poles · Footing maintenance tools (arena harrow)</td></tr>
          </tbody>
        </table>

        <h3>L6h — Breeding &amp; Reproduction (Segment-B only)</h3>
        <table>
          <thead><tr><th>L5</th><th>L4 Components</th></tr></thead>
          <tbody>
            <tr><td><strong>Breeding Handling Equipment</strong></td><td style={{ fontSize: 12 }}>Breeding stocks (phantom or live cover) · Semen collection / evaluation kit · AI catheter set</td></tr>
            <tr><td><strong>Foaling Monitoring</strong></td><td style={{ fontSize: 12 }}>Foaling alarm (wearable sensor) · CCTV / night vision camera · Foaling box bedding system</td></tr>
          </tbody>
        </table>

        <h3>L6i — Animal Sales, Transfer &amp; Dispatch</h3>
        <table>
          <thead><tr><th>L5</th><th>L4 Components</th></tr></thead>
          <tbody>
            <tr><td><strong>Animal Transport Vehicles / Trailers</strong></td><td style={{ fontSize: 12 }}>Horse trailer / lorry body · Ramp and safety barrier · Tie ring / partition</td></tr>
            <tr><td><strong>Documentation &amp; Labelling</strong></td><td style={{ fontSize: 12 }}>Passport storage / pouch · Veterinary certificate forms · Transport declaration form</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="vr-activation" title="Segment Activation Matrix" />
        <table>
          <thead>
            <tr>
              <th>L6 Segment</th>
              <th style={{ textAlign: "center" }}>Seg-A Reitstall</th>
              <th style={{ textAlign: "center" }}>Seg-B Gestüt</th>
              <th style={{ textAlign: "center" }}>Seg-C Reitschule</th>
              <th style={{ textAlign: "center" }}>Seg-D Turnierstall</th>
              <th style={{ textAlign: "center" }}>Seg-E Privat</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>L6a Facility Infrastructure</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td></tr>
            <tr><td>L6b Animal Intake &amp; Identity</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>—</td></tr>
            <tr style={{ background: "rgba(253,255,152,0.04)" }}>
              <td><strong>L6c Feeding &amp; Nutrition ← Heuraufe</strong></td>
              <td style={{ textAlign: "center" }}><strong>✓</strong></td>
              <td style={{ textAlign: "center" }}><strong>✓</strong></td>
              <td style={{ textAlign: "center" }}><strong>✓</strong></td>
              <td style={{ textAlign: "center" }}><strong>✓</strong></td>
              <td style={{ textAlign: "center" }}><strong>✓</strong></td>
            </tr>
            <tr style={{ background: "rgba(253,255,152,0.04)" }}>
              <td><strong>L6d Housing &amp; Paddock ← Paddockbox</strong></td>
              <td style={{ textAlign: "center" }}><strong>✓</strong></td>
              <td style={{ textAlign: "center" }}><strong>✓</strong></td>
              <td style={{ textAlign: "center" }}><strong>✓</strong></td>
              <td style={{ textAlign: "center" }}><strong>✓</strong></td>
              <td style={{ textAlign: "center" }}><strong>✓</strong></td>
            </tr>
            <tr><td>L6e Health &amp; Veterinary Care</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td></tr>
            <tr><td>L6f Manure &amp; Waste Management</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td></tr>
            <tr><td>L6g Training &amp; Conditioning</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>—</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>—</td></tr>
            <tr><td>L6h Breeding &amp; Reproduction</td><td style={{ textAlign: "center" }}>—</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>—</td><td style={{ textAlign: "center" }}>—</td><td style={{ textAlign: "center" }}>—</td></tr>
            <tr><td>L6i Sales, Transfer &amp; Dispatch</td><td style={{ textAlign: "center" }}>—</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>—</td><td style={{ textAlign: "center" }}>✓</td><td style={{ textAlign: "center" }}>—</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>
          L6c and L6d activate across all segments — universal infrastructure demand. L6g and L6h are specialty-only. Böhmer's products (Heuraufe in L6c, Paddockbox in L6d) have the broadest addressable reach across segments.
        </p>

        <hr />
        <SectionAnchor id="vr-adjacency" title="Phase 3 — Strategic Adjacency Analysis" />

        <h3>04e — Direct Competence Transfer Scan (Full VN)</h3>
        <blockquote>
          Company competences: welded galvanized structural steel (S235/S355 SHS/RHS), DIN EN ISO 3834-2 certified welding, DIN EN 1090-1/2 structural steel, laser cutting, CNC bending, powder coat (outsourced surface treatment), DACH logistics.
        </blockquote>
        <table>
          <thead><tr><th>VN Unit</th><th>Level</th><th>Company Has It?</th><th>Adaptation Effort</th><th>Rationale</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Manure Bunker / Container</strong></td>
              <td>L4 under L6f</td>
              <td><span className="badge badge--strong">YES</span></td>
              <td><span className="badge badge--strong">LOW</span></td>
              <td style={{ fontSize: 12 }}>Direct analogy to current fabrication; rectangular welded steel box with drain is within Böhmer's existing weld jig capability. Market: Reitställe buy new bunkers when expanding.</td>
            </tr>
            <tr>
              <td><strong>Stable Stall Grid / Partition</strong></td>
              <td>L4 under L6d L5 Stall Equipment</td>
              <td><span className="badge badge--strong">YES</span></td>
              <td><span className="badge badge--strong">LOW</span></td>
              <td style={{ fontSize: 12 }}>Welded RHS/flat bar grid panels — same material/process as Heuraufe hay grid. Horse-contact grinding and galvanizing already in scope.</td>
            </tr>
            <tr>
              <td><strong>Hay Barn / Covered Storage Structure</strong></td>
              <td>L5 under L6c</td>
              <td><span className="badge badge--moderate">PARTIAL</span></td>
              <td><span className="badge badge--moderate">MEDIUM</span></td>
              <td style={{ fontSize: 12 }}>DIN EN 1090-2 certified steel construction matches; missing: foundation design, civil works, full building permits. Could supply the steel frame sub-assembly to a general contractor.</td>
            </tr>
            <tr>
              <td><strong>Prefab Steel Stall System</strong></td>
              <td>L5 under L6d</td>
              <td><span className="badge badge--moderate">PARTIAL</span></td>
              <td><span className="badge badge--moderate">MEDIUM</span></td>
              <td style={{ fontSize: 12 }}>Frame fabrication is within scope; interior wood/rubber lining, door hardware, and finish are outside current competence. 50–60% of value chain overlap.</td>
            </tr>
            <tr>
              <td><strong>Site Access Hard Standing — Steel Edging / Grating</strong></td>
              <td>L4 under L6a</td>
              <td><span className="badge badge--moderate">PARTIAL</span></td>
              <td><span className="badge badge--moderate">MEDIUM</span></td>
              <td style={{ fontSize: 12 }}>Laser-cut and bent steel edge sections — simple profile fabrication. Market niche only; standalone sales effort questionable at low volume.</td>
            </tr>
            <tr>
              <td><strong>Mechanical Walker Arm Structure</strong></td>
              <td>L5 under L6g</td>
              <td><span className="badge badge--moderate">PARTIAL</span></td>
              <td><span className="badge badge--weak">HIGH</span></td>
              <td style={{ fontSize: 12 }}>Steel arm fabrication is within scope but motor, bearing, safety-speed-control integration required. Excluded — HIGH adaptation effort.</td>
            </tr>
          </tbody>
        </table>

        <h3>04f — Strategic Adjacency Expansion (within L6d segment)</h3>
        <p style={{ fontSize: 13, color: "var(--text-gray)" }}>Current position: L5 "Mobile Modular Panel System" under L6d Housing &amp; Paddock Space Management</p>
        <table>
          <thead><tr><th>Adjacent L5 Unit</th><th>Current Incumbents</th><th>Competence Gap</th><th>Investment to Bridge</th><th>Strategic Fit</th><th>Rationale</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Stable Stall Equipment (prefab steel stall)</strong></td>
              <td style={{ fontSize: 12 }}>Hörmann Agricultural, Equipo, Jansen (NL), Kerbl (DE-stall kits)</td>
              <td style={{ fontSize: 12 }}>Interior wood/rubber lining, stall door hardware (latches, bar grids), CE Machinery Directive docs</td>
              <td style={{ fontSize: 12 }}>12–18 mo, ~EUR 150–250K tooling + certification</td>
              <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>8/10</td>
              <td style={{ fontSize: 12 }}>~60% capability overlap — same welded RHS frame, galvanizing, bar grid as Paddockbox; existing Reitstall customer relationship is a channel advantage.</td>
            </tr>
            <tr>
              <td><strong>Manure Collection Cart / Bunker</strong></td>
              <td style={{ fontSize: 12 }}>Local fabricators, Joskin (BE), Fliegl (DE)</td>
              <td style={{ fontSize: 12 }}>Volume containment design, tipping mechanism (optional), drain fitting</td>
              <td style={{ fontSize: 12 }}>6–12 mo, ~EUR 30–60K</td>
              <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>6/10</td>
              <td style={{ fontSize: 12 }}>Welded steel box — straightforward extension of current weld capability. Low unit value (EUR 200–800 per bunker). Supplements product line but not a growth driver on its own.</td>
            </tr>
            <tr>
              <td><strong>Bedding Management Equipment (rubber mat)</strong></td>
              <td style={{ fontSize: 12 }}>Gummiwerk Kraiburg (DE), Kiefer (DE), Stapferhaus (DE)</td>
              <td style={{ fontSize: 12 }}>Rubber compounding, vulcanization, anti-slip surface — completely outside metal fabrication</td>
              <td style={{ fontSize: 12 }}>&gt;24 mo, new material capability</td>
              <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>1/10</td>
              <td style={{ fontSize: 12 }}>No competence overlap; excluded.</td>
            </tr>
          </tbody>
        </table>

        <h3>04g — Vertical Move-Up Assessment</h3>
        <table>
          <thead><tr><th>Current Position</th><th>Target Position (1 level up)</th><th>What Must Be Added</th><th>Competitor at Target Level</th><th>Feasibility</th><th>Economic Rationale</th></tr></thead>
          <tbody>
            <tr>
              <td style={{ fontSize: 12 }}>L5: Multi-Horse Outdoor Hay Rack (under L6c)</td>
              <td style={{ fontSize: 12 }}>L6c: Daily Feeding &amp; Nutrition Management integrator</td>
              <td style={{ fontSize: 12 }}>Grain dispensers (RFID automation), automatic waterers, feed management software, nutritionist partnerships</td>
              <td style={{ fontSize: 12 }}>Schauer Agrotronic (AT), FeedComp (BE), Lely (NL)</td>
              <td><span className="badge badge--weak">LOW</span></td>
              <td style={{ fontSize: 12 }}>Moving from a single welded steel product to an integrated feeding management system requires sensor/software competence Böhmer does not possess. TAM at L6c integrator level ~EUR 50–100M DACH vs. EUR 3–8M for hay rack sub-segment.</td>
            </tr>
            <tr>
              <td style={{ fontSize: 12 }}>L5: Mobile Modular Panel System (under L6d)</td>
              <td style={{ fontSize: 12 }}>L6d: Housing &amp; Paddock Space Management integrator</td>
              <td style={{ fontSize: 12 }}>Permanent fencing supply, stall systems, bedding logistics, site planning, civil works coordination</td>
              <td style={{ fontSize: 12 }}>Hörmann, Equipo, large Stallbau contractors</td>
              <td><span className="badge badge--weak">LOW</span></td>
              <td style={{ fontSize: 12 }}>Full housing &amp; paddock integrator is a construction / general contracting business — project-based selling, civil work coordination, large balance sheet requirements. Böhmer has &lt;30% of required capabilities.</td>
            </tr>
          </tbody>
        </table>
        <blockquote>
          Both vertical move-ups score LOW feasibility organically. The more actionable near-term path is the adjacent L5 expansion into prefab steel stall equipment (04f, Strategic Fit 8/10), which leverages existing welded-steel competence without requiring software, civil, or materials-science capability.
        </blockquote>

        <hr />
        <SectionAnchor id="vr-summary" title="Summary" />
        <table>
          <thead><tr><th>Product</th><th>VN Position</th><th>L6 Segment</th><th>L5 Node</th><th>Activation Breadth</th><th>Böhmer Differentiator in VN</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Heuraufe</strong></td>
              <td><span className="badge badge--strong">PRIMARY</span></td>
              <td>L6c Feeding &amp; Nutrition</td>
              <td>Multi-Horse Outdoor Hay Rack/Station</td>
              <td>All 5 output types</td>
              <td style={{ fontSize: 12 }}>Only roofed, multi-access, tractor-movable alternative in its L5 slot; competitors offer simpler ring feeders or single-horse racks</td>
            </tr>
            <tr>
              <td><strong>Paddockbox</strong></td>
              <td><span className="badge badge--strong">PRIMARY</span></td>
              <td>L6d Housing &amp; Paddock</td>
              <td>Mobile Modular Panel System</td>
              <td>All 5 output types</td>
              <td style={{ fontSize: 12 }}>Only castor-mounted, fold-flat, wall-attachable panel system; direct competitors (RoFlexs, Cattlefence) offer simpler clip-pin portable panels without tractor clearance</td>
            </tr>
          </tbody>
        </table>
        <div className="card" style={{ padding: 16, marginTop: 12 }}>
          <strong style={{ color: "var(--accent-yellow)" }}>Highest-value adjacency:</strong> Prefab steel stall equipment (L5 under L6d) — 60% competence overlap, same buyer persona, same procurement event, 8/10 strategic fit. Investment: EUR 150–250K, 12–18 months.
        </div>

      </div>
    </section>
  );
}
