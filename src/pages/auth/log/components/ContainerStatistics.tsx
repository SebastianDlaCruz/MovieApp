import { ContainerStatisticsStyled } from "../styled-components/layout";
import ContainerInfo from "./ContainerInfo";
import ContainerPoints from "./ContainerPoints";
type Props = {
	subTitle: string;
	infoText: string;
	genres: string;
	numberOne: string;
	numberTwo: string;
};

const ContainerStatistics = ({
	subTitle,
	infoText,
	genres,
	numberOne,
	numberTwo,
}: Props) => {
	return (
		<ContainerStatisticsStyled>
			<ContainerInfo subTitle={subTitle} infoText={infoText} genres={genres} />
			<ContainerPoints numberOne={numberOne} numberTwo={numberTwo} />
		</ContainerStatisticsStyled>
	);
};

export default ContainerStatistics;
