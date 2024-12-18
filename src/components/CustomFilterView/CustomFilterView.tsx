// @ts-ignore
import * as React from 'react';
import { View } from 'react-native';

import { RNIVisualEffectCustomFilterView } from '../../native_components/RNIVisualEffectCustomFilterView';
import { LIB_ENV } from '../../constants/LibEnv';

import type { CustomFilterViewProps } from './CustomFilterViewTypes';


export function CustomFilterView(props: CustomFilterViewProps){
  const { currentFilters, children, ...viewProps } = props;

  if(!LIB_ENV.isVisualEffectViewSupported) {
    return (
    <View {...viewProps} >
      {children}
    </View>
    );
  };

  return (
    <RNIVisualEffectCustomFilterView
      {...viewProps}
      currentFilters={currentFilters}
    >
      {children}
    </RNIVisualEffectCustomFilterView>
  );
};