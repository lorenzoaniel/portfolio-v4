import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const ProjectDescriptionModal = createSlice({
	name: "ProjectDescriptionModal",
	initialState: { modalToggle: false },
	reducers: {
		changeModalToggle: (state) => {
			state.modalToggle = !state.modalToggle;
		},
	},
});

export const { changeModalToggle } = ProjectDescriptionModal.actions;

export const selectModalState = (state: RootState) => state.ProjectDescriptionModal;
