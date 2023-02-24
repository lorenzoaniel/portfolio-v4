import React from "react";

import { Gif, Default, ProjectThumbnail } from "./imageImportCombiner";

interface Props {
	variant?: string;
	source: string;
}

const Image = (props: Props) => {
	const { variant = "default", source = "" } = props;

	const createVariant = (variant: string) => {
		switch (variant) {
			case "Gif":
				return <Gif.Frame src={source} scrolling={"no"} />;
			case "ProjectThumbnail":
				return (
					<ProjectThumbnail.Main>
						<ProjectThumbnail.Img src={source} />
					</ProjectThumbnail.Main>
				);
			default:
				return (
					<Default.Main>
						<Default.Frame src={source} />
					</Default.Main>
				);
		}
	};

	//RENDER
	return <>{createVariant(variant)}</>;
};

export default Image;
