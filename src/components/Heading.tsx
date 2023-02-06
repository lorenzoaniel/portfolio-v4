import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../styles/breakpoints";

interface HeadingProps {
	titleProp: string;
	subComp?: string;
	variant?: string;
}

interface _HeadingProps {
	variant: string;
	subComp: string;
}

interface _HeadingVariants {
	default: any;
	AboutPage: any;
}

const Heading = (props: HeadingProps) => {
	const { titleProp, variant = "default", subComp = "default" } = props;

	const createheading = (variant: string, subComp: string) => {
		switch (variant) {
			case "AboutPage":
				return (
					<>
						<_Heading.aboutPage.Main variant={variant} subComp={subComp}>
							<_Heading.aboutPage.Content variant={variant} subComp={subComp}>
								{titleProp}
							</_Heading.aboutPage.Content>
						</_Heading.aboutPage.Main>
					</>
				);
			default:
				return (
					<>
						<_Heading.default variant={variant} subComp={subComp}>
							{titleProp}
						</_Heading.default>
					</>
				);
		}
	};

	//RENDER
	return <>{createheading(variant, subComp)}</>;
};

const _HeadingMixins = {
	AboutPage: {
		Main: {
			default: `
				position: absolute;
				height: 100%;
				align-self: center;
				margin-left: 6rem;
				border-radius: 1rem;
				
				box-shadow: 0 0.3rem 0.5rem 0.5rem rgba(0,0,0,0.5), 0 0.1rem 1rem 0.2rem rgba(0,0,0,0.5) inset;
		`,
		},
		Content: {
			default: `
			padding: 1rem;
				height: 100%;
				width: 100%;
				font-size: 2rem;
				text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;
				-webkit-background-clip: text;
  			-webkit-text-fill-color: transparent;
		`,
		},
	},
};

const _HeadingVariants = (theme: any): _HeadingVariants => {
	return {
		default: {
			default: ``,
			Landing: {
				default: `
				margin-top: 5rem;
				font-weight: 200;
				font-size: 4.7rem;
				text-align: center;
				color: #ffffff;
    	`,
			},
		},
		AboutPage: {
			Main: {
				default: `
					background: linear-gradient(${theme.color4}, ${theme.color5});
					${_HeadingMixins.AboutPage.Main.default}
				`,
			},
			Content: {
				default: `
					background: linear-gradient(${theme.color1}, ${theme.color2});
					text-shadow: 0 0.3rem 0.4rem rgba(0,0,0,0.4);
					${_HeadingMixins.AboutPage.Content.default}		
				`,
			},
		},
	};
};

const _Heading = {
	default: styled(motion.h1)<_HeadingProps>`
		${(p) =>
			_HeadingVariants(p.theme).default[p.variant as keyof _HeadingVariants][
				p.subComp as keyof _HeadingVariants
			]}
	`,
	aboutPage: {
		Main: styled(motion.div)<_HeadingProps>`
			${(p) => _HeadingVariants(p.theme).AboutPage.Main[p.subComp as keyof _HeadingVariants]}
		`,
		Content: styled(motion.h1)<_HeadingProps>`
			${(p) => _HeadingVariants(p.theme).AboutPage.Content[p.subComp as keyof _HeadingVariants]}
		`,
	},
};

export default Heading;
