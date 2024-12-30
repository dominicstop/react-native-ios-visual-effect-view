import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { BubblingEventHandler, Double } from 'react-native/Libraries/Types/CodegenTypes';
import type { HostComponent, ViewProps } from 'react-native';


export interface NativeProps extends ViewProps {
  onDidSetViewID: BubblingEventHandler<{}>;

  identityBackgroundFilters: Array<{}>;
  identityForegroundFilters: Array<{}>;
  initialKeyframe: {};
  animationConfig: {};

  backgroundLayerSamplingSizeScale?: Double;
};

// stubs
export default codegenNativeComponent<NativeProps>('RNIVisualEffectAnimatableCustomFilterView', {
  excludedPlatforms: ['android'],
  interfaceOnly: true,
}) as HostComponent<NativeProps>;