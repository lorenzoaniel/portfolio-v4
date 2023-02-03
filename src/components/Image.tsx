import React from "react";
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
	const { variant = "default", subComp = "default", source = "" } = props;

	const createVariant = (variant: string, subComp: string) => {
		switch (variant) {
			case "Gif":
				return (
					<>
						<_Image.Gif.Main variant={variant} subComp={subComp}>
							<_Image.Gif.Frame src={source} variant={variant} subComp={subComp} allowFullScreen />
						</_Image.Gif.Main>
					</>
				);
			default:
				return (
					<>
						<_Image.default.Main variant={variant} subComp={subComp}>
							<_Image.default.Frame src={source} variant={variant} subComp={subComp} />
						</_Image.default.Main>
					</>
				);
		}
	};

	return <>{createVariant(variant, subComp)}</>;
};

//STYLE

const _ImageMixins = {
	Div: {
		gifResponsive: `
      width: 100%;
      height: 0;
      padding-bottom: 70%;
      position: relative;
    `,
	},
	Frame: {
		gifResponsive: `
      width: 100%;
      height: 100%;
      position: absolute;
      border: none;
    `,
	},
};

const _ImageVariants: _ImageVariants = {
	default: {
		Main: {
			default: {
				default: `
          ${_ImageMixins.Div.gifResponsive}
        `,
			},
		},
		Frame: {
			default: {
				default: `
          ${_ImageMixins.Frame.gifResponsive}
        `,
			},
		},
	},

	Gif: {
		Main: {
			default: `
        ${_ImageMixins.Div.gifResponsive}
      `,
			AboutPage: `
        ${_ImageMixins.Div.gifResponsive}
        
      `,
		},
		Frame: {
			default: `
        ${_ImageMixins.Frame.gifResponsive}
      `,
			AboutPage: `
        ${_ImageMixins.Frame.gifResponsive}
        border-radius: 1rem;
      `,
		},
	},
};

const _Image = {
	default: {
		Main: styled.div<_Props>`
			${(p) =>
				_ImageVariants.default.Main[p.variant as keyof _ImageVariants][
					p.subComp as keyof _ImageVariants
				]}
		`,
		Frame: styled.img<_Props>`
			${(p) =>
				_ImageVariants.default.Frame[p.variant as keyof _ImageVariants][
					p.subComp as keyof _ImageVariants
				]}
		`,
	},

	Gif: {
		Main: styled.div<_Props>`
			${(p) => _ImageVariants.Gif.Main[p.subComp as keyof _ImageVariants]}
		`,
		Frame: styled.iframe<_Props>`
			${(p) => _ImageVariants.Gif.Frame[p.subComp as keyof _ImageVariants]}
		`,
	},
};

export default Image;
