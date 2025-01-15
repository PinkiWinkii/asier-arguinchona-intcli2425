export interface CraftingDetails {
  station: string,
  required_level: number,
  time: {
    unit: string,
    amount: number,
  },
}