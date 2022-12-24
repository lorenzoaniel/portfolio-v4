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
}

interface _MotionProps {
	disabledState: boolean;
	variant: string;
	numbOfStars?: number;
	starId?: number;
	subComp?: string;
}

interface _ABVariants {
	Main: any;
	Stars: any;
}

interface _MotionVariants {
	initial?: any;
	animate?: any;
}

//COMPONENT

const AnimatedBackground = (props: ABProps) => {
	const { disabledState = true, variant = "default" } = props;
	const numbOfStars = 200; //Change here to change value everywhere in component

	const createStars = () => {
		const starArray = Array(numbOfStars).fill(0);
		return starArray.map((curr, index) => {
			return (
				<>
					<_AB.Stars.Star
						{..._MotionProps({
							disabledState,
							variant,
							numbOfStars,
							starId: index,
							subComp: "Star",
						})}
						key={variant + "Star" + index}
						starId={index}
					>
						<_AB.Stars.Tail
							{..._MotionProps({
								disabledState,
								variant,
								numbOfStars,
								starId: index,
								subComp: "Tail",
							})}
							key={variant + "Tail" + index}
						/>
					</_AB.Stars.Star>
				</>
			);
		});
	};

	const createVariant = (variant: string) => {
		switch (variant) {
			case "Stars":
				return <>{createStars()}</>;
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

const _ABVariants: _ABVariants = {
	Main: {
		default: ``,
		Stars: `
      background: radial-gradient(circle, rgba(0,0,0,1)20%, rgba(10,10,10,0.5) 100%);
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;
      overflow: hidden;
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
};

// MOTION

const _MotionVariants = (args: _MotionProps): _MotionVariants => {
	const { variant, numbOfStars = 0, starId = 0, subComp = "default" } = args;
	const rangeOfValues = 100; // in relation to x and y percentage of screen you want to use

	const starsConfig = {
		// takes starId which is an index and calculates random values from highest to lowest
		xValues:
			Math.floor(Math.random() * rangeOfValues) +
			(1 - (numbOfStars - starId) / numbOfStars) * rangeOfValues,
		// takes starId which is an index and calculates random values from lowest to highest
		yValues:
			Math.floor(Math.random() * (1 - starId / numbOfStars) * rangeOfValues) +
			(1 - starId / numbOfStars),
		defaultTransition: {
			duration: (starId / numbOfStars) * 10, // percantage of travelDuration seconds
			repeat: Infinity,
			delay: ((numbOfStars - starId) / numbOfStars) * 10,
		},
	};

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
		},
	};
};

const _MotionProps = (args: _MotionProps): _MotionVariants => {
	switch (args.variant) {
		case "Stars":
			return {
				initial:
					_MotionVariants(args).initial[args.variant as keyof _MotionVariants][
						args.subComp as keyof _MotionVariants
					],
				animate: args.disabledState
					? ""
					: _MotionVariants(args).animate[args.variant as keyof _MotionVariants][
							args.subComp as keyof _MotionVariants
					  ],
			};

		default:
			return {
				initial: _MotionVariants(args).initial.default[args.variant as keyof _MotionVariants],
				animate: args.disabledState
					? ""
					: _MotionVariants(args).animate.default[args.variant as keyof _MotionVariants],
			};
	}
};

export default AnimatedBackground;
