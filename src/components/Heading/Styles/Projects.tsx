import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.div)`
	background: linear-gradient(var(--Projects-Indigo-1), var(--Projects-Indigo-3));
	height: fit-content;
	width: fit-content;
	border-radius: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	border: 1rem groove var(--Projects-Indigo-5);
	margin-bottom: 5rem;

	box-shadow: 0 0.3rem 0.5rem 0.5rem var(--Projects-Indigo-5),
		0 0.1rem 1rem 0.5rem var(--Projects-Indigo-5) inset;
`;

export const Content = styled(motion.div)`
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
