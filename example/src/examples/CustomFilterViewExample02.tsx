// @ts-ignore
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { CustomFilterView } from 'react-native-ios-visual-effect-view';

// 1 = black, 0 = transparent

const textColors = [
  'rgb(0,0,0)',
  'rgb(25,25,25)',
  'rgb(50,50,50)',
  'rgb(75,75,75)',
  'rgb(100,100,100)',
  'rgb(125,125,125)',
  'rgb(150,150,150)',
];

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

function formatCounter(counter: number){
  return counter.toString().padStart(4, '0');
};

function getCounterColor(counter: number){
  return textColors[counter % textColors.length];
};

function CounterDisplay(props: {
  counter: number;
}){
  return(
    <React.Fragment>
      <Text style={[
        { color: getCounterColor(props.counter) },
        styles.counterLabel
      ]}>
        {formatCounter(props.counter)}
      </Text>
      <Text style={[
        { color: getCounterColor(props.counter + 1) },
        styles.counterLabel
      ]}>
        {formatCounter(props.counter + 1)}
      </Text>
      <Text style={[
        { color: getCounterColor(props.counter + 2) },
        styles.counterLabel
      ]}>
        {formatCounter(props.counter + 2)}
      </Text>
      <Text style={[
        { color: getCounterColor(props.counter + 2) },
        styles.counterLabel
      ]}>
        {formatCounter(props.counter + 3)}
      </Text>
    </React.Fragment>
  );
};

export function CustomFilterViewExample02() {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
          <CounterDisplay
            counter={counter}
          />
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
  counterLabel: {
    fontSize: 124,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
});