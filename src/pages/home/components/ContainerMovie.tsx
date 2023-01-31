import { ContainerMoviesStyled } from "../styled-components/layout.styled";
import AsideCheck from "./AsideCheck";
import Main from "./Main";

const ContainerMovie = () => {
	return (
		<ContainerMoviesStyled>
			<Main />
			<AsideCheck />
		</ContainerMoviesStyled>
	);
};

export default ContainerMovie;
