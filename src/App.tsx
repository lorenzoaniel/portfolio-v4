import styled from "styled-components";
import { motion } from "framer-motion";

import { useAppSelector } from "./store/hooks";
import { selectToggle } from "./store/slices/appToggleSlice";

import { GlobalStyle } from "./styles/GlobalStyles";
import { device } from "./styles/breakpoints";

import Heading from "./components/Heading";
import Button from "./components/Button";
import Home from "./pages/Home";
import AnimatedBackground from "./components/AnimatedBackground";

const appLandingTitleContext = "Explore My Portfolio!"; //maybe add feature that lets this switch different languages

interface _MotionVariants {
	initial: any;
	animate: any;
}

const App = () => {
	//logic
	const toggleContext = useAppSelector(selectToggle);

	//style
	return (
		<>
			<GlobalStyle />
			<_App.Main>
				<_App.ToggledOff.Main {..._MotionProps(toggleContext, "ToggledOff")}>
					<AnimatedBackground disabledState={toggleContext} variant={"Stars"} />
					<_App.ToggledOff.Wrapper>
						<Button nameProp={"PORTFOLIO"} variant={"AppToggle"} />
						<Heading titleProp={appLandingTitleContext} variant={"Landing"} />
					</_App.ToggledOff.Wrapper>
				</_App.ToggledOff.Main>
				<_App.ToggledOn.Main {..._MotionProps(toggleContext, "ToggledOn")}>
					<AnimatedBackground disabledState={toggleContext} variant={"Blackhole"} />
					<_App.ToggledOn.Routes>
						<Button nameProp={"PORTFOLIO"} variant={"AppToggle"} />
						<Home />
					</_App.ToggledOn.Routes>
				</_App.ToggledOn.Main>
			</_App.Main>
		</>
	);
};

//STYLES
const _AppMixins = {};

const _App = {
	Main: styled.main`
		background: black;
		height: inherit;
		width: inherit;
	`,
	ToggledOn: {
		Main: styled(motion.section)`
			height: inherit;
			width: inherit;
		`,
		Routes: styled(motion.aside)`
			background-color: transparent;
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			row-gap: 3rem;
			padding: 3rem;

			@media ${device.tablet} {
				align-items: flex-start;
			}
		`,
	},
	ToggledOff: {
		Main: styled(motion.section)`
			height: inherit;
			width: inherit;
		`,
		Wrapper: styled(motion.aside)`
			background-color: transparent;
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 3rem;

			@media ${device.tablet} {
				align-items: flex-start;
			}
		`,
	},
};

//MOTION
const _MotionVariants = (toggleContext: boolean): _MotionVariants => {
	return {
		initial: {
			ToggledOn: {
				display: toggleContext ? "flex" : "none",
				opacity: 0,
			},
			ToggledOff: {
				display: toggleContext ? "none" : "flex",
				opacity: 0,
			},
		},
		animate: {
			ToggledOn: {
				display: toggleContext ? "flex" : "none",
				opacity: toggleContext ? 1 : 0,
				transition: {
					duration: 0.5,
				},
			},
			ToggledOff: {
				display: toggleContext ? "none" : "flex",
				opacity: toggleContext ? 0 : 1,
				transition: {
					duration: 0.5,
				},
			},
		},
	};
};

const _MotionProps = (toggleContext: boolean, variant: string) => {
	return {
		initial: _MotionVariants(toggleContext).initial[variant as keyof _MotionVariants],
		animate: _MotionVariants(toggleContext).animate[variant as keyof _MotionVariants],
	};
};

export default App;
