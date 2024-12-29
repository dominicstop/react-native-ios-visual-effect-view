//
//  RNIVisualEffectAnimatableCustomFilterView.h
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

#import "RNIVisualEffectViewHeaderUtils.h"
#import RNI_UTILITIES_HEADER(RNIBaseView.h)

#if RCT_NEW_ARCH_ENABLED
#import <React/RCTViewComponentView.h>
#else
#import <React/RCTView.h>
#endif

@protocol RNIContentViewParentDelegate;
@protocol RNIContentViewDelegate;

@class RCTBridge;

#if RCT_NEW_ARCH_ENABLED
namespace react = facebook::react;
#endif

@interface RNIVisualEffectAnimatableCustomFilterView : RNIBaseView

@end
