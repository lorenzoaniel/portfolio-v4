import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeModalToggle, selectModalState } from "../../store/slices/modalSlice";
import { DescriptionModal } from "./modalImportCombiner";

interface Props {
	variant?: string;
	children: React.ReactNode | React.ReactNode[] | string;
}

/* 
	USE PROXY VERSION IF INITIAL PLACE OF THIS COMPONENT IS WITHIN ANOTHER COMPOENNT WITH A TRANSFORM PROPERTY,
	PROXY ON TRANSFORM ELEMENT AND MODAL OUTSIDE OR IN AN ELEMENT THAT DOES NOT HAVE IT, OTHERWISE JUST USE MODAL.
*/
const Modal = (props: Props) => {
	const { variant = "default", children } = props;
	const dispatch = useAppDispatch();
	const ProjectDescriptionToggleState = useAppSelector(selectModalState);

	const createVariant = (variant: string) => {
		switch (variant) {
			case "ProjectDescriptionModal":
				return ProjectDescriptionToggleState.modalToggle ? (
					<DescriptionModal.Modal
						onClick={() => {
							dispatch(changeModalToggle());
						}}
					>
						<DescriptionModal.Content>{children}</DescriptionModal.Content>
					</DescriptionModal.Modal>
				) : (
					<></>
				);

			case "ProjectDescriptionProxy":
				return (
					<DescriptionModal.Proxy
						onClick={() => {
							dispatch(changeModalToggle());
						}}
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
