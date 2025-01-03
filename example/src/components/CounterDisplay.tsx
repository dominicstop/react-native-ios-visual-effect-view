import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

const textColors = [
  'rgb(0,0,0)',
  'rgb(25,25,25)',
  'rgb(50,50,50)',
  'rgb(75,75,75)',
  'rgb(100,100,100)',
  'rgb(125,125,125)',
  'rgb(150,150,150)',
];

function formatCounter(counter: number){
  return counter.toString().padStart(4, '0');
};

function getCounterColor(counter: number){
  return textColors[counter % textColors.length];
};

export function CounterDisplay(props: {}){
  const [counter, setCounter] = React.useState(0);
  
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return(
    <React.Fragment>
      <Text style={[
        { color: getCounterColor(counter) },
        styles.counterLabel
      ]}>
        {formatCounter(counter)}
      </Text>
      <Text style={[
        { color: getCounterColor(counter + 1) },
        styles.counterLabel
      ]}>
        {formatCounter(counter + 1)}
      </Text>
      <Text style={[
        { color: getCounterColor(counter + 2) },
        styles.counterLabel
      ]}>
        {formatCounter(counter + 2)}
      </Text>
      <Text style={[
        { color: getCounterColor(counter + 2) },
        styles.counterLabel
      ]}>
        {formatCounter(counter + 3)}
      </Text>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  counterLabel: {
    fontSize: 64 + 32,
    marginVertical: 12,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
});