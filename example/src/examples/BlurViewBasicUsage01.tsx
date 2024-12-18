// import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { BlurView } from 'react-native-ios-visual-effect-view';


export function BlurViewBasicUsage01() {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {'❤️\n🧡\n💛\n💚\n💙\n💜\n💖\n💃\n✨'}
      </Text>
      <BlurView
        style={styles.effectOverlay}
        blurMode={{
          mode: 'blurEffectSystem',
          blurEffectStyle: 'prominent',
        }}
        animationConfig={{
          duration: 1,
          mode: 'presetCurve',
          curve: 'easeOut',
        }}
        animationDelay={1}
      />
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
});
