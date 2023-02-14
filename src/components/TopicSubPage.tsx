import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import Decorations from "./Decorations";
import Heading from "./Heading";
import { useAppSelector } from "../store/hooks";
import { selectPagesInfo } from "../store/slices/pagesInfoSlice";

interface PageProps {
	variant?: string;
	dataProp: any;
}

interface _PageTheme {
	AboutMe: any;
	AboutSite: any;
	AboutSource: any;
}

// COMPONENT

const TopicSubPage = (props: PageProps) => {
	const { dataProp, variant = "default" } = props;

	const AboutPageInfo = useAppSelector(selectPagesInfo).About;

	const createVariant = (variant: string) => {
		switch (variant) {
			case "AboutMe":
				return (
					<>
						<Main>
							<Decorations variant={"Spaceship"} />
							<Generic>{dataProp.Main}</Generic>
						</Main>
					</>
				);
			case "AboutSite":
				return (
					<>
						<Main>
							<Generic>{dataProp.Main.sectionOne}</Generic>
							<Decorations variant={"ReactIcon"} />
							<Generic>{dataProp.Main.sectionTwo}</Generic>
							<Decorations variant={"StyledComponentIcon"} />
							<Generic>{dataProp.Main.sectionThree}</Generic>
							<Decorations variant={"FramerMotionIcon"} />
							<Generic>{dataProp.Main.sectionFour}</Generic>
							<Decorations variant={"ReactRouterReduxIcons"} />
							<Generic>{dataProp.Main.sectionFive}</Generic>
							<Decorations variant={"ViteTsGithubIcons"} />
							<Generic>{dataProp.Main.sectionSix}</Generic>
						</Main>
					</>
				);
			case "AboutSource":
				return (
					<>
						<Main>
							<Decorations variant={"Inspiration"} />
							<Generic>{dataProp.Main}</Generic>
							<Heading
								variant={"AboutTopic"}
								source={"https://www.figma.com/community/file/1168769362540377344"}
								titleProp={
									AboutPageInfo.ALittleBitAboutTheSourcesAndInspirations.FirstInspiration.Title
								}
							/>
							<Generic>{dataProp.FirstInspiration.Main}</Generic>
							<Decorations variant={"SpaceshipReverse"} />
							<Generic>{dataProp.ClosingStatement}</Generic>
						</Main>
					</>
				);
			default:
				return <></>;
		}
	};

	//RENDER
	return <ThemeProvider theme={_PageTheme(variant)}>{createVariant(variant)}</ThemeProvider>;
};

//STYLE

const _PageTheme = (variant: string): _PageTheme => {
	interface styleObj {
		AboutMe: any;
		AboutSite: any;
		AboutSource: any;
	}

	const styleObj: styleObj = {
		AboutMe: {
			background: "linear-gradient(var(--About-Maroon-4), var(--About-Maroon-5))",
		},
		AboutSite: {
			background: "linear-gradient(var(--About-Purple-4), var(--About-Purple-5))",
		},
		AboutSource: {
			background: "linear-gradient(var(--About-SwampGreen-4), var(--About-SwampGreen-5))",
		},
	};

	return styleObj[variant as keyof styleObj];
};

const Main = styled(motion.section)`
	height: 100%;
	width: 100%;

	overflow-y: scroll; //reversed since it is flex row overflows x
	overflow-x: hidden;
	scrollbar-width: thin;
	margin-top: 1rem;
	border-radius: 1rem;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
	align-items: center;

	background: ${(p) => p.theme.background};
	box-shadow: 0 0.3rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5),
		0 0.1rem 1rem 0.2rem rgba(0, 0, 0, 0.5) inset;

	text-shadow: 0 0.1rem 0.1rem ${(p) => p.theme.color5};
	line-height: 1.5;
	color: rgba(0, 0, 0, 0.8);
	font-weight: 700;

	text-indent: 5%;
	filter: blur(0.06rem);
`;

const Generic = styled(motion.div)`
	height: fit-content;
	width: fit-content;
`;

const _MotionVariants = () => {
	return {};
};

export default TopicSubPage;
