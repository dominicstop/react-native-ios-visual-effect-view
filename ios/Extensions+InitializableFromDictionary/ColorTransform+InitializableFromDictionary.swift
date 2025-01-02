//
//  ColorTransform+InitializableFromDictionary.swift
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 12/17/24.
//

import Foundation
import DGSwiftUtilities
import VisualEffectBlurView


extension ColorTransform: InitializableFromDictionary {

  public init(fromDict dict: Dictionary<String, Any>) throws {
    let identity: Self = .default;
    self = identity;
    
    self.intensityRed = dict.getNumber(
      forKey: "intensityRed",
      fallbackValue: identity.intensityRed
    );
    
    self.intensityGreen = dict.getNumber(
      forKey: "intensityGreen",
      fallbackValue: identity.intensityGreen
    );
    
    self.intensityBlue = dict.getNumber(
      forKey: "intensityBlue",
      fallbackValue: identity.intensityBlue
    );
    
    self.shiftRed = dict.getNumber(
      forKey: "shiftRed",
      fallbackValue: identity.shiftRed
    );
    
    self.shiftGreen = dict.getNumber(
      forKey: "shiftGreen",
      fallbackValue: identity.shiftGreen
    );
    
    self.shiftBlue = dict.getNumber(
      forKey: "shiftBlue",
      fallbackValue: identity.shiftBlue
    );
    
    self.contrast = dict.getNumber(
      forKey: "contrast",
      fallbackValue: identity.contrast
    );
    
    self.brightness = dict.getNumber(
      forKey: "brightness",
      fallbackValue: identity.brightness
    );
    
    self.saturation = dict.getNumber(
      forKey: "saturation",
      fallbackValue: identity.saturation
    );
    
    self.invert = dict.getNumber(
      forKey: "invert",
      fallbackValue: identity.invert
    );
    
    self.hueRotate = {
      let angleRaw = try? dict.getDict(forKey: "hueRotate");
      
      guard let angleRaw = angleRaw else {
        return identity.hueRotate;
      };
      
      let angle = try? Angle<Float>(fromDict: angleRaw);
      guard let angle = angle else {
        return identity.hueRotate
      };
      
      return angle;
    }();
    
    self.opacity = dict.getNumber(
      forKey: "opacity",
      fallbackValue: identity.opacity
    );
  };
};
