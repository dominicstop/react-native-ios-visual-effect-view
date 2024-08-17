import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { BubblingEventHandler } from 'react-native/Libraries/Types/CodegenTypes';
import type { HostComponent, ViewProps } from 'react-native';

// stubs
interface NativeProps extends ViewProps {
  onDidSetViewID: BubblingEventHandler<{}>;
  blurConfig: string;
};

// stubs
export default codegenNativeComponent<NativeProps>('RNIBlurView', {
  excludedPlatforms: ['android'],
  interfaceOnly: true,
}) as HostComponent<NativeProps>;