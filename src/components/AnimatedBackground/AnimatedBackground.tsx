import React, { useMemo } from "react";
import { useTheme } from "styled-components";

import { Stars, Blackhole, Pulses } from "./animateBackgroundImportCombiner";

enum Variant {
	DEFAULT = "default",
	STAR = "Stars",
	BLACKHOLE = "Blackhole",
	PULSES = "Pulses",
}

interface Props {
	variant?: string;
}

const AnimatedBackground: React.FC<Props> = ({ variant = "default" }) => {
	const theme = useTheme();

	let motionProps: any = {
		initial: "initial",
		animate: "animate",
	};

	const variantConfig = {
		default: {},
		Stars: { numbOfStars: 200 },
		Blackhole: { numbOfPlanets: 1 },
		Pulses: { numbOfPulse: 25 },
	};

	const createVariantMap: Map<string, JSX.Element> = new Map([
		[
			Variant.STAR,
			<Stars.Main key="stars">
				{Array.from({ length: variantConfig.Stars.numbOfStars }, (_, index) => (
					<Stars.Star
						key={`star-${index}`}
						{...motionProps}
						variants={Stars._MotionVariants(variantConfig.Stars.numbOfStars, index).Star}
					>
						<Stars.Tail
							key={`tail-${index}`}
							{...motionProps}
							variants={Stars._MotionVariants(variantConfig.Stars.numbOfStars, index).Tail}
						/>
					</Stars.Star>
				))}
			</Stars.Main>,
		],
		[
			Variant.BLACKHOLE,
			<Blackhole.Main
				key="blackhole"
				{...motionProps}
				variants={Blackhole._MotionVariants(variantConfig.Blackhole.numbOfPlanets, 0, theme).Main}
			>
				{Array.from({ length: variantConfig.Blackhole.numbOfPlanets }, (_, index) => (
					<Blackhole.Planet
						key={`planet-${index}`}
						{...motionProps}
						variants={
							Blackhole._MotionVariants(variantConfig.Blackhole.numbOfPlanets, index, theme).Planet
						}
					/>
				))}
			</Blackhole.Main>,
		],
		[
			Variant.PULSES,
			<Pulses.Main key="pulses">
				{Array.from({ length: variantConfig.Pulses.numbOfPulse }, (_, index) => (
					<Pulses.Object
						key={`pulse-${index}`}
						{...motionProps}
						variants={Pulses._MotionVariants(theme).Object}
					/>
				))}
			</Pulses.Main>,
		],
	]);

	const createVariant = useMemo(() => {
		return createVariantMap.get(variant) ?? <></>;
	}, [variant, theme]);

	return <>{createVariant}</>;
};

export default React.memo(AnimatedBackground);
