import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../components/Heading";

import { useAppSelector } from "../store/hooks";
import { selectPagesInfo } from "../store/slices/pagesInfoSlice";
import Navmenu from "../components/Navmenu";
import Button from "../components/Button";

const About = () => {
	const infoContext = useAppSelector(selectPagesInfo);
	const [testState, useTestState] = useState(false); //for testing

	return (
		<_About.Main>
			<_About.Header>
				<Heading titleProp={infoContext.About.ALittleBitAboutMeHeading.Title} />
				<Navmenu
					toggleStateTest={testState}
					clickHandleTest={() => {
						useTestState((curr) => !curr);
					}}
					variant={"AboutPage"}
				>
					{testState && (
						<>
							<Button nameProp={"Test1"} variant={"AboutPage"} />
							<Button nameProp={"Test2"} variant={"AboutPage"} />
							<Button nameProp={"Test3"} variant={"AboutPage"} />
						</>
					)}
				</Navmenu>
			</_About.Header>
		</_About.Main>
	);
};

const _About = {
	Main: styled.section`
		background-image: linear-gradient(
			to left,
			rgba(20, 20, 20, 0.5),
			rgba(10, 80, 80, 0.5),
			rgba(20, 150, 150, 0.5)
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
		box-shadow: 0 0 1rem 0.5rem rgba(70, 255, 255, 0.5),
			0 0 1rem 0.5rem rgba(70, 150, 150, 0.7) inset;
		backdrop-filter: blur(1rem);

		color: black;
		font-size: 3rem;
	`,
	Header: styled.aside`
		background: red;
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		border-radius: 1rem;
	`,
};

export default About;
