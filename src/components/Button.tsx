import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";

import { device } from "../styles/breakpoints";

interface ButtonProps {
	nameProp: string;
	variant?: string;
	disabled?: boolean;
	toggleState?: boolean;
	clickHandle?: () => void;
}

interface _ButtonProps {
	variant: string;
	toggleState?: boolean;
}

interface _ButtonVariants {
	default: any;
	AppToggle: any;
}

interface _MotionVariants {
	default: any;
	AboutPage: any;
	AboutPageNavButton: any;
	AppToggle: any;
}

// COMPONENT

const Button = (props: ButtonProps) => {
	const {
		nameProp,
		clickHandle = () => {
			console.log("No function");
		},
		toggleState = false,
		disabled = false,
		variant = "default",
	} = props;

	const createButton = (nameProp: string, variant: string) => {
		switch (variant) {
			case "AppToggle":
				return (
					<_Button.AppToggle.slider
						key={nanoid()}
						onClick={clickHandle}
						toggleState={toggleState}
						{..._MotionProps(variant, toggleState, "slider")}
					>
						<_Button.AppToggle.button
							key={nanoid()}
							toggleState={toggleState}
							{..._MotionProps(variant, toggleState, "button")}
						></_Button.AppToggle.button>
					</_Button.AppToggle.slider>
				);
			default:
				return (
					<_Button.default
						key={nanoid()}
						{..._MotionProps(variant, toggleState)}
						onClick={clickHandle}
						toggleState={toggleState}
						disabled={disabled}
						variant={variant}
					>
						{nameProp}
					</_Button.default>
				);
		}
	};

	//RENDER
	return <>{createButton(nameProp, variant)}</>;
};

// STYLES

const _ButtonVariants = (toggleState?: boolean): _ButtonVariants => {
	return {
		default: {
			default: ``,
			glassButton: `
				background: transparent;
				height: 6.5rem;
				width: 20rem;
				border: 0.5rem solid rgba(255,255,255,0.7);
				border-bottom: transparent;
				border-radius: 1.5rem;
				
				backdrop-filter: blur(1rem);
				box-shadow: 0rem 0rem 0.5rem 0.1rem rgba(255,255,255,0.5);
				
				color: rgba(255,255,255,0.8);
				font-size: 3rem;
				text-shadow: 0rem 0.1rem 0.5rem rgba(255,255,255,0.5);
				flex-shrink: 0;
			`,
			AboutPage: `
				background: orange;
				height: 6.5rem;
			`,
			AboutPageNavButton: `
				background: blue;
				height: 6.5rem;
				width: 5rem;
			`,
		},
		AppToggle: {
			slider: `
      min-height: 7rem;
      min-width: 13rem;
      display: flex;
      flex-direction: column;
      box-shadow: ${
				toggleState
					? "0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.23)"
					: "inset -0.1rem -0.1rem 0.1rem rgba(0, 0, 0, 0.23), inset 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.21)"
			} ;
      border-radius: 14rem;
      justify-content: center;
      padding: 0 0.8rem;

      @media ${device.tablet}{
				
      }

      @media ${device.laptop}{
				
      }
    `,
			button: `
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      border: none;
			box-shadow: ${toggleState ? "0.2rem 0.2rem 0.2rem rgba(0,0,0,0.5)" : ""};
      filter: blur(0.1rem);
			transform: translateX(0rem);
    `,
		},
	};
};

const _Button: _ButtonVariants = {
	default: styled(motion.button)<_ButtonProps>`
		${(p) => _ButtonVariants(p.toggleState).default[p.variant as keyof _ButtonVariants]}
	`,
	AppToggle: {
		slider: styled(motion.button)<_ButtonProps>`
			${(p) => _ButtonVariants(p.toggleState).AppToggle.slider}
		`,
		button: styled(motion.span)<_ButtonProps>`
			${(p) => _ButtonVariants(p.toggleState).AppToggle.button}
		`,
	},
};

// MOTION

const _MotionVariants: _MotionVariants = {
	default: {},
	AboutPage: {
		initial: {
			opacity: 0,
			width: "0rem",
		},
		toggleOff: {
			opacity: [1, 0],
			width: "0rem",
			transition: {
				duration: 0.3,
			},
		},
		toggleOn: {
			opacity: [0, 1],
			width: "23.5rem",
			transition: {
				duration: 0.3,
			},
		},
	},
	AboutPageNavButton: {
		initial: {
			borderRadius: "0rem",
		},
		toggleOff: {
			borderRadius: ["0rem 2rem 2rem 0rem", "0rem 0rem 0rem 0rem"],
			transition: {
				duration: 0.3,
			},
		},
		toggleOn: {
			borderRadius: "0rem 2rem 2rem 0rem",
			transition: {
				duration: 0.3,
			},
		},
	},
	AppToggle: {
		slider: {
			on: {
				background: "#f1f1f1",
				border: "1.5rem solid #383838",
			},
			off: {
				background: "#383838",
				border: "1.5rem solid #FFFFFF",
			},
		},
		button: {
			on: {
				background:
					"radial-gradient(circle at 30% 40%, rgba(0, 0, 0, 0.5) 0%, rgba(255,255,255,0.8) 50%)",
				transform: "translateX(5.5rem)",
				transition: {
					duration: 0.5,
					ease: "easeInOut",
				},
			},
			off: {
				background:
					"radial-gradient(circle at 30% 40%, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0.8) 50%)",
				transform: "translateX(0rem)",
				transition: {
					duration: 0.5,
					ease: "easeInOut",
				},
			},
		},
	},
};

const _MotionProps = (variant: string, toggleState?: boolean, subComp?: string) => {
	let returnProps: any = {
		variants: _MotionVariants,
	};

	switch (variant) {
		case "AppToggle":
			returnProps = { ...returnProps, animate: toggleState ? "on" : "off" };
			returnProps.variants =
				_MotionVariants[variant as keyof _MotionVariants][subComp as keyof _MotionVariants];
			break;
		case "AboutPage": //orchestrated by Navmenu _MotionProps 'AboutPage' variant
			returnProps.variants = _MotionVariants.AboutPage;
			break;
		case "AboutPageNavButton":
			returnProps = {
				...returnProps,
				animate: toggleState ? "toggleOn" : "toggleOff",
				initial: "initial",
			};
			returnProps.variants = _MotionVariants.AboutPageNavButton;
			break;
		default:
			returnProps = { ...returnProps, animate: "animate", initial: "initial", exit: "exit" };
			break;
	}

	return returnProps;
};

export default Button;
