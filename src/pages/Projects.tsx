import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Projects = () => {
	return (
		<Main>
			<ProjectMain />
			<ProjectMain />
			<ProjectMain />
			<ProjectMain />
		</Main>
	);
};

const Main = styled(motion.section)`
	background: linear-gradient(
		to left,
		var(--Projects-Orange-1),
		var(--Projects-Orange-2),
		var(--Projects-Orange-3)
	);
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: flex-end;
	border-radius: 2rem;
	padding: 1.5rem;
	row-gap: 5rem;
	box-shadow: 0 0 1rem 0.5rem var(--Projects-Orange-5),
		0 0 1rem 0.5rem var(--Projects-Orange-4) inset;
	backdrop-filter: blur(1rem);
	overflow-y: scroll; //since it is flex row
	scrollbar-width: thin;

	color: black;
	font-size: 3rem;
`;

const ProjectMain = styled(motion.div)`
	background: green;
	min-height: 25rem;
	width: 25rem;
`;

export default Projects;
