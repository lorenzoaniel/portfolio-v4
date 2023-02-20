import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.div)`
	background-image: linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(230, 230, 230, 0.5));
	width: 100%;
	height: fit-content;
	display: flex;

	border-radius: 2rem;
	box-shadow: 0 0 1rem 0.5rem var(--Home-Grey-5), 0 0 1rem 0.5rem var(--Home-Grey-5) inset;

	padding: 2rem;
	font-size: 3rem;
	font-family: var(--roboticFont);
	font-weight: 500;
	color: var(--Home-Grey-1);
	text-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 1);
`;
