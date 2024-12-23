import type { LayerFilterConfig } from "./LayerFilterConfig";
import type { TintConfig } from "./TintConfig";


export type CustomFilterConfig = {
  backgroundFilters: [LayerFilterConfig];
  foregroundFilters?: [LayerFilterConfig];
  tintConfig?: TintConfig;
  backgroundOpacity?: number;
  foregroundOpacity?: number;
};