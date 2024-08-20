import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardButton, Colors, ExampleItemCard, ObjectPropertyDisplay, UIBlurEffectStyleItems, type UIBlurEffectStyle } from 'react-native-ios-utilities';
import { RNIBlurView } from 'react-native-ios-visual-effect-view';


export function RNIBlurViewTest01Screen() {
  const [blurEffectStyleCounter, setBlurEffectStyleCounter] = React.useState(0); 

  const blurEffectStyleIndex = 
    blurEffectStyleCounter % UIBlurEffectStyleItems.length;

  const blurEffectStyleCurrent = UIBlurEffectStyleItems[blurEffectStyleIndex]!;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {'❤️\n🧡\n💛\n💚\n💙\n💜\n💖\n💃\n✨'}
      </Text>
      <RNIBlurView
        style={styles.effectOverlay}
        blurConfig={{
          mode: 'standard',
          blurEffectStyle: blurEffectStyleCurrent,
        }}
      />
      <SafeAreaView style={styles.debugOverlayContainer}>
        <ExampleItemCard
          title={'Card Controls'}
          style={styles.debugCard}
        >
          <ObjectPropertyDisplay
            recursiveStyle={styles.debugDisplay}
            object={{
              blurEffectStyleCounter,
              blurEffectStyleCurrent: {
                [blurEffectStyleIndex]: blurEffectStyleCurrent,
              },
            }}
          />
          <CardButton
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
  debugCard: {
    backgroundColor: Colors.PURPLE[100],
  },
  debugDisplay: {
    backgroundColor: `${Colors.PURPLE[200]}99`,
  },
});
