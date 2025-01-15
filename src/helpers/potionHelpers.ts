import { Ingredient } from "../types/Ingredient";
import { Potion } from "../types/Potion";

export function filterByLevelRequirement(potions: Potion[], level: number) {
  return potions.filter(potion =>
    potion.usage.restrictions.levelRequirement <= level
  );
}

export function getPotionByRarity(potions: Potion[], rarity: string): Potion[] {
  return potions.filter(potion => potion.rarity === rarity);
}

export function listIngredients(potion: Potion): Ingredient[] {
  return potion.ingredients;
}

export function findPotionByEffect(potions: Potion[], effect: string): Potion[] {
  return potions.filter(potion =>
    potion.effects.secondary.some(secEffect => secEffect.attribute === effect)
  );
}

export function calculateCraftingTime(potions: Potion[]): number {
  return potions.reduce((totalTime, potion) => totalTime + potion.crafting.time.amount, 0);
}