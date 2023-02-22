import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectPagesInfo } from "../store/slices/pagesInfoSlice";

import { AppPageThemes } from "../styles/themes/AppPageThemes";
import { device } from "../styles/breakpoints";

import Navmenu from "../components/Navmenu/Navmenu";
import Button from "../components/Button/Button";
import Heading from "../components/Heading/Heading";
import { motion } from "framer-motion";
import { aboutTopicNavToggle, selectAboutToggle } from "../store/slices/aboutToggleSlice";

interface Props {
	variant?: string;
}

interface _MotionVariants {
	[key: string]: any;
}

const About = (props: Props) => {
	const { variant = "default" } = props;

	const infoContext = useAppSelector(selectPagesInfo);
	const navigate = useNavigate();

	const NavmenuToggleState = useAppSelector(selectAboutToggle);
	const dispatch = useAppDispatch();
	let currentURL = useLocation().pathname.slice(7);

	//used to create a new theme that takes data from a nested portion of AppPageThemes, specifically the topics section
	const createAboutTheme = (currUrl: string) => {
		let aboutThemeKey = currUrl ? currUrl : "ALittleBitAboutMePage";
		const aboutTheme = AppPageThemes().about.topics[aboutThemeKey];

		return aboutTheme;
	};

	const createVariant = (variant: string) => {
		let motionProps: any = {
			initial: "initial",
		};

		switch (variant) {
			default:
				motionProps = {
					...motionProps,
					animate: "onPageLoad",
				};

				return (
					//Overides outer ThemeProvider for a provider using the same theme obj but nested property
					<ThemeProvider theme={createAboutTheme(currentURL)}>
						<Main {...motionProps} variants={_MotionVariants().Main}>
							<Header>
								<Heading
									//checks for undefined currentUrl initially and defaults to route index
									titleProp={
										infoContext.About[currentURL ? currentURL : "ALittleBitAboutMePage"].Title
									}
									variant={"AboutPage"}
								/>
								<Navmenu variant={"AboutPage"}>
									{NavmenuToggleState && ( //Relies on toggle state to hide and show dropdown menu
										<>
											<Button
												clickHandle={() => {
													dispatch(aboutTopicNavToggle()); //closes dropdown when a topic is selected
													navigate(infoContext.About.ALittleBitAboutMePage.Path); //onClick navigates to appropriate topic page
												}}
												variant={"AboutPageDropDownList"}
											>
												{infoContext.About.ALittleBitAboutMePage.Title}
											</Button>

											<Button
												clickHandle={() => {
													dispatch(aboutTopicNavToggle());
													navigate(infoContext.About.ALittleBitAboutTheSite.Path);
												}}
												variant={"AboutPageDropDownList"}
											>
												{infoContext.About.ALittleBitAboutTheSite.Title}
											</Button>

											<Button
												clickHandle={() => {
													dispatch(aboutTopicNavToggle());
													navigate(infoContext.About.ALittleBitAboutTheSourcesAndInspirations.Path);
												}}
												variant={"AboutPageDropDownList"}
											>
												{infoContext.About.ALittleBitAboutTheSourcesAndInspirations.Title}
											</Button>
										</>
									)}
								</Navmenu>
							</Header>
							<Content>
								<Outlet />
							</Content>
						</Main>
					</ThemeProvider>
				);
		}
	};

	return <>{createVariant(variant)}</>;
};

//STYLE
const Main = styled(motion.section)`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	align-self: flex-end;
	border-radius: 2rem;
	padding: 1.5rem;

	color: black;
	font-size: 3rem;

	@media ${device.tablet} {
		padding: 1.5% 2.5%;
	}
`;

const Header = styled(motion.aside)`
	width: 100%;
	height: 20%;
	display: flex;
	border-radius: 1rem;
	margin-bottom: 0.5rem;
	position: relative;

	@media ${device.tablet} {
		justify-content: center;
	}
`;

const Content = styled(motion.aside)`
	height: 75%;
	width: 100%;
	display: flex;
	overflow-y: scroll;
	overflow-x: hidden;
	scrollbar-width: thin;

	@media ${device.tablet} {
	}
`;

//MOTION
const _MotionVariants = (): _MotionVariants => {
	return {
		Main: {
			initial: {
				opacity: 0,
			},
			onPageLoad: {
				opacity: 1,
				transition: {
					duration: 0.5,
				},
			},
		},
	};
};

export default About;
