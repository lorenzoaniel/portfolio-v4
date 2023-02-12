import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { SiGithub, SiLinkedin } from "react-icons/Si";
import { HiBadgeCheck } from "react-icons/Hi";
import Paragraph from "../components/Paragraph";

//LinkedIn, creditly badge, Github,

const Contact = () => {
	const tempIconStyle = {
		height: "100%",
		width: "100%",
	};

	console.log("Contact rerendered!");
	//RENDER
	return (
		<Main>
			<LinkContainer>
				<IconContainer>
					<SiGithub style={tempIconStyle} />
				</IconContainer>
				<Paragraph
					variant={"ContactPageLink"}
					data={"Github"}
					href={"https://www.linkedin.com/in/mikhail-lorenzo-aniel-283022127/"}
				/>
			</LinkContainer>
			<LinkContainer>
				<IconContainer>
					<SiLinkedin style={tempIconStyle} />
				</IconContainer>
				<Paragraph
					variant={"ContactPageLink"}
					data={"LinkedIn"}
					href={"https://www.linkedin.com/in/mikhail-lorenzo-aniel-283022127/"}
				/>
			</LinkContainer>
			<LinkContainer>
				<IconContainer>
					<HiBadgeCheck style={tempIconStyle} />
				</IconContainer>
				<Paragraph
					variant={"ContactPageLink"}
					data={"Credly"}
					href={"https://www.linkedin.com/in/mikhail-lorenzo-aniel-283022127/"}
				/>
			</LinkContainer>
		</Main>
	);
};

const Main = styled(motion.section)`
	background: linear-gradient(
		to left,
		var(--Contact-Yellow-1),
		var(--Contact-Yellow-5),
		var(--Contact-Yellow-2)
	);
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	align-self: flex-end;

	border-radius: 1rem;
	/* border-width: 1.5rem;
	border-style: solid;
	border-image: linear-gradient(var(--Contact-Yellow-1), var(--Contact-Yellow-2)); */

	padding: 2rem;
	box-shadow: 0 0 1rem 0.5rem var(--Contact-Yellow-5), 0 0 1rem 0.5rem var(--Contact-Yellow-5) inset;
	backdrop-filter: blur(1rem);
	overflow-y: scroll; //since it is flex row
	scrollbar-width: thin;
	row-gap: 5rem;

	color: black;
	font-size: 3rem;
`;

const LinkContainer = styled(motion.div)`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 1rem;

	background: linear-gradient(
		to left,
		var(--Contact-DarkBlue-5),
		var(--Contact-DarkBlue-3),
		var(--Contact-DarkBlue-2)
	);
	box-shadow: 0 0.3rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5),
		0 0.1rem 1rem 0.2rem rgba(0, 0, 0, 0.5) inset;
	border-radius: 1rem;
	/* border-width: 1rem;
	border-style: solid;
	border-image: linear-gradient(var(--Contact-DarkBlue-1), var(--Contact-DarkBlue-2)); */
	padding: 2rem;
`;

const IconContainer = styled(motion.div)`
	background: linear-gradient(var(--Contact-Yellow-3), var(--Contact-Yellow-5));
	height: clamp(10rem, 50%, 30rem);
	width: clamp(10rem, 50%, 30rem);
	box-shadow: 0 0 1rem 0.3rem var(--Contact-Yellow-5), 0 0 1rem 0.8rem var(--Contact-Yellow-1) inset;
	border-radius: 1rem;
	/* border-width: 1rem;
	border-style: solid;
	border-image: linear-gradient(var(--Contact-Yellow-1), var(--Contact-Yellow-2)); */
	padding: 1rem;
`;

const CenterPiece = styled(motion.div)``;

export default Contact;
