import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LazyMotion, motion } from "framer-motion";
import { Outlet, Routes, Route, useNavigate, useLocation } from "react-router-dom";

import { useAppSelector } from "./store/hooks";
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
import Heading from "./components/Heading/Heading";
import Button from "./components/Button/Button";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import Carousel from "./components/Carousel/Carousel";
import useCurrentDimension from "./helpers/useCurrentDimension";
import Navmenu from "./components/Navmenu/Navmenu";
import TopicSubPage from "./components/TopicSubPage/TopicSubPage";

interface _MotionVariants {
	[key: string]: any;
}

const App = () => {
	//logic
	const toggleContext = useAppSelector(selectToggle);
	const infoContext = useAppSelector(selectPagesInfo);
	const navigate = useNavigate();
	const location = useLocation();
	const currDimension = useCurrentDimension();

	let currentURL = location.pathname.match(/([^\/]+)/);
	let appThemeKey = currentURL ? currentURL[0] : "home";
	let appTheme = AppPageThemes()[appThemeKey];

	//Route PROPS OBJECT Destructured during render
	const RouteProps = {
		Nav: {
			path: "/",
			element:
				currDimension.width >= 1024 ? (
					<>
						<Navmenu>
							{[
								<Button variant={"AppToggle"} />,
								<Button variant={"NavButtonEnabled"} clickHandle={() => navigate("/")}>
									{"Home"}
								</Button>,
								<Button variant={"NavButtonEnabled"} clickHandle={() => navigate("/about")}>
									{"About"}
								</Button>,
								<Button variant={"NavButtonEnabled"} clickHandle={() => navigate("/projects")}>
									{"Projects"}
								</Button>,
								<Button variant={"NavButtonEnabled"} clickHandle={() => navigate("/contact")}>
									{"Contact"}
								</Button>,
							]}
						</Navmenu>
						<React.Suspense fallback={<p>Loading...</p>}>
							<OutletContainer>
								<Outlet />
							</OutletContainer>
						</React.Suspense>
					</>
				) : (
					<>
						<Button variant={"AppToggle"} />
						<React.Suspense fallback={<p>Loading...</p>}>
							<OutletContainer>
								<Outlet />
							</OutletContainer>
						</React.Suspense>
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
			<Main>
				{" "}
				<>
					{toggleContext ? (
						<ToggledOnMain
							initial={"initial"}
							animate={"animate"}
							variants={_MotionVariants(toggleContext).ToggledOn}
						>
							<AnimatedBackground variant={"Blackhole"} />
							<AnimatedBackground variant={"Pulses"} />
							<ToggledOnRoutes>
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
							</ToggledOnRoutes>
						</ToggledOnMain>
					) : (
						<ToggledOffMain
							initial={"initial"}
							animate={"animate"}
							variants={_MotionVariants(toggleContext).ToggledOff}
						>
							<AnimatedBackground variant={"Stars"} />

							<ToggledOffLanding>
								<Button variant={"AppToggle"} />
								<Heading titleProp={infoContext.Landing.Main} variant={"Landing"} />
							</ToggledOffLanding>
						</ToggledOffMain>
					)}
				</>
			</Main>
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

const Main = styled(motion.main)`
	background: black;
	height: inherit;
	width: inherit;
	display: flex;
`;

const ToggledOnMain = styled(motion.section)`
	height: inherit;
	width: inherit;
`;

const ToggledOnRoutes = styled(motion.aside)`
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

	@media ${device.laptop} {
		padding: 5rem;
		row-gap: 0%;
	}
`;

const ToggledOffMain = styled(motion.section)`
	height: inherit;
	width: inherit;
`;

const ToggledOffLanding = styled(motion.aside)`
	${_AppMixins.Commons.flexColCenterW100H100}
	background-color: transparent;
	padding: 3rem;

	@media ${device.tablet} {
		align-items: flex-start;
	}
`;

const OutletContainer = styled(motion.section)`
	${_AppMixins.Commons.flexColCenterW100H100}
	flex-direction: row;
	border-radius: 1rem;
	height: 70%;
	@media ${device.laptop} {
		padding: 0 5%;
		height: 80%;
	}
`;

//MOTION
const _MotionVariants = (toggleContext: boolean): _MotionVariants => {
	return {
		ToggledOn: {
			initial: {
				opacity: 0,
			},
			animate: {
				opacity: toggleContext ? 1 : 0,
				transition: {
					duration: 0.5,
				},
			},
		},
		ToggledOff: {
			initial: {
				opacity: 0,
			},
			animate: {
				opacity: toggleContext ? 0 : 1,
				transition: {
					duration: 0.5,
				},
			},
		},
	};
};

export default App;
