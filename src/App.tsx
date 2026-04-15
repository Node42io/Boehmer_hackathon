import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Shell from "./components/Shell";
import Overview from "./pages/Overview";
import CompanyProfile from "./pages/CompanyProfile";
import CapabilityAssessment from "./pages/CapabilityAssessment";
import CapabilityRegister from "./pages/CapabilityRegister";
import ProductMarketAnalysis from "./pages/ProductMarketAnalysis";
import VnBom from "./pages/VnBom";
import VnReitstall from "./pages/VnReitstall";
import AdjacentCapabilities from "./pages/AdjacentCapabilities";
import Jtbd from "./pages/Jtbd";
import StrategicSynthesis from "./pages/StrategicSynthesis";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/company" element={<CompanyProfile />} />
          <Route path="/capability" element={<CapabilityAssessment />} />
          <Route path="/capabilities" element={<CapabilityRegister />} />
          <Route path="/product-analysis" element={<ProductMarketAnalysis />} />
          <Route path="/vn-bom" element={<VnBom />} />
          <Route path="/vn-reitstall" element={<VnReitstall />} />
          <Route path="/adjacent" element={<AdjacentCapabilities />} />
          <Route path="/jtbd" element={<Jtbd />} />
          <Route path="/synthesis" element={<StrategicSynthesis />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
