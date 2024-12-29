//
//  RNIVisualEffectAnimatableCustomFilterView.mm
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#import "RNIVisualEffectAnimatableCustomFilterView.h"
#import "RNIVisualEffectViewHeaderUtils.h"

#import "../Swift.h"

#import RNI_UTILITIES_HEADER(RNIContentViewParentDelegate.h)
#import RNI_UTILITIES_HEADER(UIApplication+RNIHelpers.h)
#import RNI_UTILITIES_HEADER(RNIObjcUtils.h)

#if RCT_NEW_ARCH_ENABLED
#include "RNIVisualEffectAnimatableCustomFilterViewComponentDescriptor.h"

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


@interface RNIVisualEffectAnimatableCustomFilterView () <
  RNIContentViewParentDelegate,
#ifdef RCT_NEW_ARCH_ENABLED
  RCTRNIVisualEffectAnimatableCustomFilterViewViewProtocol
#else
  RCTInvalidating
#endif
> {
  // TBA
}
@end

@implementation RNIVisualEffectAnimatableCustomFilterView {
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
  return [RNIVisualEffectAnimatableCustomFilterViewDelegate class];
}

// MARK: - Fabric
// --------------

#if RCT_NEW_ARCH_ENABLED
+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<RNIVisualEffectAnimatableCustomFilterViewComponentDescriptor>();
}

Class<RCTComponentViewProtocol> RNIVisualEffectAnimatableCustomFilterViewCls(void)
{
  return RNIVisualEffectAnimatableCustomFilterView.class;
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



