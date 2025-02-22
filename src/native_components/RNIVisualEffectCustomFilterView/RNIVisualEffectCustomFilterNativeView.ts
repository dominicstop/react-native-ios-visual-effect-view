import type { HostComponent, ViewProps } from 'react-native';

import { 
  default as RNIVisualEffectCustomFilterViewNativeComponent, 
  type NativeProps as RNIVisualEffectCustomFilterViewNativeComponentProps 
} from './RNIVisualEffectCustomFilterViewNativeComponent';

import type { SharedViewEvents, NativeComponentBaseProps, RemapObject } from 'react-native-ios-utilities';
import type { CustomFilterConfig } from '../../types/CustomFilterConfig';


type RNIVisualEffectCustomFilterViewNativeComponentBaseProps = 
  NativeComponentBaseProps<RNIVisualEffectCustomFilterViewNativeComponentProps>;

export type RNIVisualEffectCustomFilterNativeViewBaseProps = RemapObject<
  RNIVisualEffectCustomFilterViewNativeComponentBaseProps, 
  {
    currentFilters: CustomFilterConfig;
    backgroundLayerSamplingSizeScale: number;
  }
>;

export type RNIVisualEffectCustomFilterNativeViewProps = 
    SharedViewEvents
  & ViewProps
  & RNIVisualEffectCustomFilterNativeViewBaseProps;

export const RNIVisualEffectCustomFilterNativeView = 
  RNIVisualEffectCustomFilterViewNativeComponent as unknown as HostComponent<RNIVisualEffectCustomFilterNativeViewProps>;
