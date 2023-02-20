import React from "react";

import { Home, About, ProjectCover } from "./paragraphImportCombiner";

interface Props {
	variant: string;
	data: string;
	href?: string;
}

const Paragraph = (props: Props) => {
	const { data, variant = "default" } = props;

	const createVariant = (variant: string) => {
		// let motionProps: any = {
		// 	animate: "animate",
		// 	initial: "initial",
		// 	exit: "exit",
		// };

		switch (variant) {
			case "HomePage":
				return <Home.Main>{data}</Home.Main>;
			case "AboutPage":
				return <About.Main>{data}</About.Main>;
			case "ProjectCover":
				return (
					<ProjectCover.Main>
						<ProjectCover.Paragraph>{data}</ProjectCover.Paragraph>
					</ProjectCover.Main>
				);
			default:
				return <></>;
		}
	};

	//RENDER
	return <>{createVariant(variant)}</>;
};

export default Paragraph;
