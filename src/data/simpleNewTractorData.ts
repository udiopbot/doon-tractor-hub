// Complete Massey Ferguson Tractor Database - All Models from Master SHEET.xlsx
export { tractorFamilies, implementsDatabase, getTractorByModel, filterTractorsByHP, filterTractorsByDriveType } from "./completeTractorDatabase";

// Re-export types for backward compatibility
export type { TractorVariant, TractorFamily } from "./completeTractorDatabase";