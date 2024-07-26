package com.iosvisualeffectview;

import android.graphics.Color;

import androidx.annotation.Nullable;

import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.IosVisualEffectViewViewManagerDelegate;
import com.facebook.react.viewmanagers.IosVisualEffectViewViewManagerInterface;

@ReactModule(name = IosVisualEffectViewViewManager.NAME)
public class IosVisualEffectViewViewManager extends SimpleViewManager<IosVisualEffectViewView> implements IosVisualEffectViewViewManagerInterface<IosVisualEffectViewView> {

  public static final String NAME = "IosVisualEffectViewView";

  private final ViewManagerDelegate<IosVisualEffectViewView> mDelegate;

  public IosVisualEffectViewViewManager() {
    mDelegate = new IosVisualEffectViewViewManagerDelegate(this);
  }

  @Nullable
  @Override
  protected ViewManagerDelegate<IosVisualEffectViewView> getDelegate() {
    return mDelegate;
  }

  @Override
  public String getName() {
    return NAME;
  }

  @Override
  public IosVisualEffectViewView createViewInstance(ThemedReactContext context) {
    return new IosVisualEffectViewView(context);
  }

  @Override
  @ReactProp(name = "color")
  public void setColor(IosVisualEffectViewView view, String color) {
    view.setBackgroundColor(Color.parseColor(color));
  }
}
