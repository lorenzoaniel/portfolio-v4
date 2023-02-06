import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { MdArrowRight, MdArrowLeft } from "react-icons/Md";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeItemDisplay, selectCarouselState } from "../store/slices/carouselSlice";

interface CProps {
	children: React.ReactNode[]; //multiple children
	variant?: string;
	navMode?: boolean;
	mainTheme?: {};
}

interface _CProps {
	variant: string;
	mainTheme: {};
	subComp?: string;
}

interface _CVariants {
	Main: any;
	Selector: any;
}

const Carousel = (props: CProps) => {
	const { children, variant = "Main", navMode = false, mainTheme = {} } = props;
	const childLength = children.length - 1;
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	let carouselContext = useAppSelector(selectCarouselState);

	useEffect(() => {
		navigate(carouselContext.routeState);
	}, [carouselContext.routeState]);

	const CarouselConfigs = {
		changeItemPayload: {
			Left: {
				variant: "Left",
				childLength: childLength,
				navMode: navMode,
				routeIndex: carouselContext.childIndex,
			},
			Right: {
				variant: "Right",
				childLength: childLength,
				navMode: navMode,
				routeIndex: carouselContext.childIndex,
			},
		},
	};

	return (
		<_C.Main mainTheme={mainTheme} variant={variant}>
			<_C.Selector
				onClick={() => {
					dispatch(changeItemDisplay(CarouselConfigs.changeItemPayload.Left));
				}}
				variant={"Selector"}
				subComp={"Left"}
				mainTheme={mainTheme}
			>
				<MdArrowLeft />
			</_C.Selector>
			{children[carouselContext.childIndex]}
			<_C.Selector
				onClick={() => {
					dispatch(changeItemDisplay(CarouselConfigs.changeItemPayload.Right));
				}}
				variant={"Selector"}
				subComp={"Right"}
				mainTheme={mainTheme}
			>
				<MdArrowRight />
			</_C.Selector>
		</_C.Main>
	);
};

//STYLE
const _CMIXINS = {
	SelectorDefault: `
    height: 100%;
    width: clamp(6.5rem, 8rem ,100%);
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1rem solid rgba(255,255,255,0.7);
    border-top-width: 0.5rem;
    border-bottom-width: 0.5rem;

		svg {
			fill: rgba(255,255,255,0.7);
			height: 5rem;
			width: 5rem;
		}

		&:hover {
			border-color: rgba(255,255,255,1);
			svg {
				fill: rgba(255,255,255,1);
			}
		}
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
			// margin-left: 1rem;
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

const _MotionVariants = {
	Main: {},
	Selector: {
		Left: {},
		Right: {},
	},
};

const _MotionProps = (variant: string) => {
	switch (variant) {
		case "Main":
			break;
		case "Selector":
			break;
		default:
			break;
	}
};

export default React.memo(Carousel);
