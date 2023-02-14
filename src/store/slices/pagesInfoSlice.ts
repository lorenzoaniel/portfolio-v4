import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

//STATIC DATA ONLY
interface infoState {
	Landing: any;
	Home: any;
	About: any;
}

const initialState = {
	Landing: {
		Main: "Explore My Portfolio!",
	},
	Home: {
		Main: "Hi my name is Lorenzo and welcome to my space-themed portfolio, feel free to explore around!",
	},
	About: {
		ALittleBitAboutMePage: {
			Title: "A Little Bit About Me",
			Main: "I've always loved learning what interests me. I started out with basic IT technician skills learned through Google's professional development programs as well as COMPTIA A+/N+ and pursued my CCNA to focus more on the network side; all the while continuing to pickup little bits of programming knowledge here and there. Now I have finally committed to jumping into the wonderful world of programming through the 'Front door' (since I like learning through visuals) and made this portfolio to showcase my Front-end skills. Slowly trying my hand at backend, but as a Python-as-my-first-language kind of guy the nuances of JS is a little tricky for me. Thanks for visiting and for more techy info about my site feel free to read the other topics!",
			Path: "ALittleBitAboutMePage",
			HeadingDefault: "defaultMaroon",
		},
		ALittleBitAboutTheSite: {
			Title: "A Little Bit About The Site",
			Main: {
				sectionOne:
					"Hey again! and let me tell you a bit more about the technical nitty-gritty workings of the site.",
				sectionTwo:
					"Currently my portfolio site is built mainly using REACTJS, a wonderful JS Library for building modular components that rely on state to change the UI/View, fairly straight forward if you use hooks instead of classes as a beginner--although it was a little confusing for me since I came from python and reusing 'components' involved using classes so I naturally gravitated to the now outdated form of creating react apps which was class-based, luckily I didn't delve too much into those concepts.",
				sectionThree:
					"Along the way I have also added a nice CSS-in-JSS tool called Styled-Components which helped me to localize all my CSS into my typescript files and solved my issue of having to BEM name everything, as I have found out through my coding journey--the meme of programmers trying to come up with names has indeed been a good time waster for me.",
				sectionFour:
					"The next thing I added onto the site is the extremely easy to use(kinda) Framer-Motion css animation library which helped me to animate Mounting and Unmounting of components so that transitions between pages or other animations appeared seemless, or atleast I hope they did, unfortunately I did not have a focus group to QA Test.",
				sectionFive:
					"From there I tried more 'back-end' tech in the form of React Router to give my site the ability to peruse it's own pages while making it seem almost instantaneous and currently just implemented some ReduxToolKit into the mix for state management which is where all the static data for the site is stored, I will have to try my hand at API's and some form of cloud based DB to migrate the data there but for now I am currently only at local-level--If this tidbit isn't here then I guess I managed to do just that.",
				sectionSix:
					"Other notables include using Vite for development, which proved to be a lot faster than the out of the box create-react-app I've been using to experiment, and transitioning from plain JS to the more painful but helpful Typescript, I did at some point try Tailwind and MUI but found that learning too many libraries was cluttering my mind, although I guess that didn't stop me from using all the others. P.S. I also use github desktop for source control--I know, it's not the cool kids terminal version, but man does it really help me visually learn plus it looks like a glorified OneNote and I love OneNote.",
			},
			Path: "ALittleBitAboutTheSite",
			HeadingDefault: "defaultPurple",
		},
		ALittleBitAboutTheSourcesAndInspirations: {
			Title: "A Little Bit About The Sources And Inspirations",
			Main: "Ok, so you're still reading. In which case this section is dedicated to the great UX/UI designers that I looked to for my design inspirations: ",
			Path: "ALittleBitAboutTheSourcesAndInspirations",
			HeadingDefault: "defaultGreen",
			FirstInspiration: {
				Title: "Lorrayne/Loids",
				Main: "A UX/UI designer and software developer that developed the wonderful space-themed portfolio design where I borrowed the idea of showcasing a landing page first and having a button to flip through the homepage. Of course this is where similarities end since I incorporated animated backgrounds in place of good graphics, unfortunately I do not have their skillset in graphics design.",
			},
			ClosingStatement:
				"Once again big thanks to the mentioned source/s. As they say 'imitation is a form of flattery' I just hope I didn't flatter anyone too much.",
		},
	},
} as infoState;

export const pagesInfoSlice = createSlice({
	name: "pagesInfo",
	initialState,
	reducers: {},
});

// Other code such as selectors can use the imported `RootState` type
export const selectPagesInfo = (state: RootState) => state.pagesInfo;

export default pagesInfoSlice.reducer;
