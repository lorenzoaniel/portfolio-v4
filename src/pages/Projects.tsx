import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import useCurrentDimension from "../helpers/useCurrentDimension";

const Projects = () => {
	const currentWidth = useCurrentDimension().width;

	const motionProps = {
		initial: "initial",
		animate: currentWidth >= 1024 ? "animate" : "whileHover",
		whileHover: "whileHover",
		exit: "exit",
	};

	return (
		<Main>
			<ProjectMain {...motionProps} variants={_MotionVariants().ProjectMain}>
				<ProjectSlideUp variants={_MotionVariants().ProjectSlideUp}></ProjectSlideUp>
				<ProjectCover>
					<Paragraph data={"TENZIES"} variant={"ProjectCover"} />
				</ProjectCover>
				<ProjectSlideDown variants={_MotionVariants().ProjectSlideDown}>
					<Button variant={"ProjectSlideDownButton"}>{"Github Code"}</Button>
				</ProjectSlideDown>
			</ProjectMain>
		</Main>
	);
};

const Main = styled(motion.section)`
	/* background: linear-gradient(
		to left,
		var(--Projects-Orange-1),
		var(--Projects-Orange-2),
		var(--Projects-Orange-3)
	); */
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: flex-end;
	border-radius: 2rem;
	padding: 5%;
	row-gap: 5rem;
	box-shadow: 0 0 1rem 0.5rem var(--Projects-Orange-5),
		0 0 1rem 0.5rem var(--Projects-Orange-5) inset;
	backdrop-filter: blur(1rem);
	overflow-y: scroll; //since it is flex row
	scrollbar-width: thin;

	color: black;
	font-size: 3rem;
`;

const ProjectMain = styled(motion.div)`
	width: clamp(30rem, 50%, 50rem);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 1rem;
`;

const ProjectCover = styled(motion.div)`
	/* background: linear-gradient(var(--Projects-Indigo-1), var(--Projects-Indigo-3)); */
	box-shadow: 0 0 1rem 0.4rem var(--Projects-Indigo-1),
		0 0 1rem 0.4rem var(--Projects-Indigo-4) inset, 0 0 5rem 0.2rem var(--Projects-Indigo-1) inset;
	border: 1rem groove var(--Projects-Indigo-5);
	backdrop-filter: opacity(1) blur(2rem);

	min-height: 10rem;
	width: 100%;
	border-radius: 1rem;
	z-index: 2;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const ProjectSlideUp = styled(motion.div)`
	background: linear-gradient(var(--Projects-Indigo-2), var(--Projects-Indigo-4));
	box-shadow: 0 0 1rem 0.4rem var(--Projects-Indigo-1),
		0 0 1rem 0.4rem var(--Projects-Indigo-4) inset, 0 0 5rem 0.2rem var(--Projects-Indigo-1) inset;
	border: 1rem groove var(--Projects-Indigo-3);

	height: 20rem;
	width: 90%;
	border-radius: 1rem;
	z-index: 1;
`;

const ProjectSlideDown = styled(motion.div)`
	background: linear-gradient(var(--Projects-Indigo-3), var(--Projects-Indigo-5));
	box-shadow: 0 0 1rem 0.4rem var(--Projects-Indigo-1),
		0 0 1rem 0.4rem var(--Projects-Indigo-4) inset, 0 0 5rem 0.2rem var(--Projects-Indigo-1) inset;
	border: 1rem groove var(--Projects-Indigo-1);

	height: 10rem;
	width: 90%;
	border-radius: 1rem;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const _MotionVariants = (theme?: any) => {
	return {
		ProjectMain: {
			initial: {
				height: "10rem",
			},
			whileHover: {
				height: "40rem",
			},
		},
		ProjectSlideUp: {
			initial: {
				transform: "translateY(75%) scaleY(0.5)",
			},
			whileHover: {
				transform: "translateY(0%) scaleY(1)",
				background: "none",
			},
		},
		ProjectSlideDown: {
			initial: {
				transform: "translateY(-100%)",
			},
			whileHover: {
				transform: "translateY(0%)",
				background: "none",
			},
		},
	};
};

export default Projects;
