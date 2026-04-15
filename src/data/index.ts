/**
 * Data layer for the Böhmer Systemtechnik equestrian product analysis app.
 * Import from here — never import JSON files directly in UI code.
 */

import type {
  OverviewData,
  CompanyData,
  ProductsData,
  FunctionalPromiseData,
} from "@/types";

import _overview from "./overview.json";
import _company from "./company.json";
import _products from "./products.json";
import _functionalPromise from "./functionalPromise.json";

export const overview = _overview as unknown as OverviewData;
export const company = _company as unknown as CompanyData;
export const products = _products as unknown as ProductsData;
export const functionalPromise = _functionalPromise as unknown as FunctionalPromiseData;
