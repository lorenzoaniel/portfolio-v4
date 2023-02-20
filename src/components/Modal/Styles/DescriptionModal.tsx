import { motion } from "framer-motion";
import styled from "styled-components";

/* 
	modal, fixed position will not work when there is a transform property, in this case on the parent. This is a known bug which
	works by having a new coordinate system set by the transformed element (parent in this case) and the fixed element becomes 'fixed'
	to that new coordinate instead of the intended effect which is to remove itself from the flow of root.
*/

export const Modal = styled(motion.div)`
	background: transparent;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 90;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(0rem);

	&:hover {
		cursor: pointer;
	}
`;

export const Content = styled(motion.div)`
	background: linear-gradient(rgba(170, 93, 30, 1), rgba(255, 147, 59, 1));
	z-index: 91;
	height: 60%;
	width: 60%;
	overflow-x: scroll;
	scrollbar-width: thin;
	border-radius: 1rem;
	padding: 1rem;
	border: 1rem groove var(--Projects-Orange-3);

	&:hover {
		cursor: pointer;
	}
`;

export const Proxy = styled(motion.div)`
	/* background: orange; */
	width: fit-content(10px);
	height: auto;
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 1rem;
	border-radius: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--Projects-Orange-1);
	text-shadow: 0 0.1rem 0.1rem var(--Projects-Orange-2);

	background: linear-gradient(var(--Projects-Orange-3), var(--Projects-Orange-5));
	font-size: clamp(3rem, 50%, 5rem);
	font-weight: 900;

	border: 0.5rem groove var(--Projects-Orange-5);
	&:hover {
		cursor: pointer;
	}
`;
