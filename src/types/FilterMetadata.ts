import type { LayerFilterName } from "./LayerFilterConfig";


export type FilterMetadata = {
  filterTypeRaw: string;
  filterTypeParsed?: LayerFilterName;
  filterValuesIdentity: Record<string, unknown>;
  filterValuesRequested: Record<string, unknown>;
  filterValuesConfig: Record<string, unknown>;
};