import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const Home = () => {
	return <_Home.Main>{<Button nameProp={"Test"} variant={"glassButton"} />}</_Home.Main>;
};

const _Home = {
	Main: styled.section`
		/* background-color: white; */
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
