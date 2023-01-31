import { CardMovieStyled } from "../styled-components/layout.styled";
import ContainerStart from "./ContainerStart";
type Props = {
	img: string;
	alt: string;
	points: string;
};

const CardMovie = ({ img, alt, points }: Props) => {
	return (
		<CardMovieStyled>
			<ContainerStart points={points} />
			<img src={img} alt={alt} loading='lazy' />
		</CardMovieStyled>
	);
};

export default CardMovie;
