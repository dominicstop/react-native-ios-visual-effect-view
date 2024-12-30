import { IdentityBackgroundFilterConfigListPreset } from "./IdentityBackgroundFilterConfigListPreset";


export const IdentityForegroundFilterConfigListPreset = 
  IdentityBackgroundFilterConfigListPreset.filter((filter) => (
       filter.filterName !== 'luminanceCompression'
    && filter.filterName !== 'variadicBlur'
  ));