import { Potion } from "../types/Potion";

export function filterByLevelRequirement(potions: Potion[], level: number) {
  return potions.filter(potion =>
    potion.usage.restrictions.levelRequirement <= level
  );
}

export function getPotionByRarity(potions: Potion[], rarity: string): Potion[] {
  return potions.filter(potion => potion.rarity === rarity);
}

export function listIngredients(potion: Potion): string[] {
  return potion.ingredients.map(ingredient => ingredient.name);
}


export function findPotionByEffect(potions: Potion[], effect: string): Potion[] {
  return potions.filter(potion =>
    potion.effects.secondary.some(secEffect => secEffect.attribute === effect)
  );
}

export function calculateCraftingTime(potions: Potion[]): number {
  return potions.reduce((totalTime, potion) => totalTime + (potion.crafting.time.unit === 'minutes' ? potion.crafting.time.amount : potion.crafting.time.amount * 60), 0);
}