import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

interface NavmenuProps {
	children: React.ReactNode[] | React.ReactNode;
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
		children = null,
		variant = "default",
		subComp = "Main",
		clickHandleTest = () => {},
		toggleStateTest = false,
	} = props;

	const createVariant = () => {
		switch (variant) {
			case "AboutPage":
				return (
					<>
						<_Nav.AboutPage variant={variant} subComp={"Main"}>
							<_Nav.AboutPage
								{..._MotionProps(variant, toggleStateTest)}
								subComp={"DropdownList"}
								variant={variant}
							>
								{children}
							</_Nav.AboutPage>
							<_Nav.AboutPage
								onClick={() => clickHandleTest()}
								variant={variant}
								subComp={"DropdownButton"}
							/>
						</_Nav.AboutPage>
					</>
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
			background: red;
			height: fit-content;
      width: fit-content;
			display: flex;
		`,
		DropdownList: `
			background: yellow;
			min-height: 6.5rem;
      min-width: 20rem;
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
		toggleOff: {
			transition: {
				staggerChildren: 0.5,
			},
		},
		toggleOn: {
			transition: {
				staggerChildren: 0.5,
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
			returnProps = { ...returnProps, animate: toggleStateTest ? "toggleOn" : "toggleOff" };
			returnProps.variants = _MotionVariants.AboutPage;
			break;
		default:
			break;
	}

	return returnProps;
};

export default Navmenu;
