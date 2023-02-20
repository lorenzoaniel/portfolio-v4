import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { SiGithub, SiLinkedin } from "react-icons/Si";
import { HiBadgeCheck } from "react-icons/Hi";
import { device } from "../styles/breakpoints";
import Button from "../components/Button/Button";

/** COMPONENT
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * */

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
				<Button variant={"ContactPageLinkButton"} href={"https://github.com/lorenzoaniel"}>
					{"Github"}
				</Button>
			</LinkContainer>
			<LinkContainer>
				<IconContainer>
					<SiLinkedin style={tempIconStyle} />
				</IconContainer>
				<Button
					variant={"ContactPageLinkButton"}
					href={"https://www.linkedin.com/in/mikhail-lorenzo-aniel-283022127/"}
				>
					{"LinkedIn"}
				</Button>
			</LinkContainer>
			<LinkContainer>
				<IconContainer>
					<HiBadgeCheck style={tempIconStyle} />
				</IconContainer>
				<Button
					variant={"ContactPageLinkButton"}
					href={"https://www.credly.com/users/mikhail-lorenzo-aniel/badges"}
				>
					{"Credly"}
				</Button>
			</LinkContainer>
		</Main>
	);
};

const Main = styled(motion.section)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	align-self: flex-end;

	border-radius: 1rem;
	overflow-y: scroll; //since it is flex row
	scrollbar-width: thin;
	row-gap: 5rem;

	color: black;
	font-size: 3rem;

	@media ${device.tablet} {
		flex-direction: row;
	}

	@media ${device.laptop} {
		column-gap: 5%;
		flex-wrap: wrap;
		justify-content: center;
	}
`;

const LinkContainer = styled(motion.div)`
	width: clamp(30rem, 40%, 50rem);
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 1rem;
	margin-top: 2rem;

	border-radius: 1rem;
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

export default Contact;
