import { Platform } from 'react-native';

// @ts-ignore
export const IOS_VERSION = parseInt(Platform.Version, 10);

export const IS_PLATFORM_IOS = (Platform.OS === 'ios');

export const LIB_ENV = {
  isVisualEffectViewSupported: (
    IS_PLATFORM_IOS && (IOS_VERSION >= 13)
  ),
  shouldEnableLogging: false,
  shouldEnableDetachedView: true,
};