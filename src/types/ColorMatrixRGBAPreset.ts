import type { UIBlurEffectStyle, UIVibrancyEffectStyle } from "react-native-ios-utilities";

export type ColorMatrixRGBAPreset = 
    'preset01'
  | 'preset02'
  | 'preset03'
  | 'preset04'
  | 'preset05'
  | 'preset06'
  | 'preset07'
  | 'preset08'
  | 'preset09'
  | 'preset10'
  | 'preset11'
  | 'preset12'
  | 'preset13'
  | 'preset14'
  | 'preset15';

export type ColorMatrixRGBAPresetInit = {
  mode: 'presetName';
  presetName: ColorMatrixRGBAPreset;

} | {
  mode: 'matchingEffect';
  blurEffectStyle: UIBlurEffectStyle;
  vibrancyEffectStyle: UIVibrancyEffectStyle;
};