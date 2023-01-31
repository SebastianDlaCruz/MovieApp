import { NavStyled } from "../styled-components/layout.styled";
import Menu from "./Menu";
import upcoming from "/icons/Calendar.svg";
import home from "/icons/Home.svg";
import movies from "/icons/MovieProjector.svg";
import tvSeries from "/icons/TVShow.svg";

function Nav() {
	const nameItem = ["#Home", "#Movies", "#TV Series", "#Upcoming"];

	const imgItem = [home, movies, tvSeries, upcoming];

	const MenuImages = Menu(nameItem, imgItem);

	return (
		<NavStyled>
			<MenuImages />
		</NavStyled>
	);
}

export default Nav;
