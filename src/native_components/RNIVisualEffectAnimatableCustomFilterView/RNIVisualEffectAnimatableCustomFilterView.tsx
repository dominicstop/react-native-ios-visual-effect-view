import * as React from 'react';
import type { StateReactTag, StateViewID } from 'react-native-ios-utilities';

import { RNIVisualEffectAnimatableCustomFilterNativeView } from './RNIVisualEffectAnimatableCustomFilterNativeView';

import type { 
	RNIVisualEffectAnimatableCustomFilterViewProps, 
	RNIVisualEffectAnimatableCustomFilterViewRef, 
} from './RNIVisualEffectAnimatableCustomFilterViewTypes';
import type { OnRequestFromNativeEvent } from './RNIVisualEffectAnimatableCustomFilterViewEvents';


export const RNIVisualEffectAnimatableCustomFilterView = React.forwardRef<
	RNIVisualEffectAnimatableCustomFilterViewRef, 
	RNIVisualEffectAnimatableCustomFilterViewProps
>((props, ref) => {

	const [viewID, setViewID] = React.useState<StateViewID>();
	const [reactTag, setReactTag] = React.useState<StateReactTag>();

	React.useImperativeHandle(ref, () => ({
		getReactTag: () => {
			return reactTag;
		},
		getViewID: () => {
			return viewID;
		},
	}));

	const [shouldMountContent, setShouldMountContent] = React.useState(false);
	const handleRequestFromNative = React.useCallback<OnRequestFromNativeEvent>((event) => {
		switch (event.nativeEvent.requestKey) {
			case 'requestToMountCount':
				setShouldMountContent(true);
				break;
				
			default:
				break;
		}
  }, []); 

	return (
		<RNIVisualEffectAnimatableCustomFilterNativeView
			{...props}
			onDidSetViewID={(event) => {
				setViewID(event.nativeEvent.viewID);
				setReactTag(event.nativeEvent.reactTag);
				props.onDidSetViewID?.(event);
			}}
			onRequestFromNative={handleRequestFromNative}
		>
			{shouldMountContent && (props.children)}
		</RNIVisualEffectAnimatableCustomFilterNativeView>
	);
});