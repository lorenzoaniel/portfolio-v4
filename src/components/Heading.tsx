import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../styles/breakpoints";

interface HeadingProps {
	titleProp: string;
	variant: string;
}

const Heading = (props: HeadingProps) => {
	const { titleProp, variant = "default" } = props;

	const createVariant = (variant: string) => {
		switch (variant) {
			case "AboutPage":
				return (
					<>
						<AboutPageMain>
							<AboutPageContent>{titleProp}</AboutPageContent>
						</AboutPageMain>
					</>
				);
			case "Landing":
				return <Landing>{titleProp}</Landing>;
			default:
				return;
				<></>;
		}
	};

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
		font-size: 2rem;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	`}
`;

export default Heading;
