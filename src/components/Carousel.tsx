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
}

const Carousel = (props: CProps) => {
	const { children, variant = "default" } = props;
	const childLength = children.length - 1;
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	let carouselContext = useAppSelector(selectCarouselState);

	useEffect(() => {
		//navigates upon routeState change
		navigate(carouselContext.routeState);
	}, [carouselContext.routeState]);

	const CarouselConfigs = {
		changeItemPayload: {
			Left: {
				variant: "Left",
				childLength: childLength,
				navMode: true,
				routeIndex: carouselContext.childIndex,
			},
			Right: {
				variant: "Right",
				childLength: childLength,
				navMode: true,
				routeIndex: carouselContext.childIndex,
			},
		},
	};

	const createVariant = (variant: string) => {
		let motionProps: any = {
			animate: "animate",
			initial: "initial",
			exit: "exit",
		};

		switch (variant) {
			case "MainNav":
				return (
					<>
						<Main>
							<SelectorLeft
								onClick={() => {
									dispatch(changeItemDisplay(CarouselConfigs.changeItemPayload.Left));
								}}
							>
								<MdArrowLeft />
							</SelectorLeft>
							{children[carouselContext.childIndex]}
							<SelectorRight
								onClick={() => {
									dispatch(changeItemDisplay(CarouselConfigs.changeItemPayload.Right));
								}}
							>
								<MdArrowRight />
							</SelectorRight>
						</Main>
					</>
				);
			default:
				return <></>;
		}
	};

	console.log("Carousel rerendered!");
	//RENDER
	return <>{createVariant(variant)}</>;
};

//STYLE
const _CMIXINS = (theme: any) => {
	return {
		SelectorDefault: `
		// position: absolute;
		background: ${theme.color5};
    height: 100%;
    width: clamp(6.5rem, 8rem ,100%);
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1rem solid ${theme.color5};
    border-top-width: 0.5rem;
    border-bottom-width: 0.5rem;
		box-shadow: 0 0 0.1rem 0.3rem ${theme.color5};

		svg {
			border-radius: 1rem;
			fill: ${theme.color3};
			height: 100%;
			width: 100%;
		}

		&:hover {
			border-color: ${theme.color2};
			svg {
				fill: ${theme.color1};
			}
		}
  `,
	};
};

const Main = styled(motion.div)`
	width: 100%;
	height: 6.5rem;
	display: flex;
	justify-content: center;
`;

const SelectorLeft = styled(motion.div)`
	${({ theme }) => `
		${_CMIXINS(theme).SelectorDefault}
		// background: linear-gradient(to right, ${theme.color3}, ${theme.color5});
		border-right: none;
		border-top-left-radius: 1rem;
		border-bottom-left-radius: 1rem;
	`}
`;

const SelectorRight = styled(motion.div)`
	${({ theme }) => `
		${_CMIXINS(theme).SelectorDefault}
		// z-index: -1;
		border-left: none;
		border-top-right-radius: 1rem;
		border-bottom-right-radius: 1rem;
	`}
`;

//MOTION

const _MotionVariants = () => {
	return {
		Main: {},
		Selector: {
			Left: {},
			Right: {},
		},
	};
};

export default Carousel;
