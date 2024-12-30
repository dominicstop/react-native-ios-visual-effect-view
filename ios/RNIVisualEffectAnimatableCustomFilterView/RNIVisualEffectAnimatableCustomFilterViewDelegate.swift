//
//  RNIVisualEffectAnimatableCustomFilterViewDelegate.swift
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

import UIKit
import react_native_ios_utilities
import DGSwiftUtilities
import VisualEffectBlurView


@objc(RNIVisualEffectAnimatableCustomFilterViewDelegate)
public final class RNIVisualEffectAnimatableCustomFilterViewDelegate: UIView, RNIContentView {
  
  public static let propKeyPathMap: PropKeyPathMap = [
    // required props
    "identityBackgroundFilters": \.identityBackgroundFiltersProp,
    "identityForegroundFilters": \.identityForegroundFiltersProp,
    "initialKeyframe": \.initialKeyframeProp,
    "animationConfig": \.animationConfigProp,
    
    // optional props
    "backgroundLayerSamplingSizeScale": \.backgroundLayerSamplingSizeScaleProp,
  ];
  
  public enum Events: String, CaseIterable {
    case onDidSetViewID;
  }
  
  // MARK: Properties
  // ----------------
  
  var _didSetup = false;
  var effectView: VisualEffectAnimatableCustomFilterView?;
  public var currentAnimator: UIViewPropertyAnimator?;
  
  // MARK: - Properties - RNIContentViewDelegate
  // -------------------------------------------
  
  public weak var parentReactView: RNIContentViewParentDelegate?;
  
  // MARK: Properties - Props
  // ------------------------
  
  public var reactProps: NSDictionary = [:];
  
  public var identityBackgroundFilters: [LayerFilterConfig]?;
  @objc var identityBackgroundFiltersProp: NSArray? {
    willSet {
      guard let newValue = newValue,
            let rawValues = newValue.asAnyArray,
            let dictValues = rawValues.asDictValues.nilIfEmpty,
            let filterConfigItems = dictValues.asLayerFilterConfig.nilIfEmpty
      else {
        self.identityBackgroundFilters = [];
        return;
      };
      
      self.identityBackgroundFilters = filterConfigItems;
    }
  };
  
  public var identityForegroundFilters: [LayerFilterConfig]?;
  @objc var identityForegroundFiltersProp: NSArray? {
    willSet {
      guard let newValue = newValue,
            let rawValues = newValue.asAnyArray,
            let dictValues = rawValues.asDictValues.nilIfEmpty,
            let filterConfigItems = dictValues.asLayerFilterConfig.nilIfEmpty
      else {
        self.identityForegroundFilters = [];
        return;
      };
      
      self.identityForegroundFilters = filterConfigItems;
    }
  };
  
  
  public var initialKeyframe: CustomFilterKeyframeConfig?;
  @objc var initialKeyframeProp: NSDictionary? {
    willSet {
      guard let newValue = newValue,
            let dict = newValue.asAnyDict,
            let keyframeConfig =
              try? CustomFilterKeyframeConfig(fromDict: dict)
      else {
        self.initialKeyframe = nil;
        return;
      };
      
      self.initialKeyframe = keyframeConfig;
    }
  };
  
  public var animationConfig: AnimationConfig?;
  @objc var animationConfigProp: NSDictionary? {
    willSet {
      guard let dict = newValue?.asAnyDict,
            let animationConfig = try? AnimationConfig(fromDict: dict)
      else {
        self.animationConfig = nil;
        self.currentAnimator?.stopAnimation(true);
        return;
      };
      
      self.animationConfig = animationConfig;
    }
  };
  
  public var backgroundLayerSamplingSizeScale: CGFloat?;
  @objc public var backgroundLayerSamplingSizeScaleProp: NSNumber? {
    willSet {
      let newValue = newValue?.doubleValue as? CGFloat;
      self.backgroundLayerSamplingSizeScale = newValue;
      self.effectView?.backgroundLayerSamplingSizeScale = newValue;
    }
  };
  
  // MARK: Init
  // ----------
  
  public override init(frame: CGRect) {
    super.init(frame: frame);
  };
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented");
  }
  
  // MARK: Functions: View Lifecycle
  // -------------------------------
  
  public override func didMoveToWindow() {
    guard self.window != nil else {
      return;
    };
    
    try? self._setupContentIfNeeded();
  };
  
  // MARK: - Functions
  // -----------------

  private func _setupContentIfNeeded() throws {
    guard !self._didSetup,
          let identityBackgroundFilters = self.identityBackgroundFilters,
          let identityForegroundFilters = self.identityForegroundFilters,
          let initialKeyframe = self.initialKeyframe
    else {
      return;
    };

    let effectView = try VisualEffectAnimatableCustomFilterView(
      identityBackgroundFilters: identityBackgroundFilters,
      identityForegroundFilters: identityForegroundFilters,
      initialKeyframe: initialKeyframe
    );
    
    self.effectView = effectView;
    defer {
      self._didSetup = true;
    };

    self.addSubview(effectView);
    effectView.translatesAutoresizingMaskIntoConstraints = false;
    
    NSLayoutConstraint.activate([
      effectView.leadingAnchor.constraint(
        equalTo: self.leadingAnchor
      ),
      effectView.trailingAnchor.constraint(
        equalTo: self.trailingAnchor
      ),
      effectView.topAnchor.constraint(
        equalTo: self.topAnchor
      ),
      effectView.bottomAnchor.constraint(
        equalTo: self.bottomAnchor
      ),
    ]);
  };
};

extension RNIVisualEffectAnimatableCustomFilterViewDelegate: RNIContentViewDelegate {

  public typealias KeyPathRoot = RNIVisualEffectAnimatableCustomFilterViewDelegate;

  // MARK: Paper + Fabric
  // --------------------
  
  public func notifyOnMountChildComponentView(
    sender: RNIContentViewParentDelegate,
    childComponentView: UIView,
    index: NSInteger,
    superBlock: () -> Void
  ) {
    #if !RCT_NEW_ARCH_ENABLED
    superBlock();
    #endif
    
    self.effectView?.contentView.addSubview(childComponentView);
  };
  
  public func notifyOnUnmountChildComponentView(
    sender: RNIContentViewParentDelegate,
    childComponentView: UIView,
    index: NSInteger,
    superBlock: () -> Void
  ) {
    #if !RCT_NEW_ARCH_ENABLED
    superBlock();
    #else
    childComponentView.removeFromSuperview();
    #endif
  };
  
  public func notifyDidSetProps(sender: RNIContentViewParentDelegate) {
    try? self._setupContentIfNeeded();
  };
  
  // MARK: Fabric Only
  // -----------------

  #if RCT_NEW_ARCH_ENABLED
  public func shouldRecycleContentDelegate(
    sender: RNIContentViewParentDelegate
  ) -> Bool {
    return false;
  };
  #else
  
  // MARK: - Paper Only
  // ------------------
  
  #endif
};
