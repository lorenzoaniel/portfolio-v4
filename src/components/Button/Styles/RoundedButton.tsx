import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.button)`
	background: radial-gradient(var(--Projects-Orange-3), var(--Projects-Orange-5));
	border: none;
	height: 5rem;
	width: 15rem;
	border-radius: 2rem;
	box-shadow: 0 0 0.5rem 0.1rem var(--Projects-Orange-1),
		0 0 0.5rem 0.1rem var(--Projects-Orange-2) inset;

	font-size: 2rem;
	font-weight: 700;
	text-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 1);
	opacity: 0.5; //transfer to motion
`;

export const _MotionVariants = (theme: any) => {
	return {
		Main: {
			initial: {},
			animate: {},
		},
	};
};