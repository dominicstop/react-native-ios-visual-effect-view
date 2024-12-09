//
//  RNIBlurViewManager.m
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#import "RNIBlurView.h"
#import <objc/runtime.h>

#if __has_include(<react_native_ios_utilities/RNIBaseViewUtils.h>)
#import <react_native_ios_utilities/RNIBaseViewUtils.h>
#else
#import <react-native-ios-utilities/RNIBaseViewUtils.h>
#endif

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

@end

