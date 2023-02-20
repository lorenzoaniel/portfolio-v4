import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Main = styled(motion.div)`
	display: flex;
	width: 100%;
	height: fit-content;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	flex-direction: column;
	row-gap: 5rem;

	@media ${device.tablet} {
		flex-direction: row;
		column-gap: 5rem;
	}
`;
