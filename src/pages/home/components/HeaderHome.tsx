import { HeaderHomeStyled } from "../styled-components/layout.styled";
import ContainerHeader from "./ContainerHeader";
import Search from "./Search";
function HeaderHome() {
	return (
		<HeaderHomeStyled>
			<Search />
			<ContainerHeader />
		</HeaderHomeStyled>
	);
}

export default HeaderHome;
