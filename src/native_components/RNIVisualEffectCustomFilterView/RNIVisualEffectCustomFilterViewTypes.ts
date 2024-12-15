import type { PropsWithChildren } from "react";
import type { ViewProps } from "react-native";

import type { StateViewID, StateReactTag } from "react-native-ios-utilities";
import type { RNIVisualEffectCustomFilterNativeViewProps } from "./RNIVisualEffectCustomFilterNativeView";

export type RNIVisualEffectCustomFilterViewRef = {
  getViewID: () => StateViewID;
  getReactTag: () => StateReactTag;
};

export type RNIVisualEffectCustomFilterViewInheritedOptionalProps = Partial<Pick<RNIVisualEffectCustomFilterNativeViewProps,
  | 'onDidSetViewID'
>>;

export type RNIVisualEffectCustomFilterViewInheritedRequiredProps = {};

export type RNIVisualEffectCustomFilterViewInheritedProps =
    RNIVisualEffectCustomFilterViewInheritedOptionalProps
  & RNIVisualEffectCustomFilterViewInheritedRequiredProps;

export type RNIVisualEffectCustomFilterViewBaseProps = {
  // TBA
};

export type RNIVisualEffectCustomFilterViewProps = PropsWithChildren<
    RNIVisualEffectCustomFilterViewInheritedProps 
  & RNIVisualEffectCustomFilterViewBaseProps
  & ViewProps
>;