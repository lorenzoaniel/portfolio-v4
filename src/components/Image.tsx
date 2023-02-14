import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

interface Props {
	variant?: string;
	subComp?: string;
	source: string;
}

interface _Props {
	variant: string;
	subComp: string;
}

interface _ImageVariants {
	default: any;
	Gif: any;
}

const Image = (props: Props) => {
	const { variant = "default", source = "" } = props;

	const createVariant = (variant: string) => {
		switch (variant) {
			case "Gif":
				return <GifFrame src={source} />;
			default:
				return (
					<ImgMain>
						<ImgFrame src={source} />
					</ImgMain>
				);
		}
	};

	console.log("Image rerendered!");
	//RENDER
	return <>{createVariant(variant)}</>;
};

//STYLE
const ImgMain = styled(motion.div)``;

const ImgFrame = styled(motion.img)``;

const GifFrame = styled(motion.iframe)`
	/* background: orange; */
	pointer-events: none; //removes zoom in/out option
	height: 100%;
	width: 100%;
	border: none;
`;

export default Image;
