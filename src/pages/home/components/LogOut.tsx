import { Link } from "react-router-dom";
import { LogOutStyled } from "../styled-components/layout.styled";
import logout from "/icons/Logout.svg";

function LogOut() {
	return (
		<Link to='/login'>
			<LogOutStyled>
				<img src={logout} alt="logout" />
				<span>Log Out</span>
			</LogOutStyled>
		</Link>
	);
}

export default LogOut;
