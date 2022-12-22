import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface toggleState {
	toggleState: boolean;
}

const initialState = {
	toggleState: false,
} as toggleState;

export const appToggleSlice = createSlice({
	name: "toggle",
	initialState,
	reducers: {
		toggle: (state) => {
			state.toggleState = !state.toggleState;
		},
	},
});

export const { toggle } = appToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectToggle = (state: RootState) => state.toggle.toggleState;

export default appToggleSlice.reducer;
