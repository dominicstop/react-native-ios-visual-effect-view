// @ts-ignore
import * as React from 'react';
import { View } from 'react-native';

import { RNIVisualEffectAnimatableCustomFilterView } from '../../native_components/RNIVisualEffectAnimatableCustomFilterView';
import { LIB_ENV } from '../../constants/LibEnv';

import type { AnimatableCustomFilterViewProps } from './AnimatableCustomFilterViewTypes';


export function AnimatableCustomFilterView(props: AnimatableCustomFilterViewProps){
  const { 
    // required props
    identityBackgroundFilters,
    identityForegroundFilters,
    initialKeyframe,

    // optional props
    backgroundLayerSamplingSizeScale,

    // react + view props
    children,
    ...viewProps
  } = props;

  if(!LIB_ENV.isVisualEffectViewSupported) {
    return (
    <View {...viewProps} >
      {children}
    </View>
    );
  };

  return (
    <RNIVisualEffectAnimatableCustomFilterView
      identityBackgroundFilters={identityBackgroundFilters}
      identityForegroundFilters={identityForegroundFilters}
      initialKeyframe={initialKeyframe}
      backgroundLayerSamplingSizeScale={backgroundLayerSamplingSizeScale}
      {...viewProps}
    >
      {children}
    </RNIVisualEffectAnimatableCustomFilterView>
  );
};