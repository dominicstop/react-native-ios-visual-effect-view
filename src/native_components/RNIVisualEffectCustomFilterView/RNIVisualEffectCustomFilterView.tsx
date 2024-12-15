import * as React from 'react';
import type { StateReactTag, StateViewID } from 'react-native-ios-utilities';

import { RNIVisualEffectCustomFilterNativeView } from './RNIVisualEffectCustomFilterNativeView';

import type { 
	RNIVisualEffectCustomFilterViewProps, 
	RNIVisualEffectCustomFilterViewRef, 
} from './RNIVisualEffectCustomFilterViewTypes';

export const RNIVisualEffectCustomFilterView = React.forwardRef<
	RNIVisualEffectCustomFilterViewRef, 
	RNIVisualEffectCustomFilterViewProps
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
		<RNIVisualEffectCustomFilterNativeView
			{...props}
			onDidSetViewID={(event) => {
				setViewID(event.nativeEvent.viewID);
				setReactTag(event.nativeEvent.reactTag);
				props.onDidSetViewID?.(event);
			}}
		>
			{props.children}
		</RNIVisualEffectCustomFilterNativeView>
	);
});