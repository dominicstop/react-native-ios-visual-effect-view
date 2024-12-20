import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardButton, Colors, ExampleItemCard, ObjectPropertyDisplay, UIBlurEffectStyleItems, type UIBlurEffectStyle } from 'react-native-ios-utilities';
import { BlurView } from 'react-native-ios-visual-effect-view';
import Slider from '@react-native-community/slider';


const MAX_BLUR_RADIUS = 64;

export function BlurViewTest03Screen() {
  const [blurEffectStyleCounter, setBlurEffectStyleCounter] = React.useState(0);
  const [blurRadius, setBlurRadius] = React.useState(0);

  const blurEffectStyleIndex = 
    blurEffectStyleCounter % UIBlurEffectStyleItems.length;

  const blurEffectStyleCurrent = UIBlurEffectStyleItems[blurEffectStyleIndex]!;

  const effectIntensityForOtherEffects = blurRadius / MAX_BLUR_RADIUS;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {'❤️\n🧡\n💛\n💚\n💙\n💜\n💖\n💃\n✨'}
      </Text>
      <BlurView
        style={styles.effectOverlay}
        blurMode={{
          mode: 'blurEffectCustomBlurRadius',
          blurEffectStyle: blurEffectStyleCurrent,
          customBlurRadius: blurRadius,
          effectIntensityForOtherEffects,
        }}
        backgroundLayerSamplingSizeScale={1}
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
              blurEffectStyleCounter,
              blurRadius: blurRadius.toFixed(2),
              
              effectIntensityForOtherEffects: 
                effectIntensityForOtherEffects.toFixed(2),

              blurEffectStyleCurrent: {
                [blurEffectStyleIndex]: blurEffectStyleCurrent,
              },
            }}
          />
          <Slider
            style={[styles.slider, styles.debugCardBodyItem]}
            minimumValue={0}
            maximumValue={MAX_BLUR_RADIUS}
            minimumTrackTintColor={Colors.PURPLE.A700}
            maximumTrackTintColor={`${Colors.PURPLE[900]}50`}
            onValueChange={(newValue) => {
              setBlurRadius(newValue);
            }}
          />
          <CardButton
            style={styles.debugCardBodyItem}
            title={'Next Blur Effect'}
            subtitle={'Apply next blur effect'}
            onPress={() => {
              setBlurEffectStyleCounter((prevValue) => prevValue + 1);
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
