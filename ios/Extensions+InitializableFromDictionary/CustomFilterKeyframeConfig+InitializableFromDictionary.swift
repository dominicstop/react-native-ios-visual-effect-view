//
//  CustomFilterKeyframeConfig+InitializableFromDictionary.swift
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 12/29/24.
//

import UIKit
import DGSwiftUtilities
import VisualEffectBlurView
import react_native_ios_utilities


extension CustomFilterKeyframeConfig: InitializableFromDictionary {
  
  public init(fromDict dict: Dictionary<String, Any>) throws {
    self.init();
    
    self.rootKeyframe = try? dict.getValue(
      forKey: "rootKeyframe",
      type: GenericViewKeyframe<UIView>.self
    );
    
    self.contentKeyframe = try? dict.getValue(
      forKey: "contentKeyframe",
      type: BasicViewKeyframe<UIView>.self
    );
    
    self.backdropKeyframe = try? dict.getValue(
      forKey: "backdropKeyframe",
      type: BasicViewKeyframe<UIView>.self
    );
    
    self.backgroundFilters = try? dict.getArray(
      forKey: "backgroundFilters",
      elementType: LayerFilterConfig.self
    );
    
    self.foregroundFilters = try? dict.getArray(
      forKey: "foregroundFilters",
      elementType: LayerFilterConfig.self
    );
    
    self.tintConfig = try? dict.getValue(
      forKey: "tintConfig",
      type: TintConfig.self
    );
  };
};
