//
//  Array+Helpers.swift
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 12/30/24.
//

import Foundation
import DGSwiftUtilities
import VisualEffectBlurView


extension Array where Element == Dictionary<String, Any> {
  var asLayerFilterConfig: [LayerFilterConfig] {
    self.compactMap {
      try? .init(fromDict: $0);
    };
  };
};
