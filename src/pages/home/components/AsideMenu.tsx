import { AsideMenuStyled } from "../styled-components/layout.styled";
import LogOut from "./LogOut";
import Nav from "./Nav";
import Logo from "/icons/logo.svg";

function AsideMenu() {
	return (
		<AsideMenuStyled>
			<div>
				<div>
					<img src={Logo} alt="logo" />
				</div>
				<Nav />
				<LogOut />
			</div>
		</AsideMenuStyled>
	);
}

export default AsideMenu;
