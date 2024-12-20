import type { HostComponent, ViewProps } from 'react-native';

import { 
  default as RNIBlurViewNativeComponent, 
  type NativeProps as RNIBlurViewNativeComponentProps 
} from './RNIBlurViewNativeComponent';

import type { SharedViewEvents, AnimationConfig, RemapObject, NativeComponentBaseProps } from 'react-native-ios-utilities';
import type { VisualEffectBlurMode } from '../../types/VisualEffectBlurMode';


type RNIBlurViewNativeComponentBaseProps = 
  NativeComponentBaseProps<RNIBlurViewNativeComponentProps>;

export type RNIBlurNativeViewBaseProps = RemapObject<RNIBlurViewNativeComponentBaseProps, {
  blurMode: VisualEffectBlurMode;
  animationConfig: AnimationConfig;
  animationDelay: number;
  backgroundLayerSamplingSizeScale: number;
}>;

export type RNIBlurNativeViewProps = 
    SharedViewEvents
  & ViewProps
  & RNIBlurNativeViewBaseProps;

export const RNIBlurNativeView = 
  RNIBlurViewNativeComponent as unknown as HostComponent<RNIBlurNativeViewProps>;
