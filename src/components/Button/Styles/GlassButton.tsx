import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.button)`
	background: transparent;
	height: 6.5rem;
	width: 20rem;
	border: 0.5rem solid rgba(255, 255, 255, 0.7);
	border-bottom: transparent;
	border-radius: 1.5rem;

	backdrop-filter: blur(1rem);
	box-shadow: 0rem 0rem 0.5rem 0.1rem rgba(255, 255, 255, 0.5);

	color: rgba(255, 255, 255, 0.8);
	font-size: 3rem;
	text-shadow: 0rem 0.1rem 0.5rem rgba(255, 255, 255, 0.5);
	flex-shrink: 0;
`;

export const Themed = styled(Main)`
	${({ theme }) => `
		border: 0.5rem solid ${theme.color3};
		box-shadow: 0rem 0rem 0.6rem 0.4rem ${theme.color5};

		background: linear-gradient(${theme.color1}, ${theme.color5});
		-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
		font-weight: 900;
	`}
`;
