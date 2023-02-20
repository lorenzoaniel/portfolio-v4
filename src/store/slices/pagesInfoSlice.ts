import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

//STATIC DATA ONLY
interface infoState {
	Landing: any;
	Home: any;
	About: any;
	Projects: any;
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
	Projects: {
		Tenzies: {
			name: "TENZIES",
			desc: "One of the first projects in my REACTJS journey that I undertook when I was learning using Scrimba's React course. This app was built using ReactJS and Styled-components, animations done using vanilla CSS keyframes and selectors. This project is special for me since I managed to build something enjoyable and decent looking with the little bits of REACTJS knowledge that I had at the time.",
		},
		Portfolio1: {
			name: "PORTFOLIO-V1",
			desc: "The first iteration of my portfolio, I have to admit I might have been too excited for this one. Originally the finished product was going to have a text based dungeon module but since I was still getting familiar with JS all I managed to figure out was the ReactRouter portion. Built using REACTJS, ReactRouter v5, Styled-JS, and my first attempts at Framer-Motion.",
		},
		Portfolio2: {
			name: "PORTFOLIO-V2",
			desc: "A very incomplete prototype for what would be the third version of my portfolio this one was going to be a spy themed portfolio. At this point I made it a challenge to try out different themed designs for each iteration of a new portfolio. I would like to think that I am kind of improving my design skills with each version. Built using REACTJS, ReactRouter v5, Styled-JS, and my first attempts at Framer-Motion.",
		},
		Portfolio3: {
			name: "PORTFOLIO-V3",
			desc: "A gray themed 'clean' version of Portfolio-v2, I tried my hand at modern minimalistic design concepts. Perhaps my most complete portfolio up until this current one, still largely barebones in nature but I was getting the hang of ReactRouter and nesting routes as well as unmount animations for Framer. Built using REACTJS, ReactRouter v5, Styled-JS, and my first attempts at Framer-Motion.",
		},
		SaasifyDemo: {
			name: "SAASIFY DEMO",
			desc: "This project was a random design file that I found browsing the Figma community that I challenged myself to build in order to try and emulate real world projects. Unfortunately I stuck purely to the design files and since there was no responsive version dictated by the files it will start to break if browser is not maximized. No animations for this one, jsut wanted to see if I can follow a design file to the 'T'. Built using REACTJS and Styled-JS",
		},
		GPTDemo: {
			name: "GPT DEMO",
			desc: "Another Figma file to code project, just like the 'Saasify' project this one is jsut for me to practice following someone else's design files to the 'T', I did take some liberties for instances where graphic design files were used. This project has some responsiveness but in general I jsut stuck to the design files. No Animations, and built using REACTJS and Styled-JS",
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
