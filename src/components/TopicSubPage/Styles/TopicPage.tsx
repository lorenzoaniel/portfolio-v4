import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.section)`
	${({ theme }) => `
		background: linear-gradient(${theme.color3}, ${theme.color5});
		height: fit-content;
		width: 100%;

		margin-top: 1rem;
		border-radius: 1rem;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		row-gap: 1.5rem;
		align-items: center;

		line-height: 1.5;
		font-weight: 700;
		text-indent: 5%;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		filter: drop-shadow(0 0.2rem 0.2rem ${theme.color3});

		svg {
			fill: rgba(255, 255, 255, 0.7);
		}
	`}
`;

export const Generic = styled(motion.div)`
	height: fit-content;
	width: fit-content;
`;
