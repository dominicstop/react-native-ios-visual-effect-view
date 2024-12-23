import type { ColorValue } from "react-native-ios-utilities";
import type { BlendMode } from "./BlendMode";


export type TintConfig = {
  tintColor: ColorValue;
  opacity: number;
  blendMode?: BlendMode;
};

