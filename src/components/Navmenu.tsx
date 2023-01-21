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
	AboutPage: any;
}

const Navmenu = (props: NavmenuProps) => {
	const { children, variant = "default", subComp = "Main" } = props;

	const createVariant = () => {
		switch (variant) {
			case "AboutPage":
				return (
					<>
						<_Nav.AboutPage variant={variant} subComp={"Main"}>
							<_Nav.AboutPage variant={variant} subComp={"DropdownList"}>
								{children}
							</_Nav.AboutPage>
							<_Nav.AboutPage variant={variant} subComp={"DropdownButton"} />
						</_Nav.AboutPage>
					</>
				);
			default:
				return (
					<_Nav.default variant={variant} subComp={subComp}>
						{children}
					</_Nav.default>
				);
		}
	};

	return <>{createVariant()}</>;
};

//STYLE

const _NavVariants: _NavVariants = {
	default: {
		Main: `
      height: fit-content;
      width: 100%;
      display: flex; 
      justify-content: space-between;
      padding-right: 10%;
      column-gap: 2%;
    `,
	},
	AboutPage: {
		Main: `
			background: red;
			height: fit-content;
      width: fit-content;
			display: flex;
		`,
		DropdownList: `
			background: yellow;
			height: fit-content;
      width: fit-content;
			display: flex;
			flex-direction: column;
		`,
		DropdownButton: `
			background: blue;
			height: 5rem;
			width: 5rem;
		`,
	},
};

const _Nav = {
	default: styled.aside<_NavmenuProps>`
		${(p) => _NavVariants.default[p.subComp as keyof _NavVariants]}
	`,
	AboutPage: styled.div<_NavmenuProps>`
		${(p) => _NavVariants.AboutPage[p.subComp as keyof _NavVariants]}
	`,
};

export default Navmenu;
