import type { HostComponent, ViewProps } from 'react-native';

import { 
  default as RNIVisualEffectAnimatableCustomFilterViewNativeComponent, 
  type NativeProps as RNIVisualEffectAnimatableCustomFilterViewNativeComponentProps 
} from './RNIVisualEffectAnimatableCustomFilterViewNativeComponent';

import type { SharedViewEvents, NativeComponentBaseProps, RemapObject } from 'react-native-ios-utilities';
import type { CustomFilterConfig } from '../../types/CustomFilterConfig';


type RNIVisualEffectAnimatableCustomFilterViewNativeComponentBaseProps = 
  NativeComponentBaseProps<RNIVisualEffectAnimatableCustomFilterViewNativeComponentProps>;

export type RNIVisualEffectAnimatableCustomFilterNativeViewBaseProps = RemapObject<
  RNIVisualEffectAnimatableCustomFilterViewNativeComponentBaseProps, 
  {
    currentFilters: CustomFilterConfig;
    backgroundLayerSamplingSizeScale: number;
  }
>;

export type RNIVisualEffectAnimatableCustomFilterNativeViewProps = 
    SharedViewEvents
  & ViewProps
  & RNIVisualEffectAnimatableCustomFilterNativeViewBaseProps;

export const RNIVisualEffectAnimatableCustomFilterNativeView = 
  RNIVisualEffectAnimatableCustomFilterViewNativeComponent as unknown as HostComponent<RNIVisualEffectAnimatableCustomFilterNativeViewProps>;
