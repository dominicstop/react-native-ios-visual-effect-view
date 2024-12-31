import type { LayerFilterConfig } from "../types/LayerFilterConfig";
import { IdentityBackgroundFilterConfigListPreset } from "./IdentityBackgroundFilterConfigListPreset";


export const IdentityForegroundFilterConfigListPreset: Array<LayerFilterConfig> = [
  ...IdentityBackgroundFilterConfigListPreset.filter((filter) => (
       filter.filterName !== 'luminanceCompression'
    && filter.filterName !== 'variadicBlur'
  )),
];