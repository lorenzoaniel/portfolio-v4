import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "nanoid";

interface NavmenuProps {
	children?: React.ReactNode[] | React.ReactNode;
	toggleStateTest?: boolean;
	variant?: string;
	subComp?: string;
	clickHandleTest?: Function;
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
		clickHandleTest = () => {},
		toggleStateTest = false,
	} = props;

	const createVariant = () => {
		switch (variant) {
			case "AboutPage":
				return (
					<AnimatePresence mode="wait">
						<_Nav.AboutPage key={nanoid()} variant={variant} subComp={"Main"}>
							<_Nav.AboutPage
								key={nanoid()}
								{..._MotionProps(variant, toggleStateTest)}
								subComp={"DropdownList"}
								variant={variant}
							>
								{children}
							</_Nav.AboutPage>

							<_Nav.AboutPage
								key={nanoid()}
								onClick={() => clickHandleTest()}
								variant={variant}
								subComp={"DropdownButton"}
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
		`,
		DropdownList: `
			height: fit-content;
      width: fit-content;
			display: flex;
			flex-direction: column;
		`,
		DropdownButton: `
			background: blue;
			height: 6.5rem;
			width: 5rem;
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

const _MotionProps = (variant: string, toggleStateTest?: boolean) => {
	let returnProps: any = {
		variants: _MotionVariants,
	};

	switch (variant) {
		case "AboutPage":
			returnProps = { ...returnProps, exit: "toggleOff", initial: "initial" };
			returnProps = { ...returnProps, animate: "toggleOn" };
			returnProps.variants = _MotionVariants.AboutPage;
			break;
		default:
			break;
	}

	return returnProps;
};

export default Navmenu;
