import type { PropsWithChildren } from "react";
import type { ViewProps } from "react-native";

import type { RNIBlurNativeViewProps } from "./RNIBlurNativeView";
import type { StateReactTag, StateViewID } from "react-native-ios-utilities";


export type RNIBlurViewRef = {
  getViewID: () => StateViewID;
  getReactTag: () => StateReactTag;
};

export type RNIBlurViewInheritedOptionalProps = Partial<Pick<RNIBlurNativeViewProps,
  | 'onDidSetViewID'
  | 'animationConfig'
  | 'animationDelay'
  | 'backgroundLayerSamplingSizeScale'
>>;

export type RNIBlurViewInheritedRequiredProps = Required<Pick<RNIBlurNativeViewProps,
  | 'blurMode'
>>;

export type RNIBlurViewInheritedProps =
    RNIBlurViewInheritedOptionalProps
  & RNIBlurViewInheritedRequiredProps;

export type RNIBlurViewBaseProps = {
  // TBA
};

export type RNIBlurViewProps = PropsWithChildren<
    RNIBlurViewInheritedProps 
  & RNIBlurViewBaseProps
  & ViewProps
>;