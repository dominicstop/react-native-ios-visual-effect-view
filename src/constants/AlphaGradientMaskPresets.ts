import { Dimensions } from "react-native";
import type { ImageConfigGradient } from "react-native-ios-utilities";

const WINDOW_SIZE = Dimensions.get('window');

function createColorAlpha(percent: number): string {
  return `rgba(0,0,0,${percent})`;
};

export const AlphaGradientMaskPresets: Record<string, ImageConfigGradient> = {
  'leftToRight': {
    type: 'axial',
    startPointPreset: 'centerLeft',
    endPointPreset: 'centerRight',
    colors: [
      createColorAlpha(0),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },
  'leftToRightOffsetMinus30Percent': {
    type: 'axial',
    startPointPreset: 'centerLeft',
    endPointPreset: 'centerRight',
    colors: [
      createColorAlpha(0),
      createColorAlpha(0.20),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },
  'leftToRightOffsetPlus30Percent': {
    type: 'axial',
    startPointPreset: 'centerLeft',
    endPointPreset: 'centerRight',
    colors: [
      createColorAlpha(0),
      createColorAlpha(0.8),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },
  
  'rightToLeft': {
    type: 'axial',
    startPointPreset: 'centerRight',
    endPointPreset: 'centerLeft',
    colors: [
      createColorAlpha(0),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },
  'rightToLeftOffsetMinus30Percent': {
    type: 'axial',
    startPointPreset: 'centerRight',
    endPointPreset: 'centerLeft',
    colors: [
      createColorAlpha(0),
      createColorAlpha(0.20),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },
  'rightToLeftOffsetPlus30Percent': {
    type: 'axial',
    startPointPreset: 'centerRight',
    endPointPreset: 'centerLeft',
    colors: [
      createColorAlpha(0),
      createColorAlpha(0.80),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },

  'topToBottom': {
    type: 'axial',
    startPointPreset: 'topCenter',
    endPointPreset: 'bottomCenter',
    colors: [
      createColorAlpha(0),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },
  'topToBottomOffsetMinus30Percent': {
    type: 'axial',
    startPointPreset: 'topCenter',
    endPointPreset: 'bottomCenter',
    colors: [
      createColorAlpha(0),
      createColorAlpha(0.20),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },
  'topToBottomOffsetPlus30Percent': {
    type: 'axial',
    startPointPreset: 'topCenter',
    endPointPreset: 'bottomCenter',
    colors: [
      createColorAlpha(0),
      createColorAlpha(0.80),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },

  'bottomToTop': {
    type: 'axial',
    startPointPreset: 'bottomCenter',
    endPointPreset: 'topCenter',
    colors: [
      createColorAlpha(0),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },
  'bottomToTopOffsetMinus30Percent': {
    type: 'axial',
    startPointPreset: 'bottomCenter',
    endPointPreset: 'topCenter',
    colors: [
      createColorAlpha(0),
      createColorAlpha(0.20),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },
  'bottomToTopOffsetPlus30Percent': {
    type: 'axial',
    startPointPreset: 'bottomCenter',
    endPointPreset: 'topCenter',
    colors: [
      createColorAlpha(0),
      createColorAlpha(0.80),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },

  'centerToOuterEdge': {
    type: 'radial',
    startPoint: { x: 0.5, y: 0.5 },
    endPoint: { x: 1, y: 1 },
    colors: [
      createColorAlpha(0),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },
  'centerToOuterEdgeOffsetMinus30Percent': {
    type: 'radial',
    startPoint: { x: 0.5, y: 0.5 },
    endPoint: { x: 1, y: 1 },
    colors: [
      createColorAlpha(0),
      createColorAlpha(0.20),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },
  'centerToOuterEdgeOffsetPlus30Percent': {
    type: 'radial',
    startPoint: { x: 0.5, y: 0.5 },
    endPoint: { x: 1, y: 1 },
    colors: [
      createColorAlpha(0),
      createColorAlpha(0.80),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },

  'outerEdgeToCenter': {
    type: 'radial',
    startPoint: { x: 1, y: 1 },
    endPoint: { x: 0.5, y: 0.5 },
    colors: [
      createColorAlpha(0),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },
  'outerEdgeToCenterEdgeOffsetMinus30Percent': {
    type: 'radial',
    startPoint: { x: 1, y: 1 },
    endPoint: { x: 0.5, y: 0.5 },
    colors: [
      createColorAlpha(0),
      createColorAlpha(0.20),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },
  'outerEdgeToCenterEdgeOffsetPlus30Percent': {
    type: 'radial',
    startPoint: { x: 1, y: 1 },
    endPoint: { x: 0.5, y: 0.5 },
    colors: [
      createColorAlpha(0),
      createColorAlpha(0.80),
      createColorAlpha(1),
    ],
    size: WINDOW_SIZE,
  },
};