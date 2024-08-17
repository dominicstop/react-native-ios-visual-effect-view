import * as React from 'react';

import type { StateViewID, StateReactTag } from "react-native-ios-utilities";
import { RNIBlurNativeView } from './RNIBlurNativeView';

import type { 
	RNIBlurViewProps, 
	RNIBlurViewRef, 
} from './RNIBlurViewTypes';


export const RNIBlurView = React.forwardRef<
	RNIBlurViewRef, 
	RNIBlurViewProps
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
		<RNIBlurNativeView
			{...props}
			onDidSetViewID={(event) => {
				setViewID(event.nativeEvent.viewID);
				setReactTag(event.nativeEvent.reactTag);
				props.onDidSetViewID?.(event);
			}}
		>
			{props.children}
		</RNIBlurNativeView>
	);
});