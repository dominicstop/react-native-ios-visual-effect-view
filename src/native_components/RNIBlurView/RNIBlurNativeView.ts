import type { HostComponent, ViewProps } from 'react-native';

import { 
  default as RNIBlurViewNativeComponent, 
  type NativeProps as RNIBlurViewNativeComponentProps 
} from './RNIBlurViewNativeComponent';

import type { SharedViewEvents, AnimationConfig, RemapObject } from 'react-native-ios-utilities';
import type { BlurViewConfig } from './BlurViewConfig';


type RNIBlurViewNativeComponentBaseProps = 
  Omit<RNIBlurViewNativeComponentProps, keyof (ViewProps & SharedViewEvents)>

export type RNIBlurNativeViewBaseProps = RemapObject<RNIBlurViewNativeComponentBaseProps, {
  blurConfig: BlurViewConfig;
  animationConfig?: AnimationConfig;
  animationDelay?: number;
}>;

export type RNIBlurNativeViewProps = 
    SharedViewEvents
  & ViewProps
  & RNIBlurNativeViewBaseProps;

export const RNIBlurNativeView = 
  RNIBlurViewNativeComponent as unknown as HostComponent<RNIBlurNativeViewProps>;
