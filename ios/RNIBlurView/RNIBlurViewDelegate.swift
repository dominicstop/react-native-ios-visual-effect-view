//
//  RNIBlurViewDelegate.swift
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

import UIKit
import react_native_ios_utilities
import DGSwiftUtilities
import VisualEffectBlurView

@objc(RNIBlurViewDelegate)
public final class RNIBlurViewDelegate: UIView, RNIContentView {
  
  public static var propKeyPathMap: Dictionary<String, PartialKeyPath<RNIBlurViewDelegate>> {
    return [
      "blurConfig": \.blurConfigProp,
      "animationConfig": \.animationConfigProp,
      "animationDelay": \.animationDelayProp,
    ];
  };
  
  public enum Events: String, CaseIterable {
    case onDidSetViewID;
  }
  
  // MARK: Properties
  // ----------------
  
  var _didSetup = false;
  var _animator: UIViewPropertyAnimator?;
  
  var blurView: VisualEffectBlurView?;
  
  // MARK: - Properties - RNIContentViewDelegate
  // -------------------------------------------
  
  public weak var parentReactView: RNIContentViewParentDelegate?;
  
  // MARK: Properties - Props
  // ------------------------
  
  public var reactProps: NSDictionary = [:];
  
  public var blurConfig: RNIBlurConfig = .none;
  @objc public var blurConfigProp: NSDictionary? {
    willSet {
      guard let newValue = newValue as? Dictionary<String, Any>,
            let blurConfigNew = try? RNIBlurConfig(fromDict: newValue)
      else {
        self.blurConfig = .none;
        return;
      };
      
      let blurConfigOld = self.blurConfig;
      self.blurConfig = blurConfigNew;
      
      print(
        "RNIBlurViewDelegate.blurConfigProp",
        "\n - willSet, newValue:", newValue.description,
        "\n - blurConfigOld:", String(describing: blurConfigOld),
        "\n - blurConfigNew:", String(describing: blurConfigNew),
        "\n"
      );
      
      guard blurConfigOld != blurConfigNew else { return };
      self._notifyOnChangeBlurConfig(old: blurConfigOld, new: blurConfigNew);
    }
  };
  
  public var animationConfig: AnimationConfig?;
  @objc public var animationConfigProp: NSDictionary? {
    willSet {
    
      guard let newValue = newValue as? Dictionary<String, Any>,
            let animationConfig = try? AnimationConfig(fromDict: newValue)
      else {
        self.animationConfig = nil;
        return;
      };
      
      self.animationConfig = animationConfig;
    }
  };
  
  public var animationDelay: Double?;
  @objc public var animationDelayProp: NSNumber? {
    willSet {
      self.animationDelay = newValue?.doubleValue;
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
  
  // MARK: Functions
  // ---------------
  
  public override func didMoveToWindow() {
    guard self.window != nil else {
      return;
    };
    
    self._setupContent();
    return;
  };
  
  func _setupContent(){
    guard !self._didSetup else { return };
    self._didSetup = true;
    
    let blurView = try? VisualEffectBlurView(
      blurEffectStyle: nil
    );
    
    guard let blurView = blurView else { return };
    self.blurView = blurView;
    
    self._notifyOnChangeBlurConfig(
      old: .none,
      new: self.blurConfig
    );
    
    self.addSubview(blurView);
    blurView.translatesAutoresizingMaskIntoConstraints = false;
    
    NSLayoutConstraint.activate([
      blurView.leadingAnchor.constraint(
        equalTo: self.leadingAnchor
      ),
      blurView.trailingAnchor.constraint(
        equalTo: self.trailingAnchor
      ),
      blurView.topAnchor.constraint(
        equalTo: self.topAnchor
      ),
      blurView.bottomAnchor.constraint(
        equalTo: self.bottomAnchor
      ),
    ]);
  };
  
  func _notifyOnChangeBlurConfig(
    old blurConfigOld: RNIBlurConfig,
    new blurConfigNew: RNIBlurConfig
  ){
    guard self._didSetup,
          let blurView = self.blurView
    else { return };
    
    let animationBlock = {
      switch self.blurConfig {
        case .none:
          blurView.blurEffectStyle = .none;
          
        case let .standard(blurEffectStyle):
          blurView.blurEffectStyle = blurEffectStyle;
          
        case let .customEffectIntensity(blurEffectStyle, intensity):
          blurView.blurEffectStyle = blurEffectStyle;
          blurView.setEffectIntensity(intensity);
          
        case let .customBlurRadius(blurEffectStyle, radius):
          blurView.blurEffectStyle = blurEffectStyle;
          blurView.blurRadius = radius;
      };
    };
    
    let animator = self.animationConfig?.createAnimator(
      gestureInitialVelocity: .zero
    );
    
    let startAnimation = {
      guard let animator = animator else {
        return animationBlock;
      };
      
      self._animator?.stopAnimation(true);
      self._animator = animator;
      
      animator.addAnimations(animationBlock);
      animator.addCompletion { _ in
        self._animator = nil;
      };
      
      return {
        animator.startAnimation();
      };
    }();
    
    if let animationDelay = self.animationDelay {
      DispatchQueue.main.asyncAfter(deadline: .now() + animationDelay) {
        startAnimation();
      };
      
    } else {
      startAnimation();
    };
  };
};

// MARK: - RNIBlurViewDelegate+RNIContentViewDelegate
// --------------------------------------------------

extension RNIBlurViewDelegate: RNIContentViewDelegate {

  public typealias KeyPathRoot = RNIBlurViewDelegate;

  // MARK: Paper + Fabric
  // --------------------
  
  public func notifyOnInit(sender: RNIContentViewParentDelegate) {
    print(
      "RNIBlurViewDelegate.notifyOnInit",
      "\n - reactProps:", self.reactProps.description,
      "\n"
    );
    return;
  };
    
  public func notifyOnMountChildComponentView(
    sender: RNIContentViewParentDelegate,
    childComponentView: UIView,
    index: NSInteger,
    superBlock: () -> Void
  ) {
    #if !RCT_NEW_ARCH_ENABLED
    superBlock();
    #endif
    
    // Note: Window might not be available yet
    self.addSubview(childComponentView);
  };
  
  public func notifyOnUnmountChildComponentView(
    sender: RNIContentViewParentDelegate,
    childComponentView: UIView,
    index: NSInteger,
    superBlock: () -> Void
  ) {
    #if !RCT_NEW_ARCH_ENABLED
    superBlock();
    #endif
    
  };
  
  public func notifyOnViewCommandRequest(
    sender: RNIContentViewParentDelegate,
    forCommandName commandName: String,
    withCommandArguments commandArguments: NSDictionary,
    resolve resolveBlock: (NSDictionary) -> Void,
    reject rejectBlock: (String) -> Void
  ) {
    // no-op
  };
  
  // MARK: - Fabric Only
  // -------------------

  #if RCT_NEW_ARCH_ENABLED
  public func notifyOnPrepareForReuse(sender: RNIContentViewParentDelegate) {
    self._didSetup = false;
    self._animator?.stopAnimation(true);
    
    self.blurView?.clearAnimator();
    self.blurView?.removeFromSuperview();
    self.blurView = nil;
  };
  
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
