import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../styles/breakpoints";

interface HeadingProps {
	titleProp: string;
	variant: string;
	source?: string;
}

const Heading = (props: HeadingProps) => {
	const { titleProp, variant = "default", source = "" } = props;

	const createVariant = (variant: string) => {
		switch (variant) {
			case "AboutTopic":
				return (
					<AboutTopicMain>
						<AboutTopicContent href={source} target={"_blank"} as={"a"}>
							{titleProp}
						</AboutTopicContent>
					</AboutTopicMain>
				);
			case "AboutPage":
				return (
					<AboutPageMain>
						<AboutPageContent>{titleProp}</AboutPageContent>
					</AboutPageMain>
				);
			case "Landing":
				return <Landing>{titleProp}</Landing>;
			case "ProjectMainHeading":
				return (
					<ProjectsMain>
						<ProjectsContent>{titleProp}</ProjectsContent>
					</ProjectsMain>
				);
			default:
				return <></>;
		}
	};

	console.log("Heading rerendered!");
	//RENDER
	return <>{createVariant(variant)}</>;
};

const Landing = styled(motion.h1)`
	margin-top: 5rem;
	font-weight: 200;
	font-size: 4.7rem;
	text-align: center;
	color: #ffffff;
`;

const AboutPageMain = styled(motion.div)`
	${({ theme }) => `
		background: linear-gradient(${theme.color4}, ${theme.color5});
		position: absolute;
		height: 100%;
		align-self: center;
		margin-left: 6rem;
		border-radius: 1rem;

		box-shadow: 0 0.3rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5),
			0 0.1rem 1rem 0.2rem rgba(0, 0, 0, 0.5) inset;
	`}
`;

const AboutPageContent = styled(motion.div)`
	${({ theme }) => `
		background: linear-gradient(${theme.color1}, ${theme.color2});
		text-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 0.4);
		padding: 1rem;
		height: 100%;
		width: 100%;
		font-size: clamp(2rem, 5vw, 5rem);
		font-weight: 700;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	`}
`;

const AboutTopicMain = styled(AboutPageMain)`
	${({ theme }) => `
		background: linear-gradient(${theme.color5}, ${theme.color3});
		position: static;
		margin: 0;
	`}
`;

const AboutTopicContent = styled(AboutPageContent)``;

const ProjectsMain = styled(motion.div)`
	background: linear-gradient(var(--Projects-Indigo-1), var(--Projects-Indigo-3));
	height: fit-content;
	width: fit-content;
	border-radius: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	border: 1rem groove var(--Projects-Indigo-5);

	box-shadow: 0 0.3rem 0.5rem 0.5rem var(--Projects-Indigo-5),
		0 0.1rem 1rem 0.5rem var(--Projects-Indigo-5) inset;
`;

const ProjectsContent = styled(motion.div)`
	background: var(--Projects-Indigo-5);
	height: 100%;
	width: 100%;
	text-shadow: 0 0.2rem 0.3rem var(--Projects-Indigo-1);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	filter: drop-shadow(0 0.2rem 0.2rem rgba(0, 0, 0, 1));
	font-size: 5rem;
	font-weight: 900;
`;

export default Heading;
