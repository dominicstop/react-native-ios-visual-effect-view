//
//  RNIBlurViewManager.m
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#import "RNIBlurView.h"
#import <objc/runtime.h>

#import "react-native-ios-utilities/RNIBaseViewUtils.h"

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
  return [[RNIBlurView new] initWithBridge:self.bridge];
}
#endif

RNI_EXPORT_VIEW_PROPERTY(blurMode, NSDictionary);
RNI_EXPORT_VIEW_PROPERTY(animationConfig, NSDictionary);

@end

