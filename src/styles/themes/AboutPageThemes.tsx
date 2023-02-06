export const AboutPageTheme = (variant: string = "ALittleBitAboutMePage") => {
	interface styleObj {
		ALittleBitAboutMePage: any;
		ALittleBitAboutTheSite: any;
		ALittleBitAboutTheSourcesAndInspirations: any;
	}

	const styleObj: styleObj = {
		ALittleBitAboutMePage: {
			color1: "var(--About-Maroon-1)",
			color2: "var(--About-Maroon-2)",
			color3: "var(--About-Maroon-3)",
			color4: "var(--About-Maroon-4)",
			color5: "var(--About-Maroon-5)",
			textColor1: "var(--About-Maroon-Text-1)",
		},
		ALittleBitAboutTheSite: {
			color1: "var(--About-Purple-1)",
			color2: "var(--About-Purple-2)",
			color3: "var(--About-Purple-3)",
			color4: "var(--About-Purple-4)",
			color5: "var(--About-Purple-5)",
			textColor1: "var(--About-Purple-Text-1)",
		},
		ALittleBitAboutTheSourcesAndInspirations: {
			color1: "var(--About-SwampGreen-1)",
			color2: "var(--About-SwampGreen-2)",
			color3: "var(--About-SwampGreen-3)",
			color4: "var(--About-SwampGreen-4)",
			color5: "var(--About-SwampGreen-5)",
			textColor1: "var(--About-SwampGreen-Text-1)",
		},
	};

	switch (variant) {
		case "ALittleBitAboutMePage":
			return styleObj.ALittleBitAboutMePage;
		case "ALittleBitAboutTheSite":
			return styleObj.ALittleBitAboutTheSite;
		case "ALittleBitAboutTheSourcesAndInspirations":
			return styleObj.ALittleBitAboutTheSourcesAndInspirations;
		default:
			return styleObj.ALittleBitAboutMePage;
	}
};
