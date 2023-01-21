import React from "react";
import styled from "styled-components";
import Heading from "../components/Heading";

import { useAppSelector } from "../store/hooks";
import { selectPagesInfo } from "../store/slices/pagesInfoSlice";
import Navmenu from "../components/Navmenu";
import Button from "../components/Button";

const About = () => {
	const infoContext = useAppSelector(selectPagesInfo);

	return (
		<_About.Main>
			<Heading titleProp={infoContext.About.ALittleBitAboutMeHeading.Title} />
			<Navmenu variant={"AboutPage"}>
				<Button nameProp={"Test1"} variant={"glassButton"} />
				<Button nameProp={"Test2"} variant={"glassButton"} />
			</Navmenu>
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
		justify-content: center;
		align-items: center;
		align-self: flex-end;
		border-radius: 2rem;
		box-shadow: 0 0 1rem 0.5rem rgba(70, 255, 255, 0.5),
			0 0 1rem 0.5rem rgba(70, 150, 150, 0.7) inset;
		backdrop-filter: blur(1rem);

		color: black;
		font-size: 3rem;
	`,
};

export default About;
