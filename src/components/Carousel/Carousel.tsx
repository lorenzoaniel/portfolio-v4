import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { MdArrowRight, MdArrowLeft } from "react-icons/Md";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeItemDisplay, selectCarouselState } from "../../store/slices/carouselSlice";

import { MainNav } from "./carouselImportCombiner";

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

	const createVariant = (variant: string) => {
		let motionProps: any = {
			animate: "animate",
			initial: "initial",
			exit: "exit",
		};

		switch (variant) {
			case "MainNav":
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

				return (
					<>
						<MainNav.Main>
							<MainNav.Left
								onClick={() => {
									dispatch(changeItemDisplay(CarouselConfigs.changeItemPayload.Left));
								}}
							>
								<MdArrowLeft />
							</MainNav.Left>
							{children[carouselContext.childIndex]}
							<MainNav.Right
								onClick={() => {
									dispatch(changeItemDisplay(CarouselConfigs.changeItemPayload.Right));
								}}
							>
								<MdArrowRight />
							</MainNav.Right>
						</MainNav.Main>
					</>
				);

			default:
				return <></>;
		}
	};

	return <>{createVariant(variant)}</>;
};

export default Carousel;
