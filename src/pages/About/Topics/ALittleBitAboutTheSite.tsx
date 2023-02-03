import React from "react";
import styled from "styled-components";
import Image from "../../../components/Image";
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
	dataProp: {
		Main: any;
	};
}

interface _PageProps {
	variant?: string;
}

interface _PageVariants {
	Generic: any;
}

const ALittleBitAboutTheSite = (props: PageProps) => {
	const { dataProp } = props;
	const variantInternal = "default"; //internal prop

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

	return (
		<_Page.Main>
			<Image
				source={"https://giphy.com/embed/14ugaLf70hQvo4"}
				variant={"Gif"}
				subComp={"AboutPage"}
			/>
			<_Page.Generic variant={variantInternal}>{dataProp.Main.sectionOne}</_Page.Generic>
			<RiReactjsFill style={createReactIconStyles(variantInternal)} />
			<_Page.Generic variant={variantInternal}>{dataProp.Main.sectionTwo}</_Page.Generic>
			<SiStyledcomponents style={createReactIconStyles(variantInternal)} />
			<_Page.Generic variant={variantInternal}>{dataProp.Main.sectionThree}</_Page.Generic>
			<CgFramer style={createReactIconStyles(variantInternal)} />
			<_Page.Generic variant={variantInternal}>{dataProp.Main.sectionFour}</_Page.Generic>
			<_Page.Generic variant={"iconContainer"}>
				<SiReactrouter style={createReactIconStyles("multiple", 2)} />
				<SiRedux style={createReactIconStyles("multiple", 2)} />
			</_Page.Generic>
			<_Page.Generic variant={variantInternal}>{dataProp.Main.sectionFive}</_Page.Generic>
			<_Page.Generic variant={"iconContainer"}>
				<SiVite style={createReactIconStyles("multiple", 3)} />
				<SiTypescript style={createReactIconStyles("multiple", 3)} />
				<SiGithub style={createReactIconStyles("multiple", 3)} />
			</_Page.Generic>
			<_Page.Generic variant={variantInternal}>{dataProp.Main.sectionSix}</_Page.Generic>
		</_Page.Main>
	);
};

const _PageVariants: _PageVariants = {
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

const _Page = {
	Main: styled.section`
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

		background: linear-gradient(var(--About-Purple-1), var(--About-Purple-2));
		box-shadow: 0 0.3rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5),
			0 0.1rem 1rem 0.2rem rgba(0, 0, 0, 0.5) inset;

		text-shadow: 0 0.1rem 0.3rem rgba(255, 255, 255, 0.5);
		line-height: 1.5;
		color: rgba(200, 200, 200, 1);
	`,

	Generic: styled.div<_PageProps>`
		${(p) => _PageVariants.Generic[p.variant as keyof _PageVariants]}
	`,
};

export default ALittleBitAboutTheSite;
