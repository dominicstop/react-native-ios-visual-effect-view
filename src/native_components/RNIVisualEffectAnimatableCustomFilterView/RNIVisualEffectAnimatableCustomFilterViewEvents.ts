import type { BubblingEventHandler } from "react-native/Libraries/Types/CodegenTypes";


export type OnRequestFromNativeEventPayload = Readonly<
  {
    requestKey: 'requestToMountCount'
  }
>;

export type OnRequestFromNativeEvent = 
  BubblingEventHandler<OnRequestFromNativeEventPayload>;