import type { UIBlurEffectStyle } from "react-native-ios-utilities";

export type BlurViewConfigBase = {
  blurEffectStyle: UIBlurEffectStyle;
};

export type BlurViewConfig = BlurViewConfigBase & ({
  mode: 'none';
}| {
  mode: 'standard';
} | {
  mode: 'customEffectIntensity';
  /** Percent in decimal, i.e. 0...1 */
  intensity: number;
} | {
  mode: 'customBlurRadius';
  radius: number;
});

export type BlurViewConfigMode = BlurViewConfig['mode'];
