/**
 * 08 Adjacent Capabilities — Full analysis from 08_adjacent_capabilities.md
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

export default function AdjacentCapabilities() {
  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 08 / Adjacent Opportunities"
        title="Adjacent NAICS Capabilities"
        description="Four adjacent capability opportunities from 06_vn_reitstall.md Phase 3 screened against all 8 constraints from 01_capability_assessment.md."
      />
      <article className="md">

        <SectionAnchor id="adj-scope" title="Scope" />
        <p>Four adjacent capability opportunities from 06_vn_reitstall.md Phase 3 are evaluated here. The eight capability constraints (C1–C8) from 01_capability_assessment.md are re-applied to each adjacency. Any knockout eliminates the opportunity.</p>
        <table>
          <thead><tr><th>ID</th><th>Adjacent Opportunity</th><th>VN Position</th><th>Adaptation (06_vn)</th><th>Strategic Fit (06_vn)</th></tr></thead>
          <tbody>
            <tr><td><strong>A1</strong></td><td>Manure Bunker / Container</td><td>L4 under L6f</td><td>LOW</td><td>6/10</td></tr>
            <tr><td><strong>A2</strong></td><td>Stable Stall Grid / Partition</td><td>L4 under L6d</td><td>LOW</td><td>~8/10 (bundled)</td></tr>
            <tr><td><strong>A3</strong></td><td>Hay Barn Steel Frame Sub-Assembly</td><td>L5 under L6c</td><td>MEDIUM</td><td>5/10</td></tr>
            <tr><td><strong>A4</strong></td><td>Prefab Steel Stall System</td><td>L5 under L6d</td><td>MEDIUM</td><td>8/10</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>Mechanical Walker Arm (HIGH adaptation, 06_vn) and Rubber Mat (no capability overlap) are excluded from assessment.</p>

        <hr />
        <SectionAnchor id="adj-constraints" title="Step 07 — Constraint Register" />
        <p>Carried forward unchanged from 01_capability_assessment.md. All constraints are <code>is_absolute = false</code>.</p>
        <table>
          <thead><tr><th>#</th><th>Name</th><th>Type</th><th>Threshold</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td><strong>C1</strong></td><td>Laser Bed Dimension Limit</td><td><span className="badge badge--neutral">physical</span></td><td><code>3000 × 1500 mm</code></td><td style={{ fontSize: 12 }}>Panels exceeding bed must be segmented</td></tr>
            <tr><td><strong>C2</strong></td><td>Material Thickness Envelope</td><td><span className="badge badge--neutral">physical</span></td><td><code>1–20 mm</code></td><td style={{ fontSize: 12 }}>Outside range: plasma/oxy-fuel needed</td></tr>
            <tr><td><strong>C3</strong></td><td>Corrosion Protection Gap</td><td><span className="badge badge--neutral">chemical</span></td><td><code>C3+ ISO 12944</code></td><td style={{ fontSize: 12 }}>No in-house galvanizing / powder coating</td></tr>
            <tr><td><strong>C4</strong></td><td>JIT-to-Push Transition</td><td><span className="badge badge--neutral">operational</span></td><td>—</td><td style={{ fontSize: 12 }}>Zero finished-goods inventory model today</td></tr>
            <tr><td><strong>C5</strong></td><td>No Outbound Sales / Distribution</td><td><span className="badge badge--neutral">operational</span></td><td>—</td><td style={{ fontSize: 12 }}>No dealer network, no equestrian trade channel</td></tr>
            <tr><td><strong>C6</strong></td><td>Small-Batch OEM Economics</td><td><span className="badge badge--neutral">economic</span></td><td><code>50–300 units/yr</code></td><td style={{ fontSize: 12 }}>Machine scheduling conflicts with contract work</td></tr>
            <tr><td><strong>C7</strong></td><td>CE / Machinery Directive Compliance</td><td><span className="badge badge--neutral">regulatory</span></td><td><code>2006/42/EC</code></td><td style={{ fontSize: 12 }}>Technical file + risk assessment required</td></tr>
            <tr><td><strong>C8</strong></td><td>Outdoor Animal-Contact Durability</td><td><span className="badge badge--neutral">environmental</span></td><td><code>15 yr outdoor</code></td><td style={{ fontSize: 12 }}>Horse loads 500–800 kg; urine/freeze-thaw</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="adj-a1" title="A1: Manure Bunker / Container" />
        <p>Welded rectangular steel box with drain fitting and lid/cover. Static. Horse-free zone in operation.<br />
          Unit value: EUR 200–800 [EST]. Buyer: same Reitstall buyer as core products.</p>
        <table>
          <thead><tr><th>C#</th><th>Verdict</th><th>Rationale</th><th>Mitigation</th><th>Cost</th><th>Time</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>C1 Laser Bed</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>Container panels ≤ 1500 × 1000 mm; no segmentation needed</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>C2 Thickness</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>3–6 mm mild steel sheet; within envelope</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>C3 Corrosion</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>Outdoor manure storage — urine acids + rain; ISO 12944 C3 minimum; same outsource galvanizing path as Heuraufe</td>
              <td style={{ fontSize: 12 }}>Batch with existing galvanizing runs; specify C3 coating in BOM</td>
              <td style={{ fontSize: 12 }}>low</td><td style={{ fontSize: 12 }}>1–2 mo</td>
            </tr>
            <tr>
              <td><strong>C4 JIT-to-Push</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>Same model transition; bunkers can be produced in same OEM batch window</td>
              <td style={{ fontSize: 12 }}>Piggyback on existing pilot-batch plan</td>
              <td style={{ fontSize: 12 }}>low</td><td style={{ fontSize: 12 }}>3–6 mo</td>
            </tr>
            <tr>
              <td><strong>C5 No Sales Channel</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>Add-on cross-sell to same buyer at same trade fair; no separate channel required</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>C6 Small-Batch</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>EUR 200–800 unit value is very low; viable only as bundled catalog add-on, not standalone SKU</td>
              <td style={{ fontSize: 12 }}>Bundle with Heuraufe/Paddockbox order; do not market separately</td>
              <td style={{ fontSize: 12 }}>low</td><td style={{ fontSize: 12 }}>1 mo</td>
            </tr>
            <tr>
              <td><strong>C7 CE / Machinery</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>Static container; no moving parts; GPSR self-declaration only</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>C8 Animal-Contact</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>Horses do not contact manure bunkers operationally; durability governed by C3 corrosion protection, not mechanical impact</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
          </tbody>
        </table>
        <div className="card" style={{ padding: 16, marginTop: 12 }}>
          <strong style={{ color: "var(--status-good)" }}>Verdict: SURVIVING — 3 mitigable, 5 none.</strong>
          <p style={{ marginBottom: 0, marginTop: 8, fontSize: 13 }}>Very low unit value makes this viable only as a catalog add-on item. Not a standalone revenue line.</p>
        </div>

        <hr />
        <SectionAnchor id="adj-a2" title="A2: Stable Stall Grid / Partition" />
        <p>Welded RHS / flat bar grid panels, post socket, latched door frame. Direct analogy to Heuraufe bar-grid and Paddockbox panel frame. Buyer: Reitstall (same procurement event as Paddockbox).<br />
          Unit value: EUR 600–2,000 per partition panel [EST based on competitors Kerbl, Jansen].</p>
        <table>
          <thead><tr><th>C#</th><th>Verdict</th><th>Rationale</th><th>Mitigation</th><th>Cost</th><th>Time</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>C1 Laser Bed</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>Standard partition panel ≤ 2400 × 1800 mm; within bed</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>C2 Thickness</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>20 mm round bar + 40×40×3 mm tube; within 1–20 mm envelope</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>C3 Corrosion</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>Indoor stable environment ISO 12944 C2–C3 (ammonia + condensation); hot-dip galvanize or high-build epoxy primer; same outsource path</td>
              <td style={{ fontSize: 12 }}>Same outsource galvanizer; C2 spec acceptable for interior</td>
              <td style={{ fontSize: 12 }}>low</td><td style={{ fontSize: 12 }}>1–2 mo</td>
            </tr>
            <tr>
              <td><strong>C4 JIT-to-Push</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>Stall grid dimensions are standard (1.2 m stall width); enables build-to-stock per standard dimension</td>
              <td style={{ fontSize: 12 }}>Build limited stock of standard-width panels</td>
              <td style={{ fontSize: 12 }}>low</td><td style={{ fontSize: 12 }}>3–6 mo</td>
            </tr>
            <tr>
              <td><strong>C5 No Sales Channel</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>Same Reitstall buyer but multi-stall orders require contractor/builder involvement; incremental channel extension</td>
              <td style={{ fontSize: 12 }}>Bundle in Fachhandel catalog alongside Paddockbox; offer to stable builders</td>
              <td style={{ fontSize: 12 }}>low</td><td style={{ fontSize: 12 }}>6–12 mo</td>
            </tr>
            <tr>
              <td><strong>C6 Small-Batch</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>Multi-box stable order (10 stalls = ~20 panels) = EUR 12,000–40,000 per project; favorable economics</td>
              <td style={{ fontSize: 12 }}>Project-based pricing; minimum order 5 panels</td>
              <td style={{ fontSize: 12 }}>low</td><td style={{ fontSize: 12 }}>1–3 mo</td>
            </tr>
            <tr>
              <td><strong>C7 CE / Machinery</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>Fixed partitions with manual latch are not machinery; agricultural facility fixtures under GPSR / EN 13482 (farm equipment); no Machinery Directive</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>C8 Animal-Contact</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>Horses kick and push against stall partitions; DIN EN ISO 3834-2 weld spec applies; indoor C2–C3 load same as Paddockbox bar-grid; no cyclic fatigue requirement (static loads only)</td>
              <td style={{ fontSize: 12 }}>Apply S355 + closed-profile spec per existing Paddockbox BOM spec</td>
              <td style={{ fontSize: 12 }}>low</td><td style={{ fontSize: 12 }}>2–3 mo</td>
            </tr>
          </tbody>
        </table>
        <div className="card" style={{ padding: 16, marginTop: 12 }}>
          <strong style={{ color: "var(--status-good)" }}>Verdict: SURVIVING — 4 mitigable, 4 none.</strong>
          <p style={{ marginBottom: 0, marginTop: 8, fontSize: 13 }}>Direct competence transfer (same bar-grid weld skill as Heuraufe hay containment system). Cross-sell opportunity at the same Reitstall procurement event as Paddockbox.</p>
        </div>

        <hr />
        <SectionAnchor id="adj-a3" title="A3: Hay Barn Steel Frame Sub-Assembly" />
        <p>Structural steel portal frame for covered hay storage; Böhmer supplies the steel sub-assembly only (not civil works, foundations, or building permit documentation). Supply to general contractors or agricultural building companies.<br />
          Unit value: EUR 8,000–25,000 per steel frame kit [EST].</p>
        <table>
          <thead><tr><th>C#</th><th>Verdict</th><th>Rationale</th><th>Mitigation</th><th>Cost</th><th>Time</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>C1 Laser Bed</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>Portal frame columns and rafters are linear members ≤ 6 m; gusset plates and base plates laser-cut from sheet; all within bed</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>C2 Thickness</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>5–12 mm plates, 80–120 mm tube sections; within 1–20 mm envelope</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>C3 Corrosion</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>Exterior frame members ISO 12944 C2–C3 (agricultural building, rural atmosphere); interior members C1; hot-dip galvanize for exterior steel; same outsource path</td>
              <td style={{ fontSize: 12 }}>Specify galvanize for exterior columns; epoxy primer for interior purlins</td>
              <td style={{ fontSize: 12 }}>low</td><td style={{ fontSize: 12 }}>2–3 mo</td>
            </tr>
            <tr>
              <td><strong>C4 JIT-to-Push</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>Project-based supply is already a customer-pull model; BOM generated per project spec; does not require inventory push</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>C5 No Sales Channel</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>Hay barn frame sells to agricultural construction contractors (Agrarbaubetriebe), not directly to Reitstall; different channel requiring separate B2B development</td>
              <td style={{ fontSize: 12 }}>Target 2–3 regional Agrarbau contractors; leverage DIN EN 1090-2 certification as qualifier</td>
              <td style={{ fontSize: 12 }}>medium</td><td style={{ fontSize: 12 }}>9–18 mo</td>
            </tr>
            <tr>
              <td><strong>C6 Small-Batch</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>EUR 8,000–25,000 per frame kit is high unit value; project-based delivery; economics favorable even at 5–10 projects/year</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>C7 CE / Machinery</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>Structural steel sub-assembly for agricultural buildings: CE marking under DIN EN 1090-2 EXC 2/3 is already within Böhmer's certification scope; no Machinery Directive</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>C8 Animal-Contact</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>Portal frame structure is outside horse contact zone; durability driven by structural engineering (Eurocode 3) + corrosion class; no animal-contact spec applies</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
          </tbody>
        </table>
        <h4>Additional scope constraint (not in C1–C8)</h4>
        <table>
          <thead><tr><th>ID</th><th>Name</th><th>Type</th><th>Description</th><th>Verdict</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>C_Ext1</strong></td>
              <td>Civil Works / Foundation Scope</td>
              <td><span className="badge badge--neutral">operational</span></td>
              <td style={{ fontSize: 12 }}>Böhmer cannot supply foundations, earthwork, building permit documentation, or site assembly. Supply scope limited to steel frame sub-assembly delivered to site.</td>
              <td style={{ fontSize: 12 }}>mitigable — position as sub-assembly supplier to contractor; do not bid as general contractor</td>
            </tr>
          </tbody>
        </table>
        <div className="card" style={{ padding: 16, marginTop: 12 }}>
          <strong style={{ color: "var(--status-good)" }}>Verdict: SURVIVING — 2 mitigable, 5 none + 1 scope limit (C_Ext1).</strong>
          <p style={{ marginBottom: 0, marginTop: 8, fontSize: 13 }}>Favorable constraint profile but C5 (Sales Channel) requires new B2B channel to Agrarbau contractors — distinct from Reitstall consumer channel. Highest unit value of all four adjacencies.</p>
        </div>

        <hr />
        <SectionAnchor id="adj-a4" title="A4: Prefab Steel Stall System" />
        <p>Modular stall panels with hinged doors, ceiling grid option; ~60% capability overlap per 06_vn_reitstall.md. Böhmer supplies the steel skeleton; interior wood/rubber lining and specialty door latches are outside scope (~40% of system value).<br />
          Unit value: EUR 1,500–5,000 per stall [EST]. Competitors: Hörmann Agricultural, Jansen (NL), Equipo.</p>
        <table>
          <thead><tr><th>C#</th><th>Verdict</th><th>Rationale</th><th>Mitigation</th><th>Cost</th><th>Time</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>C1 Laser Bed</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>Standard stall panel 1200 × 2100 mm; within bed</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>C2 Thickness</strong></td>
              <td><span className="badge badge--strong">none</span></td>
              <td style={{ fontSize: 12 }}>2–6 mm tube and sheet; well within envelope</td>
              <td style={{ fontSize: 12 }}>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td><strong>C3 Corrosion</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>Indoor stable ISO 12944 C2–C3 (ammonia atmosphere); C3 treatment recommended for horse-contact zone; same outsource path</td>
              <td style={{ fontSize: 12 }}>Specify C3 galvanize for contact zone; C2 epoxy primer for internal frame</td>
              <td style={{ fontSize: 12 }}>low</td><td style={{ fontSize: 12 }}>1–2 mo</td>
            </tr>
            <tr>
              <td><strong>C4 JIT-to-Push</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>Multi-stall project orders (10–30 stalls) enable batch production; project lead time of 6–10 weeks is manageable BTO</td>
              <td style={{ fontSize: 12 }}>BTO model per project order; 4-week raw material lead buffer</td>
              <td style={{ fontSize: 12 }}>low</td><td style={{ fontSize: 12 }}>3–6 mo</td>
            </tr>
            <tr>
              <td><strong>C5 No Sales Channel</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>Stall systems often specified by architects or agricultural builders; Fachhandel route also possible; more formal procurement than core product direct-to-Reitstall</td>
              <td style={{ fontSize: 12 }}>Partner with 1–2 Pferdestallbau specialists; submit to Fachhandel stall catalogs (Kerbl, Loesdau)</td>
              <td style={{ fontSize: 12 }}>medium</td><td style={{ fontSize: 12 }}>9–18 mo</td>
            </tr>
            <tr>
              <td><strong>C6 Small-Batch</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>EUR 1,500–5,000/stall × 15-stall project = EUR 22,500–75,000/order; project economics favorable</td>
              <td style={{ fontSize: 12 }}>Project-minimum 8 stalls; no single-unit pricing</td>
              <td style={{ fontSize: 12 }}>low</td><td style={{ fontSize: 12 }}>3–6 mo</td>
            </tr>
            <tr>
              <td><strong>C7 CE / Machinery</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>Manual hinged stall doors: excluded from Machinery Directive per 2006/42/EC (manual, non-powered); GPSR technical file only. Powered options: out of scope for Böhmer.</td>
              <td style={{ fontSize: 12 }}>Confirm manual-door-only product scope; prepare GPSR technical file</td>
              <td style={{ fontSize: 12 }}>low</td><td style={{ fontSize: 12 }}>3–4 mo</td>
            </tr>
            <tr>
              <td><strong>C8 Animal-Contact</strong></td>
              <td><span className="badge badge--moderate">mitigable</span></td>
              <td style={{ fontSize: 12 }}>High horse contact on stall doors, panels, and lower rails; closed-profile RHS spec applies; no cyclic fatigue (static door loads vs. Paddockbox hinge); ISO 3834-2 weld spec sufficient</td>
              <td style={{ fontSize: 12 }}>Apply existing Paddockbox weld spec to stall door hinges; S355 for door frame</td>
              <td style={{ fontSize: 12 }}>low</td><td style={{ fontSize: 12 }}>2–3 mo</td>
            </tr>
          </tbody>
        </table>
        <h4>Additional scope constraint</h4>
        <table>
          <thead><tr><th>ID</th><th>Name</th><th>Type</th><th>Description</th><th>Verdict</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>C_Ext2</strong></td>
              <td>Interior Fit-Out Scope</td>
              <td><span className="badge badge--neutral">operational</span></td>
              <td style={{ fontSize: 12 }}>~40% of stall system value = wood/rubber lining panels + specialty door hardware outside metal fab scope. Böhmer cannot supply complete stall; supply scope = steel skeleton only.</td>
              <td style={{ fontSize: 12 }}>mitigable — partner with joinery supplier or Gummiwerk for lining; offer as "steel structure supply" to system integrators</td>
            </tr>
          </tbody>
        </table>
        <div className="card" style={{ padding: 16, marginTop: 12 }}>
          <strong style={{ color: "var(--status-good)" }}>Verdict: SURVIVING — 4 mitigable, 4 none + 1 scope limit (C_Ext2).</strong>
          <p style={{ marginBottom: 0, marginTop: 8, fontSize: 13 }}>Highest strategic fit (8/10) with highest capability overlap. C_Ext2 limits gross margin capture but enables entry without new material capabilities.</p>
        </div>

        <hr />
        <SectionAnchor id="adj-aggregate" title="Aggregate Results" />
        <table>
          <thead><tr><th>Opportunity</th><th>Knockouts</th><th>Mitigable</th><th>None</th><th>Scope Limits</th><th>Status</th><th>06_vn Fit</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>A1 Manure Bunker</strong></td>
              <td style={{ textAlign: "center", color: "var(--status-good)" }}>0</td>
              <td style={{ textAlign: "center" }}>3</td>
              <td style={{ textAlign: "center" }}>5</td>
              <td style={{ textAlign: "center" }}>0</td>
              <td><span className="badge badge--strong">SURVIVING</span></td>
              <td style={{ fontFamily: "var(--font-mono)" }}>6/10</td>
            </tr>
            <tr>
              <td><strong>A2 Stall Grid / Partition</strong></td>
              <td style={{ textAlign: "center", color: "var(--status-good)" }}>0</td>
              <td style={{ textAlign: "center" }}>4</td>
              <td style={{ textAlign: "center" }}>4</td>
              <td style={{ textAlign: "center" }}>0</td>
              <td><span className="badge badge--strong">SURVIVING</span></td>
              <td style={{ fontFamily: "var(--font-mono)" }}>~8/10</td>
            </tr>
            <tr>
              <td><strong>A3 Hay Barn Frame</strong></td>
              <td style={{ textAlign: "center", color: "var(--status-good)" }}>0</td>
              <td style={{ textAlign: "center" }}>2</td>
              <td style={{ textAlign: "center" }}>5</td>
              <td style={{ textAlign: "center" }}>1</td>
              <td><span className="badge badge--strong">SURVIVING</span></td>
              <td style={{ fontFamily: "var(--font-mono)" }}>5/10</td>
            </tr>
            <tr>
              <td><strong>A4 Prefab Stall System</strong></td>
              <td style={{ textAlign: "center", color: "var(--status-good)" }}>0</td>
              <td style={{ textAlign: "center" }}>4</td>
              <td style={{ textAlign: "center" }}>4</td>
              <td style={{ textAlign: "center" }}>1</td>
              <td><span className="badge badge--strong">SURVIVING</span></td>
              <td style={{ fontFamily: "var(--font-mono)" }}>8/10</td>
            </tr>
          </tbody>
        </table>
        <p><strong>No adjacencies eliminated.</strong> All four pass constraint screening.</p>

        <h3>Priority Ranking (constraint burden × strategic fit)</h3>
        <table>
          <thead><tr><th>Rank</th><th>Opportunity</th><th>Why</th></tr></thead>
          <tbody>
            <tr>
              <td style={{ textAlign: "center", fontWeight: 700 }}>1</td>
              <td><strong>A4 Prefab Steel Stall System</strong></td>
              <td style={{ fontSize: 12 }}>Highest strategic fit (8/10); mitigable constraints only; C_Ext2 scope limit is a commercial negotiation, not a capability blocker</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: 700 }}>2</td>
              <td><strong>A2 Stall Grid / Partition</strong></td>
              <td style={{ fontSize: 12 }}>Direct competence transfer; same buyer as Paddockbox; lowest channel investment; cross-sell without new product launch overhead</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: 700 }}>3</td>
              <td><strong>A3 Hay Barn Frame</strong></td>
              <td style={{ fontSize: 12 }}>Lowest constraint burden (2 mitigable); highest unit value; blocked only by need for new Agrarbau contractor channel (C5)</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: 700 }}>4</td>
              <td><strong>A1 Manure Bunker</strong></td>
              <td style={{ fontSize: 12 }}>Lowest risk but also lowest value; only justified as catalog add-on bundled with core product orders</td>
            </tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="adj-mitigation" title="Mitigation Priority Register" />
        <p>Mitigations sorted by urgency (actions that block multiple adjacencies first):</p>
        <table>
          <thead><tr><th>Priority</th><th>Constraint</th><th>Affects</th><th>Action</th><th>Cost</th><th>Time</th></tr></thead>
          <tbody>
            <tr>
              <td style={{ textAlign: "center", fontWeight: 700 }}>1</td>
              <td><strong>C3 Corrosion Protection</strong></td>
              <td style={{ fontSize: 12 }}>A1, A2, A3, A4</td>
              <td style={{ fontSize: 12 }}>Qualify external galvanizer for full adjacency scope (outdoor C3 + indoor C2 runs); confirm dip-tank size for portal frame columns</td>
              <td style={{ fontSize: 12 }}>low</td>
              <td style={{ fontSize: 12 }}>1–3 mo</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: 700 }}>2</td>
              <td><strong>C4 JIT-to-Push</strong></td>
              <td style={{ fontSize: 12 }}>A1, A2, A4</td>
              <td style={{ fontSize: 12 }}>Batch production windows for OEM runs (core products + adjacencies together); define inventory buffer per SKU</td>
              <td style={{ fontSize: 12 }}>low</td>
              <td style={{ fontSize: 12 }}>3–6 mo</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: 700 }}>3</td>
              <td><strong>C5 Sales Channel (Reitstall)</strong></td>
              <td style={{ fontSize: 12 }}>A1, A2, A4</td>
              <td style={{ fontSize: 12 }}>Trade fair entry (Equitana / regional) + Fachhandel outreach covers core products + stall grids + manure bunkers in single go-to-market motion</td>
              <td style={{ fontSize: 12 }}>low</td>
              <td style={{ fontSize: 12 }}>6–12 mo</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: 700 }}>4</td>
              <td><strong>C5 Sales Channel (Agrarbau)</strong></td>
              <td style={{ fontSize: 12 }}>A3</td>
              <td style={{ fontSize: 12 }}>Separate B2B contractor channel — only needed if pursuing hay barn frame; can be deferred</td>
              <td style={{ fontSize: 12 }}>medium</td>
              <td style={{ fontSize: 12 }}>9–18 mo</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: 700 }}>5</td>
              <td><strong>C6 Batch Economics</strong></td>
              <td style={{ fontSize: 12 }}>A1, A2, A4</td>
              <td style={{ fontSize: 12 }}>Integrate adjacency SKUs into existing batch window; minimum order thresholds per adjacency</td>
              <td style={{ fontSize: 12 }}>low</td>
              <td style={{ fontSize: 12 }}>1–3 mo</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: 700 }}>6</td>
              <td><strong>C_Ext2 Scope Gap (Stall System)</strong></td>
              <td style={{ fontSize: 12 }}>A4</td>
              <td style={{ fontSize: 12 }}>Identify 1 joinery partner + 1 rubber matting supplier for lining supply; define Böhmer scope as "steel skeleton + installation coordination"</td>
              <td style={{ fontSize: 12 }}>low</td>
              <td style={{ fontSize: 12 }}>3–6 mo</td>
            </tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="adj-summary" title="Summary" />
        <p>All four adjacent opportunities survive constraint screening. No physics impossibilities or regulatory hard stops exist within Böhmer's current capability envelope.</p>
        <p>The constraint landscape is dominated by <strong>channel (C5)</strong> and <strong>commercial model (C4, C6)</strong> barriers — not manufacturing physics. This means the constraint profile of adjacencies is essentially the same as the core products: the bottleneck is market access, not production capability.</p>
        <div className="card" style={{ padding: 16, borderLeft: "3px solid var(--accent-yellow)" }}>
          <p style={{ marginBottom: 0 }}>
            <strong>Top recommendation:</strong> Pursue A4 (Prefab Steel Stall System) and A2 (Stall Grid / Partition) in the same channel motion as the core products. A3 (Hay Barn Frame) requires a distinct Agrarbau channel — viable but requires separate investment decision.
          </p>
        </div>

      </article>
    </section>
  );
}
