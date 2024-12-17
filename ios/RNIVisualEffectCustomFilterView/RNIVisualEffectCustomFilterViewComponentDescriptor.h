//
//  RNIVisualEffectCustomFilterViewComponentDescriptor.h
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#if __cplusplus
#pragma once

#include "RNIVisualEffectCustomFilterViewShadowNode.h"

#include <react_native_ios_utilities/RNIBaseViewComponentDescriptor.h>
#include <react_native_ios_utilities/RNIBaseViewState.h>

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