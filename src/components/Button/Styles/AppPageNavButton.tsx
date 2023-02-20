import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.button)`
	${({ theme }) => `
		background: linear-gradient(${theme.color4}, ${theme.color5});
		height: 6.5rem;
		width: 5rem;
		border: none;
		svg {
			color: ${theme.color5};
		}
	`}
`;

export const _MotionVariants = (theme: any) => {
	return {
		Main: {
			initial: {
				borderRadius: "0.1rem",
				boxShadow: `0 0.3rem 0.5rem 0.1rem rgba(10, 10, 10, 1), 0 0.3rem 0.5rem 0.1rem ${theme.color3}, 0 0 1rem 0.5rem ${theme.color2} inset`,
				transform: "translateY(0rem)",
			},
			whileHover: {
				boxShadow: [
					`0 1rem 0.3rem 0.1rem rgba(10, 10, 10, 1), 0 0.3rem 0.5rem 0.1rem ${theme.color3}, 0 0 1rem 0.5rem ${theme.color2} inset`,
					`0 1rem 0.5rem 0.1rem rgba(10, 10, 10, 1), 0 0.3rem 0.5rem 0.1rem ${theme.color3}, 0 0 1rem 0.5rem ${theme.color2} inset`,
				],
				transform: "translateY(-0.1rem)",
				transition: {
					duration: 0.1,
					ease: "easeInOut",
				},
			},
			whileTap: {
				boxShadow: [
					`0 1rem 0.5rem 0.1rem rgba(10, 10, 10, 1), 0 0.3rem 0.5rem 0.1rem ${theme.color3}, 0 0 1rem 0.5rem ${theme.color2} inset`,
					`0 1rem 0.3rem 0.1rem rgba(10, 10, 10, 1), 0 0.3rem 0.5rem 0.1rem ${theme.color3}, 0 0 1rem 0.5rem ${theme.color2} inset`,
				],
			},
			toggleOff: {
				borderRadius: ["1rem", "0.3rem"],
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
	};
};
