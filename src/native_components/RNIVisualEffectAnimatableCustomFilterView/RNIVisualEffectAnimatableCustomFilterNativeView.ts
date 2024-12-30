import type { HostComponent, ViewProps } from 'react-native';

import { 
  default as RNIVisualEffectAnimatableCustomFilterViewNativeComponent, 
  type NativeProps as RNIVisualEffectAnimatableCustomFilterViewNativeComponentProps 
} from './RNIVisualEffectAnimatableCustomFilterViewNativeComponent';

import type { SharedViewEvents, NativeComponentBaseProps, RemapObject } from 'react-native-ios-utilities';
import type { LayerFilterConfig } from '../../types/LayerFilterConfig';
import type { CustomFilterKeyframeConfig } from '../../types/CustomFilterKeyframeConfig';


type RNIVisualEffectAnimatableCustomFilterViewNativeComponentBaseProps = 
  NativeComponentBaseProps<RNIVisualEffectAnimatableCustomFilterViewNativeComponentProps>;

export type RNIVisualEffectAnimatableCustomFilterNativeViewBaseProps = RemapObject<
  RNIVisualEffectAnimatableCustomFilterViewNativeComponentBaseProps, 
  {
    backgroundLayerSamplingSizeScale: number;
    identityBackgroundFilters: Array<LayerFilterConfig>;
    identityForegroundFilters: Array<LayerFilterConfig>;
    initialKeyframe: CustomFilterKeyframeConfig;
  }
>;

export type RNIVisualEffectAnimatableCustomFilterNativeViewProps = 
    SharedViewEvents
  & ViewProps
  & RNIVisualEffectAnimatableCustomFilterNativeViewBaseProps;

export const RNIVisualEffectAnimatableCustomFilterNativeView = 
  RNIVisualEffectAnimatableCustomFilterViewNativeComponent as unknown as HostComponent<RNIVisualEffectAnimatableCustomFilterNativeViewProps>;
