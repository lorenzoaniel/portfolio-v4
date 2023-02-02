import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface infoState {
	About: any;
}

const initialState = {
	About: {
		NavmenuToggleState: false,
		ALittleBitAboutMePage: {
			Title: "A Little Bit About Me",
			Main: "I've always loved learning what interests me. I started out with basic IT technician skills learned through Google's professional development programs as well as COMPTIA A+/N+ and pursued my CCNA to focus more on the network side; all the while continuing to pickup little bits of programming knowledge here and there. Now I have finally committed to jumping into the wonderful world of programming through the 'Front door' (since I like learning through visuals) and made this portfolio to showcase my Front-end skills. Slowly trying my hand at backend, but as a Python-as-my-first-language kind of guy the nuances of JS is a little tricky for me. Thanks for visiting and for more techy info about my site feel free to read the other topics!",
			Path: "ALittleBitAboutMePage",
			HeadingDefault: "defaultMaroon",
		},
		ALittleBitAboutTheSite: {
			Title: "A Little Bit About The Site",
			Main: "Hey again! and let me tell you a bit more about the technical nitty-gritty workings of the site. Currently my portfolio site is built using REACTJS, a wonderful JS Library for building modular components that definitely made my life easier. Along the way I have also added a nice CSS-in-JSS tool called Styled-Components which helped me to localize all my CSS into my typescript files and solved my issue of having to BEM name everything, as I have found out through my coding journey--the meme of programmers trying to come up with names has indeed been a good time waster for me. The next thing I added onto the site is the extremely easy to use(kinda) Framer-Motion css animation library which helped me to animate Mounting and Unmounting of components so that transitions between pages or other animations appeared seemless, or atleast I hope they did, unfortunately I did not have a focus group to QA Test. From there I tried more back-end tech in the form of React Router to give my site the ability to peruse it's own pages while making it seem almost instantaneous and currently just implemented some ReduxToolKit into the mix for state management which is where all the static data for the site is stored, I will have to try my hand at API's and some form of cloud based DB to migrate the data there but for now I am currently only at local-level--If this tidbit isn't here then I guess I managed to do just that. Other tidbits include using Vite for development, which proved to be a lot faster than the out of the box create-react-app I've been using to experiment and transitioning from plain JS to the more painful but helpful Typescript, I did at some point try Tailwind and MUI but found that learning too many libraries was not helpful for someone starting out, although I guess that didn't stop me from using all the others. P.S. I also use github desktop for source control--I know, it's not the cool kids terminal version, but man does it really help me visually learn plus it looks like a glorified OneNote and I love OneNote.",
			Path: "ALittleBitAboutTheSite",
			HeadingDefault: "defaultPurple",
		},
		ALittleBitAboutTheSourcesAndInspirations: {
			Title: "A Little Bit About The Sources And Inspirations",
			Main: "Ok, so you're still reading. In which case, let me tell you about the great UX/UI designers that I looked to for my design inspirations, because it sure took some biblical proportions of sifting through various Portfolio designs before I finally acknowledged the fact that I am not that great at coming up with designs, It might be that I am not a trained designer which helped me to finally make the right choice--still do the majority of the designs anyway. That's right, I figured since it was the same approach I took to building this portfolio that it couldn't possible be any more painful--and that the old adage of tossing oneself into the deep part of the ballpit would be the only consistent way for me to learn the design part of my Front-end journey. So without further adeu let me showcase all of my great inspirations and their credited persons: ",
			Path: "ALittleBitAboutTheSourcesAndInspirations",
			HeadingDefault: "defaultGreen",
			FirstInspiration:
				"Lorrayne or Loids, a UX/UI designer and software developer that developed the wonderful space-themed portfolio design where I borrowed the idea of showcasing a landing page first and having a button to flip through the homepage. Of course this is where similarities end since I incorporated animated backgrounds in place of good graphics, unfortunately I do not have her skillset in graphics design.",
		},
	},
} as infoState;

export const pagesInfoSlice = createSlice({
	name: "pagesInfo",
	initialState,
	reducers: {
		aboutTopicNavToggle: (state) => {
			state.About.NavmenuToggleState = !state.About.NavmenuToggleState;
		},
	},
});

export const { aboutTopicNavToggle } = pagesInfoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPagesInfo = (state: RootState) => state.pagesInfo;

export default pagesInfoSlice.reducer;
