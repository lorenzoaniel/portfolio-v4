import React from "react";
import styled from "styled-components";

const Contact = () => {
	return <_Contact.Main>Contact</_Contact.Main>;
};

const _Contact = {
	Main: styled.section`
		/* background-image: linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(230, 230, 230, 0.5)); */
		width: 100%;
		height: 15rem;
		color: white;
		font-size: 3rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-self: flex-end;
	`,
};

export default Contact;
