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
    "currentKeyframe": \.currentKeyframeProp,
    
    // optional props
    "backgroundLayerSamplingSizeScale": \.backgroundLayerSamplingSizeScaleProp,
    "animationDelay": \.animationDelayProp,
  ];
  
  public enum Events: String, CaseIterable {
    // required events
    case onDidSetViewID;
    case onRequestFromNative;
    
    // optional events
    case onPropertyAnimatorDidStart;
    case onPropertyAnimatorDidComplete;
  };
  
  // MARK: Properties
  // ----------------
  
  var _didSetup = false;
  var _isFirstAnimation = true;
  var _hasPendingAnimations = false;
  
  public var effectView: VisualEffectAnimatableCustomFilterView?;
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
      self.prevKeyframe = keyframeConfig;
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
  
  public var prevKeyframe: CustomFilterKeyframeConfig?;
  public var currentKeyframe: CustomFilterKeyframeConfig?;
  @objc var currentKeyframeProp: NSDictionary? {
    willSet {
      guard let newValue = newValue,
            let dict = newValue.asAnyDict,
            let nextKeyframeConfig =
              try? CustomFilterKeyframeConfig(fromDict: dict)
      else {
        self.currentKeyframe = nil;
        return;
      };
      
      let oldValue = self.currentKeyframeProp;
      let didKeyframeChange = newValue != oldValue;

      guard didKeyframeChange else {
        return;
      };
      
      self.prevKeyframe = self.currentKeyframe;
      self.currentKeyframe = nextKeyframeConfig;
      self._hasPendingAnimations = true;
    }
  };
  
  public var backgroundLayerSamplingSizeScale: CGFloat?;
  @objc public var backgroundLayerSamplingSizeScaleProp: NSNumber? {
    willSet {
      let newValue = newValue as? CGFloat;
      self.backgroundLayerSamplingSizeScale = newValue;
      self.effectView?.backgroundLayerSamplingSizeScale = newValue;
    }
  };
  
  public var animationDelay: CGFloat?;
  @objc public var animationDelayProp: NSNumber? {
    willSet {
      let newValue = newValue as? CGFloat;
      self.animationDelay = newValue;
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
    
    self.dispatchEvent(
      for: .onRequestFromNative,
      withPayload: ["requestKey": "requestToMountCount"]
    );
  };
  
  public func applyPendingAnimationsIfNeeded(){
    guard self._hasPendingAnimations,
          let animationConfig = self.animationConfig,
          let nextKeyframe = self.currentKeyframe,
          let effectView = self.effectView
    else {
      return;
    };
    
    let prevKeyframe = self.prevKeyframe;
    
    let hasPrevRunningAnimator =
      self.currentAnimator?.isRunning == true;
    
    self.currentAnimator?.stopAnimation(true);
    self.currentAnimator = nil;
    
    let animator = animationConfig.createAnimator();
    
    let animationBlocks = try? nextKeyframe.createAnimations(
      forTarget: effectView,
      withPrevKeyframe: prevKeyframe,
      forPropertyAnimator: animator
    );
    
    guard let animationBlocks = animationBlocks else {
      return;
    };
    
    effectView.isBeingAnimated = true;
    try? animationBlocks.setup();

    animator.addAnimations {
      animationBlocks.applyKeyframe();
    };
    
    animator.addCompletion {
      let didCancel = $0 != .end;
      animationBlocks.completion(didCancel);
      
      // if self._isFirstAnimation {
      //   try? effectView.reapplyEffects();
      // };
      
      effectView.isBeingAnimated = false;
      self._isFirstAnimation = false;
      self.currentAnimator = nil;
      
      let eventPayload = animator.createDidCompleteEventPayload(
        animationPosition: $0,
        didCancel: didCancel
      );
      
      self.dispatchEvent(
      for: .onPropertyAnimatorDidComplete,
      withPayload: eventPayload
    );
    };

    animator.startAnimation();
    self._hasPendingAnimations = false;
    self.currentAnimator = animator;
    
    let eventPayload = animator.createDidStartEventPayload(
      didCancelPreviousAnimation: hasPrevRunningAnimator
    );
    
    self.dispatchEvent(
      for: .onPropertyAnimatorDidStart,
      withPayload: eventPayload
    );
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
    
    let animationDelay: CGFloat? = {
      if let animationDelay = self.animationDelay,
         animationDelay > 0
      {
        return animationDelay;
      };
    
      let hasTintView =
        self.effectView?.wrapper.tintViewWrapped?.wrappedObject != nil;
        
      let willAnimateTintView =
        self.currentKeyframe?.tintConfig != nil;
        
      let nextAnimationRequiresTintView =
        willAnimateTintView ? hasTintView : false;
      
      // TODO: Find fix for first mount animations
      /// Temp workaround for initial animations not being applied
      ///
      let shouldDelayAnimation =
        nextAnimationRequiresTintView || self._isFirstAnimation;
        
      return shouldDelayAnimation ? 0.1 : nil;
    }();
    
    
    if let animationDelay = animationDelay {
      self.effectView?.displayNow();
      
      DispatchQueue.main.asyncAfter(deadline: .now() + animationDelay) {
        self.applyPendingAnimationsIfNeeded();
      };
      
    } else {
      self.applyPendingAnimationsIfNeeded();
    };
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
