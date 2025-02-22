import { HomeScreen } from "../components/HomeScreen";

import { BlurViewBasicUsage01 } from "../examples/BlurViewBasicUsage01";
import { BlurViewTest01Screen } from "../examples/BlurViewTest01Screen";
import { BlurViewTest02Screen } from "../examples/BlurViewTest02Screen";
import { BlurViewTest03Screen } from "../examples/BlurViewTest03Screen";
import { BlurViewTest04Screen } from "../examples/BlurViewTest04Screen";
import { BlurViewTest05Screen } from "../examples/BlurViewTest05Screen";

import { CustomFilterViewTest01Screen } from "../examples/CustomFilterViewTest01Screen";

import { CustomFilterViewExample01 } from "../examples/CustomFilterViewExample01";
import { CustomFilterViewExample02 } from "../examples/CustomFilterViewExample02";

import { AnimatableCustomFilterViewTest01Screen } from "../examples/AnimatableCustomFilterViewTest01Screen";
import { AnimatableCustomFilterViewTest02Screen } from "../examples/AnimatableCustomFilterViewTest02Screen";

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
  {
    routeKey: 'blurViewTest05',
    component: BlurViewTest05Screen,
  },
  {
    routeKey: 'customFilterViewExample01',
    component: CustomFilterViewExample01,
  },
  {
    routeKey: 'customFilterViewExample02',
    component: CustomFilterViewExample02,
  },
  {
    routeKey: 'animatableCustomFilterViewTest01',
    component: AnimatableCustomFilterViewTest01Screen,
  },
  {
    routeKey: 'animatableCustomFilterViewTest02',
    component: AnimatableCustomFilterViewTest02Screen
  }
];