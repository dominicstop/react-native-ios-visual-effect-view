import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardButton, Colors, ExampleItemCard, Helpers, ObjectPropertyDisplay, UIBlurEffectStyleItems, type UIBlurEffectStyle } from 'react-native-ios-utilities';
import { BlurView } from 'react-native-ios-visual-effect-view';
import Slider from '@react-native-community/slider';
import { AnimationConfigPresets } from '../constants/AnimationConfigPresets';


var blurEffectStyleCounterCached = 0;
var animationConfigPresetCounterCached = 2;
var blurIntensityCached = 0;

export function BlurViewTest05Screen() {

  const [
    blurIntensitySlider, 
    setBlurIntensitySlider
  ] = React.useState(blurIntensityCached);

  const [
    blurIntensity, 
    setBlurIntensity
  ] = React.useState(blurIntensityCached);

  // MARK: blurEffectStyle
  // ---------------------

  const [
    blurEffectStyleCounter, 
    setBlurEffectStyleCounter
  ] = React.useState(blurEffectStyleCounterCached);

  const blurEffectStyleIndex = 
    blurEffectStyleCounter % UIBlurEffectStyleItems.length;

  const blurEffectStyleCurrent = UIBlurEffectStyleItems[blurEffectStyleIndex]!;
  const shouldApplyBlur = blurIntensity == blurIntensitySlider;

  // MARK: animationConfig
  // ---------------------

  const [
    shouldApplyAnimationConfig, 
    setShouldApplyAnimationConfig
  ] = React.useState(true);

  const [
    animationConfigPresetCounter, 
    setAnimationConfigPresetCounter
  ] = React.useState(animationConfigPresetCounterCached);

  const animationConfigPresetIndex = 
    animationConfigPresetCounter % AnimationConfigPresets.length;

  const animationConfigPresetCurrent = AnimationConfigPresets[animationConfigPresetIndex]!;
  const hasAnimationConfig = animationConfigPresetCurrent != null;

  // MARK: shouldAddDelay
  // --------------------

  const [shouldAddDelay, setShouldAddDelay] = React.useState(false);

  React.useEffect(() => {
    Helpers.timeout(500).then(() => {
      setShouldAddDelay(false);
    });
  });

  const shouldDelay = hasAnimationConfig && shouldAddDelay;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {'❤️\n🧡\n💛\n💚\n💙\n💜\n💖\n💃\n✨'}
      </Text>
      <BlurView
        style={styles.effectOverlay}
        blurMode={{
          mode: 'blurEffectCustomIntensity',
          blurEffectStyle: blurEffectStyleCurrent,
          effectIntensity: blurIntensity,
        }}
        {...(shouldApplyAnimationConfig && {
          animationConfig: animationConfigPresetCurrent,
          animationDelay: shouldDelay ? 0.5 : 0,
        })}
      />
      <SafeAreaView style={styles.debugOverlayContainer}>
        <ExampleItemCard
          title={'Card Controls'}
          style={styles.debugCard}
        >
          <ObjectPropertyDisplay
            style={styles.debugCardBodyItem}
            recursiveStyle={styles.debugDisplay}
            object={{
              shouldApplyBlur,
              blurEffectStyleCounter,
              blurIntensity: blurIntensity.toFixed(2),
              blurEffectStyleCurrent: {
                [blurEffectStyleIndex]: blurEffectStyleCurrent,
              },
              animationConfigPreset: animationConfigPresetCurrent,
            }}
          />
          <Slider
            style={[styles.slider, styles.debugCardBodyItem]}
            value={blurIntensityCached}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={Colors.PURPLE.A700}
            maximumTrackTintColor={`${Colors.PURPLE[900]}50`}
            onValueChange={(newValue) => {
              setBlurIntensitySlider(newValue);

              if(shouldApplyAnimationConfig){
                setShouldApplyAnimationConfig(false);
              };
            }}
          />
          <CardButton
            style={styles.debugCardBodyItem}
            title={'Next Blur Effect'}
            subtitle={'Cycle to next blur effect'}
            onPress={() => {
              setShouldApplyAnimationConfig(false);
              setBlurEffectStyleCounter((prevValue) => prevValue + 1);
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
                animationConfigPresetCounterCached = newValue;

                return newValue;
              });
            }}
          />
          <React.Fragment>
            {!shouldApplyAnimationConfig && (
              <CardButton
                title={'Apply Blur Config'}
                subtitle={'Set current changes'}
                onPress={async () => {
                  setShouldApplyAnimationConfig(true);
                  await Helpers.timeout(500);
                  setBlurIntensity(blurIntensitySlider);
                }}
              />
            )}
          </React.Fragment>
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
  debugCardBodyItem: {
    marginBottom: 6,
  },
  debugCard: {
    backgroundColor: Colors.PURPLE[100],
  },
  debugDisplay: {
    backgroundColor: `${Colors.PURPLE[200]}99`,
  },
  slider: {
    flex: 1,
    paddingVertical: 18,
  },
});
