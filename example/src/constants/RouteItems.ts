import { HomeScreen } from "../components/HomeScreen";

import { BlurViewBasicUsage01 } from "../examples/BlurViewBasicUsage01";
import { BlurViewTest01Screen } from "../examples/BlurViewTest01Screen";
import { BlurViewTest02Screen } from "../examples/BlurViewTest02Screen";
import { BlurViewTest03Screen } from "../examples/BlurViewTest03Screen";
import { BlurViewTest04Screen } from "../examples/BlurViewTest04Screen";

import { CustomFilterViewTest01Screen } from "../examples/CustomFilterViewTest01Screen";

import type { RouteKey } from "./RouteKeys";


export type RouteEntry = {
  routeKey: RouteKey
  component: React.ComponentType<{}>;
};

export const ROUTE_ITEMS: Array<RouteEntry> = [{
    routeKey: 'home',
    component: HomeScreen,
  }, 
  {
    routeKey: 'blurViewBasicUsage01',
    component: BlurViewBasicUsage01,
  },
  {
    routeKey: 'customFilterViewTest01',
    component: CustomFilterViewTest01Screen,
  }, 
  {
    routeKey: 'blurViewTest01',
    component: BlurViewTest01Screen,
  }, 
  {
    routeKey: 'blurViewTest02',
    component: BlurViewTest02Screen,
  }, 
  {
    routeKey: 'blurViewTest03',
    component: BlurViewTest03Screen,
  },
  {
    routeKey: 'blurViewTest04',
    component: BlurViewTest04Screen,
  },
];