import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { MdArrowRight, MdArrowLeft } from "react-icons/Md";

interface CProps {
	variant?: string;
	children?: React.ReactElement;
}

interface _CProps {
	variant: string;
	subComp?: string;
}

interface _CVariants {
	Main: any;
	Selector: any;
}

const Carousel = (props: CProps) => {
	const { children, variant = "Main" } = props;

	return (
		<_C.Main variant={variant}>
			<_C.Selector variant={"Selector"} subComp={"Left"}>
				<MdArrowLeft />
			</_C.Selector>
			{children}
			<_C.Selector variant={"Selector"} subComp={"Right"}>
				<MdArrowRight />
			</_C.Selector>
		</_C.Main>
	);
};

//STYLE
const _CMIXINS = {
	SelectorDefault: `
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1rem solid rgba(255,255,255,0.5);
    border-top-width: 0.5rem;
    border-bottom-width: 0.5rem;
  `,
};

const _CVariants: _CVariants = {
	Main: `
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
  `,
	Selector: {
		Left: `
      border-right: none;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    `,
		Right: `
      border-left: none;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    `,
	},
};

const _C = {
	Main: styled(motion.div)<_CProps>`
		${(p) => _CVariants[p.variant as keyof _CVariants]}
	`,
	Selector: styled(motion.div)<_CProps>`
		${_CMIXINS.SelectorDefault}
		${(p) => _CVariants[p.variant as keyof _CVariants][p.subComp as keyof _CVariants]}
	`,
};

//MOTION

const _MotionVariants = {};
const _MotionProps = {};

export default Carousel;
