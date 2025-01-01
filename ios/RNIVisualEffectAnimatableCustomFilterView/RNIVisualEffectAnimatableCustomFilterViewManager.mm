//
//  RNIVisualEffectAnimatableCustomFilterViewManager.mm
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#import "RNIVisualEffectAnimatableCustomFilterView.h"
#import <objc/runtime.h>

#import "RNIVisualEffectViewHeaderUtils.h"
#import RNI_UTILITIES_HEADER(RNIBaseViewUtils.h)

#import "RCTBridge.h"
#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>


@interface RNIVisualEffectAnimatableCustomFilterViewManager : RCTViewManager
@end

@implementation RNIVisualEffectAnimatableCustomFilterViewManager

RCT_EXPORT_MODULE(RNIVisualEffectAnimatableCustomFilterView)

#ifndef RCT_NEW_ARCH_ENABLED
- (UIView *)view
{
  return [[RNIVisualEffectAnimatableCustomFilterView alloc] initWithBridge:self.bridge];
}

// required events
RNI_EXPORT_VIEW_EVENT(onDidSetViewID, RCTBubblingEventBlock)
RNI_EXPORT_VIEW_EVENT(onRequestFromNative, RCTBubblingEventBlock)

// optional events
RNI_EXPORT_VIEW_EVENT(onPropertyAnimatorDidStart, RCTBubblingEventBlock);
RNI_EXPORT_VIEW_EVENT(onPropertyAnimatorDidComplete, RCTBubblingEventBlock);

// required props
RNI_EXPORT_VIEW_PROPERTY(identityBackgroundFilters, NSArray);
RNI_EXPORT_VIEW_PROPERTY(identityForegroundFilters, NSArray);
RNI_EXPORT_VIEW_PROPERTY(initialKeyframe, NSDictionary);
RNI_EXPORT_VIEW_PROPERTY(animationConfig, NSDictionary);
RNI_EXPORT_VIEW_PROPERTY(currentKeyframe, NSDictionary);

// optional props
RNI_EXPORT_VIEW_PROPERTY(backgroundLayerSamplingSizeScale, NSNumber);
#endif





@end

