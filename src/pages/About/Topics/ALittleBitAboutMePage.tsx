import React from "react";
import styled from "styled-components";
import Paragraph from "../../../components/Paragraph";

interface PageProps {
	dataProp: {
		Main: string;
	};
}

const ALittleBitAboutMePage = (props: PageProps) => {
	const { dataProp } = props;
	return <_Page.Main>{dataProp.Main}</_Page.Main>;
};

const _PageVariants = {};

const _Page = {
	Main: styled.section`
		background: purple;
		height: 100%;
		width: 100%;

		overflow-y: scroll; //since it is flex row
		scrollbar-width: thin;
		margin-top: 1rem;
		border-radius: 1rem;
		padding: 2rem;
		display: flex;
		justify-content: center;

		background: linear-gradient(var(--About-Maroon-4), var(--About-Maroon-5));
		box-shadow: 0 0.3rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5),
			0 0.1rem 1rem 0.2rem rgba(0, 0, 0, 0.5) inset;

		text-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 1);
		line-height: 1.5;
	`,
};

export default ALittleBitAboutMePage;
