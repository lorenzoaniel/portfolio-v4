import React from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "nanoid";
import Button from "./Button";
import { useAppSelector } from "../store/hooks";
import { selectPagesInfo } from "../store/slices/pagesInfoSlice";

interface NavmenuProps {
	children: React.ReactNode[] | React.ReactNode;
	variant?: string;
}

interface _MotionVariants {
	[key: string]: any;
}

const Navmenu = (props: NavmenuProps) => {
	const { children, variant = "default" } = props;

	const toggleStateAbout = useAppSelector(selectPagesInfo).About.NavmenuToggleState;
	const theme = useTheme();

	const createVariant = (variant: string) => {
		let motionProps: any = {
			animate: "animate",
			initial: "initial",
			exit: "exit",
		};

		switch (variant) {
			case "AboutPage":
				motionProps = { ...motionProps };
				motionProps = {
					...motionProps,
					initial: "initial",
					animate: toggleStateAbout ? "toggleOn" : "",
					exit: "toggleOff",
				};

				return (
					<AnimatePresence mode="wait">
						<AboutPageMain key={nanoid()}>
							<AboutPageDropdownList
								{...motionProps}
								key={nanoid()}
								variants={_MotionVariants(theme).AboutPage}
							>
								{children}
							</AboutPageDropdownList>
							<Button variant={"AboutPageNavButton"} />
						</AboutPageMain>
					</AnimatePresence>
				);
			default:
				return <Main key={nanoid()}>{children}</Main>;
		}
	};

	return <>{createVariant(variant)}</>;
};

//STYLE

const Main = styled(motion.div)`
	height: fit-content;
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding-right: 10%;
	column-gap: 2%;
	margin-bottom: 10rem;
`;

const AboutPageMain = styled(motion.div)`
	height: fit-content;
	width: 100%;
	display: flex;
	position: relative;
	padding: 0.3rem; // to prevent heading from pushing down
	margin: auto 0;
	z-index: 4;
`;

const AboutPageDropdownList = styled(motion.div)`
	height: fit-content;
	width: fit-content;
	display: flex;
	flex-direction: column;
`;

//MOTION
const _MotionVariants = (theme?: any): _MotionVariants => {
	return {
		AboutPage: {
			initial: {},
			toggleOff: {
				transition: {
					duration: 0.5,
					staggerChildren: 0.3,
					staggerDirection: -1,
				},
			},
			toggleOn: {
				transition: {
					duration: 0.5,
					staggerChildren: 0.3,
				},
			},
		},
	};
};

export default Navmenu;
