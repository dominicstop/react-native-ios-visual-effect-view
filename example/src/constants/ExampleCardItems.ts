import { AppMetadataCard } from "../components/AppMetadataCard";
import { ROUTE_MAP } from "./RouteMap";

import type { ExampleItemProps } from "../examples/SharedExampleTypes";
import type { RouteEntry } from "./RouteItems";


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
      title: 'BlurView - BasicUsage01',
      subtitle: "Basic Usage - BlurView",
      desc: [
        "Basic example for demonstrating how to use: `blurMode` + `animationConfig`"
      ], 
    },
    {
      ...ROUTE_MAP.customFilterViewExample01,
      type: 'screen',
      title: 'CustomFilterView - Example01',
      subtitle: 'example usage, define custom filter',
      desc: [
        "Basic example for defining and combining filters"
      ],
    },
        {
      ...ROUTE_MAP.customFilterViewExample02,
      type: 'screen',
      title: "CustomFilterView - Example02",
      desc: [
        "TBA"
      ],
    }, 
    {
      ...ROUTE_MAP.blurViewTest01,
      type: 'screen',
      title: "BlurView - Test01",
      desc: [
        "Test for `blurMode` (standard mode) + `animationConfig`",
        "Cycle through `UIBlurEffectStyle` + `AnimationConfig` presets",
      ],
    },
    {
      ...ROUTE_MAP.blurViewTest02,
      type: 'screen',
      title: "BlurView - Test02",
      desc: [
        "Test for `blurMode` (`customEffectIntensity` mode)",
        "Cycle through `UIBlurEffectStyle` presets, and set a custom"
          + "  `VisualEffectBlurMode.intensity` (percent)",
      ],
    }, 
    {
      ...ROUTE_MAP.blurViewTest03,
      type: 'screen',
      title: "BlurView - Test03",
      desc: [
        "Test for `blurMode` (`customBlurRadius` mode)",
        "Cycle through `UIBlurEffectStyle` presets, and set a custom"
          + "  `VisualEffectBlurMode.blurRadius`",
      ],
    },
    {
      ...ROUTE_MAP.blurViewTest04,
      type: 'screen',
      title: "BlurView - Test04",
      desc: [
        "Test for `blurMode` (`customBlurRadius` mode) + `animationConfig`",
        "Cycle through `UIBlurEffectStyle` + `AnimationConfig` presets, and set"
          + " set a custom `VisualEffectBlurMode.blurRadius`",
        "This is an animated version of `BlurViewTest03`",
      ],
    },
    {
      ...ROUTE_MAP.blurViewTest05,
      type: 'screen',
      title: "BlurView - Test05",
      desc: [
        "Test for `blurMode` (`customEffectIntensity` mode) + `animationConfig`",
        "Cycle through `UIBlurEffectStyle` presets, and set a custom"
          + "  `VisualEffectBlurMode.intensity` (percent)",
        "This is an animated version of `BlurViewTest02`",
      ],
    }, 
    {
      ...ROUTE_MAP.customFilterViewTest01,
      type: 'screen',
      title: "CustomFilterView - Test01",
      desc: [
        "Test for creating and combining custom filters together",
      ],
    }, 
    {
      ...ROUTE_MAP.animatableCustomFilterViewTest01,
      type: 'screen',
      title: "AnimatableCustomFilterView - Test01",
      desc: [
        "TBA",
      ],
    }, 
     {
      ...ROUTE_MAP.animatableCustomFilterViewTest02,
      type: 'screen',
      title: "AnimatableCustomFilterView - Test02",
      desc: [
        "TBA",
      ],
    }, 
  ];

  const cardItems: Array<ExampleItemCard> = []; 

  // if (SHARED_ENV.enableReactNavigation) {
  //   items.splice(0, 0, ...[DebugControls]);
  // }

  return [
    {
      type: 'card',
      component: AppMetadataCard,
    },
    ...screenItems, 
    ...cardItems
  ];
})();