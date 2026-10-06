import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Item type to add. Either Product or Component. */
export const ItemType = {
  Component: "Component",
} as const;
export type ItemType = (typeof ItemType)[keyof typeof ItemType] | (string & {});

export const itemTypeSchema: EnumSchema<ItemType> = s.enumOf<ItemType>(ItemType);
