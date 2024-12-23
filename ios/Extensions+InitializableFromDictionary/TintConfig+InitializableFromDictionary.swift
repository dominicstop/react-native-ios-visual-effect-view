//
//  TintConfig+InitializableFromDictionary.swift
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 12/24/24.
//

import UIKit
import DGSwiftUtilities
import VisualEffectBlurView


extension TintConfig: InitializableFromDictionary {

  public init(fromDict dict: Dictionary<String, Any>) throws {
    self.init(
      tintColor: try dict.getColor(forKey: "tintColor"),
      opacity: try dict.getNumber(forKey: "opacity"),
      blendMode:  try? dict.getEnum(forKey: "blendMode")
    );
  };
};
