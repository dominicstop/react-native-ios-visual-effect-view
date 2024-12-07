//
//  RNIVisualEffectViewManager.m
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#import "RNIVisualEffectView.h"
#import <objc/runtime.h>

#import "react_native_ios_utilities/RNIBaseViewUtils.h"

#import "RCTBridge.h"
#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>


@interface RNIVisualEffectViewManager : RCTViewManager
@end

@implementation RNIVisualEffectViewManager

RCT_EXPORT_MODULE(RNIVisualEffectView)

#ifndef RCT_NEW_ARCH_ENABLED
- (UIView *)view
{
  return [[RNIVisualEffectView new] initWithBridge:self.bridge];
}
#endif

@end

