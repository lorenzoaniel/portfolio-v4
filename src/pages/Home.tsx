import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../store/hooks";
import Paragraph from "../components/Paragraph/Paragraph";
import { selectPagesInfo } from "../store/slices/pagesInfoSlice";
import { motion } from "framer-motion";
import { selectToggle } from "../store/slices/appToggleSlice";
import { device } from "../styles/breakpoints";
import Decorations from "../components/Decorations/Decorations";

interface Props {
	variant?: string;
}

interface _MotionVariants {
	[key: string]: any;
}

const Home = (props: Props) => {
	const infoContext = useAppSelector(selectPagesInfo);
	const appToggleContext = useAppSelector(selectToggle);

	const { variant = "default" } = props;

	const createVariant = (variant: string) => {
		let motionProps: any = {
			initial: "initial",
		};

		switch (variant) {
			default:
				motionProps = {
					...motionProps,
					animate: appToggleContext ? "onPageLoad" : "",
				};

				return (
					<Main {...motionProps} variants={_MotionVariants().Main}>
						<Decorations variant={"Astronaut"} />
						<Paragraph data={infoContext.Home.Main} variant="HomePage" />
					</Main>
				);
		}
	};

	console.log("Home rerendered!");
	//RENDER
	return <>{createVariant(variant)}</>;
};

//STYLE

const Main = styled(motion.section)`
	width: 100%;
	height: 100%;
	color: black;
	font-size: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-self: flex-end;

	@media ${device.laptop} {
		height: 100%;
		justify-content: end;
	}
`;

//MOTION
const _MotionVariants = (): _MotionVariants => {
	return {
		Main: {
			initial: {
				opacity: 0,
				transform: "translateY(-5rem)",
				transformOrigin: "bottom left",
			},
			onPageLoad: {
				transform: "translateY(0rem)",
				opacity: 1,
				transition: {
					duration: 1,
				},
			},
		},
	};
};

export default Home;
