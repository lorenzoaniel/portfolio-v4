import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.div)`
	position: absolute;
	height: 100%;
	align-self: center;
	margin-left: 6rem;
	border-radius: 1rem;
`;

export const Content = styled(motion.div)`
	${({ theme }) => `
		background: linear-gradient(${theme.color3}, ${theme.color5});
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
		filter: drop-shadow(0 0.2rem 0.1rem ${theme.color1});
	`}
`;

export const TopicMain = styled(Main)`
	${({ theme }) => `
		background: linear-gradient(${theme.color5}, ${theme.color3});
		position: static;
		margin: 0;
		width: 100%;
	`}
`;

export const TopicContent = styled(Content)`
	text-decoration: none;
`;
