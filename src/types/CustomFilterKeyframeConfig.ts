import type { BasicViewKeyframe, GenericViewKeyframe } from 'react-native-ios-utilities';
import type { LayerFilterConfig } from './LayerFilterConfig';
import type { TintConfig } from './TintConfig';


export type CustomFilterKeyframeConfig = {
  rootKeyframe?: GenericViewKeyframe;
  contentKeyframe?: BasicViewKeyframe;
  backdropKeyframe?: BasicViewKeyframe;

  backgroundFilters?: Array<LayerFilterConfig>;
  foregroundFilters?: Array<LayerFilterConfig>;

  tintConfig?: TintConfig;
};