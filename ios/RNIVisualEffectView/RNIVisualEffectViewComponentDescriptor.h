//
//  RNIVisualEffectViewComponentDescriptor.h
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#if __cplusplus
#pragma once

#include "RNIVisualEffectViewShadowNode.h"
#include "RNIBaseViewComponentDescriptor.h"

#include <react-native-ios-utilities/RNIBaseViewState.h>
#include <react/renderer/core/ConcreteComponentDescriptor.h>


namespace facebook::react {

class RNIVisualEffectViewComponentDescriptor final
  : public RNIBaseViewComponentDescriptor<RNIVisualEffectViewShadowNode> {
  
public:
  using RNIBaseViewComponentDescriptor::RNIBaseViewComponentDescriptor;
};

} // namespace facebook::react
#endif
