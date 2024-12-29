//
//  LayerFilterConfig+InitializableFromDictionary.swift
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 12/17/24.
//

import UIKit
import DGSwiftUtilities
import VisualEffectBlurView

extension LayerFilterConfig: InitializableFromDictionary {
  
  public init(fromDict dict: Dictionary<String, Any>) throws {
    let filterName: String = try dict.getValue(forKey: "filterName");
    
    switch filterName {
      case "luminosityCurveMap":
        self = .luminosityCurveMap(
          amount: try dict.getValue(forKey: "amount"),
          point1: try dict.getValue(forKey: "point1"),
          point2: try dict.getValue(forKey: "point2"),
          point3: try dict.getValue(forKey: "point3"),
          point4: try dict.getValue(forKey: "point4")
        );
        
      case "colorBlackAndWhite":
        self = .colorBlackAndWhite(
          amount: try dict.getValue(forKey: "amount")
        );
        
      case "saturateColors":
        self = .saturateColors(
          amount: try dict.getValue(forKey: "amount")
        );
        
      case "brightenColors":
        self = .brightenColors(
          amount: try dict.getValue(forKey: "amount")
        );
        
      case "contrastColors":
        self = .contrastColors(
          amount: try dict.getValue(forKey: "amount")
        );
        
      case "luminanceCompression":
        self = .luminanceCompression(
          amount: try dict.getValue(forKey: "amount")
        );
        
      case "bias":
        self = .bias(
          amount: try dict.getValue(forKey: "amount")
        );
        
      case "colorHueAdjust":
        let angleRaw: [String: Any] = try dict.getValue(forKey: "angle");
        
        self = .colorHueAdjust(
          angle: try .init(fromDict: angleRaw)
        );
        
      case "gaussianBlur":
        self = .gaussianBlur(
          radius: try dict.getValue(forKey: "radius"),
            
          shouldNormalizeEdges:
            try dict.getValue(forKey: "shouldNormalizeEdges"),
            
          shouldNormalizeEdgesToTransparent:
            try? dict.getBool(forKey: "shouldNormalizeEdgesToTransparent"),
            
          shouldUseHardEdges:
            try? dict.getBool(forKey: "shouldUseHardEdges")
        );
        
      case "colorMatrixVibrant":
        let colorMatrix = try dict.getValue(
          forKey: "colorMatrix",
          type: ColorMatrixRGBA.self
        );
        
         self = .colorMatrixVibrant(colorMatrix);
        
      case "colorMatrix":
        let colorMatrix = try dict.getValue(
          forKey: "colorMatrix",
          type: ColorMatrixRGBA.self
        );
        
        self = .colorMatrix(colorMatrix);
        
      case "colorTransform":
        let colorTransform = try dict.getValue(
          forKey: "colorTransform",
          type: ColorTransform.self
        );
      
        self = .colorTransform(colorTransform);
        
      case "colorTransformVibrant":
        let colorTransform = try dict.getValue(
          forKey: "colorTransform",
          type: ColorTransform.self
        );
      
        self = .colorTransformVibrant(colorTransform);
        
      case "variadicBlur":
        let imageGradientConfig: ImageConfigGradient = try {
          let rawConfig = try dict.getDict(forKey: "gradientMask");
          return try .init(fromDict: rawConfig);
        }();
        
        self = .variadicBlur(
          radius: try dict.getValue(forKey: "radius"),
          imageGradientConfig: imageGradientConfig,
            
          shouldNormalizeEdges:
            try dict.getValue(forKey: "shouldNormalizeEdges"),
            
          shouldNormalizeEdgesToTransparent:
            try? dict.getBool(forKey: "shouldNormalizeEdgesToTransparent"),
            
          shouldUseHardEdges:
            try? dict.getBool(forKey: "shouldUseHardEdges")
        );
        
      case "darkVibrant":
        self = .darkVibrant(
          isReversed: try dict.getValue(forKey: "isReversed"),
          color0: try dict.getColor(forKey: "color0"),
          color1: try dict.getColor(forKey: "color1")
        );
        
      case "lightVibrant":
        self = .lightVibrant(
          isReversed: try dict.getValue(forKey: "isReversed"),
          color0: try dict.getColor(forKey: "color0"),
          color1: try dict.getColor(forKey: "color1")
        );
        
      case "alphaFromLuminance":
        self = .alphaFromLuminance;
        
      case "averagedColor":
        self = .averagedColor
        
      case "invertColors":
        self = .invertColors
        
      case "distanceField":
        self = .distanceField
        
      default:
        throw RNIVisualEffectViewError(
          errorCode: .invalidValue,
          description: "Invalid value for filterName",
          extraDebugValues: [
            filterName: "filterName",
          ]
        );
    };
  };
};
