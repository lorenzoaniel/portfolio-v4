import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.div)`
	width: 100%;
	height: 6.5rem;
	display: flex;
	justify-content: center;
`;

export const Selector = styled(motion.div)`
	${({ theme }) => `
    background: ${theme.color5};
    height: 100%;
    width: clamp(6.5rem, 8rem, 100%);
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1rem solid ${theme.color5};
    border-top-width: 0.5rem;
    border-bottom-width: 0.5rem;
    box-shadow: 0 0 0.1rem 0.3rem ${theme.color5};

    svg {
      border-radius: 1rem;
      fill: ${theme.color3};
      height: 100%;
      width: 100%;
    }

    &:hover {
      border-color: ${theme.color2};
      svg {
        fill: ${theme.color1};
      }
    }
  `}
`;

export const Left = styled(Selector)`
	border-right: none;
	border-top-left-radius: 1rem;
	border-bottom-left-radius: 1rem;
`;

export const Right = styled(Selector)`
	border-left: none;
	border-top-right-radius: 1rem;
	border-bottom-right-radius: 1rem;
`;

export const _MotionVariants = () => {
	return {
		Main: {},
		Selector: {
			Left: {},
			Right: {},
		},
	};
};
