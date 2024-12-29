//
//  RNIVisualEffectAnimatableCustomFilterViewComponentDescriptor.h
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#if __cplusplus
#pragma once

#include "RNIVisualEffectAnimatableCustomFilterViewShadowNode.h"

#import RNI_UTILITIES_HEADER(RNIBaseViewComponentDescriptor.h)
#import RNI_UTILITIES_HEADER(RNIBaseViewState.h)

#include <react/renderer/core/ConcreteComponentDescriptor.h>


namespace facebook::react {

class RNIVisualEffectAnimatableCustomFilterViewComponentDescriptor final : public RNIBaseViewComponentDescriptor<
  RNIVisualEffectAnimatableCustomFilterViewShadowNode,
  RNIVisualEffectAnimatableCustomFilterViewComponentName
> {
  
public:
  using RNIBaseViewComponentDescriptor::RNIBaseViewComponentDescriptor;
};

} // namespace facebook::react
#endif
