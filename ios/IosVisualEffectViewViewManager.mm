#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

@interface IosVisualEffectViewViewManager : RCTViewManager
@end

@implementation IosVisualEffectViewViewManager

RCT_EXPORT_MODULE(IosVisualEffectViewView)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(color, NSString)

@end
