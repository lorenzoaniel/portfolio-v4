import React from "react";

import { useAppSelector } from "../../store/hooks";
import { selectPagesInfo } from "../../store/slices/pagesInfoSlice";

import { TopicPage } from "./topicSubPageImportCombiner";

import Decorations from "../Decorations/Decorations";
import Heading from "../Heading/Heading";

interface PageProps {
	variant?: string;
	dataProp: any;
}

const TopicSubPage = (props: PageProps) => {
	const { dataProp, variant = "default" } = props;

	const AboutPageInfo = useAppSelector(selectPagesInfo).About;

	const createVariant = (variant: string) => {
		switch (variant) {
			case "AboutMe":
				return (
					<>
						<TopicPage.Main>
							<Decorations variant={"Spaceship"} />
							<TopicPage.Generic>{dataProp.Main}</TopicPage.Generic>
						</TopicPage.Main>
					</>
				);
			case "AboutSite":
				return (
					<>
						<TopicPage.Main>
							<TopicPage.Generic>{dataProp.Main.sectionOne}</TopicPage.Generic>
							<Decorations variant={"ReactIcon"} />
							<TopicPage.Generic>{dataProp.Main.sectionTwo}</TopicPage.Generic>
							<Decorations variant={"StyledComponentIcon"} />
							<TopicPage.Generic>{dataProp.Main.sectionThree}</TopicPage.Generic>
							<Decorations variant={"FramerMotionIcon"} />
							<TopicPage.Generic>{dataProp.Main.sectionFour}</TopicPage.Generic>
							<Decorations variant={"ReactRouterReduxIcons"} />
							<TopicPage.Generic>{dataProp.Main.sectionFive}</TopicPage.Generic>
							<Decorations variant={"ViteTsGithubIcons"} />
							<TopicPage.Generic>{dataProp.Main.sectionSix}</TopicPage.Generic>
						</TopicPage.Main>
					</>
				);
			case "AboutSource":
				return (
					<>
						<TopicPage.Main>
							<Decorations variant={"Inspiration"} />
							<TopicPage.Generic>{dataProp.Main}</TopicPage.Generic>
							<Heading
								variant={"AboutTopic"}
								source={"https://www.figma.com/community/file/1168769362540377344"}
								titleProp={
									AboutPageInfo.ALittleBitAboutTheSourcesAndInspirations.FirstInspiration.Title
								}
							/>
							<TopicPage.Generic>{dataProp.FirstInspiration.Main}</TopicPage.Generic>
							<Decorations variant={"SpaceshipReverse"} />
							<TopicPage.Generic>{dataProp.ClosingStatement}</TopicPage.Generic>
						</TopicPage.Main>
					</>
				);
			default:
				return <></>;
		}
	};

	//RENDER
	return <>{createVariant(variant)}</>;
};

export default TopicSubPage;
