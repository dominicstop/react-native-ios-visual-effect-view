import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardButton, Colors, ExampleItemCard, Helpers, ObjectPropertyDisplay, UIBlurEffectStyleItems, type UIBlurEffectStyle } from 'react-native-ios-utilities';
import { RNIBlurView } from 'react-native-ios-visual-effect-view';
import Slider from '@react-native-community/slider';
import { AnimationConfigPresets } from '../constants/AnimationConfigPresets';


var blurEffectStyleCounterCached = 0;
var animationConfigPresetCounterCached = 2;
var blurRadiusCached = 0;

const MAX_BLUR_RADIUS = 64;

export function RNIBlurViewTest04Screen() {

  const [
    blurRadiusSlider, 
    setBlurRadiusSlider
  ] = React.useState(blurRadiusCached);

  const [
    blurRadius, 
    setBlurRadius
  ] = React.useState(blurRadiusCached);

  // MARK: blurEffectStyle
  // ---------------------

  const [
    blurEffectStyleCounter, 
    setBlurEffectStyleCounter
  ] = React.useState(blurEffectStyleCounterCached);

  const blurEffectStyleIndex = 
    blurEffectStyleCounter % UIBlurEffectStyleItems.length;

  const blurEffectStyleCurrent = UIBlurEffectStyleItems[blurEffectStyleIndex]!;
  const shouldApplyBlur = blurRadius == blurRadiusSlider;

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
      <RNIBlurView
        style={styles.effectOverlay}
        blurMode={{
          mode: 'blurEffectCustomBlurRadius',
          blurEffectStyle: blurEffectStyleCurrent,
          customBlurRadius: blurRadius,
          effectIntensityForOtherEffects: blurRadius / MAX_BLUR_RADIUS,
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
              blurRadius: blurRadius.toFixed(2),
              blurEffectStyleCurrent: {
                [blurEffectStyleIndex]: blurEffectStyleCurrent,
              },
              animationConfigPreset: animationConfigPresetCurrent,
            }}
          />
          <Slider
            style={[styles.slider, styles.debugCardBodyItem]}
            value={blurRadiusCached}
            minimumValue={0}
            maximumValue={MAX_BLUR_RADIUS}
            minimumTrackTintColor={Colors.PURPLE.A700}
            maximumTrackTintColor={`${Colors.PURPLE[900]}50`}
            onValueChange={(newValue) => {
              setBlurRadiusSlider(newValue);

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
                  setBlurRadius(blurRadiusSlider);
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
