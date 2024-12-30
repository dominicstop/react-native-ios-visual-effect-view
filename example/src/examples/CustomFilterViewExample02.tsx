// @ts-ignore
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { CustomFilterView } from 'react-native-ios-visual-effect-view';
import { CounterDisplay } from '../components/CounterDisplay';


const emojiString = 
    "❤️🛑🍒🍓💃"
  + "\n🧡🍊🥕🍑🎃"
  + "\n💛🌟🌻🍋🍌"
  + "\n💚🍀🌿🍏🌳"
  + "\n💙🌊🦋🔵💎"
  + "\n💜🍇💐🛸🌌"
  + "\n💖🌸💝🎀💗"
  + "\n🤍✨🌙🦢🦄"
  + "\n🖤🌑🦇🕷️🕸️";


export function CustomFilterViewExample02() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {emojiString}
      </Text>
      <CustomFilterView
        style={styles.effectOverlay}
        backgroundLayerSamplingSizeScale={2}
        currentFilters={{
          backgroundFilters: [
            {
              filterName: 'gaussianBlur',
              radius: 18,
              shouldNormalizeEdges: true,
            },
            {
              filterName: 'brightenColors',
              amount: -0.5
            },
            {
              filterName: 'contrastColors',
              amount: 0.3,
            },
            {
              filterName: 'colorBlackAndWhite',
              amount: 1,
            },
          ],
          tintConfig: {
            opacity: 0.75,
            blendMode: 'color',
            tintColor: 'red',
          },
          foregroundFilters: [
            {
              filterName: 'gaussianBlur',
              radius: 4,
              shouldNormalizeEdges: false
            },
            {
              filterName: 'colorMatrixVibrant',
              colorMatrix: {
                mode: 'preset',
                preset: {
                  mode: 'presetName',
                  presetName: 'preset14'
                },
              },
            },
          ]
        }}
      >
        <View style={styles.effectContent}>
          <CounterDisplay/>
        </View>
      </CustomFilterView>
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