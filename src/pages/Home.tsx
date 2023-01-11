import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

const Home = () => {
	return (
		<_Home.Main>
			{
				<Carousel>
					{[
						<Button nameProp={"Home"} variant={"glassButton"} />,
						<Button nameProp={"About Me"} variant={"glassButton"} />,
						<Button nameProp={"Works"} variant={"glassButton"} />,
						<Button nameProp={"Contact Me"} variant={"glassButton"} />,
					]}
				</Carousel>
			}
		</_Home.Main>
	);
};

const _Home = {
	Main: styled.section`
		width: 100%;
		height: 100%;
		color: white;
		font-size: 3rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	`,
};

export default Home;
