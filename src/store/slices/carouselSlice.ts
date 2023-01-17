import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { PayloadAction } from "@reduxjs/toolkit";

interface carouselState {
	routeState: string;
	routeListState: string[];
	childIndex: number;
}

const initialState = {
	routeState: "/",
	routeListState: ["/", "/about", "/projects", "/contact"],
	childIndex: 0,
} as carouselState;

interface displayPayload {
	variant: string;
	childLength: number;
	navMode?: boolean;
}

interface changeRoutePayload {}

export const carouselSlice = createSlice({
	name: "carouselSlice",
	initialState,
	reducers: {
		changeItemDisplay: (state, displayPayload: PayloadAction<displayPayload>) => {
			const { variant, childLength, navMode = false } = displayPayload.payload;

			if (variant === "Right" && state.childIndex < childLength) {
				state.childIndex += 1;
			} else if (variant === "Left" && state.childIndex > 0) {
				state.childIndex -= 1;
			} else {
				if (variant === "Right") {
					state.childIndex = 0;
				} else {
					state.childIndex = childLength;
				}
			}

			if (navMode) state.routeState = state.routeListState[state.childIndex];
		},
	},
});

export const { changeItemDisplay } = carouselSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCarouselState = (state: RootState) => state.carouselSlice;

export default carouselSlice.reducer;
