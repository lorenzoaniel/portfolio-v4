import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useCurrentDimension from "../helpers/useCurrentDimension";

import AstronautGif from "../assets/images/Gif/astronaut-tumble-astronaut.gif";

import { GiInspiration } from "react-icons/Gi";
import { FaSpaceShuttle } from "react-icons/Fa";
import { RiReactjsFill } from "react-icons/Ri";
import {
	SiStyledcomponents,
	SiReactrouter,
	SiRedux,
	SiVite,
	SiTypescript,
	SiGithub,
	SiCloudways,
} from "react-icons/Si";
import { CgFramer } from "react-icons/Cg";

import Image from "./Image";

interface Props {
	variant?: string;
}

const Decorations = (props: Props) => {
	const { variant = "default" } = props;

	const createReactIconStyles = (variant: string, iconGroupAmount: number = 0) => {
		interface styleType {
			default: any;
			multiple: any;
			spaceship: any;
		}

		const dynamicWidthHeight = 30 / iconGroupAmount + "vw";

		const reactIconStyles: styleType = {
			default: {
				minHeight: "30vh",
				minWidth: "30vh",
			},
			multiple: {
				minHeight: dynamicWidthHeight,
				minWidth: dynamicWidthHeight,
			},
			spaceship: {
				height: "15vh",
				width: "15vh",
			},
		};

		return reactIconStyles[variant as keyof styleType];
	};

	const createVariant = (variant: string) => {
		let motionProps: any = {
			initial: "initial",
			animate: "animate",
		};

		switch (variant) {
			case "Spaceship":
				return (
					<SpaceShipMain>
						<SpaceShipTravelContainer animate={_MotionVariants().Spaceship.vehicle.travel}>
							<ExhaustVibrateContainer //@ts-ignore works but compiler doesnt like 'repeatType' motion property
								animate={_MotionVariants().Spaceship.exhaust}
							>
								<SiCloudways style={createReactIconStyles("spaceship")} />
							</ExhaustVibrateContainer>
							<SpaceShipVibrateContainer
								//@ts-ignore works but compiler doesnt like 'repeatType' motion property
								animate={_MotionVariants().Spaceship.vehicle.vibration}
							>
								<FaSpaceShuttle style={createReactIconStyles("spaceship")} />
							</SpaceShipVibrateContainer>
						</SpaceShipTravelContainer>
					</SpaceShipMain>
				);
			case "SpaceshipReverse":
				return (
					<SpaceShipMain>
						<SpaceShipTravelContainer animate={_MotionVariants().SpaceshipReverse.vehicle.travel}>
							<SpaceShipVibrateReverseContainer
								//@ts-ignore works but compiler doesnt like 'repeatType' motion property
								animate={_MotionVariants().SpaceshipReverse.vehicle.vibration}
							>
								<FaSpaceShuttle style={createReactIconStyles("spaceship")} />
							</SpaceShipVibrateReverseContainer>
							<ExhaustVibrateReverseContainer
								//@ts-ignore works but compiler doesnt like 'repeatType' motion property
								animate={_MotionVariants().SpaceshipReverse.exhaust}
							>
								<SiCloudways style={createReactIconStyles("spaceship")} />
							</ExhaustVibrateReverseContainer>
						</SpaceShipTravelContainer>
					</SpaceShipMain>
				);
			case "ReactIcon":
				return <RiReactjsFill style={createReactIconStyles("default")} />;
			case "StyledComponentIcon":
				return <SiStyledcomponents style={createReactIconStyles("default")} />;
			case "FramerMotionIcon":
				return <CgFramer style={createReactIconStyles("default")} />;
			case "ReactRouterReduxIcons":
				return (
					<IconContainer>
						<SiReactrouter style={createReactIconStyles("multiple", 2)} />
						<SiRedux style={createReactIconStyles("multiple", 2)} />
					</IconContainer>
				);
			case "ViteTsGithubIcons":
				return (
					<IconContainer>
						<SiVite style={createReactIconStyles("multiple", 3)} />
						<SiTypescript style={createReactIconStyles("multiple", 3)} />
						<SiGithub style={createReactIconStyles("multiple", 3)} />
					</IconContainer>
				);
			case "Astronaut":
				const currDimension = useCurrentDimension();
				//random initial POS
				const [mousePos, setMousePos] = useState({
					x: Math.floor(Math.random() * currDimension.height),
					y: Math.floor(Math.random() * currDimension.width),
				});
				//used to set Poke animation
				const [togglePoke, setTogglePoke] = useState(false);

				let motionAnimate = {
					..._MotionVariants().Astronaut.Frame.animate,
					x: mousePos.x,
					y: mousePos.y,
				};

				motionProps = {
					...motionProps,
					animate: motionAnimate,
				};

				//used to generate new coordinates every specified seconds
				useEffect(() => {
					const timer = setTimeout(() => generateRandomCoordinate(), 5000);
					return () => {
						clearTimeout(timer);
					};
				}, [mousePos]);

				const generateRandomCoordinate = () => {
					setMousePos({
						x:
							Math.abs(Math.floor(Math.random() * currDimension.height)) -
							currDimension.height * 0.2,
						y:
							Math.abs(Math.floor(Math.random() * currDimension.width)) - currDimension.width * 0.2,
					});
				};

				return (
					<AstronautMain>
						<AstronautFrame
							{...motionProps}
							onClick={() => {
								setTogglePoke(true);
								generateRandomCoordinate();
							}}
						>
							<AstronautPoke
								variants={_MotionVariants().Astronaut.Frame}
								animate={togglePoke ? "poke" : ""}
								onAnimationComplete={() => {
									//resets animation when finished
									setTogglePoke(false);
								}}
							/>
							<Image source={AstronautGif} variant={"Gif"} />
						</AstronautFrame>
					</AstronautMain>
				);
			case "Inspiration":
				return <GiInspiration style={createReactIconStyles("default")} />;
			default:
				return <></>;
		}
	};

	console.log("Decorations rerender!");
	return <>{createVariant(variant)}</>;
};

//STYLE
const IconContainer = styled(motion.div)`
	display: flex;
	width: 100%;
	height: fit-content;
	justify-content: center;
	align-items: center;
	column-gap: 4rem;
`;

const ExhaustVibrateContainer = styled(motion.div)`
	height: 100%;
	width: fit-content;
`;

const ExhaustVibrateReverseContainer = styled(ExhaustVibrateContainer)`
	svg {
		transform: rotateY(180deg);
	}
`;

const SpaceShipVibrateContainer = styled(motion.div)`
	height: 100%;
	width: fit-content;
`;

const SpaceShipVibrateReverseContainer = styled(SpaceShipVibrateContainer)`
	svg {
		transform: rotateY(180deg);
	}
`;

const SpaceShipTravelContainer = styled(motion.div)`
	height: 10rem;
	width: 10rem;
	display: flex;
	column-gap: 0.3rem;
`;

const SpaceShipMain = styled(motion.div)`
	min-height: 15rem;
	width: 100%;
	display: flex;
`;

const AstronautMain = styled(motion.div)`
	height: 100%;
	width: 100%;
	position: relative;
`;

const AstronautFrame = styled(motion.div)`
	height: 30vh;
	width: 30vw;
	&:hover {
		cursor: crosshair;
	}
`;

const AstronautPoke = styled(motion.div)`
	//used to trigger poke animation
	position: absolute;
	height: 1%;
	width: 1%;
	top: 50%;
	left: 50%;
	border-radius: 50%;
	z-index: -1;
`;

//only input a variant if there is a <variant>Sequence function created for it
const _MotionVariants = () => {
	return {
		Spaceship: {
			vehicle: {
				vibration: {
					transform: ["translateY(0.5rem)", "translateY(0rem)", "translateY(-0.5rem)"],
					transition: {
						duration: 0.2,
						repeat: Infinity,
						repeatType: "reverse",
					},
				},
				travel: {
					opacity: [0, 0.9, 1, 1, 0.9, 0],
					transform: [
						"translateX(-50vw)",
						"translateX(50vw)",
						"translateX(100vw)",
						"translateX(150vw)",
					],
					transition: {
						duration: 5,
						repeat: Infinity,
						ease: "linear",
					},
				},
			},
			exhaust: {
				transform: ["translateY(0.5rem)", "translateY(0rem)", "translateY(-0.5rem)"],
				transition: {
					duration: 0.1,
					repeat: Infinity,
					repeatType: "reverse",
				},
			},
		},
		SpaceshipReverse: {
			vehicle: {
				vibration: {
					transform: ["translateY(0.5rem)", "translateY(0rem)", "translateY(-0.5rem)"],
					transition: {
						duration: 0.2,
						repeat: Infinity,
						repeatType: "reverse",
					},
				},
				travel: {
					opacity: [0, 0.9, 1, 1, 0.9, 0],
					transform: [
						"translateX(150vw)",
						"translateX(100vw)",
						"translateX(50vw)",
						"translateX(-50vw)",
					],
					transition: {
						duration: 5,
						repeat: Infinity,
						ease: "linear",
					},
				},
			},
			exhaust: {
				transform: ["translateY(0.5rem)", "translateY(0rem)", "translateY(-0.5rem)"],
				transition: {
					duration: 0.1,
					repeat: Infinity,
					repeatType: "reverse",
				},
			},
		},
		Astronaut: {
			Frame: {
				animate: {
					transition: {
						duration: 4,
						type: "spring",
						mass: 100,
						stiffness: 200,
						damping: 50,
					},
				},
				poke: {
					boxShadow: [
						"0 0 0 0em rgba(255, 255, 255, 0)",
						"0 0 0 3em rgba(255, 255, 255, 0.1)",
						"0 0 0 0em rgba(255, 255, 255, 0)",
					],
					scale: [1, 1.5, 1],
					transition: {
						duration: 0.4,
					},
				},
			},
		},
	};
};

export default React.memo(Decorations);
