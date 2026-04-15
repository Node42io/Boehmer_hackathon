import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Shell from "./components/Shell";
import Overview from "./pages/Overview";
import CompanyProfile from "./pages/CompanyProfile";
import CapabilityAssessment from "./pages/CapabilityAssessment";
import FunctionalPromise from "./pages/FunctionalPromise";
import ProductDecomposition from "./pages/ProductDecomposition";
import VnBom from "./pages/VnBom";
import Production from "./pages/Production";
import VnReitstall from "./pages/VnReitstall";
import CapabilityFit from "./pages/CapabilityFit";
import AdjacentCapabilities from "./pages/AdjacentCapabilities";
import Jtbd from "./pages/Jtbd";
import Competitive from "./pages/Competitive";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/company" element={<CompanyProfile />} />
          <Route path="/capability" element={<CapabilityAssessment />} />
          <Route path="/functional-promise" element={<FunctionalPromise />} />
          <Route path="/product" element={<ProductDecomposition />} />
          <Route path="/vn-bom" element={<VnBom />} />
          <Route path="/production" element={<Production />} />
          <Route path="/vn-reitstall" element={<VnReitstall />} />
          <Route path="/capability-fit" element={<CapabilityFit />} />
          <Route path="/adjacent" element={<AdjacentCapabilities />} />
          <Route path="/jtbd" element={<Jtbd />} />
          <Route path="/competitive" element={<Competitive />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
