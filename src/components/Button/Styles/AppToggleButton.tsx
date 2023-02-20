import { motion } from "framer-motion";
import styled from "styled-components";

interface _ButtonProps {
	toggleState?: boolean;
}

export const Slider = styled(motion.button)<_ButtonProps>`
	${({ toggleState }) => `
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
	`}
`;

export const Button = styled(motion.span)<_ButtonProps>`
	${({ toggleState }) => `
		height: 3rem;
		width: 3rem;
		border-radius: 50%;
		border: none;
		box-shadow: ${toggleState ? "0.2rem 0.2rem 0.2rem rgba(0,0,0,0.5)" : ""};
		filter: blur(0.1rem);
		transform: translateX(0rem);
	`}
`;

export const _MotionVariants = (theme: any) => {
	return {
		Slider: {
			on: {
				background: `${theme.color2}`,
				border: `1.5rem solid ${theme.color3}`,
			},
			off: {
				background: "rgb(56, 56, 56)",
				border: "1.5rem solid rgb(255, 255, 255)",
			},
		},
		Button: {
			on: {
				background: `radial-gradient(circle at 30% 40%, ${theme.color5} 0%, ${theme.color3} 50%)`,
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
	};
};
