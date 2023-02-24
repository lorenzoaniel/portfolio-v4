import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.div)`
	height: 100%;
	width: 100%;
	position: relative;
`;

export const Frame = styled(motion.div)`
	height: fit-content;
	width: fit-content;

	&:hover {
		cursor: crosshair;
	}
`;

export const Poke = styled(motion.div)`
	//used to trigger poke animation
	/* background: orange; */
	position: absolute;
	height: 1%;
	width: 1%;
	top: 50%;
	left: 15rem;
	border-radius: 50%;
	/* z-index: -1; */
`;

export const _MotionVariants = () => {
	return {
		Frame: {
			animate: {
				//Floating animation
				transition: {
					duration: 4,
					type: "spring",
					mass: 100,
					stiffness: 200,
					damping: 50,
				},
			},
			poke: {
				//Pulse of light when clicking astronaut
				boxShadow: [
					"0 0 0 0em rgba(255, 255, 255, 0)",
					"0 0 0 3em rgba(255, 255, 255, 0.1)",
					"0 0 0 0em rgba(255, 255, 255, 0)",
				],
				scale: [1, 1.5, 1],
				transition: {
					duration: 0.4,
				},
			},
		},
	};
};
