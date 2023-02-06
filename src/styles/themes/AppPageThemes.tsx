export const AppPageThemes = (variant: string = "home") => {
	interface styleObj {}

	const styleObj: styleObj = {
		home: {
			color1: "",
			color2: "var(--Home-Grey-2)",
			color3: "var(--Home-Grey-3)",
		},
		about: {
			color1: "var(--About-Cyan-1)",
			color2: "var(--About-Cyan-2)",
			color3: "var(--About-Cyan-3)",
			color4: "var(--About-Cyan-4)",
			color5: "var(--About-Cyan-5)",
			textColor1: "var(--About-Cyan-Text-1)",
		},
		projects: {
			//Orange
		},
		contact: {
			//Yellow
		},
	};

	switch (variant) {
		case "about":
			break;
		case "projects":
			break;
		case "contact":
			break;
		default:
			break;
	}
};
