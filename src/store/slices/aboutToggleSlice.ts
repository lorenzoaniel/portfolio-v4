import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface NavmenuToggleState {
	NavmenuToggleState: boolean;
}

const initialState = {
	NavmenuToggleState: false,
} as NavmenuToggleState;

export const aboutToggleSlice = createSlice({
	name: "aboutToggle",
	initialState,
	reducers: {
		aboutTopicNavToggle: (state) => {
			state.NavmenuToggleState = !state.NavmenuToggleState;
		},
	},
});

export const { aboutTopicNavToggle } = aboutToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAboutToggle = (state: RootState) => state.aboutToggle.NavmenuToggleState;

export default aboutToggleSlice.reducer;
