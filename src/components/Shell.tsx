/**
 * Shell — root app layout: left nav sidebar + main content area.
 *
 * Sidebar structure:
 *   BÖHMER SYSTEMTECHNIK
 *   Equestrian Product Analysis
 *
 *   00  Overview
 *   --- Phase 0 · Company & Capability ---
 *   01  Company Profile
 *   02  Capability Assessment
 *   --- Phase 1 · Product & Market Analysis ---
 *   03  Product & Market Analysis
 *   --- Phase 2 · VN & Production ---
 *   04  Manufacturing VN & Product BOMs
 *   05  Equine Production VN (112920)
 *   06  Adjacent Capabilities
 *   --- Phase 3 · Market & Jobs ---
 *   07  JTBD + Stakeholder Needs
 */

import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

interface NavItem {
  to: string;
  label: string;
  kicker: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    label: "",
    items: [
      { to: "/overview", label: "Overview", kicker: "00" },
    ],
  },
  {
    label: "Phase 0 · Company & Capability",
    items: [
      { to: "/company", label: "Company Profile", kicker: "01" },
      { to: "/capability", label: "Capability Assessment", kicker: "02" },
      { to: "/capabilities", label: "Capability Register", kicker: "02b" },
    ],
  },
  {
    label: "Phase 1 · Product & Market Analysis",
    items: [
      { to: "/product-analysis", label: "Product & Market Analysis", kicker: "03" },
    ],
  },
  {
    label: "Phase 2 · VN & Production",
    items: [
      { to: "/vn-bom", label: "Manufacturing VN & Product BOMs", kicker: "04" },
      { to: "/vn-reitstall", label: "Equine Production VN (112920)", kicker: "05" },
      { to: "/adjacent", label: "Adjacent Capabilities", kicker: "06" },
    ],
  },
  {
    label: "Phase 3 · Market & Jobs",
    items: [
      { to: "/jtbd", label: "JTBD + Stakeholder Needs", kicker: "07" },
    ],
  },
  {
    label: "Phase 4 · Strategic Synthesis",
    items: [
      { to: "/synthesis", label: "Strategic Synthesis & Recommendation", kicker: "08" },
    ],
  },
];

export default function Shell() {
  const location = useLocation();
  const [, setTick] = useState(0);

  // Force re-render on route change for active styling
  useEffect(() => {
    setTick((t) => t + 1);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      {/* Left navigation sidebar */}
      <aside className="app-sidebar">
        {/* Brand block */}
        <div className="app-sidebar__brand">
          <div className="app-sidebar__brand-kicker">Clayton / Node42</div>
          <div className="app-sidebar__brand-title">
            Böhmer Systemtechnik
          </div>
          <div className="app-sidebar__brand-sub">
            Equestrian Product Analysis
          </div>
        </div>

        {/* Navigation */}
        <div className="app-sidebar__section">
          <nav>
            {navGroups.map((group, gi) => (
              <div key={gi}>
                {group.label && (
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "var(--text-gray-dark)",
                    padding: "12px 16px 4px 16px",
                    borderTop: gi > 0 ? "1px solid var(--border-subtle)" : undefined,
                    marginTop: gi > 0 ? 4 : 0,
                  }}>
                    {group.label}
                  </div>
                )}
                {group.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      ["app-nav-link", isActive ? "is-active" : ""].filter(Boolean).join(" ")
                    }
                  >
                    <span className="app-nav-link__num">{item.kicker}</span>
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </div>
            ))}
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
