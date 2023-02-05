import React, { useMemo } from "react";
import styled from "styled-components";

interface PProps {
	variant?: string;
	subComp?: string;
	data: string;
}

interface _PProps {
	variant: string;
	subComp: string;
}

interface _PVariants {
	default: any;
}

const Paragraph = (props: PProps) => {
	const { data, subComp = "default", variant = "default" } = props;
	const ParagraphConfigs = {
		default: {
			variant: variant,
			subComp: subComp,
		},
	};

	const createVariant = (variant: string) => {
		switch (variant) {
			case "filler":
				return <></>;
			default:
				return (
					<>
						<_P.default {...ParagraphConfigs.default}>{data}</_P.default>
					</>
				);
		}
	};

	//RENDER
	const Render = useMemo(() => createVariant(variant), [data, variant]);
	return <>{Render}</>;
};

//STYLE
const _PMixins = {
	FontStyle: {
		c10txsh0: `
			color: rgba(10,10,10,1); 
			text-shadow: 0 0.1rem 0.1rem rgba(0,0,0,0.7);
		`,
	},
};

const _PVariants: _PVariants = {
	default: {
		default: ``,
		HomePage: {
			default: `
				${_PMixins.FontStyle.c10txsh0}
				background-image: linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(230, 230, 230, 0.5));
				width: 100%;
				height: 15rem;
				display: flex;

				border-radius: 2rem;
				box-shadow: 0 0 1rem 0.5rem rgba(255,255,255,0.5), 0 0 1rem 0.5rem rgba(150,150,150,0.7) inset;
				
				padding: 2rem;
				font-size: 3rem;
				font-family: var(--roboticFont);
				font-weight: 500;
			`,
		},
		AboutPage: {
			default: `
				width: fit-content;
				height: fit-content;
				font-size: 30%; //clamp(5%, 2rem, 10%)
			`,
		},
	},
};

const _P: _PVariants = {
	default: styled.div<_PProps>`
		${(p) => _PVariants.default[p.variant as keyof _PVariants][p.subComp as keyof _PVariants]}
	`,
};

export default Paragraph;
