import type { LayerFilterType } from "./LayerFilterType";


export type FilterMetadata = {
  filterTypeRaw: string;
  filterTypeParsed?: LayerFilterType;
  filterValuesIdentity: Record<string, unknown>;
  filterValuesRequested: Record<string, unknown>;
  filterValuesConfig: Record<string, unknown>;
};