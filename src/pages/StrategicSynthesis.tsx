/**
 * StrategicSynthesis — Page 08
 *
 * "So what?" — synthesizes ALL findings into actionable recommendations.
 *
 * Sections:
 *   1. Executive Summary (key numbers + direct answer)
 *   2. Product Classification (PURSUE / INVESTIGATE / DEFER verdicts)
 *   3. Capability Themes (cross-cutting patterns)
 *   4. Launch Sequence / Roadmap
 */

import PageHeader from "@/components/PageHeader";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import SectionAnchor from "@/components/SectionAnchor";

/* ---- Color helpers ---- */

const VERDICT_STYLES: Record<string, { bg: string; border: string; header: string; badge: string }> = {
  pursue:      { bg: "rgba(111, 213, 155, 0.04)", border: "rgba(111, 213, 155, 0.25)", header: "#6fd59b", badge: "#2d5a3c" },
  investigate: { bg: "rgba(213, 169, 111, 0.04)", border: "rgba(213, 169, 111, 0.25)", header: "#d5a96f", badge: "#5a3c2d" },
  defer:       { bg: "rgba(120, 122, 125, 0.04)", border: "rgba(120, 122, 125, 0.25)", header: "#787a7d", badge: "#303030" },
};

const THEME_BG: Record<string, string> = {
  green:  "rgba(111, 213, 155, 0.07)",
  yellow: "rgba(253, 255, 152, 0.07)",
  orange: "rgba(213, 111, 111, 0.07)",
  blue:   "rgba(111, 169, 213, 0.07)",
};
const THEME_BORDER: Record<string, string> = {
  green:  "rgba(111, 213, 155, 0.28)",
  yellow: "rgba(253, 255, 152, 0.28)",
  orange: "rgba(213, 111, 111, 0.28)",
  blue:   "rgba(111, 169, 213, 0.28)",
};
const THEME_TEXT: Record<string, string> = {
  green:  "#6fd59b",
  yellow: "#fdff98",
  orange: "#d56f6f",
  blue:   "#6fa9d5",
};

/* ---- Static data ---- */

const STATS = [
  { label: "Composite Score Heuraufe",   value: "6.71",  sub: "/ 10 · INVESTIGATE"      },
  { label: "Composite Score Paddockbox",  value: "6.59",  sub: "/ 10 · INVESTIGATE"      },
  { label: "Constraints with knockouts",  value: "0 / 8", sub: "both products surviving"  },
  { label: "Adjacent opportunities",      value: "4",     sub: "A1–A4 all surviving"      },
  { label: "Market needs identified",     value: "52",    sub: "9 JTBD + ODI outcomes"    },
];

const PRODUCTS = [
  {
    name: "Heuraufe",
    naics: "333111",
    composite: 6.71,
    verdictKey: "investigate",
    verdictLabel: "INVESTIGATE → PURSUE",
    rationale:
      "All 8 constraints mitigable at low cost. Strong ODI score on sand-colic / contamination prevention (top L6c need). Unique differentiator: ISO 12944 C3+ corrosion protection (15-year design life vs. 10–12 yr standard). Competes directly with Patura Profi and Kerbl Sicherheitsfressgitter at EUR 1,500–2,500. Transition to PURSUE after galvanizer qualification + CE technical file.",
    scoreBreakdown: [
      { dim: "ODI Opportunity",         score: 5.40, weight: "25%" },
      { dim: "Feature Fit",              score: 8.00, weight: "15%" },
      { dim: "Constraint Compatibility", score: 7.00, weight: "15%" },
      { dim: "Job Coverage",             score: 6.25, weight: "15%" },
      { dim: "VN Hierarchy",             score: 9.00, weight: "10%" },
      { dim: "Incumbent Vulnerability",  score: 6.35, weight: "20%" },
    ],
    blockersToRemove: "Qualify external galvanizer (C3) + CE/GPSR technical file (C7) — both low-effort, 1–3 months.",
    timeToRevenue: "4–6 months",
    estimatedInvestment: "EUR 30,000–60,000",
  },
  {
    name: "Paddockbox",
    naics: "333111",
    composite: 6.59,
    verdictKey: "investigate",
    verdictLabel: "INVESTIGATE",
    rationale:
      "Creates new product category in DACH: no competitor offers castor-mounted modular panels with fold-flat posts for tractor clearance. High job coverage (75% of L6d steps). Two medium-effort blockers: C7 CE Machinery Directive risk assessment and C8 hinge joint fatigue test (10,000-cycle protocol required before series production). Incumbent vulnerability lower due to moderate switching cost of permanent fencing buyers.",
    scoreBreakdown: [
      { dim: "ODI Opportunity",         score: 5.63, weight: "25%" },
      { dim: "Feature Fit",              score: 7.50, weight: "15%" },
      { dim: "Constraint Compatibility", score: 6.00, weight: "15%" },
      { dim: "Job Coverage",             score: 7.50, weight: "15%" },
      { dim: "VN Hierarchy",             score: 9.00, weight: "10%" },
      { dim: "Incumbent Vulnerability",  score: 5.65, weight: "20%" },
    ],
    blockersToRemove: "Hinge fatigue test (10,000-cycle, DIN EN ISO 3834-2 scope) + CE Machinery Directive risk assessment — both medium-effort, 3–5 months.",
    timeToRevenue: "8–12 months",
    estimatedInvestment: "EUR 60,000–100,000",
  },
];

const THEMES = [
  {
    color: "yellow",
    number: "01",
    title: "Welding is necessary but not differentiating",
    body:
      "Stable operators care about durability, horse safety, and operational ease — not weld certification. DIN EN ISO 3834-2 is the entry ticket (competitors use inferior welds) but cannot justify premium pricing on its own. The certified weld is the foundation; the product design on top of it is the differentiator.",
  },
  {
    color: "green",
    number: "02",
    title: "Domain expertise is the real moat",
    body:
      "The shareholder's horse knowledge (Reitstall operations) translates into design decisions competitors miss: tractor fork compatibility, all-sides access to prevent Futterneid, fold-flat posts for mucking tractors, closed-profile tube safety. Patura and Kerbl are distribution-first companies that design standard products — Böhmer can out-design them in the premium segment.",
  },
  {
    color: "blue",
    number: "03",
    title: "Corrosion protection is the quality signal",
    body:
      "ISO 12944 C3+ (15-year design life via hot-dip galvanizing + powder topcoat) is unique in the DACH market. Standard competitors use basic galvanizing rated 5–10 years. This is the primary marketing hook: \"Our Heuraufe outlasts the competition by 50%.\" The outsourced galvanizer is not a weakness — it is the execution of the quality claim.",
  },
  {
    color: "orange",
    number: "04",
    title: "Distribution is the binding constraint",
    body:
      "Manufacturing capability is available today. The bottleneck is market access. No existing channel to Reitstall operators, no catalog, no trade relationships. Equitana (Essen) and regional equestrian trade fairs are the primary acquisition path. Fachhandel partnerships (Kerbl distributor, Loesdau, Krämer Pferdesport) provide scalable reach without building a sales force.",
  },
];

const ROADMAP = [
  {
    phase: "Months 1–3",
    color: "#6fd59b",
    items: [
      "Qualify external galvanizer in Baden-Württemberg (Laupheim / Ulm region)",
      "Heuraufe prototype — 3 units (validates process + cost model)",
      "Commission CE risk assessment — Heuraufe (low burden, GPSR self-declaration)",
      "Paddockbox: commence hinge fatigue test protocol design",
    ],
  },
  {
    phase: "Months 3–6",
    color: "#d5a96f",
    items: [
      "Heuraufe pilot production — 10 units for 3 pilot Reitställe within 100 km",
      "Product landing page + inquiry form live",
      "Trade fair registration (Pferdemesse Stuttgart or Equitana Open Air)",
      "Paddockbox hinge fatigue test execution (prototype hinge assembly, 10,000 cycles)",
    ],
  },
  {
    phase: "Months 6–9",
    color: "#d5a96f",
    items: [
      "First Heuraufe sales from pilot data + trade fair leads",
      "Approach Fachhandel distributor with CE file + 3 reference customers",
      "Paddockbox prototype — 4-panel configuration",
      "CE Machinery Directive risk assessment — Paddockbox (hinge, castor, tip-over)",
    ],
  },
  {
    phase: "Months 9–12",
    color: "#d56f6f",
    items: [
      "Paddockbox CE clearance (technical file complete)",
      "Paddockbox pilot production — 5 units for 2 Reitschulen pilot",
      "Reserve fixed monthly batch window for OEM production (separate from contract work)",
      "Define working capital buffer: raw material stock for 30-unit rolling pipeline",
    ],
  },
  {
    phase: "Months 12–18",
    color: "#787a7d",
    items: [
      "Paddockbox launch — Fachhandel catalog entry",
      "Adjacent product A2 (Stall Grid / Partition): cross-sell to Paddockbox buyers",
      "Assess: Heuraufe reorder rate and margin vs. contract-equivalent utilization",
      "Decision point: scale production or adjust pricing",
    ],
  },
  {
    phase: "Months 18–36",
    color: "#787a7d",
    items: [
      "Scale production to 50–100 Heuraufe units + 20–40 Paddockbox configurations/year",
      "Evaluate A4 (Prefab Steel Stall System) — highest adjacent fit (8/10)",
      "Assess contract-to-product capacity transition threshold",
      "Succession decision checkpoint: metrics vs. transform / decline / sell thresholds",
    ],
  },
];

/* ---- Sub-components ---- */

function ScoreBar({ score, max = 10 }: { score: number; max?: number }) {
  const pct = (score / max) * 100;
  const color = score >= 7.5 ? "#6fd59b" : score >= 5.0 ? "#d5a96f" : "#d56f6f";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 120 }}>
      <div style={{
        flex: 1, height: 5, background: "var(--surface-dark)", borderRadius: 3,
        overflow: "hidden", position: "relative",
      }}>
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: `${pct}%`, background: color, borderRadius: 3,
        }} />
      </div>
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: 11, color,
        width: 32, textAlign: "right",
      }}>
        {score.toFixed(2)}
      </span>
    </div>
  );
}


/* ---- Main component ---- */

export default function StrategicSynthesis() {
  const totalInvestmentLow  = 20000;
  const totalInvestmentHigh = 43000;

  return (
    <>
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <PageHeader
        kicker="Step 08 / Strategic Synthesis / Product Business Launch"
        title="Strategic Synthesis & Recommendation"
        description="The &quot;so what&quot; — synthesizing all findings from capability assessment, functional promise, VN analysis, JTBD, and competitive landscape into a single actionable verdict on the Böhmer equestrian product launch."
      />

      {/* ── 1. Executive Summary ─────────────────────────────────────── */}
      <section id="syn-executive" className="container">
        <SectionAnchor id="syn-executive" title="Executive Summary" />

        <div className="md">
          <ExecutiveSummary title="The Strategic Conclusion">
            <p className="answer">
              <strong>Briefing question: "Sollen wir eigene Produkte entwickeln, und wenn ja, welche? Was brauchen wir dafür, und lohnt es sich?"</strong>
            </p>
            <p className="answer">
              Yes — both products are viable. Heuraufe scores 6.71/10 and Paddockbox scores 6.59/10 on the 6-factor composite (ODI opportunity, feature fit, constraint compatibility, job coverage, VN hierarchy, incumbent vulnerability). Neither clears the 7.5 PURSUE threshold today, but both are in INVESTIGATE territory — meaning the gap to PURSUE is market validation and engineering, not capability. Böhmer can manufacture both products with existing equipment. Zero knockouts across 8 constraints for either product.
            </p>
            <p className="answer">
              <strong>Recommended sequence:</strong> Heuraufe launches first (simpler product, all low-effort constraints, 4–6 months to first revenue). Paddockbox follows 6–12 months later — the hinge joint fatigue test (10,000-cycle protocol) and CE Machinery Directive risk assessment are the critical gates, both in the 3–5 month range. Combined, they address 52 underserved market needs in the DACH equestrian equipment market (Germany: EUR 134M in 2024, EUR 208M by 2030 est.) where no dominant welded-steel competitor with C3+ corrosion protection exists.
            </p>
            <p className="answer">
              <strong>The single most important action:</strong> Qualify an external hot-dip galvanizer in the Laupheim / Ulm region within the first 30 days. This is the prerequisite for every downstream step — without C3+ corrosion protection, neither product can go to market.
            </p>
            <p className="answer">
              <strong>Phase 1 investment:</strong> EUR {totalInvestmentLow.toLocaleString()} – {totalInvestmentHigh.toLocaleString()} covers galvanizer qualification, Heuraufe prototype, CE assessments, and first trade fair presence. This is the minimum viable test of the transformation thesis.
            </p>
          </ExecutiveSummary>
        </div>

        {/* KPI stat tiles */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 14,
          marginTop: 28,
          marginBottom: 8,
        }}>
          {STATS.map((s) => (
            <div key={s.label} style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 10,
              padding: "18px 20px",
            }}>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-gray-dark)",
                marginBottom: 10,
              }}>
                {s.label}
              </div>
              <div style={{
                fontSize: 26,
                fontWeight: 500,
                color: "var(--accent-yellow)",
                letterSpacing: "-0.02em",
                marginBottom: 4,
              }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-gray)" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. Product Classification ─────────────────────────────── */}
      <section id="syn-products" className="container" style={{ paddingTop: 48 }}>
        <SectionAnchor
          id="syn-products"
          title="Product Classification"
          kicker="PURSUE / INVESTIGATE / DEFER verdicts"
        />
        <div className="md">
          <p style={{ marginBottom: 20 }}>
            Both products fall in INVESTIGATE territory (5.0–7.5). The verdict is not a gate —
            it is a signal: proceed with validation rather than full-scale launch. The gap to PURSUE
            is the galvanizer qualification (unblocks both), the CE file (unblocks Heuraufe),
            and the Paddockbox hinge fatigue test. None are capability gaps.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {PRODUCTS.map((p) => {
            const s = VERDICT_STYLES[p.verdictKey];
            return (
              <div key={p.name} style={{
                background: s.bg,
                border: `1px solid ${s.border}`,
                borderRadius: 12,
                overflow: "hidden",
              }}>
                {/* Card header */}
                <div style={{
                  padding: "14px 20px",
                  background: `${s.badge}44`,
                  borderBottom: `1px solid ${s.border}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--text-white)",
                  }}>
                    {p.name}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: s.header,
                    textTransform: "uppercase",
                    background: `${s.badge}66`,
                    padding: "3px 9px",
                    borderRadius: 5,
                  }}>
                    {p.verdictLabel}
                  </span>
                  <span style={{
                    marginLeft: "auto",
                    fontFamily: "var(--font-mono)",
                    fontSize: 20,
                    fontWeight: 600,
                    color: s.header,
                  }}>
                    {p.composite.toFixed(2)}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--text-gray-dark)",
                  }}>
                    / 10
                  </span>
                </div>

                {/* Score breakdown */}
                <div style={{ padding: "16px 20px", borderBottom: `1px solid ${s.border}` }}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.09em",
                    color: "var(--text-gray-dark)",
                    marginBottom: 12,
                  }}>
                    Score Breakdown
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {p.scoreBreakdown.map((dim) => (
                      <div key={dim.dim} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          color: "var(--text-gray)",
                          width: 190,
                          flexShrink: 0,
                        }}>
                          {dim.dim}
                          <span style={{ color: "var(--text-gray-dark)", marginLeft: 6 }}>
                            ({dim.weight})
                          </span>
                        </span>
                        <ScoreBar score={dim.score} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rationale */}
                <div style={{ padding: "16px 20px", borderBottom: `1px solid ${s.border}` }}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.09em",
                    color: "var(--text-gray-dark)",
                    marginBottom: 8,
                  }}>
                    Rationale
                  </div>
                  <p style={{ fontSize: 12, color: "var(--text-gray-light)", margin: 0, lineHeight: 1.6 }}>
                    {p.rationale}
                  </p>
                </div>

                {/* Key metrics row */}
                <div style={{
                  padding: "14px 20px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.09em",
                      color: "var(--text-gray-dark)",
                      marginBottom: 4,
                    }}>
                      Blocker to remove
                    </div>
                    <p style={{ fontSize: 11, color: "#d5a96f", margin: 0, lineHeight: 1.5 }}>
                      {p.blockersToRemove}
                    </p>
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.09em",
                      color: "var(--text-gray-dark)",
                      marginBottom: 4,
                    }}>
                      Time to first revenue
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: s.header }}>
                      {p.timeToRevenue}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "var(--text-gray-dark)",
                      marginTop: 6,
                    }}>
                      Est. Phase 1 investment
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-gray-light)" }}>
                      {p.estimatedInvestment}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. Capability Themes ──────────────────────────────────── */}
      <section id="syn-themes" className="container" style={{ paddingTop: 48 }}>
        <SectionAnchor
          id="syn-themes"
          title="Capability Themes"
          kicker="Cross-cutting patterns from the analysis"
        />
        <div className="md">
          <p style={{ marginBottom: 20 }}>
            Four structural patterns emerge across capability assessment, functional promise,
            competitive landscape, and JTBD analysis. These are not per-product observations —
            they hold for both products and shape the go-to-market strategy.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {THEMES.map((t) => (
            <div key={t.number} style={{
              background: THEME_BG[t.color],
              border: `1px solid ${THEME_BORDER[t.color]}`,
              borderRadius: 12,
              padding: "22px 24px",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 28,
                  fontWeight: 700,
                  color: THEME_TEXT[t.color],
                  opacity: 0.35,
                  lineHeight: 1,
                  flexShrink: 0,
                }}>
                  {t.number}
                </span>
                <h3 style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: THEME_TEXT[t.color],
                  margin: 0,
                  lineHeight: 1.35,
                }}>
                  {t.title}
                </h3>
              </div>
              <p style={{ fontSize: 12.5, color: "var(--text-gray-light)", margin: 0, lineHeight: 1.65 }}>
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Launch Roadmap ──────────────────────────────────────── */}
      <section id="syn-roadmap" className="container" style={{ paddingTop: 48 }}>
        <SectionAnchor
          id="syn-roadmap"
          title="Launch Sequence"
          kicker="36-month roadmap"
        />
        <div className="md">
          <p style={{ marginBottom: 20 }}>
            Heuraufe leads. Paddockbox follows after hinge fatigue validation.
            Adjacent products (A2, A4) enter after core products establish the channel.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {ROADMAP.map((phase, i) => (
            <div key={i} style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 10,
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "160px 1fr",
            }}>
              {/* Phase label */}
              <div style={{
                padding: "18px 20px",
                background: `${phase.color}12`,
                borderRight: `3px solid ${phase.color}`,
                display: "flex",
                alignItems: "center",
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: phase.color,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}>
                  {phase.phase}
                </span>
              </div>

              {/* Items */}
              <div style={{ padding: "14px 20px" }}>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "6px 20px",
                }}>
                  {phase.items.map((item, j) => (
                    <li key={j} style={{
                      fontSize: 12.5,
                      color: "var(--text-gray-light)",
                      lineHeight: 1.5,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                    }}>
                      <span style={{
                        color: phase.color,
                        flexShrink: 0,
                        marginTop: 2,
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                      }}>
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
