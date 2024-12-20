//
//  RNIBlurViewManager.m
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#import "RNIBlurView.h"
#import <objc/runtime.h>

#import "RNIVisualEffectViewHeaderUtils.h"
#import RNI_UTILITIES_HEADER(RNIBaseViewUtils.h)

#import "RCTBridge.h"
#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>


@interface RNIBlurViewManager : RCTViewManager
@end

@implementation RNIBlurViewManager

RCT_EXPORT_MODULE(RNIBlurView)

#ifndef RCT_NEW_ARCH_ENABLED
- (UIView *)view
{
  return [[RNIBlurView alloc] initWithBridge:self.bridge];
}
#endif

RNI_EXPORT_VIEW_PROPERTY(blurMode, NSDictionary);
RNI_EXPORT_VIEW_PROPERTY(animationConfig, NSDictionary);
RNI_EXPORT_VIEW_PROPERTY(animationDelay, NSNumber);
RNI_EXPORT_VIEW_PROPERTY(backgroundLayerSamplingSizeScale, NSNumber);

@end

