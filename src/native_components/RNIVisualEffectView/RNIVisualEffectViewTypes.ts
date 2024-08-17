import type { PropsWithChildren } from "react";
import type { ViewProps } from "react-native";

import type { StateViewID, StateReactTag } from "react-native-ios-utilities";
import type { RNIVisualEffectNativeViewProps } from "./RNIVisualEffectNativeView";

export type RNIVisualEffectViewRef = {
  getViewID: () => StateViewID;
  getReactTag: () => StateReactTag;
};

export type RNIVisualEffectViewInheritedOptionalProps = Partial<Pick<RNIVisualEffectNativeViewProps,
  | 'onDidSetViewID'
>>;

export type RNIVisualEffectViewInheritedRequiredProps = {};

export type RNIVisualEffectViewInheritedProps =
    RNIVisualEffectViewInheritedOptionalProps
  & RNIVisualEffectViewInheritedRequiredProps;

export type RNIVisualEffectViewBaseProps = {
  // TBA
};

export type RNIVisualEffectViewProps = PropsWithChildren<
    RNIVisualEffectViewInheritedProps 
  & RNIVisualEffectViewBaseProps
  & ViewProps
>;