import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../store/hooks";
import { selectHomeInfo } from "../store/slices/homePageSlice";
import Paragraph from "../components/Paragraph";

const Home = () => {
	const porfolioInfo = useAppSelector(selectHomeInfo);
	return (
		<_Home.Main>
			<Paragraph data={porfolioInfo.porfolioInfo} subComp="HomePage" />
		</_Home.Main>
	);
};

const _Home = {
	Main: styled.section`
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
