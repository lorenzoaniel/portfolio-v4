import React, { useState } from "react";
import { ProjectDisplay } from "./displayImportCombiner";

import useCurrentDimension from "../../helpers/useCurrentDimension";

import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import Modal from "../Modal/Modal";
import Image from "../Image/Image";

interface Props {
	variant?: string;
	children: any;
}

interface ProjectDisplayProps {
	projectName: string;
	projectDesc: string;
	projectGithub: string;
	projectImg: string;
	projectUrl: string;
}

const Display = (props: Props) => {
	const { variant = "default", children } = props;

	let currentDimension = useCurrentDimension();

	const createVariant = (variant: string, children: any) => {
		let motionProps = {
			initial: "initial",
			animate: currentDimension.width >= 820 ? "animate" : "whileHover", //activates animations for mobile since users cannot hover
			whileHover: "whileHover",
			exit: "exit",
		};

		switch (variant) {
			case "ProjectDisplay":
				let childrenProjectDisplay: ProjectDisplayProps = children;
				const [projectModalToggle, useProjectModalToggle] = useState(false);

				const changeToggle = () => {
					useProjectModalToggle((curr) => !curr);
				};

				return (
					<ProjectDisplay.Main {...motionProps} variants={ProjectDisplay._MotionVariants().Main}>
						<ProjectDisplay.SlideUp variants={ProjectDisplay._MotionVariants().SlideUp}>
							<Button href={childrenProjectDisplay.projectUrl} variant={"RoundedButton"}>
								{"Visit Website"}
							</Button>
							<Image source={childrenProjectDisplay.projectImg} variant={"ProjectThumbnail"} />
						</ProjectDisplay.SlideUp>
						<ProjectDisplay.Cover>
							<Paragraph data={childrenProjectDisplay.projectName} variant={"ProjectCover"} />
						</ProjectDisplay.Cover>
						<ProjectDisplay.SlideDown variants={ProjectDisplay._MotionVariants().SlideDown}>
							<Modal handleClick={() => changeToggle()} variant={"ProjectDescriptionProxy"}>
								{childrenProjectDisplay.projectDesc}
							</Modal>

							<Button
								href={childrenProjectDisplay.projectGithub}
								variant={"ProjectSlideDownButton"}
							>
								{"Github"}
							</Button>
						</ProjectDisplay.SlideDown>
						{projectModalToggle && (
							<Modal handleClick={() => changeToggle()} variant={"ProjectDescriptionModal"}>
								{childrenProjectDisplay.projectDesc}
							</Modal>
						)}
					</ProjectDisplay.Main>
				);
			default:
				return <></>;
		}
	};

	return <>{createVariant(variant, children)}</>;
};

export default Display;
