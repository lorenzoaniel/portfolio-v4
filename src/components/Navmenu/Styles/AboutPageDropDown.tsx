import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.div)`
	height: fit-content;
	width: 100%;
	display: flex;
	position: relative;
	margin: auto 0;
	z-index: 4;
`;

export const List = styled(motion.div)`
	height: fit-content;
	width: fit-content;
	display: flex;
	flex-direction: column;
`;

export const _MotionVariants = () => {
	return {
		//ORCHESTRATING CHILD COMPS
		initial: {},
		toggleOff: {
			transition: {
				duration: 0.5,
				staggerChildren: 0.3,
				staggerDirection: -1,
			},
		},
		toggleOn: {
			transition: {
				duration: 0.5,
				staggerChildren: 0.3,
			},
		},
	};
};
