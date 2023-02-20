import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.div)`
	position: absolute;
	height: clamp(66.7rem, 100%, 100vh);
	width: 100%;
	z-index: -1;
	overflow: hidden;
`;

export const Planet = styled(motion.div)`
	position: absolute;
	z-index: -1;
	border-radius: 50%;
	filter: blur(0.5rem);
`;

export const _MotionVariants = (numbOfMaterial = 0, materialId = 0, theme: any) => {
	const createPlanetsConfig = () => {
		const dimensionRange = {
			start: 5,
			end: 15,
		};

		return {
			randomColorNumber: Math.floor(Math.random() * 6) + 1,
			randomDimension:
				Math.floor(Math.random() * (dimensionRange.end - dimensionRange.start + 1)) +
				dimensionRange.start,
			defaultTransition: {
				duration: 40,
				repeat: Infinity,
				repeatType: "loop",
				delay: ((numbOfMaterial - materialId) / numbOfMaterial) * 10,
			},
			mainTransition: {
				duration: 5,
				repeat: Infinity,
				repeatType: "reverse",
				delay: 0,
				ease: "linear",
			},
			glowTransition: {
				background: {
					duration: 2,
					repeat: Infinity,
					repeatType: "reverse",
					delay: 0,
				},
				boxShadow: {
					duration: 2,
					repeat: Infinity,
					repeatType: "reverse",
					delay: 0,
				},
			},
		};
	};

	const planetsConfig = createPlanetsConfig();

	return {
		Main: {
			initial: {
				background: `radial-gradient(circle, rgba(0,0,0,0.4) 40%, rgba(10,10,10,0.6) 60%, rgba(20,20,20,0.9) 90%)`,
			},
			animate: {
				background: [
					`radial-gradient(circle, rgba(0,0,0,0.4) 40%, rgba(80,80,80,0.6) 60%, rgba(20,20,20,0.9) 90%)`,
					`radial-gradient(circle, rgba(0,0,0,0.4) 5%, rgba(80,80,80,0.6) 30%, rgba(20,20,20,0.9) 90%)`,
				],
				transition: planetsConfig.mainTransition,
			},
		},
		Planet: {
			initial: {
				top: `10%`,
				right: `5%`,
				height: `${planetsConfig.randomDimension}vw`,
				width: `${planetsConfig.randomDimension}vw`,
				opacity: 0,
				background: `radial-gradient(circle, ${theme.color5} 20%, ${theme.color3} 100%)`,
				boxShadow: `0rem 0rem 0.5rem 1rem rgba(230, 230, 230, 0.8), 0rem 0rem 0.5rem 0rem rgba(230, 230, 230, 0.8) inset`,
			},
			animate: {
				//value group pattern top-3, right-2, opacity-4, scale-4 ex: top[20,65,35], right[10,80], opacity[1,1,1,0], scale[1, 2, 0.2, 0,]
				top: ["20%", "55%", "35%", "30%", "55%", "45%", "35%", "55%", "20%"],
				right: ["10%", "80%", "15%", "75%", "15%", "10%"],
				opacity: [1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
				scale: [1, 2, 0.2, 0, 0, 2, 0.2, 0, 0, 0.2, 2, 1],
				background: [
					`radial-gradient(circle, ${theme.color5} 20%, ${theme.color3} 100%)`,
					`radial-gradient(circle, ${theme.color5} 50%, ${theme.color3} 100%)`,
				],
				boxShadow: [
					`0rem 0rem 0.5rem 1rem ${theme.color1} , 0rem 0rem 0.5rem 0rem ${theme.color1}  inset`,
					`0rem 0rem 0.5rem 2rem ${theme.color1} , 0rem 0rem 0.5rem 2rem ${theme.color1}  inset`,
				],
				transition: {
					...planetsConfig.defaultTransition,
					...planetsConfig.glowTransition,
					delay: 0,
				},
			},
		},
	};
};
