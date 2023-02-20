import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.div)`
	height: 10rem;
	width: 10rem;
	display: flex;
	column-gap: 0.3rem;
`;

export const _MotionVariants = () => {
	return {
		Forward: {
			opacity: [0, 0.9, 1, 1, 0.9, 0],
			transform: [
				"translateX(-50vw)",
				"translateX(50vw)",
				"translateX(100vw)",
				"translateX(150vw)",
			],
			transition: {
				duration: 5,
				repeat: Infinity,
				ease: "linear",
			},
		},
		Reverse: {
			opacity: [0, 0.9, 1, 1, 0.9, 0],
			transform: [
				"translateX(150vw)",
				"translateX(100vw)",
				"translateX(50vw)",
				"translateX(-50vw)",
			],
			transition: {
				duration: 5,
				repeat: Infinity,
				ease: "linear",
			},
		},
	};
};
