import type { HostComponent, ViewProps } from 'react-native';

import { default as RNIBlurViewNativeComponent } from './RNIBlurViewNativeComponent';
import type { SharedViewEvents, AnimationConfig } from 'react-native-ios-utilities';
import type { BlurViewConfig } from './BlurViewConfig';


export type RNIBlurNativeViewBaseProps = {
  blurConfig: BlurViewConfig;
  animationConfig?: AnimationConfig;
  animationDelay?: number;
};

export type RNIBlurNativeViewProps = 
    SharedViewEvents
  & ViewProps
  & RNIBlurNativeViewBaseProps;

export const RNIBlurNativeView = 
  RNIBlurViewNativeComponent as unknown as HostComponent<RNIBlurNativeViewProps>;
