import React, { useEffect, useState } from "react";

import useCurrentDimension from "../../helpers/useCurrentDimension";

import AstronautGif from "../../assets/images/Gif/astronaut-tumble-astronaut.gif";

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
	SiFramer,
} from "react-icons/Si";

import { Vibrate, Travel, Spaceship, IconGroup, Astronaut } from "./decorationsImportCombiner";
import Image from "../Image/Image";

interface Props {
	variant?: string;
}

const Decorations = (props: Props) => {
	const { variant = "default" } = props;

	const createReactIconStyles = (variant: string, iconGroupAmount: number = 0) => {
		interface styleType {
			default: any;
			spaceship: any;
		}

		const reactIconStyles: styleType = {
			default: {
				minHeight: "20vh",
				minWidth: "20vh",
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
					<Spaceship.Main>
						<Travel.Main animate={Travel._MotionVariants().Forward}>
							<Vibrate.Main //@ts-ignore works but compiler doesnt like 'repeatType' motion property
								animate={Vibrate._MotionVariants().Exhaust}
							>
								<SiCloudways style={createReactIconStyles("spaceship")} />
							</Vibrate.Main>
							<Vibrate.Main
								//@ts-ignore works but compiler doesnt like 'repeatType' motion property
								animate={Vibrate._MotionVariants().Spaceship}
							>
								<FaSpaceShuttle style={createReactIconStyles("spaceship")} />
							</Vibrate.Main>
						</Travel.Main>
					</Spaceship.Main>
				);
			case "SpaceshipReverse":
				return (
					<Spaceship.Main>
						<Travel.Main animate={Travel._MotionVariants().Reverse}>
							<Vibrate.MainReverse
								//@ts-ignore works but compiler doesnt like 'repeatType' motion property
								animate={Vibrate._MotionVariants().Spaceship}
							>
								<FaSpaceShuttle style={createReactIconStyles("spaceship")} />
							</Vibrate.MainReverse>
							<Vibrate.MainReverse
								//@ts-ignore works but compiler doesnt like 'repeatType' motion property
								animate={Vibrate._MotionVariants().Exhaust}
							>
								<SiCloudways style={createReactIconStyles("spaceship")} />
							</Vibrate.MainReverse>
						</Travel.Main>
					</Spaceship.Main>
				);

			case "ReactIcon":
				return <RiReactjsFill style={createReactIconStyles("default")} />;

			case "StyledComponentIcon":
				return <SiStyledcomponents style={createReactIconStyles("default")} />;

			case "FramerMotionIcon":
				return <SiFramer style={createReactIconStyles("default")} />;

			case "ReactRouterReduxIcons":
				return (
					<IconGroup.Main>
						<SiReactrouter style={createReactIconStyles("default")} />
						<SiRedux style={createReactIconStyles("default")} />
					</IconGroup.Main>
				);

			case "ViteTsGithubIcons":
				return (
					<IconGroup.Main>
						<SiVite style={createReactIconStyles("default")} />
						<SiTypescript style={createReactIconStyles("default")} />
						<SiGithub style={createReactIconStyles("default")} />
					</IconGroup.Main>
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
					...Astronaut._MotionVariants().Frame.animate,
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
					<Astronaut.Main>
						<Astronaut.Frame
							{...motionProps}
							onClick={() => {
								setTogglePoke(true);
								generateRandomCoordinate();
							}}
						>
							<Astronaut.Poke
								variants={Astronaut._MotionVariants().Frame}
								animate={togglePoke ? "poke" : ""}
								onAnimationComplete={() => {
									//resets animation when finished
									setTogglePoke(false);
								}}
							/>
							<Image source={AstronautGif} variant={"Gif"} />
						</Astronaut.Frame>
					</Astronaut.Main>
				);
			case "Inspiration":
				return <GiInspiration style={createReactIconStyles("default")} />;
			default:
				return <></>;
		}
	};

	return <>{createVariant(variant)}</>;
};

export default React.memo(Decorations);
