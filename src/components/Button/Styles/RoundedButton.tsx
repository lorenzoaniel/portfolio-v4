import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.button)`
	position: absolute;
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
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const _MotionVariants = () => {
	return {
		Main: {
			initial: {
				opacity: 0.7,
				boxShadow: "0 1rem 1rem 0.2rem rgba(0,0,0,0)",
				transform: "translateY(0rem)",
			},
			animate: {},
			whileHover: {
				background: "radial-gradient(var(--Projects-Orange-1), var(--Projects-Orange-3))",
				boxShadow: "0 0.5rem 1rem 0.2rem rgba(0,0,0,0.8)",
				opacity: 1,
				transform: "translateY(-0.5rem)",
				transition: {
					duration: 0.5,
					ease: "easeInOut",
				},
			},
			whileTap: {
				boxShadow: "0 1rem 1rem 0.2rem rgba(0,0,0,0)",
				transform: "translateY(0rem)",
			},
		},
	};
};
