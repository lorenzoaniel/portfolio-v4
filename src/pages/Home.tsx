import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../store/hooks";
import Paragraph from "../components/Paragraph";
import { selectPagesInfo } from "../store/slices/pagesInfoSlice";
import { motion } from "framer-motion";

const Home = () => {
	const infoContext = useAppSelector(selectPagesInfo);

	console.log("Home rerendered!");
	//RENDER
	return (
		<Main>
			<Paragraph data={infoContext.Home.Main} variant="HomePage" />
		</Main>
	);
};

const Main = styled(motion.section)`
	width: 100%;
	height: 15rem;
	color: black;
	font-size: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-self: flex-end;
`;

export default Home;
