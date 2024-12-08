//
//  RNIVisualEffectViewComponentDescriptor.h
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#if __cplusplus
#pragma once

#include "RNIVisualEffectViewShadowNode.h"

#include <react_native_ios_utilities/RNIBaseViewComponentDescriptor.h>
#include <react_native_ios_utilities/RNIBaseViewState.h>

#include <react/renderer/core/ConcreteComponentDescriptor.h>


namespace facebook::react {

class RNIVisualEffectViewComponentDescriptor final : public RNIBaseViewComponentDescriptor<
  RNIVisualEffectViewShadowNode,
  RNIVisualEffectViewComponentName
> {
  
public:
  using RNIBaseViewComponentDescriptor::RNIBaseViewComponentDescriptor;
};

} // namespace facebook::react
#endif
