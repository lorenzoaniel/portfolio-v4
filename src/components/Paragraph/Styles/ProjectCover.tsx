import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.div)`
	height: 90%;
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Paragraph = styled(motion.p)`
	background: var(--Projects-Indigo-5);
	text-shadow: 0 0.1rem 0.3rem var(--Projects-Indigo-1);
	font-size: 5rem;
	font-weight: 900;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
