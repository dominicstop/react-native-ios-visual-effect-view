import type { LayerFilterConfig } from "./LayerFilterConfig";
import type { TintConfig } from "./TintConfig";


export type CustomFilterConfig = {
  backgroundFilters: Array<LayerFilterConfig>;
  foregroundFilters?: Array<LayerFilterConfig>;
  tintConfig?: TintConfig;
  backgroundOpacity?: number;
  foregroundOpacity?: number;
};