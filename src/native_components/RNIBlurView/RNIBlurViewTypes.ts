import type { PropsWithChildren } from "react";
import type { ViewProps } from "react-native";

import type { OnDidSetViewIDEventPayload } from "react-native-ios-utilities";
import type { RNIBlurNativeViewProps } from "./RNIBlurNativeView";

export type StateViewID = OnDidSetViewIDEventPayload['viewID'] | undefined;
export type StateReactTag = OnDidSetViewIDEventPayload['reactTag'] | undefined;

export type RNIBlurViewRef = {
  getViewID: () => StateViewID;
  getReactTag: () => StateReactTag;
};

export type RNIBlurViewInheritedOptionalProps = Partial<Pick<RNIBlurNativeViewProps,
  | 'onDidSetViewID'
>>;

export type RNIBlurViewInheritedRequiredProps = {};

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