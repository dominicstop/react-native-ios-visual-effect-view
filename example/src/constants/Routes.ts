import { HomeScreen } from "../examples/HomeScreen";
import { RNIVisualEffectViewTest01Screen } from "../examples/RNIVisualEffectViewTest01Screen";
import type { RouteKey } from "./RouteKeys";


export type RouteEntry = {
  routeKey: RouteKey
  component: React.ComponentType<{}>;
};

export const ROUTE_ITEMS: Array<RouteEntry> = [{
  routeKey: 'home',
  component: HomeScreen,
}, {
  routeKey: 'visualEffectViewTest01',
  component: RNIVisualEffectViewTest01Screen,
}];

export const ROUTE_MAP: Record<RouteKey, RouteEntry> = (() => {
  const map: Record<string, RouteEntry> = {};

  for (const routeItem of ROUTE_ITEMS) {
    map[routeItem.routeKey] = routeItem;
  };

  return map;
})();