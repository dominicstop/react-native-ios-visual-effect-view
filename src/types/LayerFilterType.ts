import type { ImageGradientConfig } from 'react-native-ios-utilities'
import type { ColorMatrixRGBA } from './ColorMatrixRGBA';


export type LayerFilterType = {
  filterName: 'alphaFromLuminance';
} | {
  filterName: 'averagedColor';
} | {
  filterName: 'luminosityCurveMap';
  amount: number;
  values: [number];
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
  filterName: 'luminanceCompression';
  amount: number;
} | {
  filterName: 'gaussianBlur';
  radius: number;
  shouldNormalizeEdges: boolean;
} | {
  filterName: 'darkVibrant';
  isReversed: boolean;
  color0: string;
  color1: string;
} | {
  filterName: 'lightVibrant';
  isReversed: boolean;
  color0: string;
  color1: string;
} | {
  filterName: 'colorMatrixVibrant';
  colorMatrix: ColorMatrixRGBA;
} | {
  filterName: 'variadicBlur';
  radius: number;
  maskImage: ImageGradientConfig;
  shouldNormalizeEdges: boolean;
};

export type LayerFilterName = LayerFilterType['filterName'];

