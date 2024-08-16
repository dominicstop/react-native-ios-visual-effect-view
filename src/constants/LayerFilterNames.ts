import type { UniformKeyAndValue } from "react-native-ios-utilities";
import type { LayerFilterName } from "../types/LayerFilterType";

export const LayerFilterNames: UniformKeyAndValue<LayerFilterName> = {
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
};

export const LayerFilterNameItems =
  Object.keys(LayerFilterNames) as Array<LayerFilterName>;