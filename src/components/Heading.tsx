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

const _HeadingVariants: _HeadingVariants = {
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
			default: ``,
			defaultMaroon: `
				background: linear-gradient(var(--About-Maroon-4), var(--About-Maroon-5));
				${_HeadingMixins.AboutPage.Main.default}	
			`,
			defaultPurple: `
			`,
			defaultGreen: `
			`,
		},
		Content: {
			default: ``,
			defaultMaroon: `
				background: linear-gradient(var(--About-Maroon-1), var(--About-Maroon-2));
				text-shadow: 0 0.3rem 0.5rem var(--About-Maroon-3);
				${_HeadingMixins.AboutPage.Content.default}			
			`,
			defaultPurple: `
				${_HeadingMixins.AboutPage.Content.default}		
			`,
			defaultGreen: `
				${_HeadingMixins.AboutPage.Content.default}		
			`,
		},
	},
};

const _Heading = {
	default: styled(motion.h1)<_HeadingProps>`
		${(p) =>
			_HeadingVariants.default[p.variant as keyof _HeadingVariants][
				p.subComp as keyof _HeadingVariants
			]}
	`,
	aboutPage: {
		Main: styled(motion.div)<_HeadingProps>`
			${(p) => _HeadingVariants.AboutPage.Main[p.subComp as keyof _HeadingVariants]}
		`,
		Content: styled(motion.h1)<_HeadingProps>`
			${(p) => _HeadingVariants.AboutPage.Content[p.subComp as keyof _HeadingVariants]}
		`,
	},
};

export default Heading;
