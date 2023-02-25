import React, { useMemo, useRef } from "react";
import { useTheme } from "styled-components";
import { nanoid } from "nanoid";
import { RxDropdownMenu } from "react-icons/rx";

import { selectToggle, toggle } from "../../store/slices/appToggleSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { aboutTopicNavToggle, selectAboutToggle } from "../../store/slices/aboutToggleSlice";
import useCurrentDimension from "../../helpers/useCurrentDimension";

import {
	AppToggleButton,
	AppPageNavButton,
	AboutPageDropDownList,
	NavButton,
	GlassButton,
	ProjectSlideDownButton,
	ContactPageLinkButton,
	RoundedButton,
} from "./buttonImportCombiner";

enum Variant {
	APP_TOGGLE = "AppToggle",
	ABOUT_PAGE_NAV_BUTTON = "AboutPageNavButton",
	ABOUT_PAGE_DROP_DOWN_LIST = "AboutPageDropDownList",
	NAV_BUTTON = "NavButton",
	NAV_BUTTON_ENABLED = "NavButtonEnabled",
	GLASS_BUTTON = "GlassButton",
	PROJECT_SLIDE_DOWN_BUTTON = "ProjectSlideDownButton",
	CONTACT_PAGE_LINK_BUTTON = "ContactPageLinkButton",
	ROUNDED_BUTTON = "RoundedButton",
}

interface Props {
	variant: string;
	clickHandle?: () => void;
	children?: React.ReactNode | React.ReactNode[] | string;
	href?: string;
}

const Button: React.FC<Props> = ({
	children = <></>,
	clickHandle = () => {
		console.log("No function");
	},
	variant,
	href = "",
}) => {
	const toggleStateApp = useAppSelector(selectToggle);
	const toggleStateAbout = useAppSelector(selectAboutToggle);
	const dispatch = useAppDispatch();
	const theme = useTheme();

	const currentDimension = useCurrentDimension();
	let currentWidth = currentDimension.width;

	const variantKeyRef = useRef(nanoid());

	const motionPropsDefault: any = {
		initial: "initial",
		animate: "animate",
		whileHover: "whileHover",
		whileTap: "whileTap",
		exit: "exit",
	};

	const motionProps: any = {
		AppToggle: {
			...motionPropsDefault,
			animate: toggleStateApp ? "on" : "off",
		},
		AboutPageNavButton: {
			...motionPropsDefault,
			animate: toggleStateAbout ? "toggleOn" : "toggleOff",
		},
		AboutPageDropDownList: {
			//cannot use strings to refer to property since it will break orchestration, will need to pull object of properties out instead of refering by variant name
			whileHover: AboutPageDropDownList._MotionVariants(theme).Main.whileHover,
			whileTap: AboutPageDropDownList._MotionVariants(theme).Main.whileTap,
		},
		ContactPageLinkButton: {
			animate: currentWidth >= 820 ? "animate" : "whileHover",
			whileHover: "whileHover",
			whileTap: "whileTap",
		},
	};

	const createVariantMap: Map<string, JSX.Element> = new Map([
		[
			Variant.APP_TOGGLE,
			<AppToggleButton.Slider
				{...motionProps[Variant.APP_TOGGLE]}
				variants={AppToggleButton._MotionVariants(theme).Slider}
				key={variantKeyRef.current}
				onClick={() => {
					dispatch(toggle());
				}}
				toggleState={toggleStateApp}
			>
				<AppToggleButton.Button
					{...motionProps[Variant.APP_TOGGLE]}
					variants={AppToggleButton._MotionVariants(theme).Button}
					key={variantKeyRef.current}
					toggleState={toggleStateApp}
				></AppToggleButton.Button>
			</AppToggleButton.Slider>,
		],
		[
			Variant.ABOUT_PAGE_NAV_BUTTON,
			<AppPageNavButton.Main
				{...motionProps[Variant.ABOUT_PAGE_NAV_BUTTON]}
				variants={AppPageNavButton._MotionVariants(theme).Main}
				key={variantKeyRef.current}
				onClick={() => {
					dispatch(aboutTopicNavToggle());
				}}
				toggleState={toggleStateAbout}
			>
				<RxDropdownMenu key={variantKeyRef.current} style={{ height: "4rem", width: "4rem" }} />
			</AppPageNavButton.Main>,
		],
		[
			Variant.ABOUT_PAGE_DROP_DOWN_LIST,
			<AboutPageDropDownList.Main
				{...motionProps[Variant.ABOUT_PAGE_DROP_DOWN_LIST]}
				key={variantKeyRef.current}
				variants={AboutPageDropDownList._MotionVariants(theme).Main}
				onClick={clickHandle}
			>
				{children}
			</AboutPageDropDownList.Main>,
		],
		[
			Variant.NAV_BUTTON,
			<GlassButton.Themed
				{...motionPropsDefault}
				key={variantKeyRef.current}
				variants={NavButton._MotionVariants(theme).Main}
				onClick={clickHandle}
				toggleState={toggleStateAbout}
				disabled={true}
			>
				{children}
			</GlassButton.Themed>,
		],
		[
			Variant.NAV_BUTTON_ENABLED,
			<GlassButton.Themed
				{...motionPropsDefault}
				key={variantKeyRef.current}
				variants={NavButton._MotionVariants(theme).MainEnabled}
				onClick={clickHandle}
				toggleState={toggleStateAbout}
			>
				{children}
			</GlassButton.Themed>,
		],
		[
			Variant.GLASS_BUTTON,
			<GlassButton.Main key={variantKeyRef.current} {...motionPropsDefault} onClick={clickHandle}>
				{children}
			</GlassButton.Main>,
		],
		[
			Variant.PROJECT_SLIDE_DOWN_BUTTON,
			<ProjectSlideDownButton.Main
				key={variantKeyRef.current}
				{...motionPropsDefault}
				variants={ProjectSlideDownButton._MotionVariants(theme).Main}
			>
				<ProjectSlideDownButton.Title href={href} target={"_blank"} key={variantKeyRef.current}>
					{children}
				</ProjectSlideDownButton.Title>
			</ProjectSlideDownButton.Main>,
		],
		[
			Variant.CONTACT_PAGE_LINK_BUTTON,
			//Main is orchestrating nested child comps
			<ContactPageLinkButton.Main
				key={variantKeyRef.current}
				{...motionProps[Variant.CONTACT_PAGE_LINK_BUTTON]}
			>
				<ContactPageLinkButton.Cover variants={ContactPageLinkButton._MotionVariants(theme).Cover}>
					{"View Link"}
				</ContactPageLinkButton.Cover>
				<ContactPageLinkButton.Links
					href={href}
					target={"_blank"}
					variants={ContactPageLinkButton._MotionVariants(theme).Links}
				>
					{children}
				</ContactPageLinkButton.Links>
			</ContactPageLinkButton.Main>,
		],
		[
			Variant.ROUNDED_BUTTON,
			<RoundedButton.Main {...motionPropsDefault} variants={RoundedButton._MotionVariants().Main}>
				<a href={href} target={"_blank"} style={{ color: "black", textDecoration: "none" }}>
					{children}
				</a>
			</RoundedButton.Main>,
		],
	]);

	const createVariant = useMemo(() => {
		return createVariantMap.get(variant) ?? <></>;
	}, [variant, theme]);

	//RENDER
	return <>{createVariant}</>;
};

export default Button;
