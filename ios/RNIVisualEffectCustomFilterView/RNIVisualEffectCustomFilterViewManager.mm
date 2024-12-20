//
//  RNIVisualEffectCustomFilterViewManager.mm
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#import "RNIVisualEffectCustomFilterView.h"
#import <objc/runtime.h>

#import "RNIVisualEffectViewHeaderUtils.h"
#import RNI_UTILITIES_HEADER(RNIBaseViewUtils.h)

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

RNI_EXPORT_VIEW_PROPERTY(currentFilters, NSDictionary);
RNI_EXPORT_VIEW_PROPERTY(backgroundLayerSamplingSizeScale, NSNumber);

@end

