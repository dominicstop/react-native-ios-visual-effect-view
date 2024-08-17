import type { PropsWithChildren } from "react";
import type { ViewProps } from "react-native";

import type { RNIBlurNativeViewProps } from "./RNIBlurNativeView";


export type RNIBlurViewRef = {
  getViewID: () => StateViewID;
  getReactTag: () => StateReactTag;
};

export type RNIBlurViewInheritedOptionalProps = Partial<Pick<RNIBlurNativeViewProps,
  | 'onDidSetViewID'
>>;

export type RNIBlurViewInheritedRequiredProps = Required<Pick<RNIBlurNativeViewProps,
  | 'blurConfig'
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