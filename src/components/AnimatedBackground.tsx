import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface ABProps {
	disabledState: boolean;
	variant?: string;
}

interface _ABProps {
	variant?: string;
	starId?: number;
	planetId?: number;
}

interface _MotionProps {
	disabledState: boolean;
	variant: string;
	numbOfMaterial?: number;
	materialId?: number;
	subComp?: string;
}

interface _ABVariants {
	Main: any;
	Stars: any;
	Blackhole: any;
}

interface _MotionVariants {
	initial?: any;
	animate?: any;
}

//COMPONENT

const AnimatedBackground = (props: ABProps) => {
	const { disabledState = true, variant = "default" } = props;

	const createStars = () => {
		const numbOfStars = 200; //Change here to change value everywhere in component
		const starArray = Array(numbOfStars).fill(0);
		return starArray.map((curr, index) => {
			return (
				<>
					<_AB.Stars.Star
						{..._MotionProps({
							disabledState,
							variant,
							numbOfMaterial: numbOfStars,
							materialId: index,
							subComp: "Star",
						})}
						key={variant + index}
						starId={index}
					>
						<_AB.Stars.Tail
							{..._MotionProps({
								disabledState,
								variant,
								numbOfMaterial: numbOfStars,
								materialId: index,
								subComp: "Tail",
							})}
							key={variant + index}
						/>
					</_AB.Stars.Star>
				</>
			);
		});
	};

	const createBlackhole = () => {
		const numbOfPlanets = 1;
		const planetArray = Array(numbOfPlanets).fill(0);
		return planetArray.map((curr, index) => {
			return (
				<>
					<_AB.Blackhole.Planet {..._MotionProps({ disabledState, variant, subComp: "Planet" })} />
				</>
			);
		});
	};

	const createVariant = (variant: string) => {
		switch (variant) {
			case "Stars":
				return <>{createStars()}</>;
			case "Blackhole":
				return <>{createBlackhole()}</>;
			default:
				return <></>;
		}
	};

	return (
		<_AB.Main {..._MotionProps({ disabledState, variant })} variant={variant}>
			{createVariant(variant)}
		</_AB.Main>
	);
};

//STYLES
const _ABMixins = {
	Common: {
		defaultPositioning: `
			position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;
      overflow: hidden;
		`,
	},
};

const _ABVariants: _ABVariants = {
	Main: {
		default: ``,
		Stars: `
			${_ABMixins.Common.defaultPositioning}
      background: radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(10,10,10,0.5) 100%);
    `,
		Blackhole: `
			${_ABMixins.Common.defaultPositioning}
		`,
	},
	Stars: {
		Star: `
      position: absolute;
      content: '';
      height: 0.2rem;
      width: 0.2rem;
      background: rgba(255,255,255,0.5);
      z-index: -1;
    `,
		Tail: `
      width: 100%;
      background: rgba(255,255,255,0.5);
      transform: rotateZ(-135deg);
      border-radius 80%: 
    `,
	},
	Blackhole: {
		Planet: `
			position: absolute;
			z-index: -1;
			border-radius: 50%;
			filter: blur(0.5rem)
		`,
	},
};

const _AB = {
	Main: styled(motion.div)<_ABProps>`
		${(p) => _ABVariants.Main[p.variant as keyof _ABVariants]}
	`,
	Stars: {
		Star: styled(motion.div)<_ABProps>`
			${_ABVariants.Stars.Star}
		`,
		Tail: styled(motion.div)<_ABProps>`
			${_ABVariants.Stars.Tail}
		`,
	},
	Blackhole: {
		Planet: styled(motion.div)<_ABProps>`
			${_ABVariants.Blackhole.Planet}
		`,
	},
};

// MOTION

const _MotionVariants = (args: _MotionProps): _MotionVariants => {
	const { variant, numbOfMaterial = 0, materialId = 0, subComp = "Main" } = args;

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
		initial: {
			default: {
				default: {},
			},
			Stars: {
				Star: {
					top: `${starsConfig.yValues}%`,
					right: `${starsConfig.xValues}%`,
					opacity: 0,
				},
				Tail: {
					boxShadow: `0rem 0rem 0rem 0rem rgba(255,255,255,0)`,
					height: `0rem`,
					opacity: 0,
				},
			},
			Blackhole: {
				Main: {
					background: `radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(20,20,20,1) 60%, rgba(30,30,30,1) 90%)`,
				},
				Planet: {
					top: `10%`,
					right: `5%`,
					height: `${planetsConfig.randomDimension}vw`,
					width: `${planetsConfig.randomDimension}vw`,
					opacity: 0,
					background: `radial-gradient(circle, rgba(254, 204, 0, 1) 20%, rgba(250, 213, 66, 0.5) 100%)`,
					boxShadow: `0rem 0rem 0.5rem 1rem rgba(255, 227, 115, 0.8), 0rem 0rem 0.5rem 0rem rgba(255, 227, 115, 0.8) inset`,
				},
			},
		},
		animate: {
			default: {
				default: {},
			},
			Stars: {
				Star: {
					translateY: [`${starsConfig.yValues}%`, "100%"],
					translateX: [`${starsConfig.xValues}%`, "-100%"],
					opacity: 1,
					transition: starsConfig.defaultTransition,
				},
				Tail: {
					boxShadow: [
						`0rem ${starsConfig.yValues}rem 0.1rem 0.1rem rgba(255,255,255,1)`,
						`0rem 0rem 0rem 0rem rgba(255,255,255,0)`,
					],
					height: [`${starsConfig.yValues}rem`, `${starsConfig.yValues / 2}rem`, `0rem`],
					opacity: [1, 0],
					transition: starsConfig.defaultTransition,
				},
			},
			Blackhole: {
				Main: {
					background: [
						`radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(20,20,20,1) 60%, rgba(30,30,30,1) 90%)`,
						`radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(20,20,20,1) 30%, rgba(30,30,30,1) 90%)`,
					],
					transition: planetsConfig.mainTransition,
				},
				Planet: {
					//value group pattern top-3, right-2, opacity-4 ex: top[20,65,35], right[10,80], opacity[1,1,0,0]
					top: ["20%", "65%", "35%", "30%", "55%", "45%", "35%", "45%", "45%"],
					right: ["10%", "75%", "20%", "70%", "30%", "60%"],
					opacity: [1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
					scale: [1, 2, 0.2, 0, 0, 2, 0.2, 0, 0, 2, 0.2, 0],
					background: [
						`radial-gradient(circle, rgba(254, 204, 0, 1) 20%, rgba(250, 213, 66, 0.5) 100%)`,
						`radial-gradient(circle, rgba(254, 204, 0, 1) 50%, rgba(250, 213, 66, 0.5) 100%)`,
					],
					boxShadow: [
						`0rem 0rem 0.5rem 1rem rgba(255, 227, 115, 0.8), 0rem 0rem 0.5rem 0rem rgba(255, 227, 115, 0.8) inset`,
						`0rem 0rem 0.5rem 2rem rgba(255, 227, 115, 0.8), 0rem 0rem 0.5rem 2rem rgba(255, 227, 115, 0.8) inset`,
					],
					transition: { ...planetsConfig.defaultTransition, ...planetsConfig.glowTransition },
				},
			},
		},
	};
};

const _MotionProps = (args: _MotionProps): _MotionVariants => {
	const { subComp = "Main" } = args;
	switch (args.variant) {
		case "Stars":
			return {
				initial:
					_MotionVariants(args).initial[args.variant as keyof _MotionVariants][
						subComp as keyof _MotionVariants
					],
				animate: args.disabledState
					? ""
					: _MotionVariants(args).animate[args.variant as keyof _MotionVariants][
							subComp as keyof _MotionVariants
					  ],
			};
		case "Blackhole":
			return {
				initial:
					_MotionVariants(args).initial[args.variant as keyof _MotionVariants][
						subComp as keyof _MotionVariants
					],
				animate: args.disabledState
					? _MotionVariants(args).animate[args.variant as keyof _MotionVariants][
							subComp as keyof _MotionVariants
					  ]
					: "",
			};
		default:
			return {
				initial: "",
				animate: args.disabledState ? "" : "",
			};
	}
};

export default AnimatedBackground;
