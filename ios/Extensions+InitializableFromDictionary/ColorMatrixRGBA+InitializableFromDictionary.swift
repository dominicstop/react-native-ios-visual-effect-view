//
//  ColorMatrixRGBA+InitializableFromDictionary.swift
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 12/17/24.
//

import UIKit
import DGSwiftUtilities
import VisualEffectBlurView


extension ColorMatrixRGBA: InitializableFromDictionary {
  
  public init(fromDict dict: Dictionary<String, Any>) throws {
    let mode: String = try dict.getValue(forKey: "mode");
      
    switch mode {
      case "constant":
        let value: String = try dict.getValue(forKey: "value");
        
        switch value {
          case "zero":
            self = .zero;
            
          case "identity":
            self = .identity;
            
          default:
            throw RNIVisualEffectViewError(
              errorCode: .invalidValue,
              description: "Invalid value for mode",
              extraDebugValues: [
                mode: "mode",
              ]
            );
        };
      
      case "rawValue":
        let valuesDict: [String: Any] = try dict.getValue(forKey: "values");
        
        self.init(
          withSourceType: CGFloat.self,
          m11: try valuesDict.getValue(forKey: "m11"),
          m12: try valuesDict.getValue(forKey: "m12"),
          m13: try valuesDict.getValue(forKey: "m13"),
          m14: try valuesDict.getValue(forKey: "m14"),
          m15: try valuesDict.getValue(forKey: "m15"),
          m21: try valuesDict.getValue(forKey: "m21"),
          m22: try valuesDict.getValue(forKey: "m22"),
          m23: try valuesDict.getValue(forKey: "m23"),
          m24: try valuesDict.getValue(forKey: "m24"),
          m25: try valuesDict.getValue(forKey: "m25"),
          m31: try valuesDict.getValue(forKey: "m31"),
          m32: try valuesDict.getValue(forKey: "m32"),
          m33: try valuesDict.getValue(forKey: "m33"),
          m34: try valuesDict.getValue(forKey: "m34"),
          m35: try valuesDict.getValue(forKey: "m35"),
          m41: try valuesDict.getValue(forKey: "m41"),
          m42: try valuesDict.getValue(forKey: "m42"),
          m43: try valuesDict.getValue(forKey: "m43"),
          m44: try valuesDict.getValue(forKey: "m44"),
          m45: try valuesDict.getValue(forKey: "m45")
        );
            
      case "preset":
        let presetDict = try dict.getDict(forKey: "preset");
        let presetName: String = try presetDict.getValue(forKey: "presetName");
        
        let preset = try ColorMatrixRGBAPreset(fromString: presetName);
        self = preset.colorMatrix;
        
      default:
        throw RNIVisualEffectViewError(
          errorCode: .invalidValue,
          description: "Invalid value for mode",
          extraDebugValues: [
            mode: "mode",
          ]
        );
    };
  };
};
