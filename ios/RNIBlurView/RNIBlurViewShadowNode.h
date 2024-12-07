//
//  RNIBlurViewShadowNode.h
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#if __cplusplus
#pragma once

#include "react_native_ios_utilities/RNIBaseViewShadowNode.h"
#include "react_native_ios_utilities/RNIBaseViewProps.h"
#include "react_native_ios_utilities/RNIBaseViewEventEmitter.h"

#include <react/renderer/components/RNIVisualEffectViewSpec/EventEmitters.h>
#include <react/renderer/components/RNIVisualEffectViewSpec/Props.h>

#include <react/renderer/components/view/ConcreteViewShadowNode.h>
#include <jsi/jsi.h>


namespace facebook::react {

JSI_EXPORT extern const char RNIBlurViewComponentName[] = "RNIBlurView";

class JSI_EXPORT RNIBlurViewShadowNode final :
  public RNIBaseViewShadowNode<RNIBlurViewComponentName> {

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
