import * as React from 'react';
import type { StateReactTag, StateViewID } from 'react-native-ios-utilities';

import { RNIVisualEffectNativeView } from './RNIVisualEffectNativeView';

import type { 
	RNIVisualEffectViewProps, 
	RNIVisualEffectViewRef, 
} from './RNIVisualEffectViewTypes';

export const RNIVisualEffectView = React.forwardRef<
	RNIVisualEffectViewRef, 
	RNIVisualEffectViewProps
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

	return (
		<RNIVisualEffectNativeView
			{...props}
			onDidSetViewID={(event) => {
				setViewID(event.nativeEvent.viewID);
				setReactTag(event.nativeEvent.reactTag);
				props.onDidSetViewID?.(event);
			}}
		>
			{props.children}
		</RNIVisualEffectNativeView>
	);
});