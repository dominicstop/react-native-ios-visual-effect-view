import type { Angle } from "react-native-ios-utilities";

export type ColorTransform = {
  intensityRed: number;
  intensityGreen: number;
  intensityBlue: number;
  shiftRed: number;
  shiftGreen: number;
  shiftBlue: number;
  contrast: number;
  brightness: number;
  saturation: number;
  invert: number;
  hueRotate: Angle;
};

export type ColorTransformInit = Partial<ColorTransform>;