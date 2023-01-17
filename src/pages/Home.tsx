import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Decorations from "../components/Decorations";
import { useAppSelector } from "../store/hooks";
import { selectHomeInfo } from "../store/slices/homePageSlice";
import Paragraph from "../components/Paragraph";

const Home = () => {
	const porfolioInfo = useAppSelector(selectHomeInfo);
	return (
		<_Home.Main>
			<Paragraph data={porfolioInfo} subComp="HomePage" />
		</_Home.Main>
	);
};

const _Home = {
	Main: styled.section`
		/* background-image: linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(230, 230, 230, 0.5)); */
		width: 100%;
		height: 15rem;
		color: black;
		font-size: 3rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-self: flex-end;
	`,
};

export default Home;
