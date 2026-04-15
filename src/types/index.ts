// ─────────────────────────────────────────────────────────────────────────────
// Böhmer Systemtechnik — Shared TypeScript Interfaces
// ─────────────────────────────────────────────────────────────────────────────

export interface Source {
  id: string;
  label: string;
  url?: string;
}

// ─── Overview ───────────────────────────────────────────────────────────────

export interface OverviewCompany {
  legalName: string;
  legalForm: string;
  headquarters: string;
  countryCode: string;
  region: string;
  founded: number;
  foundedNote: string;
  ownership: string;
  employees: number;
  employeesNote: string;
  revenueEurM: string;
  revenueConfidence: string;
  naicsPrimary: string;
  naicsPrimaryTitle: string;
  naicsSecondary: string[];
  vatId: string;
}

export interface OverviewDivision {
  name: string;
  focus: string;
  status: string;
  description: string;
}

export interface OverviewProduct {
  name: string;
  nameEn: string;
  naicsManufacturing: string;
  naicsMarket: string;
  fp: string;
  estimatedPrice: string;
  serviceLife: string;
  capabilityFitScore: number;
  recommendation: string;
}

export interface OverviewData {
  company: OverviewCompany;
  divisions: OverviewDivision[];
  keyPersons: { name: string; role: string; generation: number; ageApprox?: number }[];
  certifications: { name: string; standard: string }[];
  products: OverviewProduct[];
  briefingQuestion: string;
  briefingAnswer: string;
  stats: { products: number; vnSteps: number; marketNeeds: number; targetMarketNaics: string };
}

// ─── Company Profile ────────────────────────────────────────────────────────

export interface CompanyProfile {
  legalName: string;
  legalForm: string;
  headquarters: string;
  countryCode: string;
  region: string;
  founded: number;
  foundedNote: string;
  ownership: string;
  ownershipDetail: string;
  employees: number;
  employeesNote: string;
  revenueEurM: string;
  revenueConfidence: string;
  naicsPrimary: string;
  naicsSecondary: string[];
  vatId: string;
  handelsregister: string;
}

export interface CrossValidation {
  metric: string;
  instructionsMd: string;
  webResearch: string;
  delta: string;
  status: string;
}

export interface CompanyData {
  profile: CompanyProfile;
  crossValidation: CrossValidation[];
  divisions: { name: string; nameLocal: string; description: string; focus: string; status: string }[];
  keyPersons: { name: string; role: string; generation?: number; ageApprox?: number; relevance: string }[];
  certifications: { name: string; standard: string; scope: string }[];
  strategicContext: string;
  keyConstraintsOnTransformation: string[];
}

// ─── Product Decomposition ──────────────────────────────────────────────────

export interface ProductFeature {
  name: string;
  description: string;
  scope: "technology" | "vendor";
  category: string;
}

export interface ProductSpec {
  name: string;
  value: string;
  unit: string;
}

export interface ProductConstraint {
  name: string;
  type: string;
  severity: "hard" | "soft";
  description: string;
}

export interface Product {
  name: string;
  nameEn: string;
  technologyClass: string;
  underlyingMechanism: string;
  functionalPromise: string;
  differentiators: string[];
  features: ProductFeature[];
  specifications: ProductSpec[];
  constraints: ProductConstraint[];
}

export interface ProductsData {
  products: Product[];
}

// ─── Functional Promise ─────────────────────────────────────────────────────

export interface FPProductData {
  statement: string;
  verb: string;
  object: string;
  context: string;
  differentiators: string[];
  mechanismFree: boolean;
}

export interface FPCommodityData {
  commodity: string;
  statement: string;
  fpExtension: string | null;
}

export interface FPProductEntry {
  name: string;
  mechanism: string;
  productFP: FPProductData;
  commodityFP: FPCommodityData;
  bomPosition: { level: string; role: string; note: string };
  complements: { name: string; criticality: string }[];
}

export interface FunctionalPromiseData {
  technologyClass: string;
  products: FPProductEntry[];
}

// ─── Value Network ────────────────────────────────────────────────────────────

export interface L6System {
  id: string;
  name: string;
  type: string;
  jobFamily: string;
  /** Output types or scope string. */
  scope?: string;
  /** L5 child units pre-linked (reserved for future use; always [] currently). */
  l5Units?: unknown[];
}

export interface VNUnit {
  level: string;
  id: string;
  name: string;
  functionalJob: string;
  description: string;
  dependencies: string[];
}

export interface ValueNetworkData {
  naicsCode: string;
  marketName: string;
  slug: string;
  coreJobStatement: string;
  outputTypes: string[];
  hierarchy: string;
  architectureDistance: number;
  marketSize: string;
  l6Systems: L6System[];
  vnUnits: VNUnit[];
  /** Böhmer strategic position narrative. */
  böhmerPosition?: string;
  /** Alias for backward compat with Marquardt component. */
  marquardtPosition?: string;
  strategicPosition: Record<string, unknown> | null;
  sources: Array<{ id: string; label: string; url?: string }>;
}

// ─── Bill of Materials ────────────────────────────────────────────────────────

export type BOMConfidence = "high" | "medium" | "low";

export interface BOMOutputType {
  id: string;
  name: string;
  hydronic: boolean;
  sensorFit: "primary" | "secondary" | "none";
  notes: string;
}

export interface BOMAlternative {
  name: string;
  sharePct: number;
  trend: "growing" | "stable" | "declining" | string;
  /** True when this alternative is the Böhmer product or technology */
  isMarquardt?: boolean;
}

export interface BOMModule {
  id: string;
  name: string;
  isMarquardtAnchor: boolean;
  /** Short note shown in anchor badge */
  sensorNote?: string | null;
  alternatives: BOMAlternative[];
}

export interface BOML4Subsystem {
  id: string;
  name: string;
  costSharePct: number;
  keyDesignChoice: string;
  isMarquardtAnchor: boolean;
  confidence: BOMConfidence;
  alternatives: BOMAlternative[];
  modules: BOMModule[];
}

export interface BOMData {
  slug: string;
  marketName: string;
  naicsCode: string;
  confidence: BOMConfidence;
  /** True when no BOM data has been generated yet */
  dataPending: boolean;
  sensorNote: string;
  outputTypes: BOMOutputType[];
  marquardtAnchorIds: string[];
  l4Subsystems: BOML4Subsystem[];
}
