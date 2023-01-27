import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../styles/breakpoints";

interface HeadingProps {
	titleProp: string;
	subComp?: string;
	variant?: string;
}

interface _HeadingProps {
	variant: string;
	subComp: string;
}

interface _HeadingVariants {
	default: any;
}

const Heading = (props: HeadingProps) => {
	const { titleProp, variant = "default", subComp = "default" } = props;
	return (
		<_Heading.default variant={variant} subComp={subComp}>
			{titleProp}
		</_Heading.default>
	);
};

const _HeadingMixins = {};

const _HeadingVariants: _HeadingVariants = {
	default: {
		default: ``,
		Landing: {
			default: `
				margin-top: 5rem;
				font-weight: 200;
				font-size: 4.7rem;
				text-align: center;
				color: #ffffff;
    	`,
		},
		AboutPage: {
			default: `
				background: linear-gradient(var(--About-Maroon-1), var(--About-Maroon-2));
				height: fit-content;
				width: fit-content;
				align-self: center;
				font-size: 2.85rem;
				text-align: center;
				-webkit-background-clip: text;
  			-webkit-text-fill-color: transparent;
				text-shadow: 0 0.3rem 0.5rem var(--About-Maroon-3);
			`,
		},
	},
};

const _Heading = {
	default: styled(motion.h1)<_HeadingProps>`
		${(p) =>
			_HeadingVariants.default[p.variant as keyof _HeadingVariants][
				p.subComp as keyof _HeadingVariants
			]}
	`,
};

export default Heading;
