import React, { useState } from "react";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { selectPagesInfo } from "../../store/slices/pagesInfoSlice";

import Navmenu from "../../components/Navmenu";
import Button from "../../components/Button";
import Heading from "../../components/Heading";

const About = () => {
	const infoContext = useAppSelector(selectPagesInfo);
	const navigate = useNavigate();
	const [testState, useTestState] = useState(false); //for testing transfer to store

	return (
		<_About.Main>
			<_About.Header>
				<Heading titleProp={infoContext.About.ALittleBitAboutMePage.Title} variant={"AboutPage"} />
				<Navmenu
					toggleState={testState}
					clickHandle={() => {
						useTestState((curr) => !curr);
					}}
					variant={"AboutPage"}
				>
					{testState && (
						<>
							<Button
								clickHandle={() => {
									useTestState((curr) => !curr);
									navigate(infoContext.About.ALittleBitAboutMePage.Path);
								}}
								nameProp={infoContext.About.ALittleBitAboutMePage.Title}
								variant={"AboutPage"}
							/>

							<Button
								clickHandle={() => {
									useTestState((curr) => !curr);
									navigate(infoContext.About.ALittleBitAboutTheSite.Path);
								}}
								nameProp={infoContext.About.ALittleBitAboutTheSite.Title}
								variant={"AboutPage"}
							/>

							<Button
								clickHandle={() => {
									useTestState((curr) => !curr);
									navigate(infoContext.About.ALittleBitAboutTheSourcesAndInspirations.Path);
								}}
								nameProp={infoContext.About.ALittleBitAboutTheSourcesAndInspirations.Title}
								variant={"AboutPage"}
							/>
						</>
					)}
				</Navmenu>
			</_About.Header>
			<_About.Content>
				<Outlet />
			</_About.Content>
		</_About.Main>
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
		max-height: 7rem;
		display: flex;
		/* flex-direction: column; */
		border-radius: 1rem;
		margin-bottom: 0.5rem;
		position: relative;
	`,
	Content: styled.aside`
		background: orange;
		height: 100%;
		width: 100%;
	`,
};

export default About;
