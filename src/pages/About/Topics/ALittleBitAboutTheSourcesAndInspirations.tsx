import React from "react";
import styled from "styled-components";

interface PageProps {
	dataProp: Object;
}

const ALittleBitAboutTheSourcesAndInspirations = (props: PageProps) => {
	return <_Page.Main>TestSource</_Page.Main>;
};

const _PageVariants = {};

const _Page = {
	Main: styled.section`
		background: green;
		height: 100%;
		width: 100%;
	`,
};

export default ALittleBitAboutTheSourcesAndInspirations;
