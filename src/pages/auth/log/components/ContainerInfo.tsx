import { SeriesInformationStyled } from "../styled-components/layout";
type Props = {
	subTitle: string;
	infoText: string;
	genres: string;
};

const ContainerInfo = ({ subTitle, infoText, genres }: Props) => {
	return (
		<SeriesInformationStyled>
			<li>
				<h2>{subTitle}</h2>
			</li>
			<li>
				<h3>{infoText}</h3>
			</li>
			<li>
				<h4>{genres} </h4>
			</li>
		</SeriesInformationStyled>
	);
};

export default ContainerInfo;
