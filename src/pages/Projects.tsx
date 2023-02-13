import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import useCurrentDimension from "../helpers/useCurrentDimension";
import { device } from "../styles/breakpoints";
import Heading from "../components/Heading";

const Projects = () => {
	let currentDimension = useCurrentDimension();

	const motionProps = {
		initial: "initial",
		animate: currentDimension.width >= 820 ? "animate" : "whileHover",
		whileHover: "whileHover",
		exit: "exit",
	};

	console.log("Projects rerendered!");
	//RENDER
	return (
		<Main>
			<Headers>
				<Heading titleProp={"Projects"} variant={"ProjectMainHeading"} />
			</Headers>
			<Contents>
				<ProjectMain {...motionProps} variants={_MotionVariants().ProjectMain}>
					<ProjectSlideUp variants={_MotionVariants().ProjectSlideUp}>test</ProjectSlideUp>
					<ProjectCover>
						<Paragraph data={"TENZIES"} variant={"ProjectCover"} />
					</ProjectCover>
					<ProjectSlideDown variants={_MotionVariants().ProjectSlideDown}>
						<Button variant={"ProjectSlideDownButton"}>{"Github Code"}</Button>
					</ProjectSlideDown>
				</ProjectMain>
				<ProjectMain {...motionProps} variants={_MotionVariants().ProjectMain}>
					<ProjectSlideUp variants={_MotionVariants().ProjectSlideUp}>test</ProjectSlideUp>
					<ProjectCover>
						<Paragraph data={"TENZIES"} variant={"ProjectCover"} />
					</ProjectCover>
					<ProjectSlideDown variants={_MotionVariants().ProjectSlideDown}>
						<Button variant={"ProjectSlideDownButton"}>{"Github Code"}</Button>
					</ProjectSlideDown>
				</ProjectMain>
				<ProjectMain {...motionProps} variants={_MotionVariants().ProjectMain}>
					<ProjectSlideUp variants={_MotionVariants().ProjectSlideUp}>test</ProjectSlideUp>
					<ProjectCover>
						<Paragraph data={"TENZIES"} variant={"ProjectCover"} />
					</ProjectCover>
					<ProjectSlideDown variants={_MotionVariants().ProjectSlideDown}>
						<Button variant={"ProjectSlideDownButton"}>{"Github Code"}</Button>
					</ProjectSlideDown>
				</ProjectMain>
				<ProjectMain {...motionProps} variants={_MotionVariants().ProjectMain}>
					<ProjectSlideUp variants={_MotionVariants().ProjectSlideUp}>test</ProjectSlideUp>
					<ProjectCover>
						<Paragraph data={"TENZIES"} variant={"ProjectCover"} />
					</ProjectCover>
					<ProjectSlideDown variants={_MotionVariants().ProjectSlideDown}>
						<Button variant={"ProjectSlideDownButton"}>{"Github Code"}</Button>
					</ProjectSlideDown>
				</ProjectMain>
			</Contents>
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
	row-gap: 2%;

	border-radius: 2rem;
	padding: 3rem;

	box-shadow: 0 0 1rem 0.5rem var(--Projects-Orange-5),
		0 0 4rem 0.5rem var(--Projects-Orange-5) inset;
	backdrop-filter: blur(1rem);
`;

const Headers = styled(motion.div)`
	/* background: green; */
	width: 100%;
	height: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Contents = styled(motion.div)`
	/* background: yellow; */
	width: 100%;
	height: 75%;
	overflow-y: scroll; //since it is flex row
	scrollbar-width: thin;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: flex-end;
	row-gap: 5rem;
	/* padding: 5%; */

	color: black;
	font-size: 3rem;

	@media ${device.tablet} {
		flex-direction: row;
		flex-wrap: wrap;
		column-gap: 5rem;
		justify-content: center;
	}
`;

const ProjectMain = styled(motion.div)`
	width: clamp(30rem, 50%, 40rem);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 1rem;
`;

const ProjectCover = styled(motion.div)`
	/* background: linear-gradient(var(--Projects-Indigo-1), var(--Projects-Indigo-3)); */
	box-shadow: 0 0 1rem 0.4rem var(--Projects-Indigo-1),
		0 0 1rem 0.4rem var(--Projects-Indigo-5) inset, 0 0 5rem 0.2rem var(--Projects-Indigo-3) inset;
	border: 1rem groove var(--Projects-Indigo-5);
	backdrop-filter: opacity(1) blur(99rem);

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
			},
		},
		ProjectSlideDown: {
			initial: {
				transform: "translateY(-100%)",
			},
			whileHover: {
				transform: "translateY(0%)",
			},
		},
	};
};

export default Projects;
