import { ContainerStartStyled } from "../styled-components/layout.styled";
import start from "/icons/Start.svg";

type Props = {
	points: string;
};

function ContainerStart({ points }: Props) {
	return (
		<ContainerStartStyled>
			<img src={start} alt='start' />
			<span>{points}</span>
		</ContainerStartStyled>
	);
}

export default ContainerStart;
