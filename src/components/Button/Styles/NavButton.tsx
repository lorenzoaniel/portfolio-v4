//Relies on GlassButton

export const _MotionVariants = (theme: any) => {
	return {
		Main: {
			initial: {
				textShadow: `0rem 0.1rem 0.2rem ${theme.color5}`,
			},
			animate: {
				textShadow: `0rem 0.1rem 1rem ${theme.color5}`,
				transition: {
					duration: 2,
					repeat: Infinity,
					repeatType: "reverse",
				},
			},
		},
		MainEnabled: {
			initial: {
				textShadow: `0rem 0.1rem 0.2rem ${theme.color5}`,
				filter: `drop-shadow(0 0 0 ${theme.color5})`,
			},
			animate: {
				textShadow: `0rem 0.1rem 1rem ${theme.color5}`,
				transition: {
					duration: 2,
					repeat: Infinity,
					repeatType: "reverse",
				},
			},
			whileHover: {
				filter: `drop-shadow(0 0 1rem ${theme.color5})`,
			},
		},
	};
};
