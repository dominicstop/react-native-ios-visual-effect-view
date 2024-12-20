// @ts-ignore
import * as React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

import { CustomFilterView } from 'react-native-ios-visual-effect-view';

const WINDOW_SIZE = Dimensions.get('window');

// 1 = black, 0 = transparent


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

export function CustomFilterViewExample01() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {emojiString}
      </Text>
      <CustomFilterView
        style={styles.effectOverlay}
        backgroundLayerSamplingSizeScale={2}

        // set the filters to use,
        // accepts an array of `LayerFilterConfig`
        currentFilters={[
          // filter 1 of 4
          // create variable blur filter
          {
            filterName: 'variadicBlur',
            radius: 8,
            shouldNormalizeEdges: true,

            // define the intensity of blur via a gradient
            gradientMask: {
              type: 'axial',
              colors: [
                'rgba(0,0,0,1)', // max blur
                'rgba(0,0,0,0)', // no blur
              ],
              startPointPreset: 'topCenter',
              endPointPreset: 'bottomCenter',
              size: {
                height: WINDOW_SIZE.height,
                width: WINDOW_SIZE.width,
              },
            }
          },

          // filter 2 of 4
          // Slightly desaturate colors
          {
            filterName: 'colorBlackAndWhite',
            amount: 0.5
          },

          // filter 3 of 4
          // reduce brightness
          {
            filterName: 'brightenColors',
            amount: -0.5
          },

          // filter 4 of 4
          // decrease contrast
          {
            filterName: 'contrastColors',
            amount: 0.4,
          },
        ]}
      >
        <Text>
          {'Hello World'}
        </Text>
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
});