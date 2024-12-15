//
//  RNIVisualEffectCustomFilterViewManager.mm
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#import "RNIVisualEffectCustomFilterView.h"
#import <objc/runtime.h>

#if __has_include(<react_native_ios_utilities/RNIBaseViewUtils.h>)
#import <react_native_ios_utilities/RNIBaseViewUtils.h>
#else
#import <react-native-ios-utilities/RNIBaseViewUtils.h>
#endif

#import "RCTBridge.h"
#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>


@interface RNIVisualEffectCustomFilterViewManager : RCTViewManager
@end

@implementation RNIVisualEffectCustomFilterViewManager

RCT_EXPORT_MODULE(RNIVisualEffectCustomFilterView)

#ifndef RCT_NEW_ARCH_ENABLED
- (UIView *)view
{
  return [[RNIVisualEffectCustomFilterView alloc] initWithBridge:self.bridge];
}
#endif

@end

