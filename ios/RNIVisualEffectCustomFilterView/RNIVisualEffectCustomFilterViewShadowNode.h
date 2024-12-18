//
//  RNIVisualEffectCustomFilterViewShadowNode.h
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#if __cplusplus
#pragma once

#import "RNIVisualEffectViewHeaderUtils.h"

#import RNI_UTILITIES_HEADER(RNIBaseViewShadowNode.h)
#import RNI_UTILITIES_HEADER(RNIBaseViewProps.h)
#import RNI_UTILITIES_HEADER(RNIBaseViewEventEmitter.h)

#include <react/renderer/components/RNIVisualEffectViewSpec/EventEmitters.h>
#include <react/renderer/components/RNIVisualEffectViewSpec/Props.h>

#include <react/renderer/components/view/ConcreteViewShadowNode.h>
#include <jsi/jsi.h>


namespace facebook::react {

JSI_EXPORT extern const char RNIVisualEffectCustomFilterViewComponentName[] = "RNIVisualEffectCustomFilterView";

class JSI_EXPORT RNIVisualEffectCustomFilterViewShadowNode final :
  public RNIBaseViewShadowNode<RNIVisualEffectCustomFilterViewComponentName> {

public:
  using RNIBaseViewShadowNode::RNIBaseViewShadowNode;
  
  static RNIBaseViewState initialStateData(
      const Props::Shared&r          , // props
      const ShadowNodeFamily::Shared&, // family
      const ComponentDescriptor&       // componentDescriptor
  ) {
    return {};
  }
};

} // facebook::react
#endif
