import type { Angle, ColorValue, ImageConfigGradient } from "react-native-ios-utilities";
import type { ColorMatrixRGBAInit } from "./ColorMatrixRGBA";
import type { ColorTransformInit } from "./ColorTransform";


/**
 * These `CAFilter` types are fully animatable:
 * * They are invisible when set to identity (which means you
 *    can fade it in and out fully).
 * 
 * * They are lerp-able (which means you can be percent driven)
 */
export type AnimatableLayerFilterConfig = {
  filterName: 'luminosityCurveMap';
  amount: number;
  point1: number;
  point2: number;
  point3: number;
  point4: number;

} | {
  filterName: 'colorBlackAndWhite';
  amount: number;

} | {
  filterName: 'saturateColors';
  amount: number;

} | {
  filterName: 'brightenColors';
  amount: number;

} | {
  filterName: 'contrastColors';
  amount: number;

} | {
  filterName: "colorHueAdjust";
  angle: Angle;

} | {
  filterName: 'luminanceCompression';
  amount: number;

} | {
  filterName: 'bias';
  amount: number;

} | {
  filterName: 'gaussianBlur';
  radius: number;
  shouldNormalizeEdges: boolean;

} | {
  filterName: 'colorMatrix';
  colorMatrix: ColorMatrixRGBAInit;

} | {
  filterName: 'colorMatrixVibrant';
  colorMatrix: ColorMatrixRGBAInit;

} | {
  filterName: 'colorTransform';
  colorTransform: ColorTransformInit;

} | {
  filterName: 'colorTransformVibrant';
  colorTransform: ColorTransformInit;

} | {
  filterName: 'variadicBlur';
  radius: number;
  gradientMask: ImageConfigGradient;
  shouldNormalizeEdges: boolean;
};

/**
 * These `CAFilter` types are partially animatable:
 * * They are still invisible when set to identity (which means 
 *   it cannot be fully faded in and out).
 * 
 * * They are lerp-able (which means you can be percent driven)
 */
export type PartiallyAnimatableLayerFilterConfig = {
  filterName: 'darkVibrant';
  isReversed: boolean;
  color0: ColorValue;
  color1: ColorValue;

} | {
  filterName: 'lightVibrant';
  isReversed: boolean;
  color0: ColorValue;
  color1: ColorValue;
};

/**
 * These `CAFilter` types are not animatable.
 */
export type NonAnimatableLayerFilterConfig = {
  filterName: 'alphaFromLuminance';
} | {
  filterName: 'averagedColor';
} | {
  filterName: 'invertColors';
} | {
  filterName: 'distanceField';
};

export type LayerFilterConfig =
    AnimatableLayerFilterConfig
  | PartiallyAnimatableLayerFilterConfig
  | NonAnimatableLayerFilterConfig;

export type LayerFilterName = LayerFilterConfig['filterName'];