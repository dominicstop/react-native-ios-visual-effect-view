import * as React from 'react';
import { StyleSheet, View, Animated, Easing, Dimensions, Pressable } from 'react-native';

import { CustomFilterView, type LayerFilterConfig } from 'react-native-ios-visual-effect-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardButton, Colors, ExampleItemCard, ObjectPropertyDisplay } from 'react-native-ios-utilities';

const WINDOW_SIZE = Dimensions.get('window');

// 1 = black, 0 = transparent
// returns an rgba string
function createDepthColor(percent: number): string {
  return `rgba(0,0,0,${percent})`;
};

const FILTER_GROUPS: Array<Array<LayerFilterConfig>> = [
  [
    // no-effect
  ],
  [
    {
      filterName: 'alphaFromLuminance'
    },
  ],

  // linear blur + matrix preset test
  [
    {
      filterName: 'colorMatrix',
      colorMatrix: {
        mode: 'preset',
        preset: {
          mode: 'presetName',
          presetName: 'preset01'
        },
      },
    },
    {
      filterName: 'variadicBlur',
      radius: 16,
      shouldNormalizeEdges: true,
      gradientMask: {
        type: 'axial',
        colors: [createDepthColor(1), createDepthColor(0)],
        startPointPreset: 'topCenter',
        endPointPreset: 'bottomCenter',
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],
  [
    {
      filterName: 'colorMatrix',
      colorMatrix: {
        mode: 'preset',
        preset: {
          mode: 'presetName',
          presetName: 'preset02'
        },
      },
    },
    {
      filterName: 'variadicBlur',
      radius: 16,
      shouldNormalizeEdges: true,
      gradientMask: {
        type: 'axial',
        colors: [
          createDepthColor(1), 
          createDepthColor(0.1), 
          createDepthColor(0)
        ],
        startPointPreset: 'topCenter',
        endPointPreset: 'bottomCenter',
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],
  [
    {
      filterName: 'colorMatrix',
      colorMatrix: {
        mode: 'preset',
        preset: {
          mode: 'presetName',
          presetName: 'preset03'
        },
      },
    },
    {
      filterName: 'variadicBlur',
      radius: 16,
      shouldNormalizeEdges: true,
      gradientMask: {
        type: 'axial',
        colors: [
          createDepthColor(1), 
          createDepthColor(0.2), 
          createDepthColor(0)
        ],
        startPointPreset: 'topLeft',
        endPointPreset: 'bottomRight',
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],
  [
    {
      filterName: 'colorMatrix',
      colorMatrix: {
        mode: 'preset',
        preset: {
          mode: 'presetName',
          presetName: 'preset04'
        },
      },
    },
    {
      filterName: 'variadicBlur',
      radius: 8,
      shouldNormalizeEdges: true,
      gradientMask: {
        type: 'conic',
        colors: [
          createDepthColor(0),
          createDepthColor(1), 
          createDepthColor(0)
        ],
        startPoint: { x: 0.5, y: 0.5 },
        endPoint: { x: 0.5, y: 0 },
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],
  [
    {
      filterName: 'colorMatrix',
      colorMatrix: {
        mode: 'preset',
        preset: {
          mode: 'presetName',
          presetName: 'preset05'
        },
      },
    },
    {
      filterName: 'variadicBlur',
      radius: 8,
      shouldNormalizeEdges: true,
      // vignette
      gradientMask: {
        type: 'radial',
        colors: [
          createDepthColor(1), 
          createDepthColor(0)
        ],
        startPoint: { x: 0.5, y: 0.5 },
        endPoint: { x: 1, y: 1 },
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],
  [
    {
      filterName: 'colorMatrix',
      colorMatrix: {
        mode: 'preset',
        preset: {
          mode: 'presetName',
          presetName: 'preset06'
        },
      },
    },
    {
      filterName: 'variadicBlur',
      radius: 8,
      shouldNormalizeEdges: true,
      // vignette
      gradientMask: {
        type: 'radial',
        colors: [
          createDepthColor(0),
          createDepthColor(1), 
        ],
        startPoint: { x: 0.5, y: 0.5 },
        endPoint: { x: 1, y: 1 },
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],
  [
    {
      filterName: 'colorMatrix',
      colorMatrix: {
        mode: 'preset',
        preset: {
          mode: 'presetName',
          presetName: 'preset07'
        },
      },
    },
    {
      filterName: 'variadicBlur',
      radius: 8,
      shouldNormalizeEdges: true,
      // vignette
      gradientMask: {
        type: 'radial',
        colors: [
          createDepthColor(1), 
          createDepthColor(0.1), 
          createDepthColor(0),
        ],
        startPoint: { x: 0.5, y: 0.5 },
        endPoint: { x: 1.5, y: 1.5 },
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],
  [
    {
      filterName: 'colorMatrix',
      colorMatrix: {
        mode: 'preset',
        preset: {
          mode: 'presetName',
          presetName: 'preset08'
        },
      },
    },
    {
      filterName: 'variadicBlur',
      radius: 8,
      shouldNormalizeEdges: true,
      // vignette
      gradientMask: {
        type: 'radial',
        colors: [
          createDepthColor(0),
          createDepthColor(0.1),
          createDepthColor(0.8),
          createDepthColor(1), 
        ],
        startPoint: { x: 0.5, y: 0.5 },
        endPoint: { x: 1.2, y: 1.2 },
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],
  [
    {
      filterName: 'colorMatrix',
      colorMatrix: {
        mode: 'preset',
        preset: {
          mode: 'presetName',
          presetName: 'preset09'
        },
      },
    },
    {
      filterName: 'variadicBlur',
      radius: 16,
      shouldNormalizeEdges: true,
      gradientMask: {
        type: 'axial',
        colors: [createDepthColor(1), createDepthColor(0)],
        startPointPreset: 'centerLeft',
        endPointPreset: 'centerRight',
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],
  [
    {
      filterName: 'colorMatrix',
      colorMatrix: {
        mode: 'preset',
        preset: {
          mode: 'presetName',
          presetName: 'preset10'
        },
      },
    },
    {
      filterName: 'variadicBlur',
      radius: 16,
      shouldNormalizeEdges: true,
      gradientMask: {
        type: 'axial',
        colors: [
          createDepthColor(1), 
          createDepthColor(0.3), 
          createDepthColor(0)
        ],
        startPointPreset: 'centerRight',
        endPointPreset: 'centerLeft',
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],
  [
    {
      filterName: 'colorMatrix',
      colorMatrix: {
        mode: 'preset',
        preset: {
          mode: 'presetName',
          presetName: 'preset11'
        },
      },
    },
    {
      filterName: 'variadicBlur',
      radius: 18,
      shouldNormalizeEdges: true,
      gradientMask: {
        type: 'axial',
        colors: [
          createDepthColor(1), 
          createDepthColor(0.1), 
          createDepthColor(0)
        ],
        startPointPreset: 'topRight',
        endPointPreset: 'bottomLeft',
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],
  [
    {
      filterName: 'colorMatrix',
      colorMatrix: {
        mode: 'preset',
        preset: {
          mode: 'presetName',
          presetName: 'preset12'
        },
      },
    },
    {
      filterName: 'variadicBlur',
      radius: 16,
      shouldNormalizeEdges: true,
      gradientMask: {
        type: 'axial',
        colors: [
          createDepthColor(0), 
          createDepthColor(1), 
          createDepthColor(0)
        ],
        startPointPreset: 'centerLeft',
        endPointPreset: 'centerRight',
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],
  [
    {
      filterName: 'colorMatrix',
      colorMatrix: {
        mode: 'preset',
        preset: {
          mode: 'presetName',
          presetName: 'preset13'
        },
      },
    },
    {
      filterName: 'variadicBlur',
      radius: 16,
      shouldNormalizeEdges: true,
      gradientMask: {
        type: 'axial',
        colors: [
          createDepthColor(0), 
          createDepthColor(0.1), 
          createDepthColor(0.8), 
          createDepthColor(1), 
        ],
        startPointPreset: 'topCenter',
        endPointPreset: 'bottomCenter',
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],
  [
    {
      filterName: 'colorMatrix',
      colorMatrix: {
        mode: 'preset',
        preset: {
          mode: 'presetName',
          presetName: 'preset14'
        },
      },
    },
    {
      filterName: 'variadicBlur',
      radius: 24,
      shouldNormalizeEdges: true,
      gradientMask: {
        type: 'axial',
        colors: [
          createDepthColor(1), 
          createDepthColor(0.2), 
          createDepthColor(0), 
          createDepthColor(0), 
        ],
        startPointPreset: 'topCenter',
        endPointPreset: 'bottomCenter',
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],

  // darken test
  [
    {
      filterName: 'brightenColors',
      amount: -0.5,
    },
    {
      filterName: 'colorBlackAndWhite',
      amount: 0.8,
    },
    {
      filterName: 'contrastColors',
      amount: 0.4,
    },
  ],
  [
    {
      filterName: 'brightenColors',
      amount: -0.8,
    },
    {
      filterName: 'colorBlackAndWhite',
      amount: 1,
    },
  ],
  [
    {
      filterName: 'luminanceCompression',
      amount: 0.4,
    },
    {
      filterName: 'brightenColors',
      amount: -0.2,
    },
    {
      filterName: 'gaussianBlur',
      radius: 6,
      shouldNormalizeEdges: true
    },
    {
      filterName: 'saturateColors',
      amount: 0.6,
    }
  ],
  [
    {
      filterName: 'invertColors',
    },
    {
      filterName: 'saturateColors',
      amount: 2,
    },
    {
      filterName: 'luminosityCurveMap',
      amount: 0.5,
      point1: 1,
      point2: 0,
      point3: 1,
      point4: 0,
    },
  ],
  [
    {
      filterName: 'invertColors',
    },
    {
      filterName: 'saturateColors',
      amount: 2,
    },
    {
      filterName: 'gaussianBlur',
      radius: 6,
      shouldNormalizeEdges: true,
    },
  ],
  
  // light vibrant test
  [
    {
      filterName: 'lightVibrant',
      color0: 'red',
      color1: 'rgba(0,0,0,0)',
      isReversed: true,
    },
  ],
  [
    {
      filterName: 'lightVibrant',
      color0: 'red',
      color1: 'rgba(0,0,0,1)',
      isReversed: true,
    },
  ],
  [
    {
      filterName: 'lightVibrant',
      color0: 'blue',
      color1: 'rgba(0,0,0,0.5)',
      isReversed: true,
    },
  ],
  [
    {
      filterName: 'lightVibrant',
      color0: 'rgba(0,0,255,0.75)',
      color1: 'rgba(0,0,0,0.75)',
      isReversed: true,
    },
  ],
  [
    {
      filterName: 'lightVibrant',
      color0: 'rgba(0,0,255,1)',
      color1: 'rgba(0,0,0,0)',
      isReversed: true,
    },
    {
      filterName: 'gaussianBlur',
      radius: 8,
      shouldNormalizeEdges: true,
    },
  ],
  [
    {
      filterName: 'lightVibrant',
      color0: 'rgba(0,255,0,1)',
      color1: 'rgba(0,0,0,0)',
      isReversed: true,
    },
  ],

  //
  [
    {
      filterName: 'colorTransform',
      colorTransform: {
        hueRotate: {
          mode: 'degrees',
          value: 90,
        },
        brightness: 0.25,
        saturation: 0.5,
      },
    },
  ],
  [
    {
      filterName: 'colorTransform',
      colorTransform: {
        saturation: -1,
        invert: 1,
      },
    },
    {
      filterName: 'gaussianBlur',
      radius: 8,
      shouldNormalizeEdges: true,
    }
  ],
  [
    {
      filterName: 'colorTransform',
      colorTransform: {
        saturation: -1,
      },
    },
    {
      filterName: 'gaussianBlur',
      radius: 16,
      shouldNormalizeEdges: true,
    }
  ],
  [
    {
      filterName: 'colorTransform',
      colorTransform: {
        shiftGreen: 1,
        contrast: 0.5,
        brightness: 0.2,
        intensityRed: 1.25,
        saturation: 2,
      },
    },
  ],
  [
    {
      filterName: 'colorTransform',
      colorTransform: {
        saturation: 0,
        contrast: 0.25,
      },
    },
  ],
  [
    {
      filterName: 'colorTransform',
      colorTransform: {
        saturation: 0,
        contrast: 0.3,
        shiftRed: -0.5,
        shiftGreen: 1,
      },
    },
    {
      filterName: 'gaussianBlur',
      radius: 6,
      shouldNormalizeEdges: true
    }
  ],
  [
    {
      filterName: 'colorTransform',
      colorTransform: {
        saturation: -0.2,
        contrast: 0.2,
        shiftRed: 0.5,
        shiftBlue: -0.2,
        shiftGreen: 0.75,
        brightness: -0.4,
      },
    },
  ],
  [
    {
      filterName: 'colorTransform',
      colorTransform: {
        saturation: -1,
        invert: 1,
        hueRotate: {
          mode: 'degrees',
          value: -8,
        },
      },
    },
    {
      filterName: 'saturateColors',
      amount: 2,
    },
    {
      filterName: 'variadicBlur',
      radius: 8,
      shouldNormalizeEdges: true,
      gradientMask: {
        type: 'axial',
        colors: [
          createDepthColor(1),
          createDepthColor(0.1),
          createDepthColor(0),
          createDepthColor(0.1),
          createDepthColor(1)
        ],
        startPointPreset: 'centerLeft',
        endPointPreset: 'centerRight',
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],
  [
    {
      filterName: 'colorTransform',
      colorTransform: {
        hueRotate: {
          mode: 'degrees',
          value: -16,
        },
      },
    },
    {
      filterName: 'variadicBlur',
      radius: 16,
      shouldNormalizeEdges: true,
      gradientMask: {
        type: 'axial',
        colors: [
          createDepthColor(1),
          createDepthColor(0.1),
          createDepthColor(0),
          createDepthColor(0),
          createDepthColor(0.1),
          createDepthColor(1)
        ],
        startPointPreset: 'centerLeft',
        endPointPreset: 'centerRight',
        size: {
          height: WINDOW_SIZE.height,
          width: WINDOW_SIZE.width,
        },
      }
    },
  ],

  // misc test
  [
    {
      filterName: 'bias',
      amount: 0.1,
    },
    {
      filterName: 'colorBlackAndWhite',
      amount: 1,
    },
    {
      filterName: 'invertColors',
    },
    {
      filterName: 'contrastColors',
      amount: 1.5,
    },
  ],
  [
    {
      filterName: 'colorBlackAndWhite',
      amount: 1,
    },
    {
      filterName: 'gaussianBlur',
      radius: 8,
      shouldNormalizeEdges: true,
    },
  ]
];


export function CustomFilterViewTest01Screen() {
  const [filerGroupCounter, setFilerGroupCounter] = React.useState(0);
  const [shouldShowFilterList, setShouldShowFilterList] = React.useState(false);

  const filerGroupIndex = 
    filerGroupCounter % FILTER_GROUPS.length;

  const filerGroupCurrent = FILTER_GROUPS[filerGroupIndex]!;

  const isFilerGroupCurrentEmpty = 
    Object.keys(filerGroupCurrent).length == 0;

  const filterNames = filerGroupCurrent.map((item) => item.filterName);

  const filterNamesAsString = filterNames.reduce((acc, curr, index) => {
    const isLast = index === filterNames.length - 1;
    return acc + curr + (isLast ? "" : ", ");
  }, '');
  
  const emojiList = [
    "❤️🛑🍒🍓💃",
    "🧡🍊🥕🍑🎃",
    "💛🌟🌻🍋🍌",
    "💚🍀🌿🍏🌳",
    "💙🌊🦋🔵💎",
    "💜🍇💐🛸🌌",
    "💖🌸💝🎀💗",
    "🤍✨🌙🦢🦄",
    "🖤🌑🦇🕷️🕸️",
  ];

  const emojiString = emojiList.reduce((acc, curr, index) => {
    const isLast = index === emojiList.length - 1;
    return acc + curr + (isLast ? "" : "\n");
  }, '');

  const translateX = React.useRef(new Animated.Value(0));
  
  React.useEffect(() => {
    const offsetX = 50;
    const animationDurationMS = 1000 * 2;
    
    const moveAnimation = Animated.loop(
      Animated.sequence([
        // move to the right
        Animated.timing(translateX.current, {
          toValue: offsetX, 
          duration: animationDurationMS, 
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true, 
        }),

        // move back to the left
        Animated.timing(translateX.current, {
          toValue: -offsetX, 
          duration: animationDurationMS, 
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
      {
        resetBeforeIteration: false
      }
    );

    moveAnimation.start();

    return () => {
      moveAnimation.stop()
    };
  }, [translateX]);

  return (
    <View style={styles.container}>
      <Animated.Text 
        style={[
          styles.label, 
          { 
            transform: [{ 
              translateX: translateX.current,
            }]
          }
        ]}
      >
        {emojiString}
      </Animated.Text>
      <CustomFilterView
        style={styles.effectOverlay}
        currentFilters={filerGroupCurrent}
        backgroundLayerSamplingSizeScale={1}
      />
      <SafeAreaView style={styles.debugOverlayContainer}>
        <ExampleItemCard
          title={'Card Controls'}
          style={styles.debugCard}
        >
          <Pressable
            onPress={() => {
              setShouldShowFilterList(prevValue => !prevValue);
            }}
          >
            <ObjectPropertyDisplay
              style={styles.debugCardBodyItem}
              recursiveStyle={styles.debugDisplay}
              object={{
                filerGroupIndex,
                ...(shouldShowFilterList ? {
                  filerGroupCurrent: isFilerGroupCurrentEmpty
                    ? 'No Filters...'
                    : filerGroupCurrent,
                } : {
                  currentFilters: {
                    [filterNames.length]: filterNamesAsString
                  },
                })
              }}
            />
          </Pressable>
          
          <CardButton
            style={styles.debugCardBodyItem}
            title={'Next Filter Group'}
            subtitle={'Apply next filers'}
            onPress={() => {
              setFilerGroupCounter((prevValue) => prevValue + 1);
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
});