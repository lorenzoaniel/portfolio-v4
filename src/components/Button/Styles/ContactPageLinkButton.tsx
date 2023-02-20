import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.div)`
	height: 100%;
	width: 60%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	position: relative;
`;

export const Cover = styled(motion.div)`
	background: linear-gradient(rgb(12, 14, 67), rgb(66, 73, 255));
	height: fit-content;
	width: 100%;
	border-width: 1rem;
	border-style: solid;
	border-image: linear-gradient(var(--Contact-DarkBlue-1), var(--Contact-DarkBlue-5));
	border-radius: 1rem;
	box-shadow: 0 0 0.5rem 0.5rem var(--Contact-DarkBlue-1),
		0 0 1rem 1rem var(--Contact-DarkBlue-3) inset;
	z-index: 2;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 100%;
	font-weight: 700;
	text-shadow: 0 0.2rem 0.3rem var(--Contact-DarkBlue-2);
	color: var(--Contact-DarkBlue-1);
`;

export const Links = styled(motion.a)`
	background: linear-gradient(var(--Contact-Yellow-3), var(--Contact-Yellow-5));
	height: fit-content;
	width: fit-content;
	border-radius: 0.5rem;
	border-width: 0.6rem;
	border-style: solid;
	border-image: linear-gradient(var(--Contact-Yellow-3), var(--Contact-Yellow-5));
	box-shadow: 0 0 0.5rem 0.8rem var(--Contact-Yellow-2), 0 0 1rem 1rem var(--Contact-Yellow-5) inset;
	position: absolute;
	z-index: 1;

	font-size: 3rem;
	text-decoration: none;
	color: rgba(0, 0, 0, 0.8);
	text-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 0.8);
	font-weight: 900;
	text-align: center;
`;

export const _MotionVariants = (theme: any) => {
	return {
		Main: {
			initial: {},
			whileHover: {},
			whileTap: {},
		},
		Cover: {
			initial: {
				transform: "scale3d(1, 1, 1)",
				transformOrigin: "0% 100%",
			},
			whileHover: {
				transform: "scale3d(0, 1, 1.5)",
				transition: {
					duration: 0.5,
				},
			},
		},
		Links: {
			initial: {
				boxShadow: "0 0 0rem 0rem rgba(0,0,0,1)",
				transform: "translateY(0rem)",
			},
			whileHover: {
				boxShadow: "0 0 0.8rem 0.5rem rgba(0,0,0,0.7)",
				transform: "translateY(-0.2rem)",
				transition: {
					duration: 0.5,
					delay: 0.1,
				},
			},
			whileTap: {
				transform: ["translateY(-0.2rem)", "translateY(0rem)"],
				boxShadow: ["0 0 0.8rem 0.5rem rgba(0,0,0,0.7)", "0 0 0rem 0rem rgba(0,0,0,1)"],
				transition: {
					duration: 0.1,
				},
			},
		},
	};
};
