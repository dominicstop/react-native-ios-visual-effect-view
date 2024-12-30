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
#endif

RNI_EXPORT_VIEW_PROPERTY(currentFilters, NSDictionary);
RNI_EXPORT_VIEW_PROPERTY(backgroundLayerSamplingSizeScale, NSNumber);

@end
