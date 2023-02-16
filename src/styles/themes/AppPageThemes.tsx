export const AppPageThemes = () => {
	interface styleObj {
		[key: string]: any;
	}

	const styleObj: styleObj = {
		home: {
			color: "--Home-Grey-",
			color1: "var(--Home-Grey-1)",
			color2: "var(--Home-Grey-2)",
			color3: "var(--Home-Grey-3)",
			color4: "var(--Home-Grey-4)",
			color5: "var(--Home-Grey-5)",
		},
		about: {
			color: "--About-Cyan-",
			color1: "var(--About-Cyan-1)",
			color2: "var(--About-Cyan-2)",
			color3: "var(--About-Cyan-3)",
			color4: "var(--About-Cyan-4)",
			color5: "var(--About-Cyan-5)",
			textColor1: "var(--About-Cyan-Text-1)",
			topics: {
				ALittleBitAboutMePage: {
					color: "--About-Maroon-",
					color1: "var(--About-Maroon-1)",
					color2: "var(--About-Maroon-2)",
					color3: "var(--About-Maroon-3)",
					color4: "var(--About-Maroon-4)",
					color5: "var(--About-Maroon-5)",
					textColor1: "var(--About-Maroon-Text-1)",
				},
				ALittleBitAboutTheSite: {
					color: "--About-Purple-",
					color1: "var(--About-Purple-1)",
					color2: "var(--About-Purple-2)",
					color3: "var(--About-Purple-3)",
					color4: "var(--About-Purple-4)",
					color5: "var(--About-Purple-5)",
					textColor1: "var(--About-Purple-Text-1)",
				},
				ALittleBitAboutTheSourcesAndInspirations: {
					color: "--About-SwampGreen-",
					color1: "var(--About-SwampGreen-1)",
					color2: "var(--About-SwampGreen-2)",
					color3: "var(--About-SwampGreen-3)",
					color4: "var(--About-SwampGreen-4)",
					color5: "var(--About-SwampGreen-5)",
					textColor1: "var(--About-SwampGreen-Text-1)",
				},
			},
		},
		projects: {
			color: "--Projects-Orange-",
			color1: "var(--Projects-Orange-1)",
			color2: "var(--Projects-Orange-2)",
			color3: "var(--Projects-Orange-3)",
			color4: "var(--Projects-Orange-4)",
			color5: "var(--Projects-Orange-5)",
		},
		contact: {
			color: "--Contact-Yellow-",
			color1: "var(--Contact-Yellow-1)",
			color2: "var(--Contact-Yellow-2)",
			color3: "var(--Contact-Yellow-3)",
			color4: "var(--Contact-Yellow-4)",
			color5: "var(--Contact-Yellow-5)",
		},
	};

	return styleObj;
};
