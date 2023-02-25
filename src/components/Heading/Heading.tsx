import React, { useMemo } from "react";

import { About, Landing, Projects } from "./headingImportCombiner";

interface Props {
	titleProp: string;
	variant?: string;
	source?: string;
}

interface VariantMap {
	[variant: string]: JSX.Element;
}

const Heading: React.FC<Props> = ({ titleProp = "", variant = "default", source = "" }) => {
	const createVariantMap: VariantMap = {
		AboutTopic: (
			<About.TopicMain>
				<About.TopicContent href={source} target={"_blank"} as={"a"}>
					{titleProp}
				</About.TopicContent>
			</About.TopicMain>
		),
		AboutPage: (
			<About.Main>
				<About.Content>{titleProp}</About.Content>
			</About.Main>
		),
		Landing: <Landing.Main>{titleProp}</Landing.Main>,
		ProjectMainHeading: (
			<Projects.Main>
				<Projects.Content>{titleProp}</Projects.Content>
			</Projects.Main>
		),
	};

	const createVariant = useMemo(() => {
		return createVariantMap[variant] ?? <></>;
	}, [variant]);

	//RENDER
	return <>{createVariant}</>;
};

export default Heading;
