import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Outlet, Routes, Route, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import { selectToggle, toggle } from "./store/slices/appToggleSlice";
import { selectHomeInfo } from "./store/slices/homePageSlice";
import { selectPagesInfo } from "./store/slices/pagesInfoSlice";

import { GlobalStyle } from "./styles/GlobalStyles";
import { device } from "./styles/breakpoints";

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

const appLandingTitleContext = "Explore My Portfolio!"; //maybe add feature that lets this switch different languages

interface _MotionVariants {
	initial: any;
	animate: any;
}

const App = () => {
	//logic
	const dispatch = useAppDispatch();
	const toggleContext = useAppSelector(selectToggle);
	const navMenuContext = useAppSelector(selectHomeInfo);
	const infoContext = useAppSelector(selectPagesInfo);
	const navigate = useNavigate();
	const currDimensionContext = useCurrentDimension();

	const createNav = (disabled: boolean = navMenuContext.navmenuconfig.disabled) => {
		const arrayLength = navMenuContext.navmenuconfig.nameProp.length;
		const clickNavigate = (index: number) => {
			navigate(navMenuContext.routeListState[index]);
		};

		return Array(arrayLength)
			.fill(0)
			.map((curr, index) => {
				return disabled ? (
					<Button
						{...navMenuContext.navmenuconfig}
						key={nanoid()}
						disabled={disabled}
						nameProp={navMenuContext.navmenuconfig.nameProp[index]}
					/>
				) : (
					<Button
						{...navMenuContext.navmenuconfig}
						clickHandle={() => clickNavigate(index)}
						key={nanoid()}
						disabled={disabled}
						nameProp={navMenuContext.navmenuconfig.nameProp[index]}
					/>
				);
			});
	};

	//Route PROPS OBJECT Destructured during render
	const RouteProps = {
		Nav: {
			path: "/",
			element:
				currDimensionContext.width >= 1024 ? (
					<>
						<Navmenu>
							{[
								<Button
									key={nanoid()}
									nameProp={""}
									variant={"AppToggle"}
									toggleState={toggleContext}
									clickHandle={() => {
										dispatch(toggle());
									}}
								/>,
								createNav(false),
							]}
						</Navmenu>
						<_App.OutletContainer>
							<Outlet />
						</_App.OutletContainer>
					</>
				) : (
					<>
						<Button
							nameProp={""}
							variant={"AppToggle"}
							toggleState={toggleContext}
							mainTheme={{}} //FILL WITH APPPAGETHEMES
							clickHandle={() => {
								dispatch(toggle());
							}}
						/>
						<_App.OutletContainer>
							<Outlet />
						</_App.OutletContainer>
						<Carousel mainTheme={{}} navMode={true}>
							{createNav()}
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
		<>
			<GlobalStyle />
			<_App.Main>
				<_App.ToggledOff.Main {..._MotionProps(toggleContext, "ToggledOff")}>
					<AnimatedBackground disabledState={toggleContext} variant={"Stars"} />

					<_App.ToggledOff.Wrapper>
						<Button
							nameProp={""}
							variant={"AppToggle"}
							toggleState={toggleContext}
							clickHandle={() => {
								dispatch(toggle());
							}}
						/>
						<Heading titleProp={appLandingTitleContext} variant={"Landing"} />
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
		</>
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
			row-gap: 5%;
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
		height: 65%;
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
