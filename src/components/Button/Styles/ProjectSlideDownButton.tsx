import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.button)`
	background: linear-gradient(var(--Projects-Orange-3), var(--Projects-Orange-5));
	box-shadow: 0 0 1rem 0.4rem var(--Projects-Orange-1),
		0 0 0.5rem 0.4rem var(--Projects-Orange-4) inset,
		0 0 2.5rem 0.2rem var(--Projects-Orange-1) inset;
	border-radius: 1rem;
	height: 95%;
	width: fit-content;
	padding: 0.5rem;
`;

export const Title = styled(motion.p)`
	background: linear-gradient(var(--Projects-Orange-3), var(--Projects-Orange-5));
	font-size: clamp(3rem, 50%, 5rem);
	font-weight: 900;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const _MotionVariants = (theme: any) => {
	return {
		Title: {},
		Main: {
			initial: {
				textShadow: "0 0.2rem 0.1rem var(--Projects-Orange-2)",
				border: "0.5rem groove var(--Projects-Orange-5)",
			},
			whileHover: {
				textShadow: "0 0.1rem 0.8rem var(--Projects-Orange-2)",
				border: "0.5rem groove var(--Projects-Orange-3)",
			},
			whileTap: {
				textShadow: "0 0.3rem 0.3rem var(--Projects-Orange-1)",
				border: "0.5rem groove var(--Projects-Orange-5)",
				transition: {
					delay: 0.1,
				},
			},
		},
	};
};
