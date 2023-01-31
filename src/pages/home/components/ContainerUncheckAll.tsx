import { ContainerUncheckAllsStyled } from "../styled-components/layout.styled";
type Props = {
	name: string;
};

const ContainerUncheckAll = ({ name }: Props) => {
	return (
		<ContainerUncheckAllsStyled>
			<label htmlFor={name}>{name}</label>
			<input type="submit" value='Uncheck all' />
		</ContainerUncheckAllsStyled>
	);
};

export default ContainerUncheckAll;
