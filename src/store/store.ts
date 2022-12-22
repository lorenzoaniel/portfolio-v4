import { configureStore } from "@reduxjs/toolkit";
import { appToggleSlice } from "./slices/appToggleSlice";

export const store = configureStore({
	reducer: {
		toggle: appToggleSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
