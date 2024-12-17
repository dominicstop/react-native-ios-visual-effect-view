import type { UniformKeyAndValue } from "react-native-ios-utilities";
import type { LayerFilterName } from "../types/LayerFilterConfig";


export const LayerFilterConfigTypes: UniformKeyAndValue<LayerFilterName> = {
  alphaFromLuminance: 'alphaFromLuminance',
  averagedColor: 'averagedColor',
  luminosityCurveMap: 'luminosityCurveMap',
  colorBlackAndWhite: 'colorBlackAndWhite',
  saturateColors: 'saturateColors',
  brightenColors: 'brightenColors',
  contrastColors: 'contrastColors',
  luminanceCompression: 'luminanceCompression',
  gaussianBlur: 'gaussianBlur',
  darkVibrant: 'darkVibrant',
  lightVibrant: 'lightVibrant',
  colorMatrixVibrant: 'colorMatrixVibrant',
  variadicBlur: 'variadicBlur',
  bias: 'bias',
  colorHueAdjust: 'colorHueAdjust',
  colorMatrix: 'colorMatrix',
  distanceField: 'distanceField',
  invertColors: 'invertColors',
};

export const LayerFilterNameItems =
  Object.keys(LayerFilterConfigTypes) as Array<LayerFilterName>;