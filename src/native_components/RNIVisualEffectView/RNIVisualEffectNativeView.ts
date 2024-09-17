import type { HostComponent, ViewProps } from 'react-native';

import { 
  default as RNIVisualEffectViewNativeComponent, 
  type NativeProps as RNIVisualEffectViewNativeComponentProps 
} from './RNIVisualEffectViewNativeComponent';

import type { SharedViewEvents, NativeComponentBaseProps, RemapObject } from 'react-native-ios-utilities';


type RNIBlurViewNativeComponentBaseProps = 
  NativeComponentBaseProps<RNIVisualEffectViewNativeComponentProps>;

export type RNIVisualEffectNativeViewBaseProps = RemapObject<RNIBlurViewNativeComponentBaseProps, {
  // TBA
}>;

export type RNIVisualEffectNativeViewProps = 
    SharedViewEvents
  & ViewProps
  & RNIVisualEffectNativeViewBaseProps;

export const RNIVisualEffectNativeView = 
  RNIVisualEffectViewNativeComponent as unknown as HostComponent<RNIVisualEffectNativeViewProps>;
