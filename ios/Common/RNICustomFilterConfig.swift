//
//  RNICustomFilterConfig.swift
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 12/24/24.
//

import Foundation
import DGSwiftUtilities
import VisualEffectBlurView


public struct RNICustomFilterConfig {

  static var noFilter: Self = .init(backgroundFilters: []);

  public var backgroundFilters: [LayerFilterConfig];
  public var foregroundFilters: [LayerFilterConfig]?;
  
  public var tintConfig: TintConfig?;
  public var backgroundOpacity: CGFloat?;
  public var foregroundOpacity: CGFloat?;
  
  init(
    backgroundFilters: [LayerFilterConfig],
    foregroundFilters: [LayerFilterConfig]? = nil,
    tintConfig: TintConfig? = nil,
    backgroundOpacity: CGFloat? = nil,
    foregroundOpacity: CGFloat? = nil
  ) {
    self.backgroundFilters = backgroundFilters;
    self.foregroundFilters = foregroundFilters;
    self.tintConfig = tintConfig;
    self.backgroundOpacity = backgroundOpacity;
    self.foregroundOpacity = foregroundOpacity;
  }
};

// MARK: - RNICustomFilterConfig+InitializableFromDictionary
// ---------------------------------------------------------

extension RNICustomFilterConfig: InitializableFromDictionary {

  public init(fromDict dict: Dictionary<String, Any>) throws {
    let backgroundFilters = try dict.getArray(
      forKey: "backgroundFilters",
      elementType: LayerFilterConfig.self
    ) {
      guard let dict = $0 as? Dictionary<String, Any> else {
        return nil;
      };
      
      return try .init(fromDict: dict);
    };
    
    let foregroundFilters = try? dict.getArray(
      forKey: "foregroundFilters",
      elementType: LayerFilterConfig.self
    ) {
      guard let dict = $0 as? Dictionary<String, Any> else {
        return nil;
      };
      
      return try .init(fromDict: dict);
    };
    
    let tintConfig = try? dict.getValue(
      forKey: "tintConfig",
      type: TintConfig.self
    );
    
    let backgroundOpacity = try? dict.getNumber(
      forKey: "backgroundOpacity",
      type: CGFloat.self
    );
    
    let foregroundOpacity = try? dict.getNumber(
      forKey: "foregroundOpacity",
      type: CGFloat.self
    );
    
    self.init(
      backgroundFilters: backgroundFilters,
      foregroundFilters: foregroundFilters,
      tintConfig: tintConfig,
      backgroundOpacity: backgroundOpacity,
      foregroundOpacity: foregroundOpacity
    );
  };
};
