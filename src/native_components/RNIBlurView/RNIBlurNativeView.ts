import type { HostComponent, ViewProps } from 'react-native';

import { default as RNIBlurViewNativeComponent } from './RNIBlurViewNativeComponent';
import type { SharedViewEvents } from 'react-native-ios-utilities';

export interface RNIBlurNativeViewBaseProps extends ViewProps {
};

export type RNIBlurNativeViewProps = 
    SharedViewEvents
  & RNIBlurNativeViewBaseProps;

export const RNIBlurNativeView = 
  RNIBlurViewNativeComponent as unknown as HostComponent<RNIBlurNativeViewProps>;
