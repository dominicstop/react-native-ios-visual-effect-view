//
//  RNIVisualEffectCustomFilterViewComponentDescriptor.h
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#if __cplusplus
#pragma once

#include "RNIVisualEffectCustomFilterViewShadowNode.h"

#import RNI_UTILITIES_HEADER(RNIBaseViewComponentDescriptor.h)
#import RNI_UTILITIES_HEADER(RNIBaseViewState.h)

#include <react/renderer/core/ConcreteComponentDescriptor.h>


namespace facebook::react {

class RNIVisualEffectCustomFilterViewComponentDescriptor final : public RNIBaseViewComponentDescriptor<
  RNIVisualEffectCustomFilterViewShadowNode,
  RNIVisualEffectCustomFilterViewComponentName
> {
  
public:
  using RNIBaseViewComponentDescriptor::RNIBaseViewComponentDescriptor;
};

} // namespace facebook::react
#endif
