import { motion } from "framer-motion";
import styled from "styled-components";

export const Frame = styled(motion.iframe)`
	pointer-events: none; //removes zoom in/out option
	height: 100%;
	width: 100%;
	border: none;
`;
