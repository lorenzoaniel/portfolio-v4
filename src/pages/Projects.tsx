import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

import { useAppSelector } from "../store/hooks";
import { selectPagesInfo } from "../store/slices/pagesInfoSlice";
import { device } from "../styles/breakpoints";

import Heading from "../components/Heading/Heading";
import Display from "../components/Display/Display";

const Projects = () => {
	const infoContext = useAppSelector(selectPagesInfo);

	const createProjects = () => {
		return ["Tenzies", "SaasifyDemo", "GPTDemo", "Portfolio1", "Portfolio2", "Portfolio3"].map(
			(curr) => {
				return (
					<Display key={nanoid()} variant={"ProjectDisplay"}>
						{{
							projectName: infoContext.Projects[curr].name,
							projectDesc: infoContext.Projects[curr].desc,
							projectGithub: infoContext.Projects[curr].github,
							projectImg: infoContext.Projects[curr].img,
							projectUrl: infoContext.Projects[curr].url,
						}}
					</Display>
				);
			}
		);
	};

	//RENDER
	return (
		<Main initial={"initial"} animate={"onPageLoad"} variants={_MotionVariants().Main}>
			<Headers>
				<Heading titleProp={"Projects"} variant={"ProjectMainHeading"} />
			</Headers>
			<Contents>{createProjects()}</Contents>
		</Main>
	);
};

const Main = styled(motion.section)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 2%;

	border-radius: 2rem;
	padding: 3rem;
`;

const Headers = styled(motion.div)`
	width: 100%;
	height: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Contents = styled(motion.div)`
	width: 100%;
	height: 75%;
	overflow-y: scroll; //since it is flex row this overflows X axis
	overflow-x: hidden; //since it is flex row this overflows Y axis
	scrollbar-width: thin;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: flex-end;
	row-gap: 5rem;

	color: black;
	font-size: 3rem;

	@media ${device.tablet} {
		flex-direction: row;
		flex-wrap: wrap;
		column-gap: 5rem;
		justify-content: center;
	}
`;

const _MotionVariants = (theme?: any) => {
	return {
		Main: {
			initial: {
				scale: 0,
			},
			onPageLoad: {
				scale: 1,
			},
		},
	};
};

export default Projects;
