import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
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

		const dynamicWidthHeight = 50 / iconGroupAmount + "vw";

		const reactIconStyles: styleType = {
			default: {
				minHeight: "50%",
				minWidth: "50%",
			},
			multiple: {
				height: dynamicWidthHeight,
				width: dynamicWidthHeight,
			},
			spaceship: {
				height: "15vh",
				width: "15vh",
			},
		};

		return reactIconStyles[variant as keyof styleType];
	};

	const createVariant = (variant: string) => {
		let motionProps = {};

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
			case "ReactIcon":
				return <RiReactjsFill style={createReactIconStyles("default")} />;
			case "StyledComponentIcon":
				return <SiStyledcomponents style={createReactIconStyles("default")} />;
			case "FramerMotionIcon":
				<CgFramer style={createReactIconStyles("default")} />;
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
			default:
				return <></>;
		}
	};

	console.log("Decoration rerendered!");
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

const SpaceShipVibrateContainer = styled(motion.div)`
	height: 100%;
	width: fit-content;
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
	};
};

export default React.memo(Decorations);
