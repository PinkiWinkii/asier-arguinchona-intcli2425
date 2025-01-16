import '@testing-library/jest-dom'
import { filterByLevelRequirement, getPotionByRarity, listIngredients, findPotionByEffect, calculateCraftingTime } from '../helpers/potionHelpers';
import { potions } from '../__mocks__/potions'; // Mock data for testing

describe('Potion Functions', () => {
  test('filterByLevelRequirement should return potions within level requirement', () => {
    const result = filterByLevelRequirement(potions, 18);
    expect(result).toEqual([potions[0]]);
  });
 
  test('getPotionByRarity should return potions of specified rarity', () => {
    const result = getPotionByRarity(potions, 'legendary');
    expect(result).toEqual(potions);
  });

  test('listIngredients should return the names of the ingredients of a potion', () => {
    const result = listIngredients(potions[0]);
    const expectedIngredients = potions[0].ingredients.map(ingredient => ingredient.name); // Map to names of ingredients
    expect(result).toEqual(expectedIngredients);
  });

  test('findPotionByEffect should return potions with specified secondary effect', () => {
    const result = findPotionByEffect(potions, 'manaRegeneration');
    expect(result).toEqual([potions[1]]);
  });

  test('calculateCraftingTime should return the total crafting time of all potions', () => {
    const result = calculateCraftingTime(potions);
    expect(result).toBe(105); // 45 + 60 
  });
});
