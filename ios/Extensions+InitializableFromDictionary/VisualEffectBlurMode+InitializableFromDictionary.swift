//
//  VisualEffectBlurMode+InitializableFromDictionary.swift
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 10/18/24.
//

import Foundation
import DGSwiftUtilities
import VisualEffectBlurView


extension VisualEffectBlurMode: InitializableFromDictionary {

  public init(fromDict dict: Dictionary<String, Any>) throws {
    let mode: String = try dict.getValueFromDictionary(forKey: "mode");
    
    func extractBlurEffectStyle() throws -> UIBlurEffect.Style {
      let rawValue: String =
        try dict.getValueFromDictionary(forKey: "blurEffectStyle");
        
      let blurStyle: UIBlurEffect.Style? = .init(fromString: rawValue);
      guard let blurStyle = blurStyle else {
        throw RNIVisualEffectViewError(
          errorCode: .invalidValue,
          extraDebugValues: [
            "blurEffectStyle": rawValue,
            "mode": mode,
          ]
        );
      };
      
      return blurStyle;
    };

    switch mode {
      case "blurEffectNone":
        self = .blurEffectNone;
        
      case "blurEffectSystem":
        let blurEffectStyle = try extractBlurEffectStyle();
        self = .blurEffectSystem(blurEffectStyle: blurEffectStyle);
        
      case "blurEffectCustomIntensity":
        let blurEffectStyle = try extractBlurEffectStyle();
        
        let effectIntensity = try dict.getValueFromDictionary(
          forKey: "effectIntensity",
          type: CGFloat.self
        );
        
        self = .blurEffectCustomIntensity(
          blurEffectStyle: blurEffectStyle,
          effectIntensity: effectIntensity
        );
        
      case "blurEffectCustomBlurRadius":
        let blurEffectStyle = try extractBlurEffectStyle();
        
        let customBlurRadius = try dict.getValueFromDictionary(
          forKey: "customBlurRadius",
          type: CGFloat.self
        );
        
        let effectIntensityForOtherEffects = try dict.getValueFromDictionary(
          forKey: "effectIntensityForOtherEffects",
          type: CGFloat.self
        );
        
        self = .blurEffectCustomBlurRadius(
          blurEffectStyle: blurEffectStyle,
          customBlurRadius: customBlurRadius,
          effectIntensityForOtherEffects: effectIntensityForOtherEffects
        );
      
      default:
        throw RNIVisualEffectViewError(
          errorCode: .invalidValue,
          description: "Invalid value for key mode",
          extraDebugValues: [
            mode: "mode",
          ]
        );
    };
  };
};
