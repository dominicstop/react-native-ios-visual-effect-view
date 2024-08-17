//
//  RNIVisualEffectViewError.swift
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 10/18/23.
//

import Foundation
import DGSwiftUtilities
import react_native_ios_utilities


public struct RNIVisualEffectViewErrorMetadata: ErrorMetadata {
  public static var domain: String? = "react-native-ios-visual-effect-view";
  public static var parentType: String? = nil;
};

public typealias RNIVisualEffectViewError = RNIError<RNIVisualEffectViewErrorMetadata>;
