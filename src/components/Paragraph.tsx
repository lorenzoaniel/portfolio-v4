import { motion, transform } from "framer-motion";
import React, { useMemo } from "react";
import styled from "styled-components";
import useCurrentDimension from "../helpers/useCurrentDimension";

interface Props {
	variant: string;
	data: string;
	href?: string;
}

const Paragraph = (props: Props) => {
	const { data, variant = "default", href } = props;

	let currentWidth = useCurrentDimension().width;

	const createVariant = (variant: string) => {
		let motionProps: any = {
			animate: "animate",
			initial: "initial",
			exit: "exit",
		};

		switch (variant) {
			case "HomePage":
				return <HomePage>{data}</HomePage>;
			case "AboutPage":
				return <AboutPage>{data}</AboutPage>;
			case "ContactPageLink":
				motionProps = {
					...motionProps,
					initial: "initial",
					animate: currentWidth >= 820 ? "animate" : "whileHover",
					whileHover: "whileHover",
					whileTap: "whileTap",
				};

				return (
					//Main is orchestrating nested child comps
					<ContactPageLinksMain {...motionProps}>
						<ContactPageLinksCover
							variants={_MotionVariants().ContactPageLink.ContactPageLinksCover}
						>
							{"View Link"}
						</ContactPageLinksCover>
						<ContactPageLinks
							// href={href}
							target={"_blank"}
							variants={_MotionVariants().ContactPageLink.ContactPageLinks}
						>
							{data}
						</ContactPageLinks>
					</ContactPageLinksMain>
				);
			case "ProjectCover":
				return (
					<ProjectMain>
						<ProjectParagraph>{data}</ProjectParagraph>
					</ProjectMain>
				);
			default:
				return <></>;
		}
	};

	console.log("Paragraph rerendered!");
	//RENDER
	return <>{createVariant(variant)}</>;
};

//STYLE
const HomePage = styled(motion.div)`
	background-image: linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(230, 230, 230, 0.5));
	width: 100%;
	height: 15rem;
	display: flex;

	border-radius: 2rem;
	box-shadow: 0 0 1rem 0.5rem var(--Home-Grey-5), 0 0 1rem 0.5rem var(--Home-Grey-5) inset;

	padding: 2rem;
	font-size: 3rem;
	font-family: var(--roboticFont);
	font-weight: 500;
	color: var(--Home-Grey-1);
	text-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 1);
`;

const AboutPage = styled(motion.div)`
	width: fit-content;
	height: fit-content;
	font-size: 30%; //clamp(5%, 2rem, 10%)
`;

const ContactPageLinksMain = styled(motion.div)`
	/* background: green; */
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	position: relative;
`;

const ContactPageLinksCover = styled(motion.div)`
	background: linear-gradient(rgb(12, 14, 67), rgb(66, 73, 255));
	height: 7rem;
	width: 100%;
	border-width: 1rem;
	border-style: solid;
	border-image: linear-gradient(var(--Contact-DarkBlue-1), var(--Contact-DarkBlue-5));
	border-radius: 1rem;
	box-shadow: 0 0 0.5rem 0.5rem var(--Contact-DarkBlue-1),
		0 0 1rem 1rem var(--Contact-DarkBlue-3) inset;
	z-index: 2;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 100%;
	font-weight: 700;
	text-shadow: 0 0.2rem 0.3rem var(--Contact-DarkBlue-2);
	color: var(--Contact-DarkBlue-1);
`;

const ContactPageLinks = styled(motion.a)`
	background: linear-gradient(var(--Contact-Yellow-3), var(--Contact-Yellow-5));
	height: fit-content;
	width: 90%;
	border-radius: 0.5rem;
	border-width: 0.6rem;
	border-style: solid;
	border-image: linear-gradient(var(--Contact-Yellow-3), var(--Contact-Yellow-5));
	box-shadow: 0 0 0.5rem 0.8rem var(--Contact-Yellow-2), 0 0 1rem 1rem var(--Contact-Yellow-5) inset;
	position: absolute;
	z-index: 1;

	font-size: 3rem;
	text-decoration: none;
	color: rgba(0, 0, 0, 0.8);
	text-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 0.8);
	font-weight: 900;
	text-align: center;
`;

const ProjectMain = styled(motion.div)`
	height: 90%;
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ProjectParagraph = styled(motion.p)`
	background: var(--Projects-Indigo-5);
	text-shadow: 0 0.1rem 0.3rem var(--Projects-Indigo-1);
	font-size: 5rem;
	font-weight: 900;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const _MotionVariants = (theme?: any) => {
	return {
		ContactPageLink: {
			ContactPageLinksMain: {
				initial: {},
				whileHover: {},
				whileTap: {},
			},
			ContactPageLinksCover: {
				initial: {
					transform: "scale3d(1, 1, 1)",
					transformOrigin: "0% 100%",
				},
				whileHover: {
					transform: "scale3d(0, 1, 1.5)",
					transition: {
						duration: 0.5,
					},
				},
			},
			ContactPageLinks: {
				initial: {
					boxShadow: "0 0 0rem 0rem rgba(0,0,0,1)",
					transform: "translateY(0rem)",
				},
				whileHover: {
					boxShadow: "0 0 0.8rem 0.5rem rgba(0,0,0,0.7)",
					transform: "translateY(-0.2rem)",
					transition: {
						duration: 0.5,
						delay: 0.1,
					},
				},
				whileTap: {
					transform: ["translateY(-0.2rem)", "translateY(0rem)"],
					boxShadow: ["0 0 0.8rem 0.5rem rgba(0,0,0,0.7)", "0 0 0rem 0rem rgba(0,0,0,1)"],
					transition: {
						duration: 0.1,
					},
				},
			},
		},
	};
};

export default Paragraph;
