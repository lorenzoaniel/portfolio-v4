import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";

interface ABProps {
	variant?: string;
}

interface _MotionProps {
	numbOfMaterial?: number;
	materialId?: number;
}

interface _ABVariants {
	Main: any;
	Stars: any;
	Blackhole: any;
}

//COMPONENT

const AnimatedBackground = (props: ABProps) => {
	const { variant = "default" } = props;

	const createStars = () => {
		const numbOfStars = 200; //Change here to change value everywhere in component
		const starArray = Array(numbOfStars).fill(0);

		return starArray.map((curr, index) => {
			let motionProps = {
				initial: "initial",
				animate: "animate",
			};

			return (
				<StarsStar
					{...motionProps}
					variants={
						_MotionVariants({
							numbOfMaterial: numbOfStars,
							materialId: index,
						}).Stars.Star
					}
					key={nanoid()}
				>
					<StarsTail
						{...motionProps}
						{..._MotionVariants({
							numbOfMaterial: numbOfStars,
							materialId: index,
						}).Stars.Tail}
						key={nanoid()}
					/>
				</StarsStar>
			);
		});
	};

	const createBlackhole = () => {
		let motionProps = {
			initial: "initial",
			animate: "animate",
		};
		const numbOfPlanets = 1;
		const planetArray = Array(numbOfPlanets).fill(0);
		return planetArray.map((curr, index) => {
			return (
				<BlackholePlanet
					{...motionProps}
					//@ts-ignore
					variants={
						_MotionVariants({ numbOfMaterial: numbOfPlanets, materialId: index }).Blackhole.Planet
					}
					key={nanoid()}
				/>
			);
		});
	};

	const createVariant = (variant: string) => {
		let motionProps = {
			initial: "initial",
			animate: "animate",
		};
		switch (variant) {
			case "Stars":
				return <StarsMain key={nanoid()}>{createStars()}</StarsMain>;
			case "Blackhole":
				return (
					<BlackholeMain
						{...motionProps}
						//@ts-ignore
						variants={_MotionVariants({ numbOfMaterial: 0, materialId: 0 }).Blackhole.Main}
						key={nanoid()}
					>
						{createBlackhole()}
					</BlackholeMain>
				);
			default:
				return <></>;
		}
	};

	console.log("AnimateBackground rerendered!");
	//RENDER
	return <>{createVariant(variant)}</>;
};

//STYLES
const _ABMixins = {
	Common: {
		defaultPositioning: `
			position: absolute;
      height: clamp(66.7rem, 100%, 100vh);
      width: 100%;
      z-index: -1;
      overflow: hidden;
		`,
	},
};

const StarsMain = styled(motion.div)`
	${_ABMixins.Common.defaultPositioning}
	background: radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(10,10,10,0.5) 100%);
`;

const StarsStar = styled(motion.div)`
	position: absolute;
	content: "";
	height: 0.2rem;
	width: 0.2rem;
	background: rgba(255, 255, 255, 0.5);
	z-index: -1;
`;

const StarsTail = styled(motion.div)`
	width: 100%;
	background: rgba(255, 255, 255, 0.5);
	transform: rotateZ(-135deg);
	border-radius: 50%;
`;

const BlackholeMain = styled(motion.div)`
	${_ABMixins.Common.defaultPositioning}
`;

const BlackholePlanet = styled(motion.div)`
	position: absolute;
	z-index: -1;
	border-radius: 50%;
	filter: blur(0.5rem);
`;

// MOTION
const _MotionVariants = (args: _MotionProps) => {
	const { numbOfMaterial = 0, materialId = 0 } = args;

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

	const createPlanetsConfig = () => {
		const dimensionRange = {
			start: 5,
			end: 15,
		};

		return {
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

	const starsConfig = createStarsConfig();
	const planetsConfig = createPlanetsConfig();

	return {
		Stars: {
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
		},
		Blackhole: {
			Main: {
				initial: {
					background: `radial-gradient(circle, rgba(0,0,0,0.4) 40%, rgba(10,10,10,0.6) 60%, rgba(20,20,20,0.9) 90%)`,
				},
				animate: {
					background: [
						`radial-gradient(circle, rgba(0,0,0,0.4) 40%, rgba(10,10,10,0.6) 60%, rgba(20,20,20,0.9) 90%)`,
						`radial-gradient(circle, rgba(0,0,0,0.4) 5%, rgba(10,10,10,0.6) 30%, rgba(20,20,20,0.9) 90%)`,
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
					background: `radial-gradient(circle, rgba(240, 240, 240, 1) 20%, rgba(255, 255, 255, 0.5) 100%)`,
					boxShadow: `0rem 0rem 0.5rem 1rem rgba(230, 230, 230, 0.8), 0rem 0rem 0.5rem 0rem rgba(230, 230, 230, 0.8) inset`,
				},
				animate: {
					//value group pattern top-3, right-2, opacity-4 ex: top[20,65,35], right[10,80], opacity[1,1,0,0]
					top: ["20%", "55%", "35%", "30%", "55%", "45%", "35%", "55%", "20%"],
					right: ["10%", "80%", "15%", "75%", "15%", "10%"],
					opacity: [1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
					scale: [1, 2, 0.2, 0, 0, 2, 0.2, 0, 0, 0.2, 2, 1],
					background: [
						`radial-gradient(circle, rgba(240, 240, 240, 1) 20%, rgba(255, 255, 255, 0.5) 100%)`,
						`radial-gradient(circle, rgba(240, 240, 240, 1) 50%, rgba(255, 255, 255, 0.5) 100%)`,
					],
					boxShadow: [
						`0rem 0rem 0.5rem 1rem rgba(230, 230, 230, 0.8), 0rem 0rem 0.5rem 0rem rgba(230, 230, 230, 0.8) inset`,
						`0rem 0rem 0.5rem 2rem rgba(230, 230, 230, 0.8), 0rem 0rem 0.5rem 2rem rgba(230, 230, 230, 0.8) inset`,
					],
					transition: {
						...planetsConfig.defaultTransition,
						...planetsConfig.glowTransition,
						delay: 0,
					},
				},
			},
		},
	};
};

export default React.memo(AnimatedBackground);
