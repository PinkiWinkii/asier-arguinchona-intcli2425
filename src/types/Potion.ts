import { CraftingDetails } from "./CraftingDetails";
import { Effect } from "./Effect";
import { Ingredient } from "./Ingredient";
import { MetaDetails } from "./MetaDetails";
import { SecondaryEffect } from "./SecondaryEffect";
import { UsageDetails } from "./UsageDetails";

export interface Potion {
  id: string,
  name: string,
  type: string,
  rarity: string,
  effects: {
    primary: Effect,
    secondary: SecondaryEffect[]
  },
  ingredients: Ingredient[],
  crafting: CraftingDetails,
  usage: UsageDetails,
  meta: MetaDetails,
  image: string
}