//
//  RNIVisualEffectCustomFilterViewDelegate.swift
//  react-native-ios-visual-effect-view
//
//  Created by Dominic Go on 6/6/24.
//

import UIKit
import react_native_ios_utilities
import DGSwiftUtilities
import VisualEffectBlurView

@objc(RNIVisualEffectCustomFilterViewDelegate)
public final class RNIVisualEffectCustomFilterViewDelegate: UIView, RNIContentView {
  
  public static var propKeyPathMap: Dictionary<String, PartialKeyPath<RNIVisualEffectCustomFilterViewDelegate>> {
    return [:];
  };
  
  public enum Events: String, CaseIterable {
    case onDidSetViewID;
  }
  
  // MARK: Properties
  // ----------------
  
  var _didSendEvents = false;
  
  
  var visualEffectView: VisualEffectView?;
  
  // MARK: - Properties - RNIContentViewDelegate
  // -------------------------------------------
  
  public weak var parentReactView: RNIContentViewParentDelegate?;
  
  // MARK: Properties - Props
  // ------------------------
  
  public var reactProps: NSDictionary = [:];
  
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
  };
  
  func _setupContent(){
    
    let imageConfig: ImageConfigGradient = ImageConfigGradient(
      colors: [.black, .clear],
      startPointPreset: .top,
      endPointPreset: .bottom,
      size: UIScreen.main.bounds.size
    );
    
    let gradientImage = try! imageConfig.makeImage();
    
    let visualEffectView = try! VisualEffectView(rawFilterTypes: []);
    self.visualEffectView = visualEffectView;
    
    self.addSubview(visualEffectView);
    visualEffectView.translatesAutoresizingMaskIntoConstraints = false;
    visualEffectView.shouldOnlyShowBgLayer = true;
    
    NSLayoutConstraint.activate([
      visualEffectView.leadingAnchor.constraint(
        equalTo: self.leadingAnchor
      ),
      visualEffectView.trailingAnchor.constraint(
        equalTo: self.trailingAnchor
      ),
      visualEffectView.topAnchor.constraint(
        equalTo: self.topAnchor
      ),
      visualEffectView.bottomAnchor.constraint(
        equalTo: self.bottomAnchor
      ),
    ]);
    
    try! visualEffectView.setFiltersViaEffectDesc(
      withFilterTypes: [
        .variadicBlur(
          radius: 0,
          maskImage: gradientImage.cgImage,
          shouldNormalizeEdges: true
        ),
        .colorBlackAndWhite(amount: 0.1),
      ],
      shouldImmediatelyApplyFilter: true
    );

    let tapGesture = UITapGestureRecognizer();
    tapGesture.isEnabled = true;
    
    tapGesture.addAction { _ in
      try! visualEffectView.updateCurrentFiltersViaEffectDesc(
        withFilterTypes: [
          .variadicBlur(
            radius: 16,
            maskImage: gradientImage.cgImage,
            shouldNormalizeEdges: true
          ),
        ]
      );
    
      UIView.animate(withDuration: 1) {
        try! visualEffectView.applyRequestedFilterEffects();
        
      } completion: { _ in
          try! visualEffectView.updateCurrentFiltersViaEffectDesc(
            withFilterTypes: [
              .colorBlackAndWhite(amount: 0.75),
            ]
          );
          UIView.animate(withDuration: 1) {
            try! visualEffectView.applyRequestedFilterEffects();
          };
        };
      };
      
    visualEffectView.addGestureRecognizer(tapGesture);
  };
};

extension RNIVisualEffectCustomFilterViewDelegate: RNIContentViewDelegate {

  public typealias KeyPathRoot = RNIVisualEffectCustomFilterViewDelegate;

  // MARK: Paper + Fabric
  // --------------------
  
  public func notifyOnInit(sender: RNIContentViewParentDelegate) {
    self._setupContent();
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
  
  public func shouldRecycleContentDelegate(
    sender: RNIContentViewParentDelegate
  ) -> Bool {
    return false;
  }
  
  public func notifyOnPrepareForReuse(sender: RNIContentViewParentDelegate) {
    // no-op
  };
  #else
  
  // MARK: - Paper Only
  // ------------------
  
  #endif
};
