import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import styled from "styled-components";

export const Main = styled(motion.div)`
	position: absolute;
	height: clamp(66.7rem, 100%, 100vh);
	width: 100%;
	z-index: -1;
	overflow: hidden;
`;

export const Object = styled(motion.div)`
	position: absolute;
	border-radius: 50%;
`;

export const _MotionVariants = (theme: any) => {
	const createPulseConfig = () => {
		return {
			duration: Math.floor(Math.random() * 4) + 2,
			delay: Math.random() * 1,
			colorNumber: Math.floor(Math.random() * 6) + 1,
			randomDimension: Math.floor(Math.random() * 1) + 1, //min max in rems
			randomPOS: {
				x: Math.floor(Math.random() * 101) + 1,
				y: Math.floor(Math.random() * 101) + 1,
			},
		};
	};

	const pulseConfig = createPulseConfig();

	return {
		Main: {},
		Object: {
			initial: {
				height: "1rem",
				width: "1rem",
				top: `${pulseConfig.randomPOS.y}vh`,
				left: `${pulseConfig.randomPOS.x}vw`,
				scale: 1, //cant start at 0 otherwise animation will 'flash' when changing window size or alt tabbing or randomly
				opacity: 1,
				boxShadow: "0 0 0 0 rgba(0,0,0,0)",
			},
			animate: {
				background: `var(${theme.color}${pulseConfig.colorNumber})`,
				scale: [0, 1, 0],
				opacity: 0,
				boxShadow: `0 0 ${pulseConfig.randomDimension}rem 0.${pulseConfig.randomDimension}rem var(${theme.color}${pulseConfig.colorNumber})`,
				transition: {
					duration: pulseConfig.duration,
					delay: pulseConfig.delay,
					repeat: Infinity,
					ease: "easeInOut",
				},
			},
		},
	};
};
