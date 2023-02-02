import { AppDispatch } from "@rdx/store";
import { getUser } from "@rdx/thunk/getUser.thunk";
import { useDispatch } from "react-redux";
import AsideMenu from "./components/AsideMenu";
import ContainerContent from "./components/ContainerContent";
import useRedirect from "./hook/useRedirect.hook";
import { HomeStyled } from "./styled-components/layout.styled";

const Home = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { uid } = useRedirect();
	if (uid !== "") {
		dispatch(getUser(uid));
	}

	return (
		<HomeStyled>
			<AsideMenu />
			<ContainerContent />
		</HomeStyled>
	);
};

export default Home;
