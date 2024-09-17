//
//  RNIBlurViewComponentDescriptor.h
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#if __cplusplus
#pragma once

#include "RNIBlurViewShadowNode.h"

#include <react-native-ios-utilities/RNIBaseViewComponentDescriptor.h>
#include "react-native-ios-utilities/RNIBaseViewState.h"

#include <react/renderer/core/ConcreteComponentDescriptor.h>


namespace facebook::react {

class RNIBlurViewComponentDescriptor final : public RNIBaseViewComponentDescriptor<
  RNIBlurViewShadowNode,
  RNIBlurViewComponentName
> {
  
public:
  using RNIBaseViewComponentDescriptor::RNIBaseViewComponentDescriptor;
};

} // namespace facebook::react
#endif
