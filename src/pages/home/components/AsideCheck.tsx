import { ContainerStickyStyled } from "../styled-components/layout.styled";
import ContainerCheck from "./ContainerCheck";

function AsideCheck() {
	const namesCategory = [
		"Action",
		"Adventure",
		"Animated",
		"Comedy",
		"Crime",
		"Fantasy",
	];

	const nameServices = [
		"Netflix",
		"Prime Video",
		"Disney +",
		"HBO max",
		"Hulu",
		"Starz",
	];

	return (
		<aside>
			<ContainerStickyStyled>
				<ContainerCheck name='Categories' nameCheck={namesCategory} />
				<ContainerCheck name='Services' nameCheck={nameServices} />
			</ContainerStickyStyled>
		</aside>
	);
}

export default AsideCheck;
