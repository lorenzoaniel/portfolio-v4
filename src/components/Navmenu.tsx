import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "nanoid";
import Button from "./Button";

interface NavmenuProps {
	children?: React.ReactNode[] | React.ReactNode;
	toggleState?: boolean;
	variant?: string;
	subComp?: string;
	clickHandle?: Function;
}

interface _NavmenuProps {
	variant: string;
	subComp: string;
}

interface _NavVariants {
	default: any;
	AboutPage: any;
}

interface _MotionVariants {
	default: any;
	AboutPage: any;
}

const Navmenu = (props: NavmenuProps) => {
	const {
		children = undefined,
		variant = "default",
		subComp = "Main",
		toggleState = false,
		clickHandle = () => {},
	} = props;

	const createVariant = () => {
		switch (variant) {
			case "AboutPage":
				return (
					<AnimatePresence mode="wait">
						<_Nav.AboutPage key={nanoid()} variant={variant} subComp={"Main"}>
							<_Nav.AboutPage
								key={nanoid()}
								{..._MotionProps(variant, toggleState)}
								subComp={"DropdownList"}
								variant={variant}
							>
								{children}
							</_Nav.AboutPage>
							<Button
								nameProp={""}
								variant={"AboutPageNavButton"}
								toggleState={toggleState}
								clickHandle={() => {
									clickHandle();
								}}
							/>
						</_Nav.AboutPage>
					</AnimatePresence>
				);
			default:
				return (
					<_Nav.default variant={variant} subComp={subComp}>
						{children}
					</_Nav.default>
				);
		}
	};

	return <>{createVariant()}</>;
};

//STYLE

const _NavVariants: _NavVariants = {
	default: {
		Main: `
      height: fit-content;
      width: 100%;
      display: flex; 
      justify-content: space-between;
      padding-right: 10%;
      column-gap: 2%;
    `,
	},
	AboutPage: {
		Main: `
			height: fit-content;
      width: fit-content;
			display: flex;
			position: relative;
			padding: 0.3rem; // to prevent heading from pushing down
		`,
		DropdownList: `
			height: fit-content;
      width: fit-content;
			display: flex;
			flex-direction: column;
		`,
	},
};

const _Nav = {
	default: styled(motion.div)<_NavmenuProps>`
		${(p) => _NavVariants.default[p.subComp as keyof _NavVariants]}
	`,
	AboutPage: styled(motion.div)<_NavmenuProps>`
		${(p) => _NavVariants.AboutPage[p.subComp as keyof _NavVariants]}
	`,
};

//Motion

const _MotionVariants = {
	default: {},
	AboutPage: {
		initial: {},
		toggleOff: {
			transition: {
				duration: 0.5,
				staggerChildren: 0.3,
				staggerDirection: -1,
			},
		},
		toggleOn: {
			transition: {
				duration: 0.5,
				staggerChildren: 0.3,
			},
		},
	},
};

const _MotionProps = (variant: string, toggleState?: boolean) => {
	let returnProps: any = {
		variants: _MotionVariants,
	};

	switch (variant) {
		case "AboutPage":
			returnProps = { ...returnProps };
			returnProps = {
				...returnProps,
				initial: "initial",
				animate: toggleState ? "toggleOn" : "",
				exit: "toggleOff",
			};
			returnProps.variants = _MotionVariants.AboutPage;
			break;
		default:
			break;
	}

	return returnProps;
};

export default Navmenu;
