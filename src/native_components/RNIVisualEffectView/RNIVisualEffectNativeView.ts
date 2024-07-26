import type { HostComponent, ViewProps } from 'react-native';

import { default as RNIVisualEffectViewNativeComponent } from './RNIVisualEffectViewNativeComponent';
import type { SharedViewEvents } from 'react-native-ios-utilities';

export interface RNIVisualEffectNativeViewBaseProps extends ViewProps {
};

export type RNIVisualEffectNativeViewProps = 
    SharedViewEvents
  & RNIVisualEffectNativeViewBaseProps;

export const RNIVisualEffectNativeView = 
  RNIVisualEffectViewNativeComponent as unknown as HostComponent<RNIVisualEffectNativeViewProps>;
