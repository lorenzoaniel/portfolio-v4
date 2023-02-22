import React from "react";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { RxDropdownMenu } from "react-icons/Rx";

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

interface ButtonProps {
	variant: string;
	clickHandle?: () => void;
	children?: React.ReactNode | React.ReactNode[] | string;
	href?: string;
}

const Button = (props: ButtonProps) => {
	const {
		children = <></>,
		clickHandle = () => {
			console.log("No function");
		},
		variant,
		href = "",
	} = props;

	const toggleStateApp = useAppSelector(selectToggle);
	const toggleStateAbout = useAppSelector(selectAboutToggle);
	const dispatch = useAppDispatch();
	const theme = useTheme();

	const createVariant = (variant: string) => {
		let motionProps: any = {
			initial: "initial",
			animate: "animate",
			whileHover: "whileHover",
			whileTap: "whileTap",
			exit: "exit",
		};

		switch (variant) {
			case "AppToggle":
				motionProps = { ...motionProps, animate: toggleStateApp ? "on" : "off" };

				return (
					<>
						<AppToggleButton.Slider
							{...motionProps}
							variants={AppToggleButton._MotionVariants(theme).Slider}
							key={nanoid()}
							onClick={() => {
								dispatch(toggle());
							}}
							toggleState={toggleStateApp}
						>
							<AppToggleButton.Button
								{...motionProps}
								variants={AppToggleButton._MotionVariants(theme).Button}
								key={nanoid()}
								toggleState={toggleStateApp}
							></AppToggleButton.Button>
						</AppToggleButton.Slider>
					</>
				);

			case "AboutPageNavButton":
				motionProps = {
					...motionProps,
					animate: toggleStateAbout ? "toggleOn" : "toggleOff",
				};

				return (
					<AppPageNavButton.Main
						{...motionProps}
						variants={AppPageNavButton._MotionVariants(theme).Main}
						key={nanoid()}
						onClick={() => {
							dispatch(aboutTopicNavToggle());
						}}
						toggleState={toggleStateAbout}
					>
						<RxDropdownMenu key={nanoid()} style={{ height: "4rem", width: "4rem" }} />
					</AppPageNavButton.Main>
				);

			case "AboutPageDropDownList":
				//Orchestrated by Navmenu 'AboutPage' variant
				motionProps = {
					//cannot use strings to refer to property since it will break orchestration, will need to pull object of properties out instead of refering by variant name
					whileHover: AboutPageDropDownList._MotionVariants(theme).Main.whileHover,
					whileTap: AboutPageDropDownList._MotionVariants(theme).Main.whileTap,
				};

				return (
					<AboutPageDropDownList.Main
						{...motionProps}
						key={nanoid()}
						variants={AboutPageDropDownList._MotionVariants(theme).Main}
						onClick={clickHandle}
					>
						{children}
					</AboutPageDropDownList.Main>
				);

			case "NavButton":
				return (
					<GlassButton.Themed
						{...motionProps}
						key={nanoid()}
						variants={NavButton._MotionVariants(theme).Main}
						onClick={clickHandle}
						toggleState={toggleStateAbout}
						disabled={true}
					>
						{children}
					</GlassButton.Themed>
				);

			case "NavButtonEnabled":
				return (
					<GlassButton.Themed
						{...motionProps}
						key={nanoid()}
						variants={NavButton._MotionVariants(theme).MainEnabled}
						onClick={clickHandle}
						toggleState={toggleStateAbout}
					>
						{children}
					</GlassButton.Themed>
				);

			case "GlassButton":
				return (
					<GlassButton.Main key={nanoid()} {...motionProps} onClick={clickHandle}>
						{children}
					</GlassButton.Main>
				);

			case "ProjectSlideDownButton":
				return (
					<ProjectSlideDownButton.Main
						key={nanoid()}
						{...motionProps}
						variants={ProjectSlideDownButton._MotionVariants(theme).Main}
					>
						<ProjectSlideDownButton.Title href={href} target={"_blank"} key={nanoid()}>
							{children}
						</ProjectSlideDownButton.Title>
					</ProjectSlideDownButton.Main>
				);

			case "ContactPageLinkButton":
				let currentWidth = useCurrentDimension().width;

				motionProps = {
					...motionProps,
					animate: currentWidth >= 820 ? "animate" : "whileHover",
					whileHover: "whileHover",
					whileTap: "whileTap",
				};

				return (
					//Main is orchestrating nested child comps
					<ContactPageLinkButton.Main key={nanoid()} {...motionProps}>
						<ContactPageLinkButton.Cover
							variants={ContactPageLinkButton._MotionVariants(theme).Cover}
						>
							{"View Link"}
						</ContactPageLinkButton.Cover>
						<ContactPageLinkButton.Links
							href={href}
							target={"_blank"}
							variants={ContactPageLinkButton._MotionVariants(theme).Links}
						>
							{children}
						</ContactPageLinkButton.Links>
					</ContactPageLinkButton.Main>
				);

			case "RoundedButton":
				return (
					<RoundedButton.Main {...motionProps} variants={RoundedButton._MotionVariants().Main}>
						{children}
					</RoundedButton.Main>
				);

			default:
				return <></>;
		}
	};

	//RENDER
	return <>{createVariant(variant)}</>;
};

export default Button;
