import React from "react";
import styled from "styled-components";

interface PageProps {
	dataProp: Object;
}

const ALittleBitAboutTheSite = (props: PageProps) => {
	return <_Page.Main>TestSite</_Page.Main>;
};

const _PageVariants = {};

const _Page = {
	Main: styled.section`
		background: yellow;
		height: 100%;
		width: 100%;
	`,
};

export default ALittleBitAboutTheSite;
