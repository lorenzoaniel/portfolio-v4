import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.div)`
	width: clamp(25rem, 50%, 40rem);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 1rem;
`;

export const Cover = styled(motion.div)`
	box-shadow: 0 0 1rem 0.4rem var(--Projects-Indigo-1),
		0 0 1rem 0.4rem var(--Projects-Indigo-5) inset, 0 0 5rem 0.2rem var(--Projects-Indigo-3) inset;
	border: 1rem groove var(--Projects-Indigo-5);
	backdrop-filter: opacity(1) blur(99rem);

	min-height: 10rem;
	width: 100%;
	border-radius: 1rem;
	z-index: 2;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SlideUp = styled(motion.div)`
	background: linear-gradient(var(--Projects-Indigo-2), var(--Projects-Indigo-4));
	box-shadow: 0 0 1rem 0.4rem var(--Projects-Indigo-1),
		0 0 1rem 0.4rem var(--Projects-Indigo-4) inset, 0 0 5rem 0.2rem var(--Projects-Indigo-1) inset;
	border: 1rem groove var(--Projects-Indigo-3);

	height: 20rem;
	width: 90%;
	border-radius: 1rem;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SlideDown = styled(motion.div)`
	background: linear-gradient(var(--Projects-Indigo-3), var(--Projects-Indigo-5));
	box-shadow: 0 0 1rem 0.4rem var(--Projects-Indigo-1),
		0 0 1rem 0.4rem var(--Projects-Indigo-4) inset, 0 0 5rem 0.2rem var(--Projects-Indigo-1) inset;
	border: 1rem groove var(--Projects-Indigo-1);

	height: 10rem;
	width: 90%;
	border-radius: 1rem;
	z-index: 1;
	display: flex;
	padding: 1rem;
	column-gap: 1rem;
`;

export const _MotionVariants = (theme?: any) => {
	return {
		Main: {
			initial: {
				height: "10rem",
			},
			whileHover: {
				height: "40rem",
			},
		},
		Cover: {},
		SlideUp: {
			initial: {
				transform: "translateY(75%) scaleY(0.5)",
			},
			whileHover: {
				transform: "translateY(0%) scaleY(1)",
			},
		},
		SlideDown: {
			initial: {
				transform: "translateY(-100%)",
			},
			whileHover: {
				transform: "translateY(0%)",
			},
		},
	};
};
