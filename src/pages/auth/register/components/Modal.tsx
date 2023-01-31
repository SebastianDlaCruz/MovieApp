import { ModalStyled } from "../styled-components/layout";

type Props = {
	open: boolean;
	handleOpen: () => void;
};
const Modal = ({ open, handleOpen }: Props) => {
	return (
		<ModalStyled open={open}>
			<div>
				<p>
					Para crear una cuenta primero necesitamos que acepte unas condiciones
				</p>
				<button onClick={handleOpen}>Validar</button>
			</div>
		</ModalStyled>
	);
};

export default Modal;
