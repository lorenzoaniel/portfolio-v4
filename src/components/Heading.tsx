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
		Landing: `
      margin-top: 5rem;
      font-weight: 200;
      font-size: 4.7rem;
      text-align: center;
    `,
		About: {
			default: `
				background: red;
				height: 5rem;
				width: 10rem;
				
			`,
		},
	},
};

const _Heading = {
	default: styled(motion.h1)<_HeadingProps>`
		color: #ffffff;
		${(p) => _HeadingVariants.default[p.variant as keyof _HeadingVariants]}
	`,
};

export default Heading;
