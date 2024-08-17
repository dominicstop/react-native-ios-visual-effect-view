//
//  RNIBlurConfig.swift
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 8/18/24.
//

import Foundation
import DGSwiftUtilities


public enum RNIBlurConfig: Equatable {
  
  case `none`;
  case standard(blurEffectStyle: UIBlurEffect.Style);
  
  case customEffectIntensity(
    blurEffectStyle: UIBlurEffect.Style,
    intensity: CGFloat
  );
  
  case customBlurRadius(
    blurEffectStyle: UIBlurEffect.Style,
    radius: CGFloat
  );
  
  // MARK: - Computed Properties
  // ---------------------------
  
  public var blurEffectStyle: UIBlurEffect.Style? {
    switch self {
      case .none:
        return nil;
        
      case let .standard(blurEffectStyle):
        return blurEffectStyle;
        
      case let .customEffectIntensity(blurEffectStyle, _):
        return blurEffectStyle;
        
      case let .customBlurRadius(blurEffectStyle, _):
        return blurEffectStyle;
    };
  };
};

// MARK: - RNIBlurConfigMode+EnumCaseStringRepresentable
// -----------------------------------------------------

extension RNIBlurConfig: EnumCaseStringRepresentable {

  public var caseString: String {
    switch self {
      case .none:
        return "none";
        
      case .standard:
        return "standard";
        
      case .customEffectIntensity:
        return "customEffectIntensity";
        
      case .customBlurRadius:
        return "customBlurRadius";
    };
  };
};

// MARK: - RNIBlurConfigMode+InitializableFromDictionary
// -----------------------------------------------------

extension RNIBlurConfig: InitializableFromDictionary {

  public init(fromDict dict: Dictionary<String, Any>) throws {
    let mode: String = try dict.getValueFromDictionary(forKey: "mode");
    
    let blurEffectStyle = try dict.getValueFromDictionary(
      forKey: "blurEffectStyle",
      type: UIBlurEffect.Style.self
    );
    
    switch mode {
      case "none":
        self = .none;
        
      case "standard":
        self = .standard(blurEffectStyle: blurEffectStyle);
        
      case "customEffectIntensity":
        let intensity = try dict.getValueFromDictionary(
          forKey: "intensity",
          type: CGFloat.self
        );
        
        self = .customEffectIntensity(
          blurEffectStyle: blurEffectStyle,
          intensity: intensity
        );
        
      case "customBlurRadius":
        let radius = try dict.getValueFromDictionary(
          forKey: "radius",
          type: CGFloat.self
        );
        
        self = .customBlurRadius(
          blurEffectStyle: blurEffectStyle,
          radius: radius
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
