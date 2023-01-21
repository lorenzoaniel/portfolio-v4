import { configureStore } from "@reduxjs/toolkit";
import { appToggleSlice } from "./slices/appToggleSlice";
import { homePageSlice } from "./slices/homePageSlice";
import { carouselSlice } from "./slices/carouselSlice";
import { pagesInfoSlice } from "./slices/pagesInfoSlice";

export const store = configureStore({
	reducer: {
		toggle: appToggleSlice.reducer,
		homePageInfo: homePageSlice.reducer,
		carouselSlice: carouselSlice.reducer,
		pagesInfo: pagesInfoSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
