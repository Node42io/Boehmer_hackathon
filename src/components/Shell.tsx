/**
 * Shell — root app layout: left nav sidebar + main content area.
 *
 * Sidebar structure (flat, with expandable section anchors like Zollern):
 *   00  Overview           ▶
 *   01  Company Profile    ▶
 *   02  Capability Assessment ▶
 *   02b Capability Register ▶
 *   03  Product & Market Analysis ▶
 *   04  Manufacturing VN & Product BOMs ▶
 *   05  Equine Production VN ▶
 *   06  Adjacent Capabilities ▶
 *   07  JTBD + Stakeholder Needs ▶
 *   08  Strategic Synthesis ▶
 */

import { useState, useEffect, useCallback } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

interface NavSection {
  id: string;
  label: string;
  sub?: boolean;
}

interface NavItem {
  to: string;
  label: string;
  kicker: string;
  sections?: NavSection[];
}

const navItems: NavItem[] = [
  {
    to: "/overview",
    label: "Overview",
    kicker: "00",
    sections: [
      { id: "ovw-company", label: "About Böhmer" },
      { id: "ovw-products", label: "Products at a Glance" },
      { id: "ovw-composite", label: "Composite Score" },
      { id: "ovw-recommendation", label: "Recommendation" },
      { id: "ovw-howto", label: "How to Read" },
    ],
  },
  {
    to: "/company",
    label: "Company Profile",
    kicker: "01",
    sections: [
      { id: "cp-profile", label: "Company Profile" },
      { id: "cp-crossval", label: "Cross-Validation" },
      { id: "cp-divisions", label: "Business Divisions" },
      { id: "cp-persons", label: "Key Persons" },
      { id: "cp-certs", label: "Certifications" },
      { id: "cp-context", label: "Strategic Context" },
    ],
  },
  {
    to: "/capability",
    label: "Capability Assessment",
    kicker: "02",
    sections: [
      { id: "ca-strengths", label: "Existing Strengths" },
      { id: "ca-register", label: "Constraint Register" },
      { id: "ca-heuraufe", label: "Heuraufe Compatibility" },
      { id: "ca-paddockbox", label: "Paddockbox Compatibility" },
      { id: "ca-summary", label: "Summary" },
    ],
  },
  {
    to: "/capabilities",
    label: "Capability Register",
    kicker: "02b",
    sections: [
      { id: "cap-summary", label: "Executive Summary" },
      { id: "cap-derivation", label: "Derivation Logic" },
      { id: "cap-cards", label: "Capabilities (C1–C9)" },
      { id: "cap-combinations", label: "Combinations" },
      { id: "cap-trackA", label: "Track A: Direct Transfer" },
      { id: "cap-trackB", label: "Track B: Expansion" },
      { id: "cap-trackC", label: "Track C: Vertical" },
    ],
  },
  {
    to: "/product-analysis",
    label: "Product & Market Analysis",
    kicker: "03",
    sections: [
      { id: "pma-fp", label: "Functional Promise" },
      { id: "pma-heuraufe-fp", label: "Heuraufe FP", sub: true },
      { id: "pma-paddockbox-fp", label: "Paddockbox FP", sub: true },
      { id: "pma-decomp", label: "Product Decomposition" },
      { id: "pma-market", label: "Market Context" },
      { id: "pma-comp-heuraufe", label: "Competitors: Heuraufe" },
      { id: "pma-comp-paddockbox", label: "Competitors: Paddockbox" },
    ],
  },
  {
    to: "/vn-bom",
    label: "Manufacturing VN & BOMs",
    kicker: "04",
    sections: [
      { id: "vn-diagram", label: "Manufacturing VN" },
      { id: "vn-scaling", label: "Process Scaling Analysis" },
      { id: "bom-heuraufe", label: "Heuraufe BOM" },
      { id: "bom-paddockbox", label: "Paddockbox BOM" },
    ],
  },
  {
    to: "/vn-reitstall",
    label: "Equine Production VN",
    kicker: "05",
    sections: [
      { id: "eq-diagram", label: "VN Diagram (112920)" },
      { id: "eq-segments", label: "Segments" },
      { id: "eq-l6", label: "L6 Process Steps" },
      { id: "eq-alternatives", label: "Alternatives & Share" },
      { id: "eq-adjacency", label: "Adjacency Analysis" },
    ],
  },
  {
    to: "/adjacent",
    label: "Adjacent Capabilities",
    kicker: "06",
    sections: [
      { id: "adj-register", label: "Constraint Register" },
      { id: "adj-a1", label: "A1: Weidezelt / Shelter" },
      { id: "adj-a2", label: "A2: Boxentrennwand" },
      { id: "adj-a3", label: "A3: Hay Barn Frame" },
      { id: "adj-a4", label: "A4: Stall System" },
      { id: "adj-priority", label: "Priority Ranking" },
    ],
  },
  {
    to: "/jtbd",
    label: "JTBD + Stakeholder Needs",
    kicker: "07",
    sections: [
      { id: "jtbd-scope", label: "Scope & CFJ" },
      { id: "jtbd-segments", label: "Segments" },
      { id: "jtbd-heuraufe", label: "Heuraufe Jobs" },
      { id: "jtbd-paddockbox", label: "Paddockbox Jobs" },
      { id: "jtbd-stakeholders", label: "Stakeholder Mapping" },
      { id: "jtbd-needs", label: "Needs & ODI Scoring" },
      { id: "jtbd-top10", label: "Top 10 Underserved" },
    ],
  },
  {
    to: "/synthesis",
    label: "Strategic Synthesis",
    kicker: "08",
    sections: [
      { id: "syn-executive", label: "Executive Summary" },
      { id: "syn-classification", label: "Product Classification" },
      { id: "syn-themes", label: "Capability Themes" },
      { id: "syn-roadmap", label: "Launch Sequence" },
    ],
  },
];

export default function Shell() {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  // Auto-expand when the active route changes
  useEffect(() => {
    const activeItem = navItems.find((item) =>
      location.pathname === item.to ||
      location.pathname.startsWith(item.to + "/") ||
      (item.to === "/overview" && location.pathname === "/")
    );
    if (activeItem?.sections) {
      setExpanded((prev) => ({ ...prev, [activeItem.to]: true }));
    }
  }, [location.pathname]);

  // Execute pending scroll after navigation completes
  useEffect(() => {
    if (!pendingScroll) return;
    const raf = requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.getElementById(pendingScroll);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setPendingScroll(null);
      }, 100);
    });
    return () => cancelAnimationFrame(raf);
  }, [pendingScroll, location.pathname]);

  const goToSection = useCallback((parentRoute: string, sectionId: string) => {
    const isOnPage =
      location.pathname === parentRoute ||
      (parentRoute === "/overview" && location.pathname === "/");

    if (isOnPage) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setPendingScroll(sectionId);
      navigate(parentRoute);
    }
  }, [location.pathname, navigate]);

  function toggle(to: string) {
    setExpanded((prev) => ({ ...prev, [to]: !prev[to] }));
  }

  return (
    <div className="app-shell">
      {/* Left navigation sidebar */}
      <aside className="app-sidebar">
        {/* Brand block */}
        <div className="app-sidebar__brand">
          <div className="app-sidebar__brand-kicker">Clayton / Node42</div>
          <div className="app-sidebar__brand-title">Böhmer Systemtechnik</div>
          <div className="app-sidebar__brand-sub">Equestrian Product Analysis</div>
        </div>

        {/* Navigation */}
        <div className="app-sidebar__section">
          <div className="app-sidebar__section-label">Analysis</div>
          <nav>
            {navItems.map((item) => {
              const hasSections = item.sections && item.sections.length > 0;
              const isOpen = hasSections && !!expanded[item.to];

              return (
                <div key={item.to}>
                  {/* Main nav row */}
                  <div style={{ display: "flex", alignItems: "stretch" }}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/overview"}
                      className={({ isActive }) =>
                        ["app-nav-link", isActive ? "is-active" : ""].filter(Boolean).join(" ")
                      }
                      style={{ flex: 1, minWidth: 0 }}
                    >
                      <span className="app-nav-link__num">{item.kicker}</span>
                      <span>{item.label}</span>
                    </NavLink>

                    {/* Chevron toggle */}
                    {hasSections && (
                      <button
                        onClick={() => toggle(item.to)}
                        title={isOpen ? "Collapse sections" : "Expand sections"}
                        style={{
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 28,
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                          color: "var(--text-gray-dark)",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            fontSize: 9,
                            transition: "transform 0.2s ease",
                            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                            color: isOpen ? "var(--accent-yellow)" : "var(--text-gray-dark)",
                          }}
                        >
                          ▶
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Section links — slide in/out */}
                  {hasSections && (
                    <div
                      style={{
                        maxHeight: isOpen ? `${item.sections!.length * 26 + 8}px` : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.25s ease",
                      }}
                    >
                      <div style={{ paddingBottom: 4 }}>
                        {item.sections!.map((sec) => (
                          <button
                            key={sec.id}
                            onClick={() => goToSection(item.to, sec.id)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                              width: "100%",
                              textAlign: "left",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              padding: `3px 10px 3px ${sec.sub ? 36 : 28}px`,
                              fontSize: 11,
                              color: "var(--text-gray-dark)",
                              fontFamily: "inherit",
                              lineHeight: 1.4,
                              transition: "color 0.15s ease",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "var(--accent-yellow)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "var(--text-gray-dark)")
                            }
                          >
                            <span style={{ fontSize: 8, opacity: 0.5, flexShrink: 0 }}>
                              {sec.sub ? "└" : "·"}
                            </span>
                            {sec.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Tagline at bottom */}
        <div style={{
          padding: "20px",
          marginTop: "auto",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: "var(--text-gray-dark)",
          lineHeight: 1.6,
          borderTop: "1px solid var(--border-subtle)",
        }}>
          <div style={{ textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3 }}>
            Archetype
          </div>
          <div style={{ color: "var(--text-gray-light)", fontSize: 11 }}>
            Product Business Launch
          </div>
          <div style={{ color: "var(--text-gray-light)", fontSize: 11, marginTop: 8 }}>
            Heuraufe + Paddockbox
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
