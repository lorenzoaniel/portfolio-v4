import React from "react";
import styled from "styled-components";

interface PageProps {
	dataProp: Object;
}

const ALittleBitAboutMePage = (props: PageProps) => {
	return <_Page.Main>TestMe</_Page.Main>;
};

const _PageVariants = {};

const _Page = {
	Main: styled.section`
		background: purple;
		height: 100%;
		width: 100%;
	`,
};

export default ALittleBitAboutMePage;
