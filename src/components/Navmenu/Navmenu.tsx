import React from "react";
import { AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";

import { useAppSelector } from "../../store/hooks";
import { selectAboutToggle } from "../../store/slices/aboutToggleSlice";

import { AboutPageDropDown, Default } from "./navmenuImportCombiner";
import Button from "../Button/Button";

interface NavmenuProps {
	children: React.ReactNode[] | React.ReactNode;
	variant?: string;
}

const Navmenu = (props: NavmenuProps) => {
	const { children, variant = "default" } = props;

	const toggleStateAbout = useAppSelector(selectAboutToggle);

	const createVariant = (variant: string) => {
		let motionProps: any = {
			animate: "animate",
			initial: "initial",
			exit: "exit",
		};

		switch (variant) {
			case "AboutPage":
				motionProps = {
					...motionProps,
					initial: "initial",
					animate: toggleStateAbout ? "toggleOn" : "",
					exit: "toggleOff",
				};

				//Orchestrating some child/properties
				return (
					<AnimatePresence mode="wait">
						<AboutPageDropDown.Main key={nanoid()}>
							<AboutPageDropDown.List
								{...motionProps}
								key={nanoid()}
								variants={AboutPageDropDown._MotionVariants()}
							>
								{children}
							</AboutPageDropDown.List>
							<Button variant={"AboutPageNavButton"} />
						</AboutPageDropDown.Main>
					</AnimatePresence>
				);
			default:
				return <Default.Main key={nanoid()}>{children}</Default.Main>;
		}
	};

	//RENDER
	return <>{createVariant(variant)}</>;
};

export default Navmenu;
