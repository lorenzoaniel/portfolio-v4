import React from "react";
import { ProjectDisplay } from "./displayImportCombiner";

import useCurrentDimension from "../../helpers/useCurrentDimension";

import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import Modal from "../Modal/Modal";

interface Props {
	variant?: string;
	children: any;
}

interface ProjectDisplayProps {
	projectName: string;
	projectDesc: string;
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

				return (
					<ProjectDisplay.Main {...motionProps} variants={ProjectDisplay._MotionVariants().Main}>
						<ProjectDisplay.SlideUp variants={ProjectDisplay._MotionVariants().SlideUp}>
							<Button variant={"RoundedButton"}>{"Visit Website"}</Button>
						</ProjectDisplay.SlideUp>
						<ProjectDisplay.Cover>
							<Paragraph data={childrenProjectDisplay.projectName} variant={"ProjectCover"} />
						</ProjectDisplay.Cover>
						<ProjectDisplay.SlideDown variants={ProjectDisplay._MotionVariants().SlideDown}>
							<Modal variant={"ProjectDescriptionProxy"}>
								{childrenProjectDisplay.projectDesc}
							</Modal>

							<Button variant={"ProjectSlideDownButton"}>{"Github"}</Button>
						</ProjectDisplay.SlideDown>

						<Modal variant={"ProjectDescriptionModal"}>{childrenProjectDisplay.projectDesc}</Modal>
					</ProjectDisplay.Main>
				);
			default:
				return <></>;
		}
	};

	return <>{createVariant(variant, children)}</>;
};

export default Display;
