import React, { NamedExoticComponent } from "react";
import styled from "styled-components";

interface NavmenuProps {
	children: React.ReactNode[];
	variant?: string;
	subComp?: string;
}

interface _NavmenuProps {
	variant: string;
	subComp: string;
}

interface _NavVariants {
	default: any;
}

const Navmenu = (props: NavmenuProps) => {
	const { children, variant = "default", subComp = "Main" } = props;

	return (
		<_Nav.default variant={variant} subComp={subComp}>
			{children}
		</_Nav.default>
	);
};

//STYLE

const _NavVariants: _NavVariants = {
	default: {
		Main: `
      // background-color: red;
      height: fit-content;
      width: 100%;
      display: flex; 
      justify-content: space-around;
    `,
	},
};

const _Nav = {
	default: styled.aside<_NavmenuProps>`
		${(p) => _NavVariants.default[p.subComp as keyof _NavVariants]}
	`,
};

export default Navmenu;
