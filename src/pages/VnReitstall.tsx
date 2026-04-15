/**
 * VnReitstall — End-Beneficiary Value Network (NAICS 112920)
 *
 * Shows the interactive VNDiagram for the Reitstall / Equine Production VN.
 * Böhmer's two product positions (Heuraufe in L6c, Paddockbox in L6d) are
 * highlighted with yellow accent — the VNDiagram's anchor highlighting
 * detects "BÖHMER PRIMARY" markers in the unit descriptions.
 *
 * Static tables and adjacency analysis shown BELOW the interactive diagram.
 */

import PageHeader from "@/components/PageHeader";
import SectionAnchor from "@/components/SectionAnchor";
import VNDiagram from "./analysis/tabs/valuenetwork/VNDiagram";

import vnReitstall from "@/data/vnReitstall.json";
import type { ValueNetworkData } from "@/types";

const outputTypes = [
  { id: "OT-A", name: "Reitstall / Pension", relevance: "primary" },
  { id: "OT-B", name: "Gestüt / Breeding", relevance: "secondary" },
  { id: "OT-C", name: "Schulpferd / Reitschule", relevance: "primary" },
  { id: "OT-D", name: "Turnierstall", relevance: "secondary" },
  { id: "OT-E", name: "Freizeitpferd / Privathaltung", relevance: "tertiary" },
];

const adjacencies = [
  { unit: "Manure Bunker / Container", level: "L4", adaptation: "LOW", fit: 6 },
  { unit: "Stable Stall Grid / Partition", level: "L4", adaptation: "LOW", fit: 8 },
  { unit: "Hay Barn Steel Frame Sub-Assembly", level: "L5", adaptation: "MEDIUM", fit: 5 },
  { unit: "Prefab Steel Stall System", level: "L5", adaptation: "MEDIUM", fit: 8 },
];

export default function VnReitstall() {
  return (
    <section className="container">
      <PageHeader
        kicker="Phase 0 / Sub-step 06 / End-Beneficiary VN"
        title="VN Reitstall (NAICS 112920)"
        description="Interactive end-beneficiary value network for equine production facilities in the DACH region. Böhmer's product positions are highlighted."
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
        <hr />
        <SectionAnchor id="vr-overview" title="VN Overview" />
        <table>
          <tbody>
            <tr><td><strong>NAICS</strong></td><td><code>112920</code> — Horses and Other Equine Production</td></tr>
            <tr><td><strong>L7 Ecosystem</strong></td><td>Equine Husbandry &amp; Sport Ecosystem</td></tr>
            <tr><td><strong>CFJ</strong></td><td>Raise, house, feed, and condition horses in managed facilities so that animals remain healthy, tractable, and available for their designated use</td></tr>
            <tr><td><strong>Geography</strong></td><td>DACH region (DE, AT, CH)</td></tr>
          </tbody>
        </table>

        <h3>Output Types</h3>
        <table>
          <thead><tr><th>ID</th><th>Output Type</th><th>Böhmer Relevance</th></tr></thead>
          <tbody>
            {outputTypes.map((o) => (
              <tr key={o.id}>
                <td><strong>{o.id}</strong></td>
                <td>{o.name}</td>
                <td><span className={`badge badge--${o.relevance === "primary" ? "strong" : o.relevance === "secondary" ? "moderate" : "neutral"}`}>{o.relevance}</span></td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <SectionAnchor id="vr-positions" title="Böhmer Product Positions" />

        <h3>Heuraufe — L6c Daily Feeding &amp; Nutrition Management</h3>
        <p>L5 Node: <strong>Multi-Horse Outdoor Hay Rack / Station</strong></p>
        <p style={{ fontSize: 13, color: "var(--text-gray)", marginBottom: 12 }}>
          Böhmer's Heuraufe is the only roofed, multi-access, tractor-movable product in this L5 slot.
          Activates across all 5 output types.
        </p>
        <table>
          <thead><tr><th>Alternative</th><th>Share % [EST]</th><th>Böhmer</th></tr></thead>
          <tbody>
            {[
              { name: "Multi-horse outdoor hay rack/station (roofed, galvanized)", share: 20, bohmer: true },
              { name: "Round bale ring feeder", share: 35, bohmer: false },
              { name: "Wall-mounted hay rack / corner feeder (single-horse)", share: 25, bohmer: false },
              { name: "Slow-feed hay net station", share: 15, bohmer: false },
              { name: "Automated RFID hay dispenser", share: 5, bohmer: false },
            ].map((a) => (
              <tr key={a.name} style={a.bohmer ? { background: "rgba(253,255,152,0.04)" } : undefined}>
                <td>{a.bohmer ? <strong>{a.name}</strong> : a.name}</td>
                <td style={{ fontFamily: "var(--font-mono)", textAlign: "center" }}>{a.share}%</td>
                <td>{a.bohmer ? <span className="badge badge--accent">Böhmer</span> : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={{ marginTop: 24 }}>Paddockbox — L6d Housing &amp; Paddock Space Management</h3>
        <p>L5 Node: <strong>Mobile Modular Panel System</strong></p>
        <p style={{ fontSize: 13, color: "var(--text-gray)", marginBottom: 12 }}>
          Böhmer's Paddockbox is the only castor-mounted, fold-flat, wall-attachable panel system.
          Activates across all 5 output types.
        </p>
        <table>
          <thead><tr><th>Alternative</th><th>Share % [EST]</th><th>Böhmer</th></tr></thead>
          <tbody>
            {[
              { name: "Mobile modular panel system (wheeled steel frames)", share: 15, bohmer: true },
              { name: "Permanent post-and-rail fence (timber or galv. steel)", share: 45, bohmer: false },
              { name: "Electric tape / wire fencing", share: 25, bohmer: false },
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

        <hr />
        <SectionAnchor id="vr-adjacency" title="Strategic Adjacency Analysis" />
        <table>
          <thead><tr><th>VN Unit</th><th>Level</th><th>Adaptation</th><th>Strategic Fit</th></tr></thead>
          <tbody>
            {adjacencies.map((a) => (
              <tr key={a.unit}>
                <td><strong>{a.unit}</strong></td>
                <td>{a.level}</td>
                <td><span className={`badge badge--${a.adaptation === "LOW" ? "strong" : "moderate"}`}>{a.adaptation}</span></td>
                <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>{a.fit}/10</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--text-gray)", marginTop: 8 }}>
          <strong>Highest-value adjacency:</strong> Prefab steel stall equipment (L5 under L6d) — 60% competence overlap, same buyer persona, 8/10 strategic fit. EUR 150–250K investment, 12–18 months.
        </p>
        <p style={{ fontSize: 12, color: "var(--text-gray)" }}>
          <strong>Vertical move-ups</strong> to L6c or L6d integrator level both score LOW feasibility organically — require software/civil/construction competences Böhmer does not possess.
        </p>
      </div>
    </section>
  );
}
