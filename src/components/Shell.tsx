/**
 * Shell — root app layout: left nav sidebar + main content area.
 * Zollern-style flat nav with expandable ▶ section anchors.
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
      { id: "ovw-divisions", label: "Business Divisions" },
      { id: "ovw-products", label: "Products at a Glance" },
      { id: "ovw-scores", label: "Composite Score" },
      { id: "ovw-howto", label: "How to Read" },
    ],
  },
  {
    to: "/company",
    label: "Company Profile",
    kicker: "01",
    sections: [
      { id: "cp-profile", label: "Company Profile" },
      { id: "cp-validation", label: "Cross-Validation" },
      { id: "cp-divisions", label: "Business Divisions" },
      { id: "cp-persons", label: "Key Persons" },
      { id: "cp-certs", label: "Certifications" },
      { id: "cp-strategy", label: "Strategic Context" },
    ],
  },
  {
    to: "/capability",
    label: "Capability Assessment",
    kicker: "02",
    sections: [
      { id: "ca-strengths", label: "Existing Strengths" },
      { id: "ca-tech", label: "Technology Class" },
      { id: "ca-constraints", label: "Constraint Register" },
      { id: "ca-heuraufe", label: "Heuraufe Compatibility" },
      { id: "ca-paddockbox", label: "Paddockbox Compatibility" },
      { id: "ca-gaps", label: "Gap Register" },
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
      { id: "cap-tracks", label: "Track A / B / C" },
      { id: "cap-reference", label: "Reference" },
    ],
  },
  {
    to: "/product-analysis",
    label: "Product & Market Analysis",
    kicker: "03",
    sections: [
      { id: "pma-overview", label: "Overview" },
      { id: "pma-tech", label: "Technology Class" },
      { id: "pma-heuraufe", label: "Heuraufe Analysis" },
      { id: "pma-paddockbox", label: "Paddockbox Analysis" },
      { id: "pma-market", label: "Market Context" },
      { id: "pma-h-competitors", label: "Heuraufe Competitors" },
      { id: "pma-p-competitors", label: "Paddockbox Competitors" },
      { id: "pma-summary", label: "Summary" },
    ],
  },
  {
    to: "/vn-bom",
    label: "Manufacturing VN & BOMs",
    kicker: "04",
    sections: [
      { id: "vn-steps", label: "Process Steps & Scaling" },
      { id: "vn-bom-heuraufe", label: "Heuraufe BOM" },
      { id: "vn-bom-paddockbox", label: "Paddockbox BOM" },
      { id: "vn-summary", label: "Summary" },
    ],
  },
  {
    to: "/vn-reitstall",
    label: "Equine Production VN",
    kicker: "05",
    sections: [
      { id: "vr-scope", label: "Scope & CFJ" },
      { id: "vr-overview", label: "VN Overview" },
      { id: "vr-l6", label: "L6 Process Steps" },
      { id: "vr-hierarchy", label: "L7→L4 Hierarchy" },
      { id: "vr-adjacency", label: "Adjacency Analysis" },
      { id: "vr-summary", label: "Summary" },
    ],
  },
  {
    to: "/adjacent",
    label: "Adjacent Capabilities",
    kicker: "06",
    sections: [
      { id: "adj-scope", label: "Scope" },
      { id: "adj-constraints", label: "Constraint Register" },
      { id: "adj-a1", label: "A1: Weidezelt / Shelter" },
      { id: "adj-a2", label: "A2: Boxentrennwand" },
      { id: "adj-a3", label: "A3: Hay Barn Frame" },
      { id: "adj-a4", label: "A4: Stall System" },
      { id: "adj-aggregate", label: "Aggregate Results" },
      { id: "adj-mitigation", label: "Mitigation Priority" },
    ],
  },
  {
    to: "/jtbd",
    label: "JTBD + Stakeholder Needs",
    kicker: "07",
    sections: [
      { id: "jtbd-scope", label: "Scope & CFJ" },
      { id: "jtbd-phase1", label: "Industry Landscape" },
      { id: "jtbd-phase2", label: "Company Enters" },
      { id: "jtbd-p1", label: "Heuraufe Jobs", sub: true },
      { id: "jtbd-p2", label: "Paddockbox Jobs", sub: true },
      { id: "jtbd-phase3", label: "Needs Derivation" },
      { id: "jtbd-stakeholder-needs", label: "Stakeholder Needs" },
      { id: "jtbd-top10", label: "Top 10 Underserved" },
      { id: "jtbd-yield", label: "Yield Summary" },
    ],
  },
  {
    to: "/synthesis",
    label: "Strategic Synthesis",
    kicker: "08",
    sections: [
      { id: "syn-executive", label: "Executive Summary" },
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
      <aside className="app-sidebar">
        <div className="app-sidebar__brand">
          <div className="app-sidebar__brand-kicker">Clayton / Node42</div>
          <div className="app-sidebar__brand-title">Böhmer Systemtechnik</div>
          <div className="app-sidebar__brand-sub">Equestrian Product Analysis</div>
        </div>

        <div className="app-sidebar__section">
          <div className="app-sidebar__section-label">Analysis</div>
          <nav>
            {navItems.map((item) => {
              const hasSections = item.sections && item.sections.length > 0;
              const isOpen = hasSections && !!expanded[item.to];

              return (
                <div key={item.to}>
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

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
