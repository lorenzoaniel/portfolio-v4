import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "nanoid";
import Button from "./Button";

interface NavmenuProps {
	children?: React.ReactNode[] | React.ReactNode;
	toggleState?: boolean;
	variant?: string;
	subComp?: string;
	clickHandle?: Function;
	locationTheme?: string;
}

interface _NavmenuProps {
	variant: string;
	subComp: string;
}

interface _NavVariants {
	default: any;
	AboutPage: any;
}

interface _PageTheme {
	AboutMe: any;
	AboutSite: any;
	AboutSource: any;
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
		locationTheme = "", //This needs a value if component is being used as 'AboutPage' variant
	} = props;

	const createVariant = () => {
		switch (variant) {
			case "AboutPage":
				return (
					<AnimatePresence mode="wait">
						<ThemeProvider theme={_PageTheme(locationTheme.slice(7))}>
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
						</ThemeProvider>
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

const _PageTheme = (variant: string = "ALittleBitAboutMePage") => {
	interface styleObj {
		ALittleBitAboutMePage: any;
		ALittleBitAboutTheSite: any;
		ALittleBitAboutTheSourcesAndInspirations: any;
	}

	const styleObj: styleObj = {
		ALittleBitAboutMePage: {
			background: "linear-gradient(var(--About-Maroon-4), var(--About-Maroon-5))",
			color: "var(--About-Maroon-4)",
			shadow3: "var(--About-Maroon-3)",
			shadow2: "var(--About-Maroon-2)",
		},
		ALittleBitAboutTheSite: {
			background: "linear-gradient(var(--About-Purple-1), var(--About-Purple-2))",
			color: "var(--About-Purple-1)",
			shadow3: "var(--About-Purple-3)",
			shadow2: "var(--About-Purple-2)",
		},
		ALittleBitAboutTheSourcesAndInspirations: {
			background: "linear-gradient(var(--About-SwampGreen-1), var(--About-SwampGreen-2))",
			color: "var(--About-SwampGreen-1)",
			shadow3: "var(--About-SwampGreen-3)",
			shadow2: "var(--About-SwampGreen-3)",
		},
	};

	switch (variant) {
		case "ALittleBitAboutMePage":
			return styleObj.ALittleBitAboutMePage;
		case "ALittleBitAboutTheSite":
			return styleObj.ALittleBitAboutTheSite;
		case "ALittleBitAboutTheSourcesAndInspirations":
			return styleObj.ALittleBitAboutTheSourcesAndInspirations;
		default:
			return styleObj.ALittleBitAboutMePage;
	}
};

const _NavVariants: _NavVariants = {
	default: {
		Main: `
      height: fit-content;
      width: 100%;
      display: flex; 
      justify-content: space-between;
      padding-right: 10%;
      column-gap: 2%;
			margin-bottom: 10rem;
    `,
	},
	AboutPage: {
		Main: `
			height: fit-content;
      width: 100%;
			display: flex;
			position: relative;
			padding: 0.3rem; // to prevent heading from pushing down
			margin: auto 0;
			z-index: 4;
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
