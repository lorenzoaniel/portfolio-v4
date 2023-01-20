import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface infoState {
	porfolioInfo: string;
	navmenuconfig: any;
	routeListState: string[];
}

const initialState = {
	porfolioInfo: "Hi my name is Lorenzo, feel free to explore my portfolio!",
	navmenuconfig: {
		nameProp: ["Home", "About Me", "Projects", "Contact Me"],
		disabled: true,
		variant: "glassButton",
	},
	routeListState: ["/", "/about", "/projects", "/contact"],
} as infoState;

export const homePageSlice = createSlice({
	name: "homePageInfo",
	initialState,
	reducers: {},
});

// Other code such as selectors can use the imported `RootState` type
export const selectHomeInfo = (state: RootState) => state.homePageInfo;

export default homePageSlice.reducer;
