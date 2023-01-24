import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface aboutState {
	toggleState: boolean;
	currentTopic: string;
	topicList: string[];
}

const initialState: aboutState = {
	toggleState: false, //droplist is not active
	currentTopic: "",
	topicList: ["A Little Bit About Me"],
};
