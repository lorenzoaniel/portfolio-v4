import React from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { aboutTopicNavToggle, selectPagesInfo } from "../store/slices/pagesInfoSlice";

import Navmenu from "../components/Navmenu";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { AppPageThemes } from "../styles/themes/AppPageThemes";

const About = () => {
	const infoContext = useAppSelector(selectPagesInfo);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const NavmenuToggleState = infoContext.About.NavmenuToggleState;

	let currentURL = useLocation().pathname.slice(7);
	let aboutThemeKey = currentURL ? currentURL : "ALittleBitAboutMePage";
	const aboutTheme = AppPageThemes().about.topics[aboutThemeKey];

	return (
		<ThemeProvider theme={aboutTheme}>
			<_About.Main>
				<_About.Header>
					<Heading
						titleProp={infoContext.About.ALittleBitAboutTheSourcesAndInspirations.Title}
						variant={"AboutPage"}
					/>
					<Navmenu variant={"AboutPage"}>
						{NavmenuToggleState && ( //Relies on toggle state to hide and show dropdown menu
							<>
								<Button
									clickHandle={() => {
										dispatch(aboutTopicNavToggle()); //switches toggle state so Navmenu dropdown goes into compact mode when you switch topics
										navigate(infoContext.About.ALittleBitAboutMePage.Path);
									}}
									variant={"AboutPage"}
								>
									{infoContext.About.ALittleBitAboutMePage.Title}
								</Button>

								<Button
									clickHandle={() => {
										dispatch(aboutTopicNavToggle());
										navigate(infoContext.About.ALittleBitAboutTheSite.Path);
									}}
									variant={"AboutPage"}
								>
									{infoContext.About.ALittleBitAboutTheSite.Title}
								</Button>

								<Button
									clickHandle={() => {
										dispatch(aboutTopicNavToggle());
										navigate(infoContext.About.ALittleBitAboutTheSourcesAndInspirations.Path);
									}}
									variant={"AboutPage"}
								>
									{infoContext.About.ALittleBitAboutTheSourcesAndInspirations.Title}
								</Button>
							</>
						)}
					</Navmenu>
				</_About.Header>
				<_About.Content>
					<Outlet />
				</_About.Content>
			</_About.Main>
		</ThemeProvider>
	);
};

const _About = {
	Main: styled.section`
		background-image: linear-gradient(
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
	`,
	Header: styled.aside`
		/* background: red; */
		width: 100%;
		height: 20%;
		display: flex;
		border-radius: 1rem;
		margin-bottom: 0.5rem;
		position: relative;
	`,
	Content: styled.aside`
		/* background: orange; */
		height: 75%;
		width: 100%;
		display: flex;
		word-wrap: break-word;
	`,
};

export default About;
