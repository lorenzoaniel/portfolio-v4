import { motion, transform } from "framer-motion";
import React, { useMemo } from "react";
import styled from "styled-components";

interface Props {
	variant: string;
	data: string;
}

const Paragraph = (props: Props) => {
	const { data, variant = "default" } = props;

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
					whileHover: "whileHover",
				};

				return (
					//Main is orchestrating nested child comps
					<ContactPageLinksMain {...motionProps}>
						<ContactPageLinksCover
							variants={_MotionVariants().ContactPageLink.ContactPageLinksCover}
						/>
						<ContactPageLinks>{data}</ContactPageLinks>
					</ContactPageLinksMain>
				);
			default:
				return <></>;
		}
	};

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
	box-shadow: 0 0 1rem 0.5rem rgba(255, 255, 255, 0.5),
		0 0 1rem 0.5rem rgba(150, 150, 150, 0.7) inset;

	padding: 2rem;
	font-size: 3rem;
	font-family: var(--roboticFont);
	font-weight: 500;
	color: rgba(10, 10, 10, 1);
	text-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.7);
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
	height: 100%;
	width: 100%;
	border-width: 1rem;
	border-style: solid;
	border-image: linear-gradient(var(--Contact-DarkBlue-1), var(--Contact-DarkBlue-5));
	border-radius: 1rem;
	box-shadow: 0 0 0.5rem 0.5rem var(--Contact-DarkBlue-1),
		0 0 1rem 1rem var(--Contact-DarkBlue-3) inset;
	z-index: 2;
`;

const ContactPageLinks = styled(motion.a)`
	background: linear-gradient(var(--Contact-DarkBlue-4), var(--Contact-DarkBlue-3));
	height: fit-content;
	width: 90%;
	border-radius: 0.5rem;
	border-width: 0.6rem;
	border-style: solid;
	border-image: linear-gradient(var(--Contact-DarkBlue-3), var(--Contact-DarkBlue-5));
	box-shadow: 0 0 0.5rem 0.8rem var(--Contact-DarkBlue-2),
		0 0 1rem 1rem var(--Contact-DarkBlue-5) inset;

	font-size: 1.5rem;
	font-weight: 700;
	font-family: var(--roboticFont);
	position: absolute;
	z-index: 1;
`;

const _MotionVariants = (theme?: any) => {
	return {
		ContactPageLink: {
			ContactPageLinksMain: {
				initial: {},
				whileHover: {},
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
			ContactPageLinks: {},
		},
	};
};

export default Paragraph;
