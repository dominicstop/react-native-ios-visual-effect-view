import type { PropsWithChildren } from "react";
import type { ViewProps } from "react-native";

import type { StateViewID, StateReactTag } from "react-native-ios-utilities";
import type { RNIVisualEffectAnimatableCustomFilterNativeViewProps } from "./RNIVisualEffectAnimatableCustomFilterNativeView";

export type RNIVisualEffectAnimatableCustomFilterViewRef = {
  getViewID: () => StateViewID;
  getReactTag: () => StateReactTag;
};

export type RNIVisualEffectAnimatableCustomFilterViewInheritedOptionalProps = Partial<Pick<RNIVisualEffectAnimatableCustomFilterNativeViewProps,
  | 'onPropertyAnimatorDidStart'
  | 'onPropertyAnimatorDidComplete'
  | 'backgroundLayerSamplingSizeScale'
>>;

export type RNIVisualEffectAnimatableCustomFilterViewInheritedRequiredProps = Pick<RNIVisualEffectAnimatableCustomFilterNativeViewProps,
  | 'onDidSetViewID'
  | 'identityBackgroundFilters'
  | 'identityForegroundFilters'
  | 'initialKeyframe'
  | 'animationConfig'
  | 'currentKeyframe'
>;

export type RNIVisualEffectAnimatableCustomFilterViewInheritedProps =
    RNIVisualEffectAnimatableCustomFilterViewInheritedOptionalProps
  & RNIVisualEffectAnimatableCustomFilterViewInheritedRequiredProps;

export type RNIVisualEffectAnimatableCustomFilterViewBaseProps = {
  // TBA
};

export type RNIVisualEffectAnimatableCustomFilterViewProps = PropsWithChildren<
    RNIVisualEffectAnimatableCustomFilterViewInheritedProps 
  & RNIVisualEffectAnimatableCustomFilterViewBaseProps
  & ViewProps
>;