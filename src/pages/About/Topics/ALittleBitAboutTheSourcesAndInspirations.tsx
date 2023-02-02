import React from "react";
import styled from "styled-components";

interface PageProps {
	dataProp: Object;
}

const ALittleBitAboutTheSourcesAndInspirations = (props: PageProps) => {
	const { dataProp } = props;
	return <_Page.Main>{JSON.stringify(dataProp)}</_Page.Main>;
};

const _PageVariants = {};

const _Page = {
	Main: styled.section`
		background: green;
		height: 100%;
		width: 100%;
		overflow-x: scroll;
	`,
};

export default ALittleBitAboutTheSourcesAndInspirations;
