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

const identityForegroundFilters: Array<LayerFilterConfig | boolean> = [
  ...IdentityForegroundFilterConfigListPreset,

  false && {
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
  },

  // 1
  {
    backgroundFilters: [
      {
        filterName: 'gaussianBlur',
        radius: 0,
        shouldNormalizeEdges: true,
      }
    ],
    foregroundFilters: [
      {
        filterName: 'gaussianBlur',
        radius: 8,
        shouldNormalizeEdges: false,
      }
    ],
  },

  // 02
  {
    backgroundFilters: [
      {
        filterName: 'variadicBlur',
        radius: 12,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.bottomToTop,
      }
    ],
    foregroundFilters: [
      {
        filterName: 'gaussianBlur',
        radius: 0,
        shouldNormalizeEdges: false,
      }
    ],
  },

  // 03
  {
    backgroundFilters: [
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.bottomToTop,
      },
      {
        filterName: 'variadicBlur',
        radius: 8,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.topToBottom,
      },
    ],
    foregroundFilters: [
    ],
  },

  // 04
  {
    backgroundFilters: [
      // old
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.topToBottom,
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 8,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.leftToRight,
      },
    ],
    foregroundFilters: [
    ],
  },

  // 05
  {
    backgroundFilters: [
      // old
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.leftToRight,
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 8,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.rightToLeft,
      },
    ],
    foregroundFilters: [
    ],
  },

  // 06
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
        radius: 8,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.centerToOuterEdge,
      },
    ],
    foregroundFilters: [
    ],
  },

  // 07
  {
    backgroundFilters: [
      // old
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.centerToOuterEdge,
      },
      // new
      {
        filterName: 'variadicBlur',
        radius: 8,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.outerEdgeToCenter,
      },
    ],
    foregroundFilters: [
    ],
  },

  // 08
  {
    backgroundFilters: [
      // old
      {
        filterName: 'variadicBlur',
        radius: 0,
        shouldNormalizeEdges: true,
        gradientMask: AlphaGradientMaskPresets.outerEdgeToCenter,
      },
    ],
    foregroundFilters: [
      {
        filterName: 'gaussianBlur',
        radius: 12,
        shouldNormalizeEdges: false,
      }
    ],
  },
];

const INITIAL_KEYFRAME_QUEUE = KEYFRAME_PRESETS.slice(1);
const INITIAL_KEYFRAME = KEYFRAME_PRESETS[0]!;

export function AnimatableCustomFilterViewTest02Screen() {
  const [keyframeQueue, setKeyframeQueue] = React.useState(INITIAL_KEYFRAME_QUEUE);
  
  const currentKeyframe = keyframeQueue[0]!;
  const keyframeIndex = 
    (KEYFRAME_PRESETS.length - keyframeQueue.length);

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
          duration: 1.5,
          curve: 'easeIn',
        }}
        identityBackgroundFilters={identityBackgroundFilters}
        identityForegroundFilters={identityForegroundFilters}
        initialKeyframe={INITIAL_KEYFRAME}
        currentKeyframe={currentKeyframe}
        onPropertyAnimatorDidComplete={() => {
          console.log(keyframeQueue.length);
          
          let nextQueue = keyframeQueue.slice(1);
          if (nextQueue.length <= 0) {
            return;
          };

          setKeyframeQueue(nextQueue);
        }}
      >
        <View style={styles.effectContent}>
          <CounterDisplay/>
        </View>
      </AnimatableCustomFilterView>
      <View style={styles.overlay}>
        <Text>
          {`keyframeIndex: ${keyframeIndex}`}
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