import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface DProps {
	variant?: string;
}

interface _DProps {
	variant: string;
	subComp?: string;
}

interface _DVariants {
	default: any;
	Main: any;
	Spaceship: any;
	Details: any;
}

const Decorations = (props: DProps) => {
	const { variant = "default" } = props;
	const DecorationConfigs = {
		Main: {
			variant: "Main",
			subComp: variant,
		},
		Spaceship: {
			SolarContainer: {
				variant: "Spaceship",
				subComp: "SolarContainer",
			},
			BodyUpper: {
				variant: "Spaceship",
				subComp: "BodyUpper",
			},
			BodyLower: {
				variant: "Spaceship",
				subComp: "BodyLower",
			},
			Legs: {
				variant: "Spaceship",
				subComp: "Legs",
			},
			Thruster: {
				variant: "Spaceship",
				subComp: "Thruster",
			},
		},
		Details: {
			Spaceship: {
				SolarPanels: {
					variant: "Spaceship",
					subComp: "SolarPanels",
				},
			},
		},
	};

	const createDecoration = () => {
		switch (variant) {
			case "Spaceship":
				return (
					<>
						<_D.Spaceship.SolarContainer {...DecorationConfigs.Spaceship.SolarContainer}>
							<_D.Details {...DecorationConfigs.Details.Spaceship.SolarPanels} />
						</_D.Spaceship.SolarContainer>
						<_D.Spaceship.Body {...DecorationConfigs.Spaceship.BodyUpper} />
						<_D.Spaceship.Body {...DecorationConfigs.Spaceship.BodyLower} />
						<_D.Spaceship.Legs {...DecorationConfigs.Spaceship.Legs} />
						<_D.Spaceship.Legs {...DecorationConfigs.Spaceship.Legs} />
						<_D.Spaceship.Legs {...DecorationConfigs.Spaceship.Legs} />
						<_D.Spaceship.Thruster {...DecorationConfigs.Spaceship.Thruster} />
						<_D.Spaceship.Thruster {...DecorationConfigs.Spaceship.Thruster} />
					</>
				);
			default:
				break;
		}
	};
	return <_D.Main {...DecorationConfigs.Main}>{createDecoration()}</_D.Main>;
};

//STYLE
const _DVariants: _DVariants = {
	default: {},
	Main: {
		default: ``,
		Spaceship: `
      // background: white;
      height: 30rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 20%);
      grid-template-rows: repeat(3, 1fr);
      grid-template-areas: "solarcontainer bodyupper bodyupper bodyupper ." ". . . . ." ". . . . .";
    `,
	},
	Spaceship: {
		SolarContainer: `
      background: blue;
      height: 5rem;
      width: 10rem;
      grid-area: solarcontainer;
      display: flex;
      margin-left: 50%;
      margin-top: 40%;
      // gap: 0.1rem;
      // padding: 0.1rem;
      // justify-self: start;
      z-index: 2;
    `,
		BodyUpper: `
      background-image: linear-gradient(to top, rgba(223, 189, 0, 0.7), rgba(181, 153, 0, 0.7));
      position: relative;
      height: 7rem;
      width: 20rem;
      grid-area: bodyupper;
      justify-self: center;
      align-self: end;
      clip-path: polygon(0% 100%, 17.5% 0%, 82.5% 0%, 100% 100%);
    `,
		BodyLower: `
    `,
		Legs: ``,
		Thruster: ``,
	},
	Details: {
		Spaceship: {
			SolarPanels: ``,
		},
	},
};

const _D = {
	Main: styled.div<_DProps>`
		${(p) => _DVariants[p.variant as keyof _DVariants][p.subComp as keyof _DVariants]}
	`,
	Details: styled.div<_DProps>`
		${(p) => _DVariants[p.variant as keyof _DVariants][p.subComp as keyof _DVariants]}
	`,
	Spaceship: {
		SolarContainer: styled.div<_DProps>`
			${(p) => _DVariants[p.variant as keyof _DVariants][p.subComp as keyof _DVariants]}
		`,
		Body: styled.div<_DProps>`
			${(p) => _DVariants[p.variant as keyof _DVariants][p.subComp as keyof _DVariants]}
		`,
		Legs: styled.div<_DProps>`
			${(p) => _DVariants[p.variant as keyof _DVariants][p.subComp as keyof _DVariants]}
		`,
		Thruster: styled.div<_DProps>`
			${(p) => _DVariants[p.variant as keyof _DVariants][p.subComp as keyof _DVariants]}
		`,
	},
};

export default Decorations;
