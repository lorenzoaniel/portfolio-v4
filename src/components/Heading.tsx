import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../styles/breakpoints";

interface HeadingProps {
	variant?: string;
	titleProp: string;
}

interface _HeadingProps {
	variant: string;
}

interface _HeadingVariants {
	default: any;
}

const Heading = (props: HeadingProps) => {
	const { titleProp, variant = "default" } = props;
	return <_Heading.default variant={variant}>{titleProp}</_Heading.default>;
};

const _HeadingVariants: _HeadingVariants = {
	default: {
		default: ``,
		Landing: `
      margin-top: 5rem;
      font-weight: 200;
      font-size: 4.7rem;
      text-align: center;

      @media ${device.tablet}{
        margin-left: 5rem;
      }
    `,
	},
};

const _Heading = {
	default: styled(motion.h1)<_HeadingProps>`
		${(p) => _HeadingVariants.default[p.variant as keyof _HeadingVariants]}
	`,
};

export default Heading;
