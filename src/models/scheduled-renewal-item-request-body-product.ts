import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemType1Schema, type ItemType1 } from "./item-type1.js";
import {
  scheduledRenewalProductPricePointSchema,
  type ScheduledRenewalProductPricePoint,
} from "./scheduled-renewal-product-price-point.js";

export type ScheduledRenewalItemRequestBodyProduct = {
  /** Item type to add. Either Product or Component. */
  itemType: ItemType1;
  /** Product or component identifier. */
  itemId: number;
  /** Price point identifier. */
  pricePointId?: number;
  /** (Optional) Quantity for the item. */
  quantity?: number;
  /** Custom pricing for a product within a scheduled renewal. */
  customPrice?: ScheduledRenewalProductPricePoint;
};

export const scheduledRenewalItemRequestBodyProductSchema: Schema<ScheduledRenewalItemRequestBodyProduct> =
  s.object<ScheduledRenewalItemRequestBodyProduct>({
    itemType: itemType1Schema,
    itemId: s.int(),
    pricePointId: s.optional(s.int()),
    quantity: s.optional(s.int()),
    customPrice: s.optional(s.lazy(() => scheduledRenewalProductPricePointSchema)),
    _keysMap: {
      itemType: "item_type",
      itemId: "item_id",
      pricePointId: "price_point_id",
      customPrice: "custom_price",
    },
  });
