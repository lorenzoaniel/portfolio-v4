import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.button)`
	${({ theme }) => `
		background: linear-gradient(${theme.color4}, ${theme.color5});
		height: fit-content;
		border: 0.1rem solid ${theme.color2};
		backdrop-filter: blur(1rem);
		box-shadow: 0 0 1rem 1rem ${theme.color4} inset;
		padding: 1rem;
		border-radius: 0.5rem;

		color: ${theme.color1};
		text-shadow: 0 0.2rem 0.8rem ${theme.color2};
		font-size: 2.5rem;
		font-weight: 700;
	`}
`;

export const _MotionVariants = (theme: any) => {
	return {
		Main: {
			whileHover: {
				background: `linear-gradient(${theme.color1}, ${theme.color3})`,
				color: `${theme.color5}`,
				transform: ["translateY(0rem)", "translateY(-0.5rem)"],
				boxShadow: "0 1rem 0.5rem 0.1rem rgba(10, 10, 10, 1)",
				textShadow: `0 0.2rem 0.8rem ${theme.color1}`,
				transition: {
					duration: 0.3,
				},
			},
			whileTap: {
				transform: ["translateY(0rem)", "translateY(0rem)"],
				boxShadow: [
					"box-shadow: 0 1rem 0.5rem 0.1rem rgba(10, 10, 10, 1)",
					"box-shadow: 0 0 0 0 rgba(10, 10, 10, 1)",
				],
				transition: {
					duration: 0.1,
				},
			},
			initial: {
				opacity: 0,
				width: "0rem",
				boxShadow: `0 0 0rem 0rem ${theme.color2} inset`,
			},
			toggleOff: {
				opacity: [1, 0],
				width: ["23.5rem", "0rem"],
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
	};
};
