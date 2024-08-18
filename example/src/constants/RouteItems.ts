import { HomeScreen } from "../components/HomeScreen";
import { RNIBlurViewTest01Screen } from "../examples/RNIBlurViewTest01Screen";
import { RNIBlurViewTest02Screen } from "../examples/RNIBlurViewTest02Screen";
import { RNIBlurViewTest03Screen } from "../examples/RNIBlurViewTest03Screen";
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
}, {
  routeKey: 'blurViewTest01',
  component: RNIBlurViewTest01Screen,
}, {
  routeKey: 'blurViewTest02',
  component: RNIBlurViewTest02Screen,
}, {
  routeKey: 'blurViewTest03',
  component: RNIBlurViewTest03Screen,
}];