import type { PropsWithChildren } from "react";
import type { ViewProps } from "react-native";

import type { RNIBlurViewProps } from "../../native_components/RNIBlurView";
import type { RNIBlurViewRef } from "../../native_components/RNIBlurView";


export type BlurViewRef = Pick<RNIBlurViewRef, 
  | 'getReactTag'
  | 'getViewID'
>;

export type BlurViewInheritedOptionalProps = Partial<Pick<RNIBlurViewProps,
  | 'animationConfig'
  | 'animationDelay'
>>;

export type BlurViewInheritedRequiredProps = Required<Pick<RNIBlurViewProps,
  | 'blurMode'
>>;

export type BlurViewInheritedProps =
    BlurViewInheritedOptionalProps
  & BlurViewInheritedRequiredProps;

export type BlurViewProps = PropsWithChildren<
    BlurViewInheritedProps 
  & ViewProps
>;