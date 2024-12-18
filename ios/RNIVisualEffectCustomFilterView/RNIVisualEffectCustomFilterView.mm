//
//  RNIVisualEffectCustomFilterView.mm
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#import "RNIVisualEffectCustomFilterView.h"
#import "RNIVisualEffectViewHeaderUtils.h"

#import "../Swift.h"

#import RNI_UTILITIES_HEADER(RNIContentViewParentDelegate.h)
#import RNI_UTILITIES_HEADER(UIApplication+RNIHelpers.h)
#import RNI_UTILITIES_HEADER(RNIObjcUtils.h)

#if RCT_NEW_ARCH_ENABLED
#include "RNIVisualEffectCustomFilterViewComponentDescriptor.h"

#import RNI_UTILITIES_HEADER(RNIBaseViewState.h)
#import RNI_UTILITIES_HEADER(RNIBaseViewProps.h)

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


@interface RNIVisualEffectCustomFilterView () <
  RNIContentViewParentDelegate,
#ifdef RCT_NEW_ARCH_ENABLED
  RCTRNIVisualEffectCustomFilterViewViewProtocol
#else
  RCTInvalidating
#endif
> {
  // TBA
}
@end

@implementation RNIVisualEffectCustomFilterView {
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
  return [RNIVisualEffectCustomFilterViewDelegate class];
}

// MARK: - Fabric
// --------------

#if RCT_NEW_ARCH_ENABLED
+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<RNIVisualEffectCustomFilterViewComponentDescriptor>();
}

Class<RCTComponentViewProtocol> RNIVisualEffectCustomFilterViewCls(void)
{
  return RNIVisualEffectCustomFilterView.class;
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



