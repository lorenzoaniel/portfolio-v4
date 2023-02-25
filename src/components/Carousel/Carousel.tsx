import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeItemDisplay, selectCarouselState } from "../../store/slices/carouselSlice";

import { MainNav } from "./carouselImportCombiner";

interface Props {
	children: React.ReactNode[]; //multiple children
	variant?: string;
}

enum Variant {
	MAIN_NAV = "MainNav",
}

interface CarouselConfigs {
	changeItemPayload: {
		Left: {
			variant: "Left";
			childLength: number;
			navMode: boolean;
			routeIndex: number;
		};
		Right: {
			variant: "Right";
			childLength: number;
			navMode: boolean;
			routeIndex: number;
		};
	};
}

const Carousel: React.FC<Props> = ({ children, variant = "default" }) => {
	const childLength = children.length - 1;
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const carouselContext = useAppSelector(selectCarouselState);

	useEffect(() => {
		//navigates upon routeState change
		navigate(carouselContext.routeState);
	}, [carouselContext.routeState]);

	const configs: Record<string, CarouselConfigs> = {
		MainNav: {
			changeItemPayload: {
				Left: {
					variant: "Left",
					childLength,
					navMode: true,
					routeIndex: carouselContext.childIndex,
				},
				Right: {
					variant: "Right",
					childLength,
					navMode: true,
					routeIndex: carouselContext.childIndex,
				},
			},
		},
	};

	const createMapVariant: Map<string, JSX.Element> = new Map([
		[
			Variant.MAIN_NAV,
			<MainNav.Main>
				<MainNav.Left
					onClick={() => {
						dispatch(changeItemDisplay(configs[variant].changeItemPayload.Left));
					}}
				>
					<MdArrowLeft />
				</MainNav.Left>
				{children[carouselContext.childIndex]}
				<MainNav.Right
					onClick={() => {
						dispatch(changeItemDisplay(configs[variant].changeItemPayload.Right));
					}}
				>
					<MdArrowRight />
				</MainNav.Right>
			</MainNav.Main>,
		],
	]);

	const createVariant = useMemo(() => {
		return createMapVariant.get(variant) ?? <></>;
	}, [variant, childLength, carouselContext.childIndex, dispatch]);

	return <>{createVariant}</>;
};

export default React.memo(Carousel);
