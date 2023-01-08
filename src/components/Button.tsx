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
			glassButton: `
				background: transparent;
				height: 9.5rem;
				width: 30rem;
				border: 0.5rem solid rgba(255,255,255,0.7);
				border-bottom: transparent;
				border-radius: 1.5rem;
				
				backdrop-filter: blur(1rem);
				box-shadow: 0rem 0rem 0.5rem 0.1rem rgba(255,255,255,0.5);
				
				color: rgba(255,255,255,0.8);
				font-size: 3rem;
				text-shadow: 0rem 0.1rem 0.5rem rgba(255,255,255,0.5);
			`,
		},
		AppToggle: {
			slider: `
      height: 9rem;
      width: 17rem;
      display: flex;
      flex-direction: column;
      box-shadow: ${
				toggleState
					? "0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.23)"
					: "inset -0.1rem -0.1rem 0.1rem rgba(0, 0, 0, 0.23), inset 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.21)"
			} ;
      border-radius: 14rem;
      justify-content: center;
      
      margin-top: 3rem;
      padding: 0 0.8rem;

      @media ${device.tablet}{
				margin-top: 0rem;
        background: red;
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
			box-shadow: ${toggleState ? "0.2rem 0.2rem 0.2rem rgba(0,0,0,0.5)" : ""};
      filter: blur(0.1rem);
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
					transform: "translateX(7.5rem)",
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
