import React from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { aboutTopicNavToggle, selectPagesInfo } from "../store/slices/pagesInfoSlice";

import Navmenu from "../components/Navmenu";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { AppPageThemes } from "../styles/themes/AppPageThemes";
import { motion } from "framer-motion";

const About = () => {
	const infoContext = useAppSelector(selectPagesInfo);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const NavmenuToggleState = infoContext.About.NavmenuToggleState;
	let currentURL = useLocation().pathname.slice(7);

	const createAboutTheme = (currUrl: string) => {
		let aboutThemeKey = currUrl ? currUrl : "ALittleBitAboutMePage";
		const aboutTheme = AppPageThemes().about.topics[aboutThemeKey]; //

		return aboutTheme;
	};

	return (
		//Overides outer ThemeProvider for a provider using the same theme obj but nested property
		<ThemeProvider theme={createAboutTheme(currentURL)}>
			<Main>
				<Header>
					<Heading
						//checks for undefined currentUrl initially and defaults to route index
						titleProp={infoContext.About[currentURL ? currentURL : "ALittleBitAboutMePage"].Title}
						variant={"AboutPage"}
					/>
					<Navmenu variant={"AboutPage"}>
						{NavmenuToggleState && ( //Relies on toggle state to hide and show dropdown menu
							<>
								<Button
									clickHandle={() => {
										dispatch(aboutTopicNavToggle()); //switches toggle state so Navmenu dropdown goes into compact mode when you switch topics
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
};

const Main = styled(motion.section)`
	background: linear-gradient(
		to left,
		var(--About-Cyan-1),
		var(--About-Cyan-2),
		var(--About-Cyan-3)
	);
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	align-self: flex-end;
	border-radius: 2rem;
	padding: 1.5rem;
	box-shadow: 0 0 1rem 0.5rem var(--About-Cyan-5), 0 0 1rem 0.5rem var(--About-Cyan-4) inset;
	backdrop-filter: blur(1rem);

	color: black;
	font-size: 3rem;
`;
const Header = styled(motion.aside)`
	width: 100%;
	height: 20%;
	display: flex;
	border-radius: 1rem;
	margin-bottom: 0.5rem;
	position: relative;
`;

const Content = styled(motion.aside)`
	height: 75%;
	width: 100%;
	display: flex;
	word-wrap: break-word;
`;

export default About;
