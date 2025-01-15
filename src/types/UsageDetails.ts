export interface UsageDetails {
  instructions: string[],
  restrictions: {
    levelRequirement: number,
    classRestrictions: string[],
    warnings: string[],
  },
}