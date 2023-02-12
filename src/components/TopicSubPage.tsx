import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Image from "./Image";
import { RiReactjsFill } from "react-icons/Ri";
import {
	SiStyledcomponents,
	SiReactrouter,
	SiRedux,
	SiVite,
	SiTypescript,
	SiGithub,
} from "react-icons/Si";
import { CgFramer } from "react-icons/Cg";

interface PageProps {
	variant?: string;
	dataProp: {
		Main: any;
	};
}

interface _PageProps {
	variant?: string;
}

interface _PageVariants {
	Main: any;
	Generic: any;
}

interface _PageTheme {
	AboutMe: any;
	AboutSite: any;
	AboutSource: any;
}

// COMPONENT

const TopicSubPage = (props: PageProps) => {
	const { dataProp, variant = "default" } = props;

	const createReactIconStyles = (variant: string, iconGroupAmount: number = 0) => {
		interface styleType {
			default: any;
			multiple: any;
		}

		const dynamicWidthHeight = 50 / iconGroupAmount + "vw";

		const reactIconStyles: styleType = {
			default: {
				minHeight: "50%",
				minWidth: "50%",
			},
			multiple: {
				height: dynamicWidthHeight,
				width: dynamicWidthHeight,
			},
		};

		return reactIconStyles[variant as keyof styleType];
	};

	const createVariant = (variant: string) => {
		switch (variant) {
			case "AboutMe":
				return (
					<>
						<_Page.Main>{dataProp.Main}</_Page.Main>
					</>
				);
			case "AboutSite":
				return (
					<>
						<_Page.Main>
							<_Page.Generic variant={"default"}>{dataProp.Main.sectionOne}</_Page.Generic>
							<RiReactjsFill style={createReactIconStyles("default")} />
							<_Page.Generic variant={"default"}>{dataProp.Main.sectionTwo}</_Page.Generic>
							<SiStyledcomponents style={createReactIconStyles("default")} />
							<_Page.Generic variant={"default"}>{dataProp.Main.sectionThree}</_Page.Generic>
							<CgFramer style={createReactIconStyles("default")} />
							<_Page.Generic variant={"default"}>{dataProp.Main.sectionFour}</_Page.Generic>
							<_Page.Generic variant={"iconContainer"}>
								<SiReactrouter style={createReactIconStyles("multiple", 2)} />
								<SiRedux style={createReactIconStyles("multiple", 2)} />
							</_Page.Generic>
							<_Page.Generic variant={"default"}>{dataProp.Main.sectionFive}</_Page.Generic>
							<_Page.Generic variant={"iconContainer"}>
								<SiVite style={createReactIconStyles("multiple", 3)} />
								<SiTypescript style={createReactIconStyles("multiple", 3)} />
								<SiGithub style={createReactIconStyles("multiple", 3)} />
							</_Page.Generic>
							<_Page.Generic variant={"default"}>{dataProp.Main.sectionSix}</_Page.Generic>
						</_Page.Main>
					</>
				);
			case "AboutSource":
				return (
					<>
						<_Page.Main>{dataProp.Main}</_Page.Main>
					</>
				);
			default:
				return <></>;
		}
	};

	console.log("TopicSubPage rerendered!");
	//RENDER
	return <ThemeProvider theme={_PageTheme(variant)}>{createVariant(variant)}</ThemeProvider>;
};

//STYLE

const _PageTheme = (variant: string): _PageTheme => {
	interface styleObj {
		AboutMe: any;
		AboutSite: any;
		AboutSource: any;
	}

	const styleObj: styleObj = {
		AboutMe: {
			background: "linear-gradient(var(--About-Maroon-4), var(--About-Maroon-5))",
		},
		AboutSite: {
			background: "linear-gradient(var(--About-Purple-4), var(--About-Purple-5))",
		},
		AboutSource: {
			background: "linear-gradient(var(--About-SwampGreen-4), var(--About-SwampGreen-5))",
		},
	};

	return styleObj[variant as keyof styleObj];
};

const _PageVariants: _PageVariants = {
	Main: {
		default: ``,
	},
	Generic: {
		default: `
			height: fit-content;
			width: fit-content
		`,
		iconContainer: `
			display: flex; 
			width: 100%;
			height: fit-content;
			justify-content: center;
			align-items: center;
			column-gap: 4rem;
		`,
	},
};

const _Page: _PageVariants = {
	Main: styled.section<_PageProps>`
		height: 100%;
		width: 100%;

		overflow-y: scroll; //since it is flex row
		scrollbar-width: thin;
		margin-top: 1rem;
		border-radius: 1rem;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		row-gap: 1.5rem;
		align-items: center;

		background: ${(p) => p.theme.background};
		box-shadow: 0 0.3rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5),
			0 0.1rem 1rem 0.2rem rgba(0, 0, 0, 0.5) inset;

		text-shadow: 0 0.1rem 0.3rem rgba(255, 255, 255, 0.5);
		line-height: 1.5;
		color: rgba(200, 200, 200, 1);

		text-indent: 5%;
		text-align: justify;
	`,

	Generic: styled.div<_PageProps>`
		${(p) => _PageVariants.Generic[p.variant as keyof _PageVariants]}
	`,
};

export default TopicSubPage;
