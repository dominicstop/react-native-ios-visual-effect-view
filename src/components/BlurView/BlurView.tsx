import * as React from 'react';
import { View } from 'react-native';

import { RNIBlurView } from '../../native_components/RNIBlurView';
import { LIB_ENV } from '../../constants/LibEnv';
import type { BlurViewProps } from './BlurViewTypes';


export function BlurView(props: BlurViewProps){
  const { blurMode, children, ...viewProps } = props;

  if(!LIB_ENV.isVisualEffectViewSupported) {
    return (
    <View {...viewProps} >
      {children}
    </View>
    );
  };

  return (
    <RNIBlurView
      {...viewProps}
      blurMode={blurMode}
    >
      {props.children}
    </RNIBlurView>
  );
};