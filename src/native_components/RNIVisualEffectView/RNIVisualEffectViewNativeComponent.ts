import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { BubblingEventHandler } from 'react-native/Libraries/Types/CodegenTypes';
import type { HostComponent, ViewProps } from 'react-native';


export interface NativeProps extends ViewProps {
  onDidSetViewID: BubblingEventHandler<{}>;
};

// stubs
export default codegenNativeComponent<NativeProps>('RNIVisualEffectView', {
  excludedPlatforms: ['android'],
  interfaceOnly: true,
}) as HostComponent<NativeProps>;