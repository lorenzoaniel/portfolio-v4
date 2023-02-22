import React from "react";
import { DescriptionModal } from "./modalImportCombiner";

interface Props {
	variant?: string;
	handleClick?: () => void;
	children: React.ReactNode | React.ReactNode[] | string;
}

/* 
	USE PROXY VERSION IF INITIAL PLACE OF THIS COMPONENT IS WITHIN ANOTHER COMPOENNT WITH A TRANSFORM PROPERTY,
	PROXY ON TRANSFORM ELEMENT AND MODAL OUTSIDE OR IN AN ELEMENT THAT DOES NOT HAVE IT, OTHERWISE JUST USE MODAL.
*/
const Modal = (props: Props) => {
	const {
		variant = "default",
		children,
		handleClick = () => {
			console.log("No function");
		},
	} = props;

	const createVariant = (variant: string) => {
		let motionProps = {
			initial: "initial",
			animate: "animate",
			whileHover: "whileHover",
			whileTap: "whileTap",
		};

		switch (variant) {
			case "ProjectDescriptionModal":
				return (
					<DescriptionModal.Modal onClick={handleClick}>
						<DescriptionModal.Content>{children}</DescriptionModal.Content>
					</DescriptionModal.Modal>
				);

			case "ProjectDescriptionProxy":
				return (
					<DescriptionModal.Proxy
						{...motionProps}
						variants={DescriptionModal._MotionVariants().Proxy}
						onClick={handleClick}
					>
						{"?"}
					</DescriptionModal.Proxy>
				);

			default:
				return <></>;
		}
	};

	return createVariant(variant);
};

export default Modal;
