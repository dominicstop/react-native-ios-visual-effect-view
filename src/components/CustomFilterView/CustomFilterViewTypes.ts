import type { PropsWithChildren } from "react";
import type { ViewProps } from "react-native";

import type { RNIVisualEffectCustomFilterViewProps, RNIVisualEffectCustomFilterViewRef } from "../../native_components/RNIVisualEffectCustomFilterView";


export type CustomFilterViewRef = Pick<RNIVisualEffectCustomFilterViewRef, 
  | 'getReactTag'
  | 'getViewID'
>;

// export type CustomFilterViewInheritedOptionalProps = Partial<Pick<RNIVisualEffectCustomFilterViewProps,
//  | ''
// >>;

export type CustomFilterViewInheritedRequiredProps = Required<Pick<RNIVisualEffectCustomFilterViewProps,
  | 'currentFilters'
>>;

// export type CustomFilterViewInheritedProps =
//    CustomFilterViewInheritedOptionalProps
//  & CustomFilterViewInheritedRequiredProps;

export type CustomFilterViewProps = PropsWithChildren<
    CustomFilterViewInheritedRequiredProps 
  & ViewProps
>;