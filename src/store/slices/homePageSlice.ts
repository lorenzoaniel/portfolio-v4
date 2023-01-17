import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface infoState {
	porfolioInfo: string;
}

const initialState = {
	porfolioInfo: "Hi my name is Lorenzo, feel free to explore my portfolio!",
} as infoState;

export const homePageSlice = createSlice({
	name: "homePageInfo",
	initialState,
	reducers: {
		//data can be decoupled into a database and fetched by reducers
	},
});

// Other code such as selectors can use the imported `RootState` type
export const selectHomeInfo = (state: RootState) => state.homePageInfo.porfolioInfo;

export default homePageSlice.reducer;
