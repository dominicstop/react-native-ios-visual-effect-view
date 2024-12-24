# react-native-ios-visual-effect-view

A small library to use `UIVisualEffectView` in `react-native`.

<img src="./assets/example-demo-01.gif" alt="example-demo-01" style="zoom:67%;" />

<br>

[`VisualEffectCustomFilterViewTest01Screen`](example/src/examples/CustomFilterViewTest01Screen.tsx)

![RNIVisualEffectCustomFilterViewTest01Screen.tsx](./assets/RNIVisualEffectCustomFilterViewTest01Screen.gif)

<br><br>

## 🚧⚠️  Work in Progress ⚠️🚧

This library + documentation is currently not finished yet. For now, please browse through [examples](example/src/examples) directory to get a rough idea on how to use this library. Jump to [basic usage section](#c-basic-usage) for example code + gif.

<br><br>

### Acknowledgements

very special thanks to: [junzhengca](https://github.com/junzhengca), [brentvatne](https://github.com/brentvatne), [expo](https://github.com/expo), [EvanBacon](https://github.com/EvanBacon), [corasan](https://github.com/corasan), [lauridskern](https://github.com/lauridskern), [ronintechnologies](https://github.com/ronintechnologies), and [gerzonc](https://github.com/gerzonc) for becoming a monthly sponsor, and thank you [fobos531](https://github.com/fobos531) for being a one time sponsor 🥺 (if you have the means to do so, please considering sponsoring [here](https://github.com/sponsors/dominicstop))

<br><br>

## A. Introduction

https://github.com/user-attachments/assets/74bf8afa-91ed-49d8-80aa-a17b8e7969b0

https://github.com/user-attachments/assets/16d2c2ee-5453-43ea-bd3f-aa8331fbcd58

<br>

* ❤️ Support for using `UIVisualEffectView` + all the system [`UIBlurEffectStyles`](https://github.com/dominicstop/react-native-ios-utilities/blob/master/src/constants/UIBlurEffectStyles.ts).
* 🧡 Support for using custom blur radius and effect intensity (percent).
* 💚 Support for animating the blur effect style + blur radius changes.
* 💙 Support for creating and using filters (WIP)
* 💜 Runs on the old + new architecture (paper + fabric).

<br>

### Testflight and Testing

The example app builds are automatically created and submitted on every version release via Xcode cloud, so if you just want to quickly try things out, the example app is available to try out via testflight ([invite link](https://testflight.apple.com/join/YsGzqBxB)).

Alternatively, you can also try out the corresponding example app to the native dependency that this library uses under the hood: [`VisualEffectBlurView`](https://github.com/dominicstop/VisualEffectBlurView) ([invite link](https://testflight.apple.com/join/rP5yWFYx)).

<br>

### Other Related Gifs

[`Experiment02ViewController.swift`](https://github.com/dominicstop/VisualEffectBlurView/blob/main/example/Routes/Experiment02ViewController.swift)

![Experiment02ViewController](https://github.com/dominicstop/VisualEffectBlurView/raw/main/assets/Experiment02ViewController.gif)

<br>

[`VisualEffectBlurTestViewController.swift`](https://github.com/dominicstop/VisualEffectBlurView/blob/main/example/Routes/VisualEffectBlurTestViewController.swift)

![VisualEffectBlurTestViewController](https://github.com/dominicstop/VisualEffectBlurView/raw/main/assets/VisualEffectBlurTestViewController.gif)

<br>

[`VisualEffectViewExperiment01ViewController.swift`](https://github.com/dominicstop/VisualEffectBlurView/blob/main/example/Routes/VisualEffectViewExperiment01ViewController.swift)

![VisualEffectViewExperiment01ViewController-01](https://github.com/dominicstop/VisualEffectBlurView/raw/main/assets/Demo-VisualEffectBlurTestViewController-01.gif)

![VisualEffectViewExperiment01ViewController-02](https://github.com/dominicstop/VisualEffectBlurView/raw/main/assets/Demo-VisualEffectBlurTestViewController-02.gif)

<br>

[`VisualEffectCustomFilterViewTest02Controller.swift`](https://github.com/dominicstop/VisualEffectBlurView/blob/main/example/Routes/VisualEffectCustomFilterViewTest02Controller.swift)

![VisualEffectCustomFilterViewTest02Controller](https://github.com/dominicstop/VisualEffectBlurView/raw/main/assets/VisualEffectCustomFilterViewTest02Controller.gif)

<br><br>

## B. Installation

**Note**: Support for the new architecture (fabric), and backwards compatibility for the old architecture (paper) is handled via a peer dependency to [`react-native-ios-utilites@v5`](https://github.com/dominicstop/react-native-ios-utilities).

```sh
# 1. install library + dependencies
npm install react-native-ios-visual-effect-view@next
npm install react-native-ios-utilities@next

# 2. then run pod install (uses auto-linking)
cd ios && pod install
```

<br><br>

### Updating

This library has cocoapods dependency to [`VisualEffectBlurView`](https://github.com/dominicstop/VisualEffectBlurView) and [`DGSwiftUtilities`](https://github.com/dominicstop/DGSwiftUtilities), so you may need to update them separately (as needed).

```sh
# A. Either update this specific pod...
pod update VisualEffectBlurView DGSwiftUtilities
pod install --repo-update

# B. Or update all the pods
pod update
```

<br><br>

## C. Basic Usage

hello! please see [`BlurViewBasicUsage01`](example/src/examples/BlurViewBasicUsage01.tsx) for the full example


```js
// 📝 Note: for the sake of brevity, some of the code is omitted...
import { BlurView } from 'react-native-ios-visual-effect-view';


export function BlurViewBasicUsage01() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {'❤️\n🧡\n💛\n💚\n💙\n💜\n💖\n💃\n✨'}
      </Text>
      <RNIBlurView
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
```

<img src="assets/RNIBlurViewBasicUsage01.gif" width="400">

<br><br>

## D. Documentation

TBA

<br><br>

## E. Examples

Please see the [examples directory](example/src/examples) for the full list of examples, demos and tests.

<br>

### `CustomFilterViewExample01`

**Summary**: Create a custom filter that darkens the views in the background, and applies a variable blur.

<br>

| Notes                                                        |
| :----------------------------------------------------------- |
| 1️⃣ — The `CustomFilterView.currentFilters` prop accepts a  `CustomFilterConfig` object; this object is used create and configure the underlying `UIVisualEffectView` effects.<br><br>The `CustomFilterConfig` is comprised of several properties, but for this example we will be focusing on the `CustomFilterConfig.backgroundFilters` property (since it's required). |
| 2️⃣ — The `CustomFilterConfig.backgroundFilters` property accepts an array of `LayerFilterConfig` object; the "filter entries" in this array defines what filters to use for the  `UIVisualEffectView`'s backdrop layer.<br><br>The backdrop layer is special in that it is able to composite views that are behind it, and apply filters to it.<br><br>📝 **Note**: The "quality" of the composited views can be controlled via the `CustomFilterView.backgroundLayerSamplingSizeScale` prop; Setting this to `2.0` increases the sampling size, but at the cost of performance (use with caution). |
| 3️⃣ — The `LayerFilterConfig` object is an tagged union type, with the `LayerFilterConfig.filterName` property being the "discriminant" that separates all the possible combinations.<br><br>The `filterName` defines what type of filter to use; different types of filters have different inputs to control the look/behavior of the desired effect.<br><br>In the example below, we define 4 `LayerFilterConfig` entries in the array for the `CustomFilterConfig.backgroundFilters` property: `variadicBlur` (variable blur), `colorBlackAndWhite` (color monochrome), `brightenColors` (color brightness), and `contrastColors` (color contrast).<br><br>📝 **Note**: The names for the filter are a bit weird because we can't use the internal filters directly. Please see  [`LayerFilterTypeName.swift`](https://github.com/dominicstop/VisualEffectBlurView/blob/1ac12b049e53ace5dce4ce46870024d5f98b052a/Sources/ObjectWrappers/LayerFilterWrapper/LayerFilterTypeName.swift) for the implementation details. |

<br>

[🔗 Full Example](example/src/examples/CustomFilterViewExample01.tsx)

```jsx
export function CustomFilterViewExample01() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {emojiString}
      </Text>
      <CustomFilterView
        style={styles.effectOverlay}
        // increase quality (usually: 0.25...1)
        backgroundLayerSamplingSizeScale={2}

        // set the filters to use,
        // accepts an array of `LayerFilterConfig`
        currentFilters={{
          backgroundFilters: [
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
          ]
        }}
      >
        <Text>
          {'Hello World'}
        </Text>
      </CustomFilterView>
    </View>
  );
}
```

<img src="assets/ CustomFilterViewExample01.png" alt="CustomFilterViewExample01" height="600" />

<br>

### `CustomFilterViewExample02`

**Summary**: TBA

[🔗 Full Example](example/src/examples/CustomFilterViewExample02.tsx)

```jsx
export function CustomFilterViewExample02() {
  // ...
  return (
    <View style={styles.container}>
      { /* ... */ }
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
```

<img src="assets/ CustomFilterViewExample02.png" alt="CustomFilterViewExample02" height="600" />

<br><br>

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

<br><br>

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
