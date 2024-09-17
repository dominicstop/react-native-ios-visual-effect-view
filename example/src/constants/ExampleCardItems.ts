import type { ExampleItemProps } from "../examples/SharedExampleTypes";
import type { RouteEntry } from "./RouteItems";

import { ROUTE_MAP } from "./RouteMap";


type ExampleItemBase = {
  component: unknown;
};

export type ExampleItemRoute = ExampleItemBase & RouteEntry & {
  type: 'screen';
  title?: string;
  subtitle?: string;
  desc?: Array<string>;
};

export type ExampleItemCard = ExampleItemBase & {
  type: 'card';
}

export type ExampleItem = 
  | ExampleItemRoute
  | ExampleItemCard;

export type ExampleListItem = {
  id: number;
  component: React.FC<ExampleItemProps>;
};

export const EXAMPLE_ITEMS: Array<ExampleItem> = (() => {
  
  const screenItems: Array<ExampleItemRoute> = [
    {
      ...ROUTE_MAP.blurViewBasicUsage01,
      type: 'screen',
      title: 'RNIBlurViewBasicUsage01',
      subtitle: "Basic Usage - RNIBlurView",
      desc: [
        "Basic example for demonstrating how to use: `blurConfig` + `animationConfig`"
      ], 
    },
    {
      ...ROUTE_MAP.visualEffectViewTest01,
      type: 'screen',
      title: "RNIVisualEffectViewTest01",
      desc: [
        "⚠️ API for RN not implemented yet, just a demo for now",
      ],
    }, 
    {
      ...ROUTE_MAP.blurViewTest01,
      type: 'screen',
      title: "RNIBlurViewTest01",
      desc: [
        "Test for `blurConfig` (standard mode) + `animationConfig`",
        "Cycle through `UIBlurEffectStyle` + `AnimationConfig` presets",
      ],
    },
    {
      ...ROUTE_MAP.blurViewTest02,
      type: 'screen',
      title: "RNIBlurViewTest02",
      desc: [
        "Test for `blurConfig` (`customEffectIntensity` mode) + `animationConfig`",
        "Cycle through `UIBlurEffectStyle` presets, and set a custom"
          + "  `BlurViewConfig.intensity` (percent)",
      ],
    }, 
    {
      ...ROUTE_MAP.blurViewTest03,
      type: 'screen',
      title: "RNIBlurViewTest03",
      desc: [
        "Test for `blurConfig` (`customBlurRadius` mode) + `animationConfig`",
        "Cycle through `UIBlurEffectStyle` presets, and set a custom"
          + "  `BlurViewConfig.blurRadius`",
      ],
      
    }
  ];

  const cardItems: Array<ExampleItemCard> = []; 

  // if (SHARED_ENV.enableReactNavigation) {
  //   items.splice(0, 0, ...[DebugControls]);
  // }

  return [...screenItems, ...cardItems];
})();