import React from "react";
import { useTheme } from "styled-components";
import { nanoid } from "nanoid";

import { Stars, Blackhole, Pulses } from "./animateBackgroundImportCombiner";

interface ABProps {
	variant?: string;
}

const AnimatedBackground = (props: ABProps) => {
	const { variant = "default" } = props;
	const theme = useTheme();

	const createVariant = (variant: string) => {
		let motionProps = {
			initial: "initial",
			animate: "animate",
		};

		switch (variant) {
			case "Stars":
				const numbOfStars = 200; //Change here to change value everywhere in component
				const starArray = Array(numbOfStars).fill(0);

				const createStars = () => {
					return starArray.map((curr, index) => {
						return (
							<Stars.Star
								{...motionProps}
								variants={Stars._MotionVariants(numbOfStars, index).Star}
								key={nanoid()}
							>
								<Stars.Tail
									{...motionProps}
									//@ts-ignore
									variants={Stars._MotionVariants(numbOfStars, index).Tail}
									key={nanoid()}
								/>
							</Stars.Star>
						);
					});
				};

				return <Stars.Main key={nanoid()}>{createStars()}</Stars.Main>;

			case "Blackhole":
				const numbOfPlanets = 1;
				const planetArray = Array(numbOfPlanets).fill(0);

				const createBlackhole = (theme: any) => {
					return planetArray.map((curr, index) => {
						return (
							<Blackhole.Planet
								{...motionProps}
								//@ts-ignore
								variants={Blackhole._MotionVariants(numbOfPlanets, index, theme).Planet}
								key={nanoid()}
							/>
						);
					});
				};

				return (
					<Blackhole.Main
						{...motionProps}
						//@ts-ignore
						variants={Blackhole._MotionVariants(numbOfPlanets, 0, theme).Main}
						key={nanoid()}
					>
						{createBlackhole(theme)}
					</Blackhole.Main>
				);

			case "Pulses":
				const numbOfPulse = 25;
				const pulseArray = Array(numbOfPulse).fill(0);

				const createPulse = (theme: any) => {
					return pulseArray.map((curr) => {
						return (
							<Pulses.Object
								{...motionProps}
								//@ts-ignore
								variants={Pulses._MotionVariants(theme).Object}
								key={nanoid()}
							/>
						);
					});
				};

				return <Pulses.Main key={nanoid()}>{createPulse(theme)}</Pulses.Main>;

			default:
				return <></>;
		}
	};

	//RENDER
	return <>{createVariant(variant)}</>;
};

export default React.memo(AnimatedBackground);
