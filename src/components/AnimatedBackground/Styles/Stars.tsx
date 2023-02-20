import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import styled from "styled-components";

export const Main = styled(motion.div)`
	position: absolute;
	height: clamp(66.7rem, 100%, 100vh);
	width: 100%;
	z-index: -1;
	overflow: hidden;
	background: radial-gradient(circle, rgba(0, 0, 0, 1) 20%, rgba(10, 10, 10, 0.5) 100%);
`;

export const Star = styled(motion.div)`
	position: absolute;
	content: "";
	height: 0.2rem;
	width: 0.2rem;
	background: rgba(255, 255, 255, 0.5);
	z-index: -1;
`;

export const Tail = styled(motion.div)`
	width: 100%;
	background: rgba(255, 255, 255, 0.5);
	transform: rotateZ(-135deg);
	border-radius: 50%;
`;

export const _MotionVariants = (numbOfMaterial = 0, materialId = 0) => {
	const createStarsConfig = () => {
		const rangeOfValues = 100; // in relation to x and y percentage of screen you want to use

		return {
			// takes materialId which is an index and calculates random values from highest to lowest
			xValues:
				Math.floor(Math.random() * rangeOfValues) +
				(1 - (numbOfMaterial - materialId) / numbOfMaterial) * rangeOfValues,
			// takes materialId which is an index and calculates random values from lowest to highest
			yValues:
				Math.floor(Math.random() * (1 - materialId / numbOfMaterial) * rangeOfValues) +
				(1 - materialId / numbOfMaterial),
			defaultTransition: {
				duration: (materialId / numbOfMaterial) * 10, // percantage of travelDuration seconds
				repeat: Infinity,
				delay: ((numbOfMaterial - materialId) / numbOfMaterial) * 10,
			},
		};
	};

	const starsConfig = createStarsConfig();

	return {
		Star: {
			initial: {
				top: `${starsConfig.yValues}%`,
				right: `${starsConfig.xValues}%`,
				opacity: 0,
			},
			animate: {
				translateY: [`${starsConfig.yValues}%`, "100%"],
				translateX: [`${starsConfig.xValues}%`, "-100%"],
				opacity: 1,
				transition: starsConfig.defaultTransition,
			},
		},
		Tail: {
			initial: {
				boxShadow: `0rem 0rem 0rem 0rem rgba(255,255,255,0)`,
				height: `0rem`,
				opacity: 0,
			},
			animate: {
				boxShadow: [
					`0rem ${starsConfig.yValues}rem 0.1rem 0.1rem rgba(255,255,255,1)`,
					`0rem 0rem 0rem 0rem rgba(255,255,255,0)`,
				],
				height: [`${starsConfig.yValues}rem`, `${starsConfig.yValues / 2}rem`, `0rem`],
				opacity: [1, 0],
				transition: starsConfig.defaultTransition,
			},
		},
	};
};
