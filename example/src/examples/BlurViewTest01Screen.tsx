import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardButton, Colors, ExampleItemCard, ObjectPropertyDisplay, UIBlurEffectStyleItems } from 'react-native-ios-utilities';
import { BlurView } from 'react-native-ios-visual-effect-view';
import { AnimationConfigPresets } from '../constants/AnimationConfigPresets';


var cache = {
  blurEffectStyleCounter: 0,
  animationConfigPresetCounter: 0,
};

export function BlurViewTest01Screen() {

  // MARK: blurEffectStyle
  // ---------------------

  const [
    blurEffectStyleCounter, 
    setBlurEffectStyleCounter
  ] = React.useState(cache.blurEffectStyleCounter);

  const blurEffectStyleIndex = 
    blurEffectStyleCounter % UIBlurEffectStyleItems.length;

  const blurEffectStyleCurrent = UIBlurEffectStyleItems[blurEffectStyleIndex]!;

  // MARK: animationConfigPreset
  // ---------------------------

  const [
    animationConfigPresetCounter, 
    setAnimationConfigPresetCounter
  ] = React.useState(cache.animationConfigPresetCounter);

  const animationConfigPresetIndex = 
    animationConfigPresetCounter % AnimationConfigPresets.length;

  const animationConfigPresetCurrent = AnimationConfigPresets[animationConfigPresetIndex]!;

  const hasAnimationConfig = animationConfigPresetCurrent != null;

  // MARK: animationDelay
  // --------------------

  const [animationDelay, setAnimationDelay] = React.useState<number | undefined>(
    hasAnimationConfig ? 0.5 : undefined
  );

  React.useEffect(() => {
    setTimeout(() => {
      setAnimationDelay(undefined);
    }, 1000);
  }, []);

  // MARK: render
  // ------------
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {'❤️\n🧡\n💛\n💚\n💙\n💜\n💖\n💃\n✨'}
      </Text>
      <BlurView
        style={styles.effectOverlay}
        blurMode={{
          mode: 'blurEffectSystem',
          blurEffectStyle: blurEffectStyleCurrent,
        }}
        animationConfig={animationConfigPresetCurrent}
        animationDelay={animationDelay}
      />
      <SafeAreaView style={styles.debugOverlayContainer}>
        <ExampleItemCard
          title={'Card Controls'}
          style={styles.debugCard}
        >
          <ObjectPropertyDisplay
            recursiveStyle={styles.debugDisplayInner}
            object={{
              animationDelay,
              blurEffectStyleCurrent: {
                [blurEffectStyleIndex]: blurEffectStyleCurrent,
              },
              animationConfigPreset: animationConfigPresetCurrent,
            }}
          />
          <CardButton
            title={'Next Blur Effect'}
            subtitle={
                `Counter: ${blurEffectStyleCounter},`
              + ` preset: ${blurEffectStyleIndex + 1} of ${UIBlurEffectStyleItems.length}`
            }
            onPress={() => {
              setBlurEffectStyleCounter((prevValue) => {
                const newValue = prevValue + 1;
                cache.blurEffectStyleCounter = newValue;

                return newValue;
              });
            }}
          />
          <CardButton
            title={'Next Animation Preset'}
            subtitle={
                `Counter: ${animationConfigPresetCounter},`
              + ` preset: ${animationConfigPresetIndex + 1} of ${AnimationConfigPresets.length}`
            }
            onPress={() => {
              setAnimationConfigPresetCounter((prevValue) => {
                const newValue = prevValue + 1;
                cache.animationConfigPresetCounter = newValue;

                return newValue;
              });
            }}
          />
        </ExampleItemCard>
      </SafeAreaView>
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
  debugOverlayContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    marginHorizontal: 12,
  },
  debugCard: {
    backgroundColor: Colors.PURPLE[100],
  },
  debugDisplayInner: {
    backgroundColor: `${Colors.PURPLE[200]}99`,
  },
});
