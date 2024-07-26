import type { PropsWithChildren } from "react";
import type { ViewProps } from "react-native";

import type { OnDidSetViewIDEventPayload } from "react-native-ios-utilities";
import type { RNIVisualEffectNativeViewProps } from "./RNIVisualEffectNativeView";

export type StateViewID = OnDidSetViewIDEventPayload['viewID'] | undefined;
export type StateReactTag = OnDidSetViewIDEventPayload['reactTag'] | undefined;

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

export type RNIContextMenuViewProps = PropsWithChildren<
    RNIVisualEffectViewInheritedProps 
  & RNIVisualEffectViewBaseProps
  & ViewProps
>;