# react-native-ios-visual-effect-view

A simple library to use `UIVisualEffectView` in `react-native`.

<br><br>

## 🚧⚠️  Work in Progress ⚠️🚧

This library + documentation is currently not finished yet. For now, please browse through [examples](example/src/examples) directory to get a rough idea on how to use this library. Jump to [basic usage section](#c-basic-usage) for example code + gif.

<br><br>

## A. Introduction

TBA

<br><br>

## B. Installation

```sh
# 1. install library + dependencies
npm install react-native-ios-visual-effect-view
npm install react-native-ios-utilities@next

# 2. then run pod install (uses auto-linking)
cd ios && pod install
```

<br><br>

## C. Basic Usage

hello! please see [`RNIBlurViewBasicUsage01`](example/src/examples/RNIBlurViewBasicUsage01.tsx) for the full example


```js
// 📝 Note: for the sake of brevity, some of the code is omitted...
import { RNIBlurView } from 'react-native-ios-visual-effect-view';


export function RNIBlurViewBasicUsage01() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {'❤️\n🧡\n💛\n💚\n💙\n💜\n💖\n💃\n✨'}
      </Text>
      <RNIBlurView
        style={styles.effectOverlay}
        blurConfig={{
          mode: 'standard',
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
```

![RNIBlurViewBasicUsage01](assets/RNIBlurViewBasicUsage01.gif)

<br><br>

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

<br><br>

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
