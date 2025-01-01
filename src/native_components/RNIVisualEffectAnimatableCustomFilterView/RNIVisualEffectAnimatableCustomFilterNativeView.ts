import type { HostComponent, ViewProps } from 'react-native';

import { 
  default as RNIVisualEffectAnimatableCustomFilterViewNativeComponent, 
  type NativeProps as RNIVisualEffectAnimatableCustomFilterViewNativeComponentProps 
} from './RNIVisualEffectAnimatableCustomFilterViewNativeComponent';

import type { SharedViewEvents, NativeComponentBaseProps, RemapObject, AnimationConfig, OnPropertyAnimatorDidCompleteEvent, OnPropertyAnimatorDidStartEvent } from 'react-native-ios-utilities';
import type { LayerFilterConfig } from '../../types/LayerFilterConfig';
import type { CustomFilterKeyframeConfig } from '../../types/CustomFilterKeyframeConfig';
import type { OnRequestFromNativeEvent } from './RNIVisualEffectAnimatableCustomFilterViewEvents';


type RNIVisualEffectAnimatableCustomFilterViewNativeComponentBaseProps = 
  NativeComponentBaseProps<RNIVisualEffectAnimatableCustomFilterViewNativeComponentProps>;

export type RNIVisualEffectAnimatableCustomFilterNativeViewBaseProps = RemapObject<
  RNIVisualEffectAnimatableCustomFilterViewNativeComponentBaseProps, 
  {
    onRequestFromNative: OnRequestFromNativeEvent;
    onPropertyAnimatorDidStart: OnPropertyAnimatorDidStartEvent;
    onPropertyAnimatorDidComplete: OnPropertyAnimatorDidCompleteEvent;

    backgroundLayerSamplingSizeScale: number;
    identityBackgroundFilters: Array<LayerFilterConfig>;
    identityForegroundFilters: Array<LayerFilterConfig>;
    initialKeyframe: CustomFilterKeyframeConfig;
    animationConfig: AnimationConfig;
    currentKeyframe: CustomFilterKeyframeConfig;
  }
>;

export type RNIVisualEffectAnimatableCustomFilterNativeViewProps = 
    SharedViewEvents
  & ViewProps
  & RNIVisualEffectAnimatableCustomFilterNativeViewBaseProps;

export const RNIVisualEffectAnimatableCustomFilterNativeView = 
  RNIVisualEffectAnimatableCustomFilterViewNativeComponent as unknown as HostComponent<RNIVisualEffectAnimatableCustomFilterNativeViewProps>;
