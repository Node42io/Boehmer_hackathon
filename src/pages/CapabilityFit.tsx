/**
 * 07 Capability-Market Fit — Full analysis from 07_capability_market_fit.md
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

export default function CapabilityFit() {
  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 07 / Market Prioritization & Fit Assessment"
        title="Capability-Market Fit"
        description="6-factor composite scoring (ODI opportunity, feature fit, constraints, job coverage, VN hierarchy, incumbent vulnerability) applied to both products against NAICS 112920 DACH."
      />
      <article className="md">

        <SectionAnchor id="cf-scope" title="Scope" />
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><strong>Products assessed</strong></td><td>Heuraufe, Paddockbox</td></tr>
            <tr><td><strong>Market</strong></td><td>NAICS 112920 — Equine Production (DACH)</td></tr>
            <tr><td><strong>Markets eliminated by constraints</strong></td><td>0 (both products SURVIVING from 01_capability_assessment.md)</td></tr>
            <tr><td><strong>Scoring method</strong></td><td>6-factor composite (0–10 each), weights per component spec</td></tr>
            <tr><td><strong>Inputs</strong></td><td>01_capability_assessment.md, 06_vn_reitstall.md, 03_product_decomposition.md</td></tr>
          </tbody>
        </table>
        <blockquote>
          This is a single fixed-market workflow (no market discovery step). Both products are scored against the same NAICS 112920 target. The step-14 scoring framework is applied per-product rather than per-market.
        </blockquote>

        <hr />
        <SectionAnchor id="cf-odi" title="Step 1.1 — ODI Opportunity Score" />
        <p>ODI opportunity scores derived from VN L6 process needs. No Step 12 upstream data; scores derived from job importance × satisfaction gap in L6c/L6d.</p>

        <h3>Heuraufe — L6c Daily Feeding &amp; Nutrition Management</h3>
        <table>
          <thead><tr><th>Need</th><th>Importance</th><th>Satisfaction (current)</th><th>Opp Score</th></tr></thead>
          <tbody>
            <tr><td>Prevent hay waste/contamination in outdoor conditions</td><td style={{ textAlign: "center" }}>8</td><td style={{ fontSize: 12 }}>4 (ring feeders have no roof)</td><td style={{ textAlign: "center", fontWeight: 700 }}>12</td></tr>
            <tr><td>Eliminate Futterneid (feed competition) at shared station</td><td style={{ textAlign: "center" }}>8</td><td style={{ fontSize: 12 }}>3 (most feeders don't address)</td><td style={{ textAlign: "center", fontWeight: 700 }}>13</td></tr>
            <tr><td>Enable solo repositioning without disassembly</td><td style={{ textAlign: "center" }}>6</td><td style={{ fontSize: 12 }}>2 (almost all feeders are fixed)</td><td style={{ textAlign: "center", fontWeight: 700 }}>10</td></tr>
            <tr><td>Protect hay from weather (vertical + wind-driven)</td><td style={{ textAlign: "center" }}>7</td><td style={{ fontSize: 12 }}>4 (ring feeders fully exposed)</td><td style={{ textAlign: "center", fontWeight: 700 }}>10</td></tr>
            <tr><td>Support natural head-down eating posture</td><td style={{ textAlign: "center" }}>7</td><td style={{ fontSize: 12 }}>5 (floor feeding does, but contamination)</td><td style={{ textAlign: "center", fontWeight: 700 }}>9</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, fontFamily: "var(--font-mono)", background: "rgba(255,255,255,0.04)", padding: "8px 12px", borderRadius: 4 }}>
          ODI entries: 5 | Avg: 54/5 = 10.8 / 20<br />
          odi_opportunity_score: 10.8/20 × 10 = <strong>5.40 / 10</strong>
        </p>

        <h3>Paddockbox — L6d Housing &amp; Paddock Space Management</h3>
        <table>
          <thead><tr><th>Need</th><th>Importance</th><th>Satisfaction (current)</th><th>Opp Score</th></tr></thead>
          <tbody>
            <tr><td>Enable machine/tractor access without dismantling boundary</td><td style={{ textAlign: "center" }}>8</td><td style={{ fontSize: 12 }}>3 (permanent fencing blocks)</td><td style={{ textAlign: "center", fontWeight: 700 }}>13</td></tr>
            <tr><td>Reposition paddock area seasonally or daily</td><td style={{ textAlign: "center" }}>7</td><td style={{ fontSize: 12 }}>2 (fixed fencing impossible to move)</td><td style={{ textAlign: "center", fontWeight: 700 }}>12</td></tr>
            <tr><td>Reconfigure paddock layout for changing horse groups</td><td style={{ textAlign: "center" }}>7</td><td style={{ fontSize: 12 }}>3 (permanent: not possible; electric tape: unsafe)</td><td style={{ textAlign: "center", fontWeight: 700 }}>11</td></tr>
            <tr><td>Manage stable yard drivability while containing horses</td><td style={{ textAlign: "center" }}>6</td><td style={{ fontSize: 12 }}>3 (permanent fencing impedes yard flow)</td><td style={{ textAlign: "center", fontWeight: 700 }}>9</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, fontFamily: "var(--font-mono)", background: "rgba(255,255,255,0.04)", padding: "8px 12px", borderRadius: 4 }}>
          ODI entries: 4 | Avg: 45/4 = 11.25 / 20<br />
          odi_opportunity_score: 11.25/20 × 10 = <strong>5.63 / 10</strong>
        </p>

        <hr />
        <SectionAnchor id="cf-feature" title="Step 1.2 — Feature Fit Score" />
        <p>Step 09 (tech-level) proxy derived from feature-to-need mapping. No Step 11 vendor comparison (no specified incumbent vendor for comparison).</p>

        <h3>Heuraufe — Feature × Need Coverage</h3>
        <table>
          <thead><tr><th>Feature</th><th>Need Addressed</th><th>Kano Class</th><th>Fit</th></tr></thead>
          <tbody>
            <tr><td><strong>Multi-Side Open Frame</strong></td><td>Eliminates Futterneid, simultaneous access</td><td><span className="badge badge--neutral">Must-be</span></td><td style={{ color: "var(--status-good)", fontWeight: 700 }}>✓</td></tr>
            <tr><td><strong>Pitched Roof Structure</strong></td><td>Weather protection for hay</td><td><span className="badge badge--neutral">Must-be</span></td><td style={{ color: "var(--status-good)", fontWeight: 700 }}>✓</td></tr>
            <tr><td><strong>Bar-Grid / Hay Net Retainer</strong></td><td>Waste reduction (20–40%)</td><td><span className="badge badge--neutral">Performance</span></td><td style={{ color: "var(--status-good)", fontWeight: 700 }}>✓</td></tr>
            <tr><td><strong>Tractor Fork / Skid Compatibility</strong></td><td>Solo repositioning</td><td><span className="badge badge--accent">Delighter</span></td><td style={{ color: "var(--status-good)", fontWeight: 700 }}>✓</td></tr>
            <tr><td><strong>Closed-Profile Tube Frame</strong></td><td>Animal safety (no entrapment)</td><td><span className="badge badge--neutral">Must-be</span></td><td style={{ color: "var(--status-good)", fontWeight: 700 }}>✓</td></tr>
            <tr><td><strong>C3+ Galvanized Finish</strong></td><td>15-year outdoor durability</td><td><span className="badge badge--neutral">Must-be</span></td><td style={{ color: "var(--status-good)", fontWeight: 700 }}>✓</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, fontFamily: "var(--font-mono)", background: "rgba(255,255,255,0.04)", padding: "8px 12px", borderRadius: 4 }}>
          Tech-level fit: 5 must-be features met, 1 delighter added<br />
          Vendor-level fit: SKIPPED (no incumbent vendor specified)<br />
          feature_fit_score: <strong>8.00 / 10</strong>
        </p>

        <h3>Paddockbox — Feature × Need Coverage</h3>
        <table>
          <thead><tr><th>Feature</th><th>Need Addressed</th><th>Kano Class</th><th>Fit</th></tr></thead>
          <tbody>
            <tr><td><strong>Castor-Mounted Panels</strong></td><td>Repositioning without disassembly</td><td><span className="badge badge--accent">Delighter</span></td><td style={{ color: "var(--status-good)", fontWeight: 700 }}>✓</td></tr>
            <tr><td><strong>Fold-Flat / Removable Post System</strong></td><td>Tractor corridor access</td><td><span className="badge badge--accent">Delighter</span></td><td style={{ color: "var(--status-good)", fontWeight: 700 }}>✓</td></tr>
            <tr><td><strong>Modular Segment Configurability</strong></td><td>Layout reconfiguration per horse group</td><td><span className="badge badge--neutral">Performance</span></td><td style={{ color: "var(--status-good)", fontWeight: 700 }}>✓</td></tr>
            <tr><td><strong>Wall-Hinge Mounting Option</strong></td><td>Space efficiency (eliminates one panel side)</td><td><span className="badge badge--accent">Delighter</span></td><td style={{ color: "var(--status-good)", fontWeight: 700 }}>✓</td></tr>
            <tr><td><strong>Closed-Tube Rail Construction</strong></td><td>Horse contact safety</td><td><span className="badge badge--neutral">Must-be</span></td><td style={{ color: "var(--status-good)", fontWeight: 700 }}>✓</td></tr>
            <tr><td><strong>C3+ Galvanized Finish</strong></td><td>Outdoor durability</td><td><span className="badge badge--neutral">Must-be</span></td><td style={{ color: "var(--status-good)", fontWeight: 700 }}>✓</td></tr>
            <tr><td><em>(gap)</em></td><td>No shelter / weather protection (horses need run-in)</td><td>—</td><td style={{ color: "var(--badge-weak-bg)", fontWeight: 700 }}>✗</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, fontFamily: "var(--font-mono)", background: "rgba(255,255,255,0.04)", padding: "8px 12px", borderRadius: 4 }}>
          Tech-level fit: 6/7 needs served; 1 structural gap (no shelter function)<br />
          feature_fit_score: <strong>7.50 / 10</strong>
        </p>

        <hr />
        <SectionAnchor id="cf-constraints" title="Step 1.3 — Constraint Compatibility Score" />
        <p>From <code>01_capability_assessment.md</code> — both products have 0 knockouts.</p>

        <h3>Heuraufe</h3>
        <p style={{ fontSize: 12, fontFamily: "var(--font-mono)", background: "rgba(255,255,255,0.04)", padding: "8px 12px", borderRadius: 4 }}>
          Constraint assessments: 8 | Knockouts: 0 | Mitigable: 6 | None: 2<br />
          Deductions: 6 × 0.5 (all low cost) = −3.0<br />
          constraint_compatibility_score: 10.0 − 3.0 = <strong>7.00 / 10</strong>
        </p>

        <h3>Paddockbox</h3>
        <p style={{ fontSize: 12, fontFamily: "var(--font-mono)", background: "rgba(255,255,255,0.04)", padding: "8px 12px", borderRadius: 4 }}>
          Constraint assessments: 8 | Knockouts: 0 | Mitigable: 6 | None: 2<br />
          Low cost (C3, C4, C5, C6): 4 × −0.5 = −2.0<br />
          Medium cost (C7 CE Machinery, C8 hinge fatigue): 2 × −1.0 = −2.0<br />
          Total deductions: −4.0<br />
          constraint_compatibility_score: 10.0 − 4.0 = <strong>6.00 / 10</strong>
        </p>

        <hr />
        <SectionAnchor id="cf-jobcoverage" title="Step 1.4 — Job Coverage Score" />
        <p>Based on L6c/L6d job step maps from <code>06_vn_reitstall.md</code>.</p>

        <h3>Heuraufe — L6c (8 job steps)</h3>
        <table>
          <thead><tr><th>Job Step</th><th>Served?</th></tr></thead>
          <tbody>
            <tr><td>1. Plan feed ration per horse</td><td>No</td></tr>
            <tr><td>2. Procure and store hay supply</td><td>No</td></tr>
            <tr><td>3. Transport hay from storage to paddock</td><td>No (but tractor fork aids this)</td></tr>
            <tr><td>4. Load / fill feeding station</td><td style={{ color: "var(--status-good)" }}>Yes — multi-access loading</td></tr>
            <tr><td>5. Manage simultaneous access / prevent Futterneid</td><td style={{ color: "var(--status-good)" }}>Yes — multi-side open frame</td></tr>
            <tr><td>6. Monitor consumption and adjust quantity</td><td>Partial — visible consumption, no sensors</td></tr>
            <tr><td>7. Remove waste hay / clean</td><td style={{ color: "var(--status-good)" }}>Yes — elevated frame reduces floor waste</td></tr>
            <tr><td>8. Reposition feeding infrastructure</td><td style={{ color: "var(--status-good)" }}>Yes — tractor fork / skid</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, fontFamily: "var(--font-mono)", background: "rgba(255,255,255,0.04)", padding: "8px 12px", borderRadius: 4 }}>
          Job steps served: 5 (steps 4, 5, 7, 8; partial 6 counted as 0)<br />
          coverage_pct: 5/8 = 62.5%<br />
          job_coverage_score: <strong>6.25 / 10</strong>
        </p>

        <h3>Paddockbox — L6d (8 job steps)</h3>
        <table>
          <thead><tr><th>Job Step</th><th>Served?</th></tr></thead>
          <tbody>
            <tr><td>1. Plan paddock layout and capacity</td><td>No</td></tr>
            <tr><td>2. Establish paddock boundary</td><td style={{ color: "var(--status-good)" }}>Yes — panels = perimeter</td></tr>
            <tr><td>3. Configure sections for horse groupings</td><td style={{ color: "var(--status-good)" }}>Yes — modular segments</td></tr>
            <tr><td>4. Enable daily horse in/out gate access</td><td style={{ color: "var(--status-good)" }}>Yes — fold-flat post as entry corridor</td></tr>
            <tr><td>5. Enable machine (tractor/mucking) access</td><td style={{ color: "var(--status-good)" }}>Yes — fold-flat + castor clearance</td></tr>
            <tr><td>6. Monitor horse welfare in paddock</td><td>No</td></tr>
            <tr><td>7. Reconfigure layout as needed</td><td style={{ color: "var(--status-good)" }}>Yes — add/remove panels</td></tr>
            <tr><td>8. Reposition paddock area seasonally</td><td style={{ color: "var(--status-good)" }}>Yes — castor-mounted, no dismantling</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, fontFamily: "var(--font-mono)", background: "rgba(255,255,255,0.04)", padding: "8px 12px", borderRadius: 4 }}>
          Job steps served: 6 (steps 2, 3, 4, 5, 7, 8)<br />
          coverage_pct: 6/8 = 75.0%<br />
          job_coverage_score: <strong>7.50 / 10</strong>
        </p>

        <hr />
        <SectionAnchor id="cf-vnhierarchy" title="Step 1.5 — VN Hierarchy Score" />
        <p>Both products are L5 finished goods sold directly to end-beneficiary operators (Reitställe). Position in the end-beneficiary VN from <code>06_vn_reitstall.md</code>:</p>
        <table>
          <thead><tr><th>Product</th><th>L6 Segment</th><th>L5 Node</th><th>strategic_position</th><th>depth_from_top</th><th>base</th><th>depth_adj</th><th>score</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Heuraufe</strong></td>
              <td style={{ fontSize: 12 }}>L6c Feeding &amp; Nutrition</td>
              <td style={{ fontSize: 12 }}>Multi-Horse Outdoor Hay Rack</td>
              <td><span className="badge badge--strong">customer_facing</span></td>
              <td style={{ textAlign: "center" }}>2</td>
              <td style={{ textAlign: "center" }}>9.0</td>
              <td style={{ textAlign: "center" }}>0.0</td>
              <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--accent-yellow)" }}>9.00</td>
            </tr>
            <tr>
              <td><strong>Paddockbox</strong></td>
              <td style={{ fontSize: 12 }}>L6d Housing &amp; Paddock</td>
              <td style={{ fontSize: 12 }}>Mobile Modular Panel System</td>
              <td><span className="badge badge--strong">customer_facing</span></td>
              <td style={{ textAlign: "center" }}>2</td>
              <td style={{ textAlign: "center" }}>9.0</td>
              <td style={{ textAlign: "center" }}>0.0</td>
              <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--accent-yellow)" }}>9.00</td>
            </tr>
          </tbody>
        </table>
        <blockquote>
          Both products are direct-to-operator infrastructure assets (L5 finished goods → operator). No intermediary assembler or system integrator in the chain — full pricing power retained.
        </blockquote>

        <hr />
        <SectionAnchor id="cf-incumbent" title="Step 1.6 — Incumbent Vulnerability Score" />

        <h3>Heuraufe — L6c alternatives</h3>
        <table>
          <thead><tr><th>Incumbent</th><th>Market Share</th><th>Weaknesses</th><th>#</th></tr></thead>
          <tbody>
            <tr><td>Round bale ring feeder (Kerbl et al.)</td><td>~35% dominant</td><td style={{ fontSize: 12 }}>No roof; promotes Futterneid at single access point; cannot move without machinery</td><td style={{ textAlign: "center" }}>3</td></tr>
            <tr><td>Wall-mounted hay rack / corner feeder</td><td>~25%</td><td style={{ fontSize: 12 }}>Single-horse only; fixed position; no weather protection</td><td style={{ textAlign: "center" }}>3</td></tr>
            <tr><td>Slow-feed hay net station</td><td>~15%</td><td style={{ fontSize: 12 }}>Not permanent; no weather protection; labor-intensive to fill</td><td style={{ textAlign: "center" }}>3</td></tr>
            <tr><td>Automated RFID hay dispenser</td><td>~5%</td><td style={{ fontSize: 12 }}>High cost (&gt;EUR 5K); requires power/software; not viable for &lt;20 horse stables</td><td style={{ textAlign: "center" }}>2</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, fontFamily: "var(--font-mono)", background: "rgba(255,255,255,0.04)", padding: "8px 12px", borderRadius: 4 }}>
          Switching cost: LOW (hay feeders are equipment, not permanent installations, easy to replace)<br />
          switching_factor = 9.0<br /><br />
          Weakness density: 4 incumbents, 11 total weaknesses, avg = 2.75<br />
          weakness_factor = min(10, 2.75 × 2.5) = 6.88<br /><br />
          Fragmentation: 1 dominant (ring bale feeder, ~35%) → +0.0<br /><br />
          Score = 9.0 × 0.4 + 6.88 × 0.4 + 0.0 = 3.60 + 2.75 = 6.35 / 10<br />
          incumbent_vulnerability_score: <strong>6.35 / 10</strong>
        </p>

        <h3>Paddockbox — L6d alternatives</h3>
        <table>
          <thead><tr><th>Incumbent</th><th>Market Share</th><th>Weaknesses</th><th>#</th></tr></thead>
          <tbody>
            <tr><td>Permanent post-and-rail (timber/galv.)</td><td>~45% dominant</td><td style={{ fontSize: 12 }}>Not repositionable; blocks machine access; requires groundwork; no reconfigurability</td><td style={{ textAlign: "center" }}>4</td></tr>
            <tr><td>Electric tape / wire fencing</td><td>~25%</td><td style={{ fontSize: 12 }}>Safety risk for horses; unreliable containment; requires energizer</td><td style={{ textAlign: "center" }}>3</td></tr>
            <tr><td>High-tensile wire / V-mesh</td><td>~10%</td><td style={{ fontSize: 12 }}>Permanent installation; heavy groundwork; no reconfigurability</td><td style={{ textAlign: "center" }}>3</td></tr>
            <tr><td>Aluminium portable corrals (pin-hinge)</td><td>~5%</td><td style={{ fontSize: 12 }}>Must dismantle to move; no tractor clearance; limited DACH availability</td><td style={{ textAlign: "center" }}>3</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, fontFamily: "var(--font-mono)", background: "rgba(255,255,255,0.04)", padding: "8px 12px", borderRadius: 4 }}>
          Switching cost: MODERATE (mobile-category buyers switch easily; permanent fence buyers face<br />
          removal cost EUR 2–8K per 100m before they can adopt)<br />
          switching_factor = 6.0<br /><br />
          Weakness density: 4 incumbents, 13 total weaknesses, avg = 3.25<br />
          weakness_factor = min(10, 3.25 × 2.5) = 8.13<br /><br />
          Fragmentation: 1 dominant (post-and-rail, ~45%) → +0.0<br /><br />
          Score = 6.0 × 0.4 + 8.13 × 0.4 + 0.0 = 2.40 + 3.25 = 5.65 / 10<br />
          incumbent_vulnerability_score: <strong>5.65 / 10</strong>
        </p>

        <hr />
        <SectionAnchor id="cf-composite" title="Step 2 — Weighted Composite Score" />
        <table>
          <thead>
            <tr><th>Dimension</th><th>Weight</th><th>Heuraufe</th><th>Heuraufe contrib.</th><th>Paddockbox</th><th>Paddockbox contrib.</th></tr>
          </thead>
          <tbody>
            <tr><td>ODI Opportunity</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.25</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>5.40</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.350</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>5.63</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.408</td></tr>
            <tr><td>Feature Fit</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.15</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>8.00</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.200</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>7.50</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.125</td></tr>
            <tr><td>Constraint Compatibility</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.15</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>7.00</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.050</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>6.00</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.900</td></tr>
            <tr><td>Job Coverage</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.15</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>6.25</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.938</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>7.50</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.125</td></tr>
            <tr><td>VN Hierarchy</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.10</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>9.00</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.900</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>9.00</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.900</td></tr>
            <tr><td>Incumbent Vulnerability</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>0.20</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>6.35</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.270</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>5.65</td><td style={{ textAlign: "center", fontFamily: "var(--font-mono)" }}>1.130</td></tr>
            <tr style={{ fontWeight: 700, background: "rgba(253,255,152,0.04)" }}>
              <td><strong>COMPOSITE</strong></td>
              <td style={{ textAlign: "center" }}>1.00</td>
              <td colSpan={2} style={{ textAlign: "center", fontFamily: "var(--font-mono)", color: "var(--accent-yellow)" }}>6.71</td>
              <td colSpan={2} style={{ textAlign: "center", fontFamily: "var(--font-mono)", color: "var(--accent-yellow)" }}>6.59</td>
            </tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="cf-recommendation" title="Step 3 — Recommendation" />
        <table>
          <thead><tr><th>Product</th><th>Composite</th><th>Recommendation</th><th>Threshold</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Heuraufe</strong></td>
              <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>6.71</td>
              <td><span className="badge badge--moderate">investigate</span></td>
              <td style={{ fontSize: 12 }}>5.0 ≤ 6.71 ≤ 7.5</td>
            </tr>
            <tr>
              <td><strong>Paddockbox</strong></td>
              <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>6.59</td>
              <td><span className="badge badge--moderate">investigate</span></td>
              <td style={{ fontSize: 12 }}>5.0 ≤ 6.59 ≤ 7.5</td>
            </tr>
          </tbody>
        </table>
        <p>Neither product clears the 7.5 <strong>pursue</strong> threshold. Both comfortably above 5.0 — no <strong>defer</strong>. The gap to PURSUE is primarily driven by two factors: moderate ODI scores (market needs are real but not critically underserved with current alternatives) and constrained incumbent vulnerability for Heuraufe (Kerbl ring feeders are low-switching-cost, good-enough alternatives).</p>

        <hr />
        <SectionAnchor id="cf-ranking" title="Step 4 — Ranking and Entry Strategy" />
        <h3>Rank</h3>
        <table>
          <thead><tr><th>Rank</th><th>Product</th><th>Composite</th><th>Recommendation</th></tr></thead>
          <tbody>
            <tr>
              <td style={{ textAlign: "center", fontWeight: 700 }}>1</td>
              <td><strong>Heuraufe</strong></td>
              <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>6.71</td>
              <td><span className="badge badge--moderate">investigate</span></td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontWeight: 700 }}>2</td>
              <td><strong>Paddockbox</strong></td>
              <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>6.59</td>
              <td><span className="badge badge--moderate">investigate</span></td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>Score delta 0.12 — effectively tied. Heuraufe ranks ahead on feature fit (8.0 vs 7.5) and incumbent vulnerability (6.35 vs 5.65). Paddockbox leads on job coverage (7.5 vs 6.25).</p>

        <hr />
        <SectionAnchor id="cf-heuraufe-entry" title="Heuraufe — Entry Strategy" />
        <p><strong>Rationale.</strong> Composite 6.71 driven by strong feature fit (8.0/10) and customer-facing VN position (9.0/10). Five out of five product features map directly to underserved needs in L6c — weather protection, Futterneid elimination, waste reduction, repositionability, and durability are all unaddressed by the dominant ring feeder. Incumbent vulnerability (6.35) is moderate: switching costs are low (easy to buy a new feeder), but Kerbl's ring feeders are entrenched at 35% and widely familiar. Constraint score of 7.0 is the drag — 6 mitigables must close before market launch; none are technically blocking.</p>

        <p><strong>Entry strategy:</strong></p>
        <ol>
          <li><strong>Qualify galvanizer first (Month 1–2).</strong> Qualify external hot-dip galvanizer in Baden-Württemberg (Verzinkerei region); no product goes to market without C3+ treatment. Run sample-weld + galvanize + pull-test.</li>
          <li><strong>Pilot with 3 Reitställe in proximity (Month 3–5).</strong> Identify 3 pilot customers within 100 km of Böhmer. Provide units at manufacturing cost + 20% in exchange for 3-month documented waste-reduction data. Target: verify &gt;25% hay waste reduction vs. prior feeding method.</li>
          <li><strong>Complete CE technical file (Month 3–4).</strong> Commission external CE consultant for GPSR self-declaration and technical file for the Heuraufe (static structure, exempt from Machinery Directive). Estimated EUR 2–4K.</li>
          <li><strong>Launch at Pferdemesse Stuttgart / regional equestrian fair (Month 6–8).</strong> Attend with demo unit + printed data from pilot. Capture 10–20 qualified leads. Cost: EUR 2–4K for stand space.</li>
          <li><strong>Approach Fachhandel distributor (Month 9–12).</strong> Present pilot data and CE file to Kerbl or a regional equestrian Fachhandel (Loesdau, Krämer) for wholesale/consignment agreement. This resolves the C5 channel gap without full sales force build-out.</li>
        </ol>
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Estimated time to first revenue</td><td>4–6 months</td></tr>
            <tr><td>Estimated investment</td><td>EUR 30–60K (galvanizer qual + CE + pilot + 1 trade fair)</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="cf-paddockbox-entry" title="Paddockbox — Entry Strategy" />
        <p><strong>Rationale.</strong> Composite 6.59 driven by customer-facing VN position (9.0/10) and high job coverage (7.5/10 — 6 of 8 L6d job steps served). The tractor-clearance fold-flat post is a genuine market gap: permanent post-and-rail (45% of L6d) categorically cannot serve this need without manual dismantling, and no DACH-focused competitor offers castored panels with fold-flat posts. Incumbent vulnerability (5.65) is the main drag — converting permanent fence buyers faces moderate switching costs (cost of removing existing fixed fencing). Constraint score 6.0 reflects two medium-cost items: hinge fatigue test and CE Machinery Directive, both of which are design gates that must be completed before launch. The feature gap (no shelter function) is structural but expected — Paddockbox is sold as a containment system, not a housing solution.</p>

        <p><strong>Entry strategy:</strong></p>
        <ol>
          <li><strong>Complete hinge fatigue test protocol (Month 2–5).</strong> Fatigue-rated weld per DIN EN ISO 3834-2, 10,000-cycle test on prototype hinge assembly. This is the critical single engineering gate. No series production until test passes.</li>
          <li><strong>Specify and source heavy-duty castors (Month 1–3).</strong> Identify and qualify castors rated ≥800 kg lateral load per unit. Verify with static load test. Source minimum 2 qualified suppliers for redundancy.</li>
          <li><strong>Pilot at 2 Reitschulen with &gt;15 horses (Month 4–6).</strong> Target riding schools with daily tractor mucking-out — they will most viscerally understand the fold-flat value. Document tractor cycle time savings. Provide 4-panel starter kit at cost.</li>
          <li><strong>Commission CE Machinery Directive risk assessment (Month 3–5).</strong> Focus: tip-over stability, wheel brake adequacy, hinge load rating. More complex than Heuraufe; use same CE consultant. Estimated EUR 5–9K.</li>
          <li><strong>Demo at equestrian trade fair with working fold-flat demo (Month 8–12).</strong> Live fold-flat + tractor pass demo is the most effective sales tool. Reitstall operators will understand immediately. Bundle with Heuraufe demo for efficiency.</li>
        </ol>
        <table>
          <thead><tr><th>Field</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Estimated time to first revenue</td><td>8–12 months (hinge fatigue test is critical path)</td></tr>
            <tr><td>Estimated investment</td><td>EUR 60–100K (fatigue test + castor sourcing + CE + 2 pilots + trade fair)</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="cf-exec" title="Executive Summary" />
        <blockquote>
          Both Böhmer products — Heuraufe (composite 6.71) and Paddockbox (composite 6.59) — score <strong>investigate</strong> in NAICS 112920 (Equine Production, DACH). The strongest shared driver is customer-facing VN positioning (9.0/10 each): both are finished goods sold directly to stable operators with no intermediary chain diluting margin or control. Feature fit is high (8.0 and 7.5), confirming that Böhmer's welded steel fabrication capability maps cleanly to the infrastructure needs of L6c feeding and L6d paddock management. The primary gap preventing PURSUE classification is market access: with 0 established sales relationships in the equestrian segment, no distribution channel, and no CE documentation, Böhmer cannot monetize the technical fit today. The highest single risk is the Paddockbox hinge joint fatigue requirement — without a completed 10,000-cycle test, series production is blocked. <strong>Recommended next step:</strong> run the hinge fatigue test and qualify the galvanizer in parallel (both Month 1–2 actions), then secure 3 pilot customers in Baden-Württemberg within 6 months as the foundation for trade fair launch and Fachhandel distributor approach.
        </blockquote>

      </article>
    </section>
  );
}
