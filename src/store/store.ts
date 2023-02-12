import { configureStore } from "@reduxjs/toolkit";
import { appToggleSlice } from "./slices/appToggleSlice";
import { carouselSlice } from "./slices/carouselSlice";
import { pagesInfoSlice } from "./slices/pagesInfoSlice";
import { aboutToggleSlice } from "./slices/aboutToggleSlice";

export const store = configureStore({
	reducer: {
		aboutToggle: aboutToggleSlice.reducer,
		toggle: appToggleSlice.reducer,
		carouselSlice: carouselSlice.reducer,
		pagesInfo: pagesInfoSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
