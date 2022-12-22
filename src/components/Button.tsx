import styled from "styled-components";
import { motion } from "framer-motion";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggle, selectToggle } from "../store/slices/appToggleSlice";

import { device } from "../styles/breakpoints";

interface ButtonProps {
	variant?: string;
	nameProp: string;
}

interface _ButtonProps {
	variant: string;
	toggleState: boolean;
}

interface _ButtonVariants {
	default: any;
	AppToggle: any;
}

interface _MotionVariants {
	initial?: any;
	animate?: any;
}

// COMPONENT

const Button = (props: ButtonProps) => {
	const { nameProp, variant = "default" } = props;

	const toggleState = useAppSelector(selectToggle);
	const dispatch = useAppDispatch();

	const createButton = (nameProp: string, variant: string) => {
		switch (variant) {
			case "AppToggle":
				return (
					<_Button.AppToggle.slider
						onClick={() => dispatch(toggle())}
						toggleState={toggleState}
						{..._MotionProps(toggleState, variant, "slider")}
					>
						<_Button.AppToggle.button
							toggleState={toggleState}
							{..._MotionProps(toggleState, variant, "button")}
						></_Button.AppToggle.button>
					</_Button.AppToggle.slider>
				);
			default:
				return (
					<_Button.default toggleState={toggleState} variant={variant}>
						{nameProp}
					</_Button.default>
				);
		}
	};

	return <>{createButton(nameProp, variant)}</>;
};

// STYLES

const _ButtonVariants = (toggleState?: boolean): _ButtonVariants => {
	return {
		default: {
			default: ``,
		},
		AppToggle: {
			slider: `
      background: #383838;
      height: 9rem;
      width: 17rem;
      display: flex;
      flex-direction: column;
      border: 1.5rem solid #FFFFFF;
      box-shadow: 0 0 1rem 0.3rem rgba(0,0,0,0.8), 0 0 1.5rem 0.5rem rgba(0,0,0,0.8)inset;
      border-radius: 14rem;
      justify-content: center;
      
      margin-top: 3rem;
      padding: 0 0.8rem;

      @media ${device.tablet}{
        background: red;
        margin: 5rem 0 0 5rem;
      }

      @media ${device.laptop}{
        background: blue;
      }
    `,
			button: `
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      border: none;
      background: radial-gradient(circle at 30% 40%, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0.8) 50%);
      filter: blur(0.1rem);
    `,
		},
	};
};

const _Button: _ButtonVariants = {
	default: styled(motion.button)<_ButtonProps>`
		${(p) => _ButtonVariants().default[p.variant as keyof _ButtonVariants]}
	`,
	AppToggle: {
		slider: styled(motion.button)<_ButtonProps>`
			${(p) => _ButtonVariants().AppToggle.slider}
		`,
		button: styled(motion.span)<_ButtonProps>`
			${(p) => _ButtonVariants().AppToggle.button}
		`,
	},
};

// MOTION

const _MotionVariants: _MotionVariants = {
	initial: {
		default: {},
		AppToggle: {
			slider: {},
			button: {
				transform: "translateX(0rem)",
			},
		},
	},
	animate: {
		default: {},
		AppToggle: {
			slider: {},
			button: {
				on: {
					transform: "translateX(7.5rem)",
					transition: {
						duration: 0.5,
						ease: "easeInOut",
					},
				},
				off: {
					transform: "translateX(0rem)",
					transition: {
						duration: 0.5,
						ease: "easeInOut",
					},
				},
			},
		},
	},
};

const _MotionProps = (toggleState: boolean, variant: string, subComp?: string) => {
	switch (variant) {
		case "AppToggle":
			return {
				initial:
					_MotionVariants.initial[variant as keyof _MotionVariants][
						subComp as keyof _MotionVariants
					],
				animate: toggleState
					? _MotionVariants.animate[variant as keyof _MotionVariants][
							subComp as keyof _MotionVariants
					  ].on
					: _MotionVariants.animate[variant as keyof _MotionVariants][
							subComp as keyof _MotionVariants
					  ].off,
			};

		default:
			return {
				initial: _MotionVariants.initial[variant as keyof _MotionVariants],
				animate: _MotionVariants.animate[variant as keyof _MotionVariants],
			};
	}
};

export default Button;
