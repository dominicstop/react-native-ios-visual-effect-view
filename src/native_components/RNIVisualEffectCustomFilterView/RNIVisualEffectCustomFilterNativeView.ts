import type { HostComponent, ViewProps } from 'react-native';

import { 
  default as RNIVisualEffectCustomFilterViewNativeComponent, 
  type NativeProps as RNIVisualEffectCustomFilterViewNativeComponentProps 
} from './RNIVisualEffectCustomFilterViewNativeComponent';

import type { SharedViewEvents, NativeComponentBaseProps, RemapObject } from 'react-native-ios-utilities';

type RNIVisualEffectCustomFilterViewNativeComponentBaseProps = 
  NativeComponentBaseProps<RNIVisualEffectCustomFilterViewNativeComponentProps>;

export type RNIVisualEffectCustomFilterNativeViewBaseProps = RemapObject<
  RNIVisualEffectCustomFilterViewNativeComponentBaseProps, 
  {
    // TBA
  }
>;

export type RNIVisualEffectCustomFilterNativeViewProps = 
    SharedViewEvents
  & ViewProps
  & RNIVisualEffectCustomFilterNativeViewBaseProps;

export const RNIVisualEffectCustomFilterNativeView = 
  RNIVisualEffectCustomFilterViewNativeComponent as unknown as HostComponent<RNIVisualEffectCustomFilterNativeViewProps>;
