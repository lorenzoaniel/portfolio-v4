import React from "react";
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
	Main: any;
}

const Paragraph = (props: PProps) => {
	const { data, subComp = "default", variant = "default" } = props;
	const ParagraphConfigs = {
		Main: {
			variant: "Main",
			subComp: subComp,
		},
	};

	return <_P.Main {...ParagraphConfigs.Main}>{data}</_P.Main>;
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
	Main: {
		HomePage: `
			${_PMixins.FontStyle.c10txsh0}
      background-image: linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(230, 230, 230, 0.5));
      width: 100%;
		  height: 15rem;
			display: flex;
			padding: 2rem;
			font-size: 2rem;
			border-radius: 2rem;
			box-shadow: 0 0 1rem 0.5rem rgba(255,255,255,0.5), 0 0 1rem 0.5rem rgba(150,150,150,0.7) inset;
    `,
	},
};

const _P: _PVariants = {
	Main: styled.div<_PProps>`
		${(p) => _PVariants[p.variant as keyof _PVariants][p.subComp as keyof _PVariants]}
	`,
};

export default Paragraph;
