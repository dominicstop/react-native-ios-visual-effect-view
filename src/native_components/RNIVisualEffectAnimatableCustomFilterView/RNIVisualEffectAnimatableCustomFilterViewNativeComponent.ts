import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { BubblingEventHandler, Double } from 'react-native/Libraries/Types/CodegenTypes';
import type { HostComponent, ViewProps } from 'react-native';


export interface NativeProps extends ViewProps {
  // required events
  onDidSetViewID: BubblingEventHandler<{}>;
  onRequestFromNative: BubblingEventHandler<{}>;

  // optional events
  onPropertyAnimatorDidStart?: BubblingEventHandler<{}>;
  onPropertyAnimatorDidComplete?: BubblingEventHandler<{}>;

  // required props
  identityBackgroundFilters: Array<{}>;
  identityForegroundFilters: Array<{}>;
  initialKeyframe: {};
  animationConfig: {};
  currentKeyframe: {};

  // optional props
  backgroundLayerSamplingSizeScale?: Double;
  animationDelay?: Double;
};

// stubs
export default codegenNativeComponent<NativeProps>('RNIVisualEffectAnimatableCustomFilterView', {
  excludedPlatforms: ['android'],
  interfaceOnly: true,
}) as HostComponent<NativeProps>;