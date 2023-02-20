import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../styles/breakpoints";

import { About, Landing, Projects } from "./headingImportCombiner";

interface HeadingProps {
	titleProp: string;
	variant: string;
	source?: string;
}

const Heading = (props: HeadingProps) => {
	const { titleProp, variant = "default", source = "" } = props;

	const createVariant = (variant: string) => {
		switch (variant) {
			case "AboutTopic":
				return (
					<About.TopicMain>
						<About.TopicContent href={source} target={"_blank"} as={"a"}>
							{titleProp}
						</About.TopicContent>
					</About.TopicMain>
				);
			case "AboutPage":
				return (
					<About.Main>
						<About.Content>{titleProp}</About.Content>
					</About.Main>
				);
			case "Landing":
				return <Landing.Main>{titleProp}</Landing.Main>;
			case "ProjectMainHeading":
				return (
					<Projects.Main>
						<Projects.Content>{titleProp}</Projects.Content>
					</Projects.Main>
				);
			default:
				return <></>;
		}
	};

	//RENDER
	return <>{createVariant(variant)}</>;
};

export default Heading;
