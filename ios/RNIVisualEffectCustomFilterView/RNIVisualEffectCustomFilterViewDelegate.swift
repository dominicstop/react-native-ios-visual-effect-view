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
  
  public static let propKeyPathMap: PropKeyPathMap = [
    "currentFilters": \.currentFiltersProp,
  ];
  
  public enum Events: String, CaseIterable {
    case onDidSetViewID;
  }
  
  // MARK: Properties
  // ----------------
  
  var _didSetup = false;
  
  var effectView: VisualEffectCustomFilterView?;
  
  // MARK: - Properties - RNIContentViewDelegate
  // -------------------------------------------
  
  public weak var parentReactView: RNIContentViewParentDelegate?;
  
  // MARK: Properties - Props
  // ------------------------
  
  public var reactProps: NSDictionary = [:];
  
  public var currentFilters: [LayerFilterConfig] = [];
  @objc public var currentFiltersProp: NSArray? {
    willSet {
      let items = newValue ?? [];
      
      self.currentFilters = items.compactMap {
        guard let dict = $0 as? Dictionary<String, Any> else {
          return nil;
        };
        
        let filter: LayerFilterConfig? = try? .init(fromDict: dict);
        return filter;
      };
      
      print("currentFilters", currentFilters);
      
      try? self._setupContentIfNeeded();
      try? self.applyCurrentFilterItems();
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
    guard !self._didSetup else {
      return;
    };
    
    let effectView = try VisualEffectCustomFilterView(
      withInitialFilters: self.currentFilters
    );
    
    self.effectView = effectView;

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
    
    self._didSetup = true;
  };
  
  public func applyCurrentFilterItems() throws {
    guard let effectView = self.effectView else {
      return;
    };
    
    try effectView.immediatelyApplyFilters(self.currentFilters);
  };
};

extension RNIVisualEffectCustomFilterViewDelegate: RNIContentViewDelegate {

  public typealias KeyPathRoot = RNIVisualEffectCustomFilterViewDelegate;

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
