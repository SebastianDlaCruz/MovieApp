import { ContainerContentStyled } from "../styled-components/layout.styled";
import ContainerMovie from "./ContainerMovie";
import ContainerMovies from "./ContainerMovies";
import HeaderHome from "./HeaderHome";

const ContainerContent = () => {
	return (
		<ContainerContentStyled>
			<HeaderHome />
			<ContainerMovies />
			<ContainerMovie />
		</ContainerContentStyled>
	);
};

export default ContainerContent;
