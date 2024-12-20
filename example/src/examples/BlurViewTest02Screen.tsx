import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardButton, Colors, ExampleItemCard, ObjectPropertyDisplay, UIBlurEffectStyleItems, type UIBlurEffectStyle } from 'react-native-ios-utilities';
import { BlurView } from 'react-native-ios-visual-effect-view';
import Slider from '@react-native-community/slider';


export function BlurViewTest02Screen() {
  const [blurEffectStyleCounter, setBlurEffectStyleCounter] = React.useState(0);
  const [effectIntensity, setEffectIntensity] = React.useState(0);

  const blurEffectStyleIndex = 
    blurEffectStyleCounter % UIBlurEffectStyleItems.length;

  const blurEffectStyleCurrent = UIBlurEffectStyleItems[blurEffectStyleIndex]!;

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
          effectIntensity: effectIntensity,
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
              effectIntensity: effectIntensity.toFixed(2),
              blurEffectStyleCurrent: {
                [blurEffectStyleIndex]: blurEffectStyleCurrent,
              },
            }}
          />
          <Slider
            style={[styles.slider, styles.debugCardBodyItem]}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={Colors.PURPLE.A700}
            maximumTrackTintColor={`${Colors.PURPLE[900]}50`}
            onValueChange={(newValue) => {
              setEffectIntensity(newValue);
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
