import { ButtonStyled } from "../styled-components/layout";

type Props = {
	img: string;
	paddings: string;
	handleClick: () => void;
};

const Button = ({ img, paddings, handleClick }: Props) => {
	return <ButtonStyled img={img} paddings={paddings} onClick={handleClick} />;
};

export default Button;
