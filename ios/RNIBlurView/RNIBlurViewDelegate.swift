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
      "blurMode": \.blurModeProp,
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
  
  public var blurView: VisualEffectAnimatableBlurView?;
  
  // MARK: - Properties - RNIContentViewDelegate
  // -------------------------------------------
  
  public weak var parentReactView: RNIContentViewParentDelegate?;
  
  // MARK: Properties - Props
  // ------------------------
  
  public var reactProps: NSDictionary = [:];
  
  public var blurMode: VisualEffectBlurMode = .blurEffectNone;
  @objc public var blurModeProp: NSDictionary? {
    willSet {
      let blurModeNew: VisualEffectBlurMode = {
        guard let newValue = newValue as? Dictionary<String, Any>,
              let blurMode = try? VisualEffectBlurMode(fromDict: newValue)
        else {
          return .blurEffectNone;
        };
        
        return blurMode;
      }();
      
      let blurModeOld = self.blurMode;
      self.blurMode = blurModeNew;
      
      #if DEBUG && FALSE
      print(
        "RNIBlurViewDelegate.blurModeProp",
        "\n - willSet, newValue:", newValue.description,
        "\n - blurModeOld:", String(describing: blurModeOld),
        "\n - blurModeNew:", String(describing: blurModeNew),
        "\n"
      );
      #endif
      
      guard blurModeOld != blurModeNew else { return };
      self._notifyOnChangeBlurConfig(old: blurModeOld, new: blurModeNew);
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
  
  // MARK: - Functions - View Lifecycle
  // ----------------------------------
  
  public override func didMoveToWindow() {
    guard self.window != nil else {
      return;
    };
    
    try? self._setupContentIfNeeded();
  };
  
  // MARK: - Internal Functions
  // --------------------------
  
  private func _setupContentIfNeeded() throws {
    guard !self._didSetup else {
      return;
    };
    
    let blurView =
      try VisualEffectAnimatableBlurView(blurMode: self.blurMode);
    
    self.blurView = blurView;
    
    self._notifyOnChangeBlurConfig(
      old: .blurEffectNone,
      new: self.blurMode
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
    
    self._didSetup = true;
  };
  
  private func _notifyOnChangeBlurConfig(
    old blurModeOld: VisualEffectBlurMode,
    new blurModeNew: VisualEffectBlurMode
  ){
    guard self._didSetup else {
      return;
    };
    
    switch self.animationConfig {
      case let .some(animationConfig):
        do {
          try self.applyBlurModeWithAnimation(
            nextBlurMode: blurModeNew,
            withAnimationConfig: animationConfig
          );
          
        } catch {
          fallthrough;
        };
        
      case .none:
        try? self.applyBlurMode(nextBlurMode: blurModeNew);
    };
  };
  
  // MARK: - Public Functions
  // ------------------------
  
  public func applyBlurMode(nextBlurMode: VisualEffectBlurMode) throws {
    guard let blurView = self.blurView else {
      throw RNIVisualEffectViewError(errorCode: .unexpectedNilValue);
    };
    
    try blurView.applyBlurMode(
      nextBlurMode,
      useAnimationFriendlyWorkaround: false
    );
  };
  
  public func applyBlurModeWithAnimation(
    nextBlurMode: VisualEffectBlurMode,
    withAnimationConfig animationConfig: AnimationConfig,
    extraAnimations extraAnimationsBlock: Optional<() -> Void> = nil,
    completion completionBlock: Optional<(_ isSuccess: Bool) -> Void> = nil
  ) throws {
  
    guard let blurView = self.blurView else {
      throw RNIVisualEffectViewError(errorCode: .unexpectedNilValue);
    };
    
    let animationBlocks = try blurView.createAnimationBlocks(
      applyingBlurMode: nextBlurMode,
      shouldAnimateAlpha: false
    );
    
    let animator =
      animationConfig.createAnimator(gestureInitialVelocity: .zero);
      
    let animatorPrev = self._animator;
    self._animator = animator;
      
    let startAnimation = {
      animatorPrev?.stopAnimation(true);
      
      try animationBlocks.setup();
      animator.startAnimation();
    };
      
    animator.addCompletion { _ in
      self._animator = nil;
      animationBlocks.completion();
    };
    
    animator.addAnimations {
      animationBlocks.animation();
    }
    
    if let completionBlock = completionBlock {
      animator.addCompletion {
        let isSuccess = $0 == .end;
        completionBlock(isSuccess);
      };
    };
    
    if let extraAnimationsBlock = extraAnimationsBlock {
      animator.addAnimations {
        extraAnimationsBlock();
      }
    };

    /// NOTE:
    /// animator delay not working correctly, so use dispatch instead
    ///
    if let animationDelay = self.animationDelay {
      DispatchQueue.main.asyncAfter(deadline: .now() + animationDelay) {
        do {
          try startAnimation();
          
        } catch {
          try? self.applyBlurMode(nextBlurMode: nextBlurMode);
          completionBlock?(false);
        };
      };
        
    } else {
      do {
        try startAnimation();
        
      } catch {
        throw RNIVisualEffectViewError(errorCode: .runtimeError);
      };
    };
  };
};

// MARK: - RNIBlurViewDelegate+RNIContentViewDelegate
// --------------------------------------------------

extension RNIBlurViewDelegate: RNIContentViewDelegate {

  public typealias KeyPathRoot = RNIBlurViewDelegate;

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
    #else
    childComponentView.removeFromSuperview();
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
  #endif
};
