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
    ];
  };
  
  public enum Events: String, CaseIterable {
    case onDidSetViewID;
  }
  
  // MARK: Properties
  // ----------------
  
  var _didSetup = false;
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
        blurConfig = .none;
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
  
  // TBA
  
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
    guard self.window != nil,
          let parentReactView = self.parentReactView
    else { return };
    
    print(
      "RNIBlurViewDelegate.didMoveToWindow",
      "\n - reactProps:", self.reactProps.description,
      "\n"
    );
    
    self._setupContent();
    return;
  };
  
  func _setupContent(){
    guard !self._didSetup else { return };
    self._didSetup = true;
    
    let blurView = try? VisualEffectBlurView(
      blurEffectStyle: self.blurConfig.blurEffectStyle
    );
    
    guard let blurView = blurView else { return };
    self.blurView = blurView;
    
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
    
  }
  
  public func notifyDidSetProps(sender: RNIContentViewParentDelegate) {
    // no-op
  };
  
  public func notifyOnUpdateLayoutMetrics(
    sender: RNIContentViewParentDelegate,
    oldLayoutMetrics: RNILayoutMetrics,
    newLayoutMetrics: RNILayoutMetrics
  ) {
    // no-op
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
  
  // MARK: Fabric Only
  // -----------------

  #if RCT_NEW_ARCH_ENABLED
  public func notifyOnUpdateProps(
    sender: RNIContentViewParentDelegate,
    oldProps: NSDictionary,
    newProps: NSDictionary
  ) {
    // no-op
  };
  
  public func notifyOnUpdateState(
    sender: RNIContentViewParentDelegate,
    oldState: NSDictionary?,
    newState: NSDictionary
  ) {
    // no-op
  };
  
  public func notifyOnFinalizeUpdates(
    sender: RNIContentViewParentDelegate,
    updateMaskRaw: Int,
    updateMask: RNIComponentViewUpdateMask
  ) {
    // no-op
  };
  
  public func notifyOnPrepareForReuse(sender: RNIContentViewParentDelegate) {
    // no-op
  };
  #else
  
  // MARK: - Paper Only
  // ------------------
  
  #endif
};
