import React, { useMemo } from "react";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { RxDropdownMenu } from "react-icons/Rx";

import { device } from "../styles/breakpoints";
import { selectToggle, toggle } from "../store/slices/appToggleSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { aboutTopicNavToggle, selectAboutToggle } from "../store/slices/aboutToggleSlice";

interface ButtonProps {
	variant: string;
	clickHandle?: () => void;
	children?: React.ReactNode | React.ReactNode[] | string;
}

interface _ButtonProps {
	toggleState?: boolean;
}

interface _MotionVariants {
	[key: string]: any;
}

// COMPONENT
const Button = (props: ButtonProps) => {
	// PROPS
	const {
		children = <></>,
		clickHandle = () => {
			console.log("No function");
		},
		variant,
	} = props;

	//REDUX
	const toggleStateApp = useAppSelector(selectToggle);
	const toggleStateAbout = useAppSelector(selectAboutToggle);
	const dispatch = useAppDispatch();
	const theme = useTheme();

	// STYLING LOGIC
	const createVariant = (variant: string) => {
		let motionProps: any = {
			initial: "initial",
			animate: "animate",
			whileHover: "whileHover",
			whileTap: "whileTap",
			exit: "exit",
		};

		switch (variant) {
			case "AppToggle":
				motionProps = { ...motionProps, animate: toggleStateApp ? "on" : "off" };

				return (
					<>
						<AppToggleSlider
							{...motionProps}
							variants={_MotionVariants(theme).AppToggle.slider}
							key={nanoid()}
							onClick={() => {
								dispatch(toggle());
							}}
							toggleState={toggleStateApp}
						>
							<AppToggleButton
								{...motionProps}
								variants={_MotionVariants(theme).AppToggle.button}
								key={nanoid()}
								toggleState={toggleStateApp}
							></AppToggleButton>
						</AppToggleSlider>
					</>
				);
			case "AboutPageNavButton":
				motionProps = {
					...motionProps,
					animate: toggleStateAbout ? "toggleOn" : "toggleOff",
				};

				return (
					<AboutPageNavButton
						{...motionProps}
						variants={_MotionVariants(theme).AboutPageNavButton}
						key={nanoid()}
						onClick={() => {
							dispatch(aboutTopicNavToggle());
						}}
						toggleState={toggleStateAbout}
					>
						<RxDropdownMenu style={{ height: "4rem", width: "4rem" }} />
					</AboutPageNavButton>
				);
			case "AboutPageDropDownList":
				//Orchestrated by Navmenu 'AboutPage' variant
				motionProps = {
					//cannot use strings to refer to property since it will break orchestration, will need to pull object of properties out instead of refering by variant name
					whileHover: _MotionVariants(theme).AboutPage.whileHover,
					whileTap: _MotionVariants(theme).AboutPage.whileTap,
				};

				return (
					<AboutPage
						{...motionProps}
						key={nanoid()}
						variants={_MotionVariants(theme).AboutPage}
						onClick={clickHandle}
					>
						{children}
					</AboutPage>
				);
			case "NavButton":
				return (
					<GlassThemed
						{...motionProps}
						key={nanoid()}
						variants={_MotionVariants(theme).NavButton}
						onClick={clickHandle}
						toggleState={toggleStateAbout}
						disabled={true}
					>
						{children}
					</GlassThemed>
				);
			case "NavButtonEnabled":
				return (
					<GlassThemed
						{...motionProps}
						key={nanoid()}
						variants={_MotionVariants(theme).NavButtonEnabled}
						onClick={clickHandle}
						toggleState={toggleStateAbout}
					>
						{children}
					</GlassThemed>
				);
			case "GlassButton":
				return (
					<Glass key={nanoid()} {...motionProps} onClick={clickHandle}>
						{children}
					</Glass>
				);
			case "ProjectSlideDownButton":
				return (
					<ProjectSlideDownButtonMain
						key={nanoid()}
						{...motionProps}
						variants={_MotionVariants(theme).ProjectSlideDownButtonMain}
					>
						<ProjectSlideDownButtonTitle key={nanoid()}>{children}</ProjectSlideDownButtonTitle>
					</ProjectSlideDownButtonMain>
				);
			default:
				return <></>;
		}
	};

	console.log("Button rerendered!");
	//RENDER
	return <>{createVariant(variant)}</>;
};

// STYLES
const Glass = styled(motion.button)<_ButtonProps>`
	background: transparent;
	height: 6.5rem;
	width: 20rem;
	border: 0.5rem solid rgba(255, 255, 255, 0.7);
	border-bottom: transparent;
	border-radius: 1.5rem;

	backdrop-filter: blur(1rem);
	box-shadow: 0rem 0rem 0.5rem 0.1rem rgba(255, 255, 255, 0.5);

	color: rgba(255, 255, 255, 0.8);
	font-size: 3rem;
	text-shadow: 0rem 0.1rem 0.5rem rgba(255, 255, 255, 0.5);
	flex-shrink: 0;
`;

const GlassThemed = styled(Glass)<_ButtonProps>`
	${({ theme }) => `
		border: 0.5rem solid ${theme.color3};
		box-shadow: 0rem 0rem 0.6rem 0.4rem ${theme.color5};

		background: linear-gradient(${theme.color1}, ${theme.color5});
		-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
		font-weight: 900;
	`}
`;

const AboutPage = styled(motion.button)<_ButtonProps>`
	${({ theme }) => `
		background: linear-gradient(${theme.color4}, ${theme.color5});
		height: fit-content;
		border: 0.1rem solid ${theme.color2};
		backdrop-filter: blur(1rem);
		box-shadow: 0 0 1rem 1rem ${theme.color4} inset;

		color: ${theme.color1};
		text-shadow: 0 0.2rem 0.8rem ${theme.color2};
		font-size: 2.5rem;
	`}
`;

const AboutPageNavButton = styled(motion.button)<_ButtonProps>`
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

const AppToggleSlider = styled(motion.button)<_ButtonProps>`
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

const AppToggleButton = styled(motion.span)<_ButtonProps>`
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

const ProjectSlideDownButtonMain = styled(motion.button)`
	background: linear-gradient(var(--Projects-Orange-3), var(--Projects-Orange-5));
	box-shadow: 0 0 1rem 0.4rem var(--Projects-Orange-1),
		0 0 0.5rem 0.4rem var(--Projects-Orange-4) inset,
		0 0 2.5rem 0.2rem var(--Projects-Orange-1) inset;
	border-radius: 1rem;
	height: fit-content;
	width: fit-content;
	padding: 0.5rem;
`;

const ProjectSlideDownButtonTitle = styled(motion.p)`
	background: linear-gradient(var(--Projects-Orange-3), var(--Projects-Orange-5));
	font-size: clamp(3rem, 50%, 5rem);
	font-weight: 900;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const _MotionVariants = (theme: any): _MotionVariants => {
	return {
		AboutPage: {
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
		AboutPageNavButton: {
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
		NavButton: {
			initial: {
				textShadow: `0rem 0.1rem 0.2rem ${theme.color5}`,
			},
			animate: {
				textShadow: `0rem 0.1rem 1rem ${theme.color5}`,
				transition: {
					duration: 2,
					repeat: Infinity,
					repeatType: "reverse",
				},
			},
		},
		NavButtonEnabled: {
			initial: {
				textShadow: `0rem 0.1rem 0.2rem ${theme.color5}`,
				filter: `drop-shadow(0 0 0 ${theme.color5})`,
			},
			animate: {
				textShadow: `0rem 0.1rem 1rem ${theme.color5}`,
				transition: {
					duration: 2,
					repeat: Infinity,
					repeatType: "reverse",
				},
			},
			whileHover: {
				filter: `drop-shadow(0 0 1rem ${theme.color5})`,
			},
		},
		AppToggle: {
			slider: {
				on: {
					background: `${theme.color2}`,
					border: `1.5rem solid ${theme.color3}`,
				},
				off: {
					background: "rgb(56, 56, 56)",
					border: "1.5rem solid rgb(255, 255, 255)",
				},
			},
			button: {
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
		},
		ProjectSlideDownButtonMain: {
			initial: {
				textShadow: "0 0.2rem 0.1rem var(--Projects-Orange-2)",
				border: "0.5rem groove var(--Projects-Orange-5)",
			},
			whileHover: {
				textShadow: "0 0.1rem 0.8rem var(--Projects-Orange-2)",
				border: "0.5rem groove var(--Projects-Orange-3)",
			},
			whileTap: {
				textShadow: "0 0.3rem 0.3rem var(--Projects-Orange-1)",
				border: "0.5rem groove var(--Projects-Orange-5)",
				transition: {
					delay: 0.1,
				},
			},
		},
	};
};

export default Button;
