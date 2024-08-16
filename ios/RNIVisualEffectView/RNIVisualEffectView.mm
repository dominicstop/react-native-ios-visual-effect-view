//
//  RNIVisualEffectView.mm
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#import "RNIVisualEffectView.h"

#import "react-native-ios-visual-effect-view/Swift.h"
#import <react-native-ios-utilities/RNIBaseView.h>

#import <react-native-ios-utilities/RNIContentViewParentDelegate.h>


#import <react-native-ios-utilities/UIApplication+RNIHelpers.h>
#import <react-native-ios-utilities/RNIObjcUtils.h>

#if RCT_NEW_ARCH_ENABLED
#include "RNIVisualEffectViewComponentDescriptor.h"

#include <react-native-ios-utilities/RNIBaseViewState.h>
#include <react-native-ios-utilities/RNIBaseViewProps.h>

#import <React/RCTConversions.h>
#import <React/RCTFabricComponentsPlugins.h>
#import <React/RCTRootComponentView.h>
#import <React/RCTSurfaceTouchHandler.h>

#include <react/renderer/core/ComponentDescriptor.h>
#include <react/renderer/core/ConcreteComponentDescriptor.h>
#include <react/renderer/graphics/Float.h>
#include <react/renderer/core/graphicsConversions.h>

#import <react/renderer/components/RNIVisualEffectViewSpec/EventEmitters.h>
#import <react/renderer/components/RNIVisualEffectViewSpec/RCTComponentViewHelpers.h>
#else
#import <React/RCTTouchHandler.h>
#import <React/RCTInvalidating.h>
#endif

#ifdef RCT_NEW_ARCH_ENABLED
using namespace facebook::react;
#endif


@interface RNIVisualEffectView () <
  RNIContentViewParentDelegate,
#ifdef RCT_NEW_ARCH_ENABLED
  RCTRNIVisualEffectViewViewProtocol
#else
  RCTInvalidating
#endif
> {
  // TBA
}
@end

@implementation RNIVisualEffectView {
}

// MARK: - Init
// ------------

- (void)initCommon {
  [super initCommon];
}

// MARK: - RNIBaseView
// -------------------

+ (Class)viewDelegateClass
{
  return [RNIVisualEffectViewDelegate class];
}

// MARK: - Fabric
// --------------

#if RCT_NEW_ARCH_ENABLED
+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<RNIVisualEffectViewComponentDescriptor>();
}

Class<RCTComponentViewProtocol> RNIVisualEffectViewCls(void)
{
  return RNIVisualEffectView.class;
}
#else

// MARK: - Paper
// -------------

- (void)invalidate
{
  // to be impl.
}

#endif
@end



