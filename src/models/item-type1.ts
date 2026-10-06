import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Item type to add. Either Product or Component. */
export const ItemType1 = {
  Product: "Product",
} as const;
export type ItemType1 = (typeof ItemType1)[keyof typeof ItemType1] | (string & {});

export const itemType1Schema: EnumSchema<ItemType1> = s.enumOf<ItemType1>(ItemType1);
