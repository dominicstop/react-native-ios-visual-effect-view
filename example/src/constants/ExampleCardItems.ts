import { RNIVisualEffectViewTest01Screen } from "../examples/RNIVisualEffectViewTest01Screen";
import type { ExampleItemProps } from "../examples/SharedExampleTypes";
import { ROUTE_MAP, type RouteEntry } from "./Routes";

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
  
  const screenItems: Array<ExampleItemRoute> = [{
    ...ROUTE_MAP.visualEffectViewTest01,
    type: 'screen',
    type: 'screen',
    routeKey: 'visualEffectViewTest01',
  }];

  const cardItems: Array<ExampleItemCard> = []; 

  // if (SHARED_ENV.enableReactNavigation) {
  //   items.splice(0, 0, ...[DebugControls]);
  // }

  return [...screenItems, ...cardItems];
})();