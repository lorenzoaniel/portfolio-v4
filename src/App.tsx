import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { Outlet, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import { selectToggle, toggle } from "./store/slices/appToggleSlice";
import { selectPagesInfo } from "./store/slices/pagesInfoSlice";

//STYLE IMPORTS
import { GlobalStyle } from "./styles/GlobalStyles";
import { device } from "./styles/breakpoints";
import { AppPageThemes } from "./styles/themes/AppPageThemes";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Heading from "./components/Heading";
import Button from "./components/Button";
import AnimatedBackground from "./components/AnimatedBackground";
import Carousel from "./components/Carousel";
import useCurrentDimension from "./helpers/useCurrentDimension";
import Navmenu from "./components/Navmenu";
import TopicSubPage from "./components/TopicSubPage";

interface _MotionVariants {
	initial: any;
	animate: any;
}

const App = () => {
	//logic
	const toggleContext = useAppSelector(selectToggle);
	const infoContext = useAppSelector(selectPagesInfo);
	const navigate = useNavigate();
	const location = useLocation();
	const currDimensionContext = useCurrentDimension();

	let currentURL = location.pathname.match(/([^\/]+)/);
	let appThemeKey = currentURL ? currentURL[0] : "home";
	let appTheme = AppPageThemes()[appThemeKey];

	//Route PROPS OBJECT Destructured during render
	const RouteProps = {
		Nav: {
			path: "/",
			element:
				currDimensionContext.width >= 1024 ? (
					<>
						<Navmenu>
							{[
								<Button variant={"AppToggle"} />,
								<Button variant={"GlassButton"} clickHandle={() => navigate("/")}>
									{"Home"}
								</Button>,
								<Button variant={"GlassButton"} clickHandle={() => navigate("/about")}>
									{"About"}
								</Button>,
								<Button variant={"GlassButton"} clickHandle={() => navigate("/projects")}>
									{"Projects"}
								</Button>,
								<Button variant={"GlassButton"} clickHandle={() => navigate("/contact")}>
									{"Contact"}
								</Button>,
							]}
						</Navmenu>
						<_App.OutletContainer>
							<Outlet />
						</_App.OutletContainer>
					</>
				) : (
					<>
						<Button variant={"AppToggle"} />
						<_App.OutletContainer>
							<Outlet />
						</_App.OutletContainer>
						<Carousel variant={"MainNav"}>
							<Button variant={"NavButton"} clickHandle={() => navigate("/")}>
								{"Home"}
							</Button>

							<Button variant={"NavButton"} clickHandle={() => navigate("/about")}>
								{"About"}
							</Button>

							<Button variant={"NavButton"} clickHandle={() => navigate("/projects")}>
								{"Projects"}
							</Button>

							<Button variant={"NavButton"} clickHandle={() => navigate("/contact")}>
								{"Contact"}
							</Button>
						</Carousel>
					</>
				),
		},
		Home: {
			element: <Home />,
			path: "/",
		},
		About: {
			element: <About />,
			path: "/about",
		},
		AboutTopics: {
			ALittleBitAboutMePage: {
				element: (
					<TopicSubPage dataProp={infoContext.About.ALittleBitAboutMePage} variant={"AboutMe"} />
				),
				path: infoContext.About.ALittleBitAboutMePage.Path,
			},
			ALittleBitAboutTheSite: {
				element: (
					<TopicSubPage dataProp={infoContext.About.ALittleBitAboutTheSite} variant={"AboutSite"} />
				),
				path: infoContext.About.ALittleBitAboutTheSite.Path,
			},
			ALittleBitAboutTheSourcesAndInspirations: {
				element: (
					<TopicSubPage
						dataProp={infoContext.About.ALittleBitAboutTheSourcesAndInspirations}
						variant={"AboutSource"}
					/>
				),
				path: infoContext.About.ALittleBitAboutTheSourcesAndInspirations.Path,
			},
		},
		Projects: {
			element: <Projects />,
			path: "/projects",
		},
		Contact: {
			element: <Contact />,
			path: "/contact",
		},
	};

	//RENDER
	return (
		<ThemeProvider theme={appTheme}>
			<GlobalStyle />
			<_App.Main>
				<_App.ToggledOff.Main {..._MotionProps(toggleContext, "ToggledOff")}>
					<AnimatedBackground disabledState={toggleContext} variant={"Stars"} />

					<_App.ToggledOff.Wrapper>
						<Button variant={"AppToggle"} />
						<Heading titleProp={infoContext.Landing.Main} variant={"Landing"} />
					</_App.ToggledOff.Wrapper>
				</_App.ToggledOff.Main>

				<_App.ToggledOn.Main {..._MotionProps(toggleContext, "ToggledOn")}>
					<AnimatedBackground disabledState={toggleContext} variant={"Blackhole"} />

					<_App.ToggledOn.Routes>
						<Routes>
							<Route {...RouteProps.Nav}>
								<Route index element={RouteProps.Home.element} />
								<Route {...RouteProps.Home} />
								<Route {...RouteProps.About}>
									<Route index element={RouteProps.AboutTopics.ALittleBitAboutMePage.element} />
									<Route {...RouteProps.AboutTopics.ALittleBitAboutMePage} />
									<Route {...RouteProps.AboutTopics.ALittleBitAboutTheSite} />
									<Route {...RouteProps.AboutTopics.ALittleBitAboutTheSourcesAndInspirations} />
								</Route>
								<Route {...RouteProps.Projects} />
								<Route {...RouteProps.Contact} />
							</Route>
						</Routes>
					</_App.ToggledOn.Routes>
				</_App.ToggledOn.Main>
			</_App.Main>
		</ThemeProvider>
	);
};

//STYLES
const _AppMixins = {
	Commons: {
		flexColCenterW100H100: `
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		`,
	},
};

const _AppVariants = (theme?: any) => {};

const _App = {
	Main: styled.main`
		background: black;
		height: inherit;
		width: inherit;
		display: flex;
	`,
	ToggledOn: {
		Main: styled(motion.section)`
			height: inherit;
			width: inherit;
		`,
		Routes: styled(motion.aside)`
			${_AppMixins.Commons.flexColCenterW100H100}
			background-color: transparent;
			justify-content: space-between;
			row-gap: 3%;
			padding: 2rem;
			height: 100%;
			overflow: scroll;

			@media ${device.tablet} {
				align-items: flex-start;
			}
		`,
	},
	ToggledOff: {
		Main: styled(motion.section)`
			height: inherit;
			width: inherit;
		`,
		Wrapper: styled(motion.aside)`
			${_AppMixins.Commons.flexColCenterW100H100}
			background-color: transparent;
			padding: 3rem;

			@media ${device.tablet} {
				align-items: flex-start;
			}
		`,
	},
	OutletContainer: styled(motion.section)`
		${_AppMixins.Commons.flexColCenterW100H100}
		flex-direction: row;
		border-radius: 1rem;
		height: 70%;
	`,
};

//MOTION
const _MotionVariants = (toggleContext: boolean): _MotionVariants => {
	return {
		initial: {
			ToggledOn: {
				display: toggleContext ? "flex" : "none",
				opacity: 0,
			},
			ToggledOff: {
				display: toggleContext ? "none" : "flex",
				opacity: 0,
			},
		},
		animate: {
			ToggledOn: {
				display: toggleContext ? "flex" : "none",
				opacity: toggleContext ? 1 : 0,
				transition: {
					duration: 0.5,
				},
			},
			ToggledOff: {
				display: toggleContext ? "none" : "flex",
				opacity: toggleContext ? 0 : 1,
				transition: {
					duration: 0.5,
				},
			},
		},
	};
};

const _MotionProps = (toggleContext: boolean, variant: string) => {
	return {
		initial: _MotionVariants(toggleContext).initial[variant as keyof _MotionVariants],
		animate: _MotionVariants(toggleContext).animate[variant as keyof _MotionVariants],
	};
};

export default App;
