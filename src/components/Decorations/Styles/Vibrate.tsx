import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.div)`
	height: 100%;
	width: fit-content;
`;

export const MainReverse = styled(Main)`
	svg {
		transform: rotateY(180deg);
	}
`;

export const _MotionVariants = () => {
	return {
		Spaceship: {
			transform: ["translateY(0.5rem)", "translateY(0rem)", "translateY(-0.5rem)"],
			transition: {
				duration: 0.2,
				repeat: Infinity,
				repeatType: "reverse",
			},
		},
		Exhaust: {
			transform: ["translateY(0.5rem)", "translateY(0rem)", "translateY(-0.5rem)"],
			transition: {
				duration: 0.1,
				repeat: Infinity,
				repeatType: "reverse",
			},
		},
	};
};
