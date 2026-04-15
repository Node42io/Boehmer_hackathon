/**
 * 06 Production Value Chain — SCOR model analysis
 */
import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";

export default function Production() {
  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 05 / SCOR Value Chain"
        title="Production Value Chain"
        description="SCOR model (Plan, Source, Make, Deliver, Return) for Heuraufe + Paddockbox production."
      />
      <div className="md">
        <SectionAnchor id="vc-summary" title="Executive Summary" />
        <div className="card" style={{ padding: 20, marginBottom: 24 }}>
          <p style={{ marginBottom: 12 }}>
            Böhmer must build a complete product supply chain from scratch on top of an existing contract-welding operation.
            All core production steps are in-house; the only mandatory outsourced step is hot-dip galvanizing.
          </p>
          <table>
            <tbody>
              <tr><td><strong>Annual volume (base case)</strong></td><td>60 Heuraufe + 40 Paddockbox sets = 100 units</td></tr>
              <tr><td><strong>Annual material cost</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>~EUR 84,000</td></tr>
              <tr><td><strong>Infrastructure investment</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>~EUR 16,000</td></tr>
              <tr><td><strong>Annual outsourcing cost</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>~EUR 46,500 (galvanizing + freight)</td></tr>
              <tr><td><strong>Key risk</strong></td><td>Galvanizing vendor qualification (blocks both products)</td></tr>
              <tr><td><strong>Time-to-operational</strong></td><td style={{ fontFamily: "var(--font-mono)" }}>3-5 months</td></tr>
            </tbody>
          </table>
        </div>

        <hr />
        <SectionAnchor id="vc-source" title="VC1: Raw Material Sourcing [SOURCE]" />
        <table>
          <thead><tr><th>Material</th><th>Supplier</th><th>MOQ</th><th>Price/kg</th><th>Lead Time</th></tr></thead>
          <tbody>
            <tr><td><strong>S355 SHS tubes</strong></td><td>Klöckner Metals / thyssenkrupp</td><td>500-1,000 kg</td><td>EUR 1.33-1.40</td><td>5-10 days</td></tr>
            <tr><td><strong>Steel sheet S235/S355</strong></td><td>Klöckner / Salzgitter Mannesmann</td><td>500 kg</td><td>EUR 0.95-1.00</td><td>5-10 days</td></tr>
            <tr><td><strong>Welding wire G3Si1</strong></td><td>Lincoln Electric / Binzel</td><td>50-100 kg</td><td>EUR 2.85-3.00</td><td>3-7 days</td></tr>
            <tr><td><strong>Heavy-duty castors</strong></td><td>Blickle / Tente</td><td>10 pcs</td><td>EUR 38-42/pc</td><td>5-10 days</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="vc-plan" title="VC3: Production Planning [PLAN]" />
        <table>
          <thead><tr><th>Product</th><th>Mode</th><th>Batch Size</th><th>Setup</th><th>Cycle Time</th></tr></thead>
          <tbody>
            <tr><td><strong>Heuraufe</strong></td><td>Make-to-order</td><td>1-3 units</td><td>0.5 hr/batch</td><td style={{ fontFamily: "var(--font-mono)" }}>9 hrs</td></tr>
            <tr><td><strong>Paddockbox (4 seg)</strong></td><td>Make-to-order</td><td>1-2 sets</td><td>0.5 hr/batch</td><td style={{ fontFamily: "var(--font-mono)" }}>14 hrs</td></tr>
          </tbody>
        </table>

        <h3>Shared Capacity Allocation</h3>
        <table>
          <thead><tr><th>Allocation</th><th>Hrs/week</th><th>% of 40 hrs</th></tr></thead>
          <tbody>
            <tr><td><strong>Contract welding (baseline)</strong></td><td>30-32</td><td>75-80%</td></tr>
            <tr><td><strong>Own-product (Year 1 cap)</strong></td><td>8-10</td><td>20-25%</td></tr>
            <tr><td><strong>Buffer / maintenance</strong></td><td>0-2</td><td>0-5%</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>
          Year 1 output at 20-25% capacity: ~40-50 units. Scaling beyond 100 units/year requires a dedicated welder hire.
        </p>

        <hr />
        <SectionAnchor id="vc-make" title="VC4: Production Process [MAKE]" />
        <h3>Heuraufe Process Flow</h3>
        <table>
          <thead><tr><th>Step</th><th>Operation</th><th>Time</th><th>QC Gate</th></tr></thead>
          <tbody>
            {[
              ["1", "Material receiving + cert check", "0.25 hr", "QC-1: INCOMING"],
              ["2", "Tube cutting to length", "1.5 hr", ""],
              ["3", "Part preparation (deburring)", "0.5 hr", ""],
              ["4", "CNC bending", "0.5 hr", ""],
              ["5", "Tack welding + fixture", "0.5 hr", ""],
              ["6", "Full MIG/MAG weld", "3.0 hr", "QC-2: IN-PROCESS"],
              ["7", "Weld grinding + edge dressing", "1.0 hr", ""],
              ["8", "Hay net frame fitting", "0.5 hr", ""],
              ["9", "Pre-galvanize prep", "0.25 hr", ""],
              ["10", "Outsource: hot-dip galvanize", "(1-2 weeks)", ""],
              ["11", "Post-galvanize inspection", "0.25 hr", ""],
              ["12", "Final inspection + docs", "0.5 hr", "QC-3: FINAL"],
              ["13", "Packaging", "0.25 hr", ""],
            ].map(([step, op, time, qc]) => (
              <tr key={step} style={step === "10" ? { background: "rgba(253,255,152,0.04)" } : undefined}>
                <td style={{ fontWeight: 700, textAlign: "center" }}>{step}</td>
                <td><strong>{op}</strong></td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{time}</td>
                <td>{qc && <span className="badge badge--accent">{qc}</span>}</td>
              </tr>
            ))}
            <tr style={{ fontWeight: 700 }}>
              <td></td>
              <td>Total (in-house)</td>
              <td style={{ fontFamily: "var(--font-mono)" }}>~9.0 hrs</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <h3>QC Gate Definitions</h3>
        <table>
          <thead><tr><th>Gate</th><th>Inspection</th><th>Pass Criteria</th></tr></thead>
          <tbody>
            <tr><td><strong>QC-1</strong></td><td>Incoming: material cert + visual</td><td>Grade S355, wall thickness +/-0.3mm, no surface damage</td></tr>
            <tr><td><strong>QC-2</strong></td><td>After welding: visual ISO 5817 B + dimensional</td><td>No porosity/cracks; critical dims +/-1mm</td></tr>
            <tr><td><strong>QC-3</strong></td><td>Final: full dimensional + function + surface</td><td>{"All dims per drawing; galvanic >=45um; Paddockbox: brake holds 800kg"}</td></tr>
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="vc-deliver" title="VC5-VC6: Packaging & Delivery [DELIVER]" />
        <p>
          Both products are B2B industrial — no retail packaging required. Heuraufe ships on timber skid/cradle (~EUR 19/unit packaging cost).
          Paddockbox segments stack with foam interleaving on standard pallet. Delivery within DACH via external freight carrier (Spedition).
        </p>
        <table>
          <thead><tr><th>Parameter</th><th>Heuraufe</th><th>Paddockbox (4 seg)</th></tr></thead>
          <tbody>
            <tr><td><strong>Packaging cost/unit</strong></td><td>~EUR 19</td><td>~EUR 15</td></tr>
            <tr><td><strong>Freight cost (DACH)</strong></td><td>EUR 150-250</td><td>EUR 200-350</td></tr>
            <tr><td><strong>Delivery mode</strong></td><td>Flatbed / curtain-sider</td><td>Flatbed (4-6 segments/truck)</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
