import type { PropsWithChildren } from "react";
import type { ViewProps } from "react-native";

import type { RNIVisualEffectAnimatableCustomFilterViewProps, RNIVisualEffectAnimatableCustomFilterViewRef } from "../../native_components/RNIVisualEffectAnimatableCustomFilterView";


export type AnimatableCustomFilterViewRef = Pick<RNIVisualEffectAnimatableCustomFilterViewRef, 
  | 'getReactTag'
  | 'getViewID'
>;

export type AnimatableCustomFilterViewInheritedOptionalProps = Partial<Pick<RNIVisualEffectAnimatableCustomFilterViewProps,
 | 'backgroundLayerSamplingSizeScale'
>>;

export type AnimatableCustomFilterViewInheritedRequiredProps = Required<Pick<RNIVisualEffectAnimatableCustomFilterViewProps,
  | 'identityBackgroundFilters'
  | 'identityForegroundFilters'
  | 'initialKeyframe'
  | 'animationConfig'
  | 'currentKeyframe'
>>;

export type AnimatableCustomFilterViewInheritedProps =
   AnimatableCustomFilterViewInheritedOptionalProps
 & AnimatableCustomFilterViewInheritedRequiredProps;

export type AnimatableCustomFilterViewProps = PropsWithChildren<
    AnimatableCustomFilterViewInheritedProps 
  & ViewProps
>;