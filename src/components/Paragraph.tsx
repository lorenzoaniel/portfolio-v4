import { motion } from "framer-motion";
import React, { useMemo } from "react";
import styled from "styled-components";

interface PProps {
	variant: string;
	data: string;
}

const Paragraph = (props: PProps) => {
	const { data, variant = "default" } = props;

	const createVariant = (variant: string) => {
		switch (variant) {
			case "HomePage":
				return <HomePage>{data}</HomePage>;
			case "AboutPage":
				return <AboutPage>{data}</AboutPage>;
		}
	};

	//RENDER
	return <>{createVariant(variant)}</>;
};

//STYLE
const HomePage = styled(motion.div)`
	background-image: linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(230, 230, 230, 0.5));
	width: 100%;
	height: 15rem;
	display: flex;

	border-radius: 2rem;
	box-shadow: 0 0 1rem 0.5rem rgba(255, 255, 255, 0.5),
		0 0 1rem 0.5rem rgba(150, 150, 150, 0.7) inset;

	padding: 2rem;
	font-size: 3rem;
	font-family: var(--roboticFont);
	font-weight: 500;
	color: rgba(10, 10, 10, 1);
	text-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.7);
`;

const AboutPage = styled(motion.div)`
	width: fit-content;
	height: fit-content;
	font-size: 30%; //clamp(5%, 2rem, 10%)
`;

export default Paragraph;
