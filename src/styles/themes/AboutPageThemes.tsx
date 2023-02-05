export const AboutPageTheme = (variant: string = "ALittleBitAboutMePage") => {
	interface styleObj {
		ALittleBitAboutMePage: any;
		ALittleBitAboutTheSite: any;
		ALittleBitAboutTheSourcesAndInspirations: any;
	}

	const styleObj: styleObj = {
		ALittleBitAboutMePage: {
			background: "linear-gradient(var(--About-Maroon-4), var(--About-Maroon-5))",
			color: "var(--About-Maroon-4)",
			shadow3: "var(--About-Maroon-3)",
			shadow2: "var(--About-Maroon-2)",
		},
		ALittleBitAboutTheSite: {
			background: "linear-gradient(var(--About-Purple-1), var(--About-Purple-2))",
			color: "var(--About-Purple-1)",
			shadow3: "var(--About-Purple-3)",
			shadow2: "var(--About-Purple-2)",
		},
		ALittleBitAboutTheSourcesAndInspirations: {
			background: "linear-gradient(var(--About-SwampGreen-1), var(--About-SwampGreen-2))",
			color: "var(--About-SwampGreen-1)",
			shadow3: "var(--About-SwampGreen-3)",
			shadow2: "var(--About-SwampGreen-2)",
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
