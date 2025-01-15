import { Availability } from "./Availability";
import { Effect } from "./Effect";
import { Ingredient } from "./Ingredient";
import { SecondaryEffect } from "./SecondaryEffect";

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
  crafting: {
    station: string,
    required_level: number,
    time: {
      unit: string,
      amount: number,
    },
  },
  usage: {
    instructions: string[],
    restrictions: {
      levelRequirement: number,
      classRestrictions: string[],
      warnings: string[],
    },
  },
  meta: {
    created_by: string,
    lore: string,
    availability: Availability
  },
  image: string
}