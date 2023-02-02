import { useState } from "react";
import { HeaderHomeStyled } from "../styled-components/layout.styled";
import ContainerHeader from "./ContainerHeader";
import ProfileInformation from "./ProfileInformation";
import Search from "./Search";

function HeaderHome() {
	const [visible, setVisible] = useState(true);

	const handleClick = () => setVisible(!visible);
	return (
		<HeaderHomeStyled>
			<Search />
			<ContainerHeader handleClick={handleClick} />
			<ProfileInformation active={visible} />
		</HeaderHomeStyled>
	);
}

export default HeaderHome;
