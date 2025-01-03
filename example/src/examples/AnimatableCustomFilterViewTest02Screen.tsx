import * as React from 'react';
import { StyleSheet, View, Animated, Easing, Dimensions, Text } from 'react-native';

import { AlphaGradientMaskPresets, AnimatableCustomFilterView, IdentityBackgroundFilterConfigListPreset, IdentityForegroundFilterConfigListPreset, type CustomFilterKeyframeConfig, type LayerFilterConfig } from 'react-native-ios-visual-effect-view';
import { CounterDisplay } from '../components/CounterDisplay';
const WINDOW_SIZE = Dimensions.get('window');

// 1 = black, 0 = transparent
// returns an rgba string
function createDepthColor(percent: number): string {
  return `rgba(0,0,0,${percent})`;
};


const emojiList = [
  "❤️🛑🍒🍓💃",
  "🧡🍊🥕🍑🎃",
  "💛🌟🌻🍋🍌",
  "💚🍀🌿🍏🌳",
  "💙🌊🦋🔵💎",
  "💜🍇💐🛸🌌",
  "💖🌸💝🎀💗",
  "🤍✨🌙🦢🦄",
  "🖤🌑🦇🕷️🕸️",
];

const emojiString = emojiList.reduce((acc, curr, index) => {
  const isLast = index === emojiList.length - 1;
  return acc + curr + (isLast ? "" : "\n");
}, '');

const variableBlurIdentiyFilters: Array<LayerFilterConfig> = Object.values(AlphaGradientMaskPresets).map((gradientConfig) => (
  {
    filterName: 'variadicBlur',
    radius: 0,
    gradientMask: gradientConfig,
    shouldNormalizeEdges: true,
  }
));

const identityBackgroundFilters: Array<LayerFilterConfig> = [
  ...IdentityBackgroundFilterConfigListPreset,
  ...variableBlurIdentiyFilters,
];

const identityForegroundFilters: Array<LayerFilterConfig> = [
  ...IdentityForegroundFilterConfigListPreset,
  {
    filterName: 'colorMatrixVibrant',
    colorMatrix: {
      mode: 'constant',
      value: 'identity',
    }
  },
];


const KEYFRAME_PRESETS: Array<CustomFilterKeyframeConfig> = [
  // 0
  {
    backgroundFilters: [
      {
        filterName: 'gaussianBlur',
        radius: 12,
        shouldNormalizeEdges: true,
      }
    ],
    foregroundFilters: [
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: -1,
        },
      }
    ],
  },

  // 1
  {
    backgroundFilters: [
      // old
      {
        filterName: 'gaussianBlur',
        radius: 0,
        shouldNormalizeEdges: true,
      },
      // new
      {
        filterName: 'brightenColors',
        amount: -0.3,
      },
    ],
    foregroundFilters: [
      // new
      {
        filterName: 'gaussianBlur',
        radius: 8,
        shouldNormalizeEdges: false,
      },
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: 0.5,
        },
      }
    ],
  },

  // 02 - v-blur bottom-top subtle, dark text b&w
  {
    backgroundFilters: [
      // new
      {
        filterName: 'variadicBlur',
        radius: 12,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.bottomToTopOffsetMinus30Percent,
      },
      {
        filterName: 'brightenColors',
        amount: 0.2,
      },
      {
        filterName: 'contrastColors',
        amount: 0.6,
      },
    ],
    foregroundFilters: [
      // prev
      {
        filterName: 'gaussianBlur',
        radius: 0,
        shouldNormalizeEdges: false,
      },
      // new
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: -0.5,
          saturation: 0,
        },
      }
    ],
  },

  // 03 - invert bg, v-blur bottom to top  intense
  {
    backgroundFilters: [
      // old
      {
        filterName: 'brightenColors',
        amount: 0,
      },
      {
        filterName: 'contrastColors',
        amount: 1,
      },
      // update prev
      {
        filterName: 'variadicBlur',
        radius: 24,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.bottomToTopOffsetMinus30Percent,
      },
      // new
      {
        filterName: 'colorTransform',
        colorTransform: {
          invert: 1,
        },
      },

    ],
    foregroundFilters: [
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: 1,
          opacity: 0.65,
          saturation: -2,
        },
      }
    ],
  },

  // 04 - dimmed bg, blurry bright label
  {
    backgroundFilters: [
      // prev
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.bottomToTopOffsetMinus30Percent,
      },
      {
        filterName: 'colorTransform',
        colorTransform: {
          // reset to identity
        },
      },
      // new
      {
        filterName: 'brightenColors',
        amount: -0.3,
      },
      {
        filterName: 'saturateColors',
        amount: 0.75,
      },
      {
        filterName: 'contrastColors',
        amount: 0.6,
      },
    ],
    foregroundFilters: [
      // new
      {
        filterName: 'gaussianBlur',
        radius: 4,
        shouldNormalizeEdges: false,
      },
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: 2,
          opacity: 0.65,
          saturation: 2,
        },
      }
    ],
  },

  // 05 -  v-blur topToBottom, dark label
  {
    backgroundFilters: [
      // prev
      {
        filterName: 'brightenColors',
        amount: 0,
      },
      {
        filterName: 'contrastColors',
        amount: 1,
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 16,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.topToBottom,
      },
      {
        filterName: 'saturateColors',
        amount: 1.3,
      },
    ],
    foregroundFilters: [
      // old
      {
        filterName: 'gaussianBlur',
        radius: 0,
        shouldNormalizeEdges: false,
      },
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: -0.5,
          hueRotate: {
            mode: 'degrees',
            value: -15,
          },
          saturation: 1.5,
        },
      }
    ],
  },

  // 06 - black and white, purple blurred label
  {
    backgroundFilters: [
      // prev
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.topToBottom,
      },
      {
        filterName: 'saturateColors',
        amount: 1,
      },
      // new
      {
        filterName: 'colorBlackAndWhite',
        amount: 1,
      },

    ],
    foregroundFilters: [
      // update prev
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: -0.25,
          shiftBlue: -1,
          
        },
      },
      // new
      {
        filterName: 'gaussianBlur',
        radius: 8,
        shouldNormalizeEdges: false
      },
    ],
  },

  // 07 - v-blur left-right purple tint, bright blue label
  {
    backgroundFilters: [
      // prev
      {
        filterName: 'colorBlackAndWhite',
        amount: 1,
        
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 16,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.leftToRightOffsetMinus30Percent,
      },

    ],
    foregroundFilters: [
      // old
      {
        filterName: 'gaussianBlur',
        radius: 0,
        shouldNormalizeEdges: false
      },
      // update prev
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: 0.3,
          shiftRed: -1,
          shiftBlue: -1,
          shiftGreen:  1,
          opacity: 0.75,
        },
      },
      // new
      
    ],
    tintConfig: {
      opacity: 1,
      tintColor: 'purple',
      blendMode: 'color'
    },
  },

  // 08 - no bg blur, invert red tint, yellow highlights label
  {
    backgroundFilters: [
      // prev
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.leftToRightOffsetMinus30Percent,
      },
      // new
      {
        filterName: 'colorTransform',
        colorTransform: {
          invert: 1,
        },
      },
      
    ],
    foregroundFilters: [
      // update prev
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: 0.75,
          contrast: 1.25,
          hueRotate: {
            mode: 'degrees',
            value: 90,
          },
        },
      },
    ],
    tintConfig: {
      opacity: 1,
      tintColor: 'red',
      blendMode: 'color',
    },
  },

  // 09 - v-blur right-left, bright blurry saturated text
  {
    backgroundFilters: [
      // prev
      {
        filterName: 'colorBlackAndWhite',
        amount: 0,
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 12,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.rightToLeftOffsetMinus30Percent,
      },
      {
        filterName: 'colorTransform',
        colorTransform: {
          invert: 1,
          saturation: -1,
        },
      },
    ],
    foregroundFilters: [
      // update prev
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: 0.75,
          contrast: 1.25,
          saturation: 2,
          hueRotate: {
            mode: 'degrees',
            value: -12,
          },
        },
      },
      // new
      {
        filterName: 'gaussianBlur',
        radius: 3,
        shouldNormalizeEdges: false,
      },
    ],
    tintConfig: {
      opacity: 0,
      tintColor: 'rgba(255,255,255,0)',
      blendMode: 'color',
    },
  },

  // 10 - no bg blur dimmed low contrast bg, blurry very bright label
  {
    backgroundFilters: [
      // prev
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.rightToLeftOffsetMinus30Percent,
      },
      {
        filterName: 'colorTransform',
        colorTransform: {
          // identity
        },
      },
      // new
      {
        filterName: 'brightenColors',
        amount: -0.2
      },
      {
        filterName: 'contrastColors',
        amount: 0.3,
      },
      {
        filterName: 'colorBlackAndWhite',
        amount: 0.3,
      },
    ],
    foregroundFilters: [
      // update prev
      {
        filterName: 'gaussianBlur',
        radius: 8,
        shouldNormalizeEdges: false,
      },
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: 0.95,
          contrast: 1.05,
          saturation: 2,
          hueRotate: {
            mode: 'degrees',
            value: -45,
          },
        },
      },
    ],
  },

  // 11 - v-blur center-outer, dark text
  {
    backgroundFilters: [
      // old
      {
        filterName: 'brightenColors',
        amount: 0
      },
      {
        filterName: 'contrastColors',
        amount: 1,
      },
      {
        filterName: 'colorBlackAndWhite',
        amount: 0,
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 12,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.centerToOuterEdgeOffsetMinus30Percent
      },
      {
        filterName: 'colorTransform',
        colorTransform: {
          shiftGreen: 0.5,
          saturation: 1.5,
        },
      },
    ],
    foregroundFilters: [
      // prev
      {
        filterName: 'gaussianBlur',
        radius: 0,
        shouldNormalizeEdges: false,
      },
      // update prev
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: -0.5,
          contrast: 1.1,
          saturation: 0,
          opacity: 0.8,
        },
      },
    ],
  },

  // 12 - no bg blur
  {
    backgroundFilters: [
      // prev
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.centerToOuterEdgeOffsetMinus30Percent
      },
      {
        filterName: 'colorTransform',
        colorTransform: {
        },
      },
      // new
      {
        filterName: 'brightenColors',
        amount: -0.8
      },
      {
        filterName: 'colorBlackAndWhite',
        amount: 1,
      },
    ],
    foregroundFilters: [
      // update prev
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: 1,
          contrast: 1.75,
          opacity: 0.8,
          shiftRed: 1,
        },
      },
    ],
  },

  // 13 - v-blur opaque-lr-clear-center
  {
    backgroundFilters: [
      // prev
      {
        filterName: 'brightenColors',
        amount: 0
      },
      {
        filterName: 'colorBlackAndWhite',
        amount: 0,
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 12,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.opaqueLeftAndRightClearCenterOffsetMinus30,
      },
    ],
    foregroundFilters: [
      // update prev
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: -1.25,
          contrast: 1.25,
          shiftRed: 0.75,
          shiftBlue: 0.5,
          saturation: -0.75,
        },
      },
    ],
  },

  // 14 - no bg blur dimmed, glowing label 
  {
    backgroundFilters: [
      // prev
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.opaqueLeftAndRightClearCenterOffsetMinus30
      },
      // new
      {
        filterName: 'luminanceCompression',
        amount: 0.5,
      },
      {
        filterName: 'colorTransform',
        colorTransform: {
          hueRotate: {
            mode: 'degrees',
            value: -20,
          },
        },
      },
    ],
    foregroundFilters: [
      // update prev
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: 1,
        },
      },
      {
        filterName: 'gaussianBlur',
        radius: 4,
        shouldNormalizeEdges: false,
      },
    ],
  },

  // 15 - v-blur outer-center, dark vibrant label
  {
    backgroundFilters: [
      // old
      {
        filterName: 'luminanceCompression',
        amount: 1,
      },
      {
        filterName: 'colorTransform',
        colorTransform: {
        },
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 16,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.outerEdgeToCenter,
      },
    ],
    foregroundFilters: [
      {
        filterName: 'gaussianBlur',
        radius: 0,
        shouldNormalizeEdges: false,
      },
      // update prev
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: -0.5,
          saturation: 2,
        },
      },
    ],
  },

  // 16 - no bg blur inverted b&w, glowing red label
  {
    backgroundFilters: [
      // old
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.outerEdgeToCenter,
      },
      // new
      {
        filterName: 'colorTransform',
        colorTransform: {
          invert: 1,
          saturation: 0,
        },
      },
    ],
    foregroundFilters: [
      {
        filterName: 'gaussianBlur',
        radius: 3,
        shouldNormalizeEdges: false,
      },
      // update prev
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: 0.8,
          contrast: 1.2,
          shiftRed: 1,
          shiftBlue: -0.5,
          shiftGreen: -0.5,
        },
      },
    ],
  },

  // 17 - v-blur top-bottom intense w/ orange tint, inverted blue label
  {
    backgroundFilters: [
      // old
      {
        filterName: 'colorTransform',
        colorTransform: {
        },
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 24,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.topToBottom,
      },
    ],
    foregroundFilters: [
      // old
      {
        filterName: 'gaussianBlur',
        radius: 0,
        shouldNormalizeEdges: false,
      },
      // update prev
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: -0.5,
          contrast: 1.5,
          saturation: -2,
          shiftRed: -0.1,
          shiftBlue: -0.1,
          shiftGreen: 0.2,
          opacity: 0.9
        },
      },
    ],
    tintConfig: {
      tintColor: 'orange',
      opacity: 0.5,
      blendMode: 'softLight'
    },
  },

  // 18 - v-blur bottom-top intense
  {
    backgroundFilters: [
      // new
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.topToBottom,
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 16,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.bottomToTop,
      },
    ],
    foregroundFilters: [
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: -0.5,
          saturation: 2,
        },
      },
    ],
    tintConfig: {
      tintColor: 'rgba(255,255,255,0)',
      opacity: 0,
    },
  },

  // 19 - v-blur left-right cm preset07, label vcm preset10
  {
    backgroundFilters: [
      // old
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.bottomToTop,
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 24,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.leftToRight,
      },
      {
        filterName: 'colorMatrix',
        colorMatrix: {
          mode: 'preset',
          preset: {
            mode: 'presetName',
            presetName: 'preset07'
          },
        },
      },
    ],
    foregroundFilters: [
      {
        filterName: 'colorMatrixVibrant',
        colorMatrix: {
          mode: 'preset',
          preset: {
            mode: 'presetName',
            presetName: 'preset10'
          },
        },
      },
    ],
  },

  // 20 - v-blur right-left cm-p8, label vcm-p13
  {
    backgroundFilters: [
      // new
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.leftToRight,
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 16,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.rightToLeft,
      },
      {
        filterName: 'colorMatrix',
        colorMatrix: {
          mode: 'preset',
          preset: {
            mode: 'presetName',
            presetName: 'preset08'
          },
        },
      },
    ],
    foregroundFilters: [
      {
        filterName: 'colorMatrixVibrant',
        colorMatrix: {
          mode: 'preset',
          preset: {
            mode: 'presetName',
            presetName: 'preset13'
          },
        },
      },
    ],
  },

  // 21 - v-blur center-outer cm-p10, label vcm-p01
  {
    backgroundFilters: [
      // old
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.rightToLeft,
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 12,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.centerToOuterEdge,
      },
      {
        filterName: 'colorMatrix',
        colorMatrix: {
          mode: 'preset',
          preset: {
            mode: 'presetName',
            presetName: 'preset10'
          },
        },
      },
    ],
    foregroundFilters: [
      {
        filterName: 'colorMatrixVibrant',
        colorMatrix: {
          mode: 'preset',
          preset: {
            mode: 'presetName',
            presetName: 'preset01'
          },
        },
      },
    ],
  },

  // 22 - v-blur outer-center cm-p13, label vcm-p04
  {
    backgroundFilters: [
      // new
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.centerToOuterEdge,
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 24,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.outerEdgeToCenter,
      },
      {
        filterName: 'colorMatrix',
        colorMatrix: {
          mode: 'preset',
          preset: {
            mode: 'presetName',
            presetName: 'preset13'
          },
        },
      },
    ],
    foregroundFilters: [
      {
        filterName: 'colorMatrixVibrant',
        colorMatrix: {
          mode: 'preset',
          preset: {
            mode: 'presetName',
            presetName: 'preset04'
          },
        },
      },
    ],
  },

  // 23 - v-blur opaque-lr-clear-center cm-p14, label vcm-p07
  {
    backgroundFilters: [
      // new
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.outerEdgeToCenter,
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 16,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.opaqueLeftAndRightClearCenter,
      },
      {
        filterName: 'colorMatrix',
        colorMatrix: {
          mode: 'preset',
          preset: {
            mode: 'presetName',
            presetName: 'preset14'
          },
        },
      },
    ],
    foregroundFilters: [
      {
        filterName: 'colorMatrixVibrant',
        colorMatrix: {
          mode: 'preset',
          preset: {
            mode: 'presetName',
            presetName: 'preset07'
          },
        },
      },
    ],
  },

  // 24 - no blur, glowing label inverted
  {
    backgroundFilters: [
      // old
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.opaqueLeftAndRightClearCenter,
      },
      {
        filterName: 'colorMatrix',
        colorMatrix: {
          mode: 'constant',
          value: 'identity',
        },
      },
      // new
      {
        filterName: 'gaussianBlur',
        radius: 0,
        shouldNormalizeEdges: true,
      },
      {
        filterName: 'luminosityCurveMap',
        amount: 1,
        point1: 1,
        point2: 0,
        point3: 0,
        point4: 1,
      },
    ],
    foregroundFilters: [
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: 0.9,
          contrast: 1.25,
          invert: 1,
        },
      },
      {
        filterName: 'gaussianBlur',
        radius: 4,
        shouldNormalizeEdges: false,
      },
    ],
    tintConfig: {
      tintColor: 'red',
      opacity: 1,
      blendMode: 'darken',
    },
  },
  
  // 25 - g-blur baby blue bg, glowing label inverted
  {
    backgroundFilters: [
      // old
      {
        filterName: 'luminosityCurveMap',
        amount: 0,
        point1: 0,
        point2: 0,
        point3: 0,
        point4: 1,
      },
      // new
      {
        filterName: 'gaussianBlur',
        radius: 6,
        shouldNormalizeEdges: true,
      },
      {
        filterName: 'colorTransform',
        colorTransform: {
          saturation: 0,
          contrast: 0.3,
          shiftRed: -0.5,
          shiftGreen: 1,
        },
      },
    ],
    foregroundFilters: [
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: 0.75,
          contrast: 1.25,
          invert: 1,
        },
      },
      {
        filterName: 'gaussianBlur',
        radius: 6,
        shouldNormalizeEdges: false,
      },
    ],
    tintConfig: {
      tintColor: 'rgba(255,255,255,0)',
      opacity: 0,
    },
  },

  // 26 - 
  {
    backgroundFilters: [
      // old
      {
        filterName: 'colorTransform',
        colorTransform: {
        },
      },
      // new
      {
        filterName: 'colorBlackAndWhite',
        amount: 1,
      },
      {
        filterName: 'gaussianBlur',
        radius: 8,
        shouldNormalizeEdges: true,
      },
      {
        filterName: 'contrastColors',
        amount: 1.2,
      },
      {
        filterName: 'luminanceCompression',
        amount: 0.5,
      },
    ],
    foregroundFilters: [
      {
        filterName: 'gaussianBlur',
        radius: 4,
        shouldNormalizeEdges: false,
      },
      {
        filterName: 'colorTransformVibrant',
        colorTransform: {
          brightness: 1.2,
          contrast: 1.3,
          shiftRed: 1,
          shiftBlue: 0.6, 
          shiftGreen: -0.8,
        }
      }
    ],
    tintConfig: {
      tintColor: 'rgba(255,176,0,1)', // Amber color
      opacity: 1,
      blendMode: 'multiply'
    }
  }
];

const INITIAL_KEYFRAME = KEYFRAME_PRESETS[0]!;

export function AnimatableCustomFilterViewTest02Screen() {
  const [keyframePresetIndex, setKeyframePresetIndex] = React.useState(1);
  const currentKeyframe = KEYFRAME_PRESETS[keyframePresetIndex]!;

  const translateX = React.useRef(new Animated.Value(0));

  React.useEffect(() => {
    const offsetX = 50;
    const animationDurationMS = 1000 * 2;
    
    const moveAnimation = Animated.loop(
      Animated.sequence([
        // move to the right
        Animated.timing(translateX.current, {
          toValue: offsetX, 
          duration: animationDurationMS, 
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true, 
        }),

        // move back to the left
        Animated.timing(translateX.current, {
          toValue: -offsetX, 
          duration: animationDurationMS, 
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
      {
        resetBeforeIteration: false
      }
    );

    moveAnimation.start();

    return () => {
      moveAnimation.stop()
    };
  }, [translateX]);

  return (
    <View style={styles.container}>
      <Animated.Text 
        style={[
          styles.label, 
          { 
            transform: [{ 
              translateX: translateX.current,
            }]
          }
        ]}
      >
        {emojiString}
      </Animated.Text>
      <AnimatableCustomFilterView
        style={styles.effectOverlay}
        backgroundLayerSamplingSizeScale={1}
        animationConfig={{
          mode: 'presetCurve',
          duration: 1.6,
          curve: 'easeInOut',
        }}
        animationDelay={ keyframePresetIndex == 1 ? 2 : 0.7}
        identityBackgroundFilters={identityBackgroundFilters}
        identityForegroundFilters={identityForegroundFilters}
        initialKeyframe={INITIAL_KEYFRAME}
        currentKeyframe={currentKeyframe}
        onPropertyAnimatorDidComplete={() => {
          const nextKeyframePresetIndex = keyframePresetIndex + 1;
          const indexOfLastKeyframe = KEYFRAME_PRESETS.length - 1;
          
          if (nextKeyframePresetIndex > indexOfLastKeyframe) {
            return;
          };

          setKeyframePresetIndex(nextKeyframePresetIndex);
        }}
      >
        <View style={styles.effectContent}>
          <CounterDisplay/>
        </View>
      </AnimatableCustomFilterView>
      <View style={styles.overlay}>
        <Text>
          {`setKeyframePresetIndex: ${keyframePresetIndex}`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  label: {
    fontSize: 72,
  },
  effectOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  effectContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});