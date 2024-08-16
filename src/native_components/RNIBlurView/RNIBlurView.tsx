import * as React from 'react';

import { RNIBlurNativeView } from './RNIBlurNativeView';

import type { 
	RNIBlurViewProps, 
	RNIBlurViewRef, 
	StateReactTag, 
	StateViewID 
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