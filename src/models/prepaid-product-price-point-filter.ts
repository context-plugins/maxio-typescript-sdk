import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { includeNotNullSchema, type IncludeNotNull } from "./include-not-null.js";

export type PrepaidProductPricePointFilter = {
  /** Passed as a parameter to list methods to return only non null values. */
  productPricePointId: IncludeNotNull;
};

export const prepaidProductPricePointFilterSchema: Schema<PrepaidProductPricePointFilter> =
  s.object<PrepaidProductPricePointFilter>({
    productPricePointId: includeNotNullSchema,
    _keysMap: {
      productPricePointId: "product_price_point_id",
    },
  });
