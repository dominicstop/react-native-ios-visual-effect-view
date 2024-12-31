import * as React from 'react';
import { StyleSheet, View, Animated, Easing, Dimensions, Text } from 'react-native';

import { AlphaGradientMaskPresets, AnimatableCustomFilterView, IdentityBackgroundFilterConfigListPreset, IdentityForegroundFilterConfigListPreset, type LayerFilterConfig } from 'react-native-ios-visual-effect-view';
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
  false && {
    filterName: 'colorMatrixVibrant',
    colorMatrix: {
      mode: 'constant',
      value: 'identity',
    }
  },
];

export function AnimatableCustomFilterViewTest01Screen() {
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
        identityBackgroundFilters={identityBackgroundFilters}
        identityForegroundFilters={identityForegroundFilters}
        initialKeyframe={{
          backgroundFilters: [
            {
              filterName: 'gaussianBlur',
              radius: 8,
              shouldNormalizeEdges: true,
            }
          ],
        }}
        animationConfig={{
          mode: 'presetCurve',
          duration: 1,
          curve: 'easeIn',
        }}
        currentKeyframe={{
          backgroundFilters: [
            {
              filterName: 'gaussianBlur',
              radius: 0,
              shouldNormalizeEdges: true,
            },
          ]
        }}
      >
        <View style={styles.effectContent}>
          <CounterDisplay/>
        </View>
      </AnimatableCustomFilterView>
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
});