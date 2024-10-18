import type { UIBlurEffectStyle } from "react-native-ios-utilities";


/**
 * Swift Enum: `VisualEffectBlurMode`
 */
export type VisualEffectBlurMode = {
  mode: 'blurEffectNone';

}| {
  mode: 'blurEffectSystem';
  blurEffectStyle: UIBlurEffectStyle;

} | {
  mode: 'blurEffectCustomIntensity';
  blurEffectStyle: UIBlurEffectStyle;
  effectIntensity: number;
  
} | {
  mode: 'blurEffectCustomBlurRadius';
  blurEffectStyle: UIBlurEffectStyle,
  customBlurRadius: number,
  effectIntensityForOtherEffects: number
};