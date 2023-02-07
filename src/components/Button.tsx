import React from "react";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { RxDropdownMenu } from "react-icons/Rx";

import { device } from "../styles/breakpoints";
import { selectToggle, toggle } from "../store/slices/appToggleSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectPagesInfo, aboutTopicNavToggle } from "../store/slices/pagesInfoSlice";

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
	const toggleStateAbout = useAppSelector(selectPagesInfo).About.NavmenuToggleState;
	const dispatch = useAppDispatch();
	const theme = useTheme();

	// STYLING LOGIC
	const createVariant = (variant: string) => {
		let motionProps: any = {
			animate: "animate",
			initial: "initial",
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
					initial: "initial",
					animate: toggleStateAbout ? "toggleOn" : "toggleOff",
					whileHover: "whileHover",
					whileTap: "whileTap",
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
			case "NavButton":
				return (
					<GlassButton
						key={nanoid()}
						{...motionProps}
						onClick={clickHandle}
						toggleState={toggleStateAbout}
						disabled={true} //replace using context value
						variant={variant}
					>
						{children}
					</GlassButton>
				);
			case "GlassButton":
				return (
					<GlassButton key={nanoid()} {...motionProps} onClick={clickHandle}>
						{children}
					</GlassButton>
				);
			case "AboutPage":
				return (
					<AboutPage
						key={nanoid()}
						variants={_MotionVariants(theme).AboutPage}
						onClick={clickHandle}
					>
						{children}
					</AboutPage>
				);
			default:
				return <></>;
		}
	};

	//RENDER
	return <>{createVariant(variant)}</>;
};

// STYLES
const GlassButton = styled(motion.button)<_ButtonProps>`
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

const AboutPage = styled(motion.button)<_ButtonProps>`
	${({ theme }) => `
		background: linear-gradient(${theme.color3}, ${theme.color2});
		height: fit-content;
		border: 0.1rem solid ${theme.color2};
		backdrop-filter: blur(1rem);

		color: ${theme.textColor1};
		text-shadow: 0 0.2rem 0.8rem ${theme.color2};
		font-size: 2.5rem;

		// separate animation since adding motion props will decouple orchestration for this child component
		&:hover {
			background: ${theme.color1};
			animation: hoverButton 0.3s forwards;

			@keyframes hoverButton {
				from {
					transform: translateY(0rem);
				}
				to {
					transform: translateY(-0.5rem);
					box-shadow: 0 1rem 0.5rem 0.1rem rgba(10, 10, 10, 1);
					text-shadow: 0 0.2rem 0.8rem ${theme.color4};
				}
			}
		}

		// separate animation since adding motion props will decouple orchestration for this child component
		&: active {
			animation: clickButton 0.3s forwards;

			@keyframes clickButton {
				from {
					transform: translateY(0rem);
					box-shadow: 0 1rem 0.5rem 0.1rem rgba(10, 10, 10, 1);
				}
				to {
					transform: translateY(0rem);
					box-shadow: none;
				}
			}
		}
	`}
`;

const AboutPageNavButton = styled(motion.button)<_ButtonProps>`
	${({ theme }) => `
		background: linear-gradient(${theme.color4}, ${theme.color5});
		height: 6.5rem;
		width: 5rem;
		border: none;
		svg {
			color: ${theme.color4};
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

const _MotionVariants = (theme?: any): _MotionVariants => {
	return {
		AboutPage: {
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
		AppToggle: {
			slider: {
				on: {
					background: `${theme.color1}`,
					border: `1.5rem solid ${theme.color3}`,
				},
				off: {
					background: "rgb(56, 56, 56)",
					border: "1.5rem solid rgb(255, 255, 255)",
				},
			},
			button: {
				on: {
					background: `radial-gradient(circle at 30% 40%, ${theme.color3} 0%, ${theme.color1} 50%)`,
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
};

export default Button;
