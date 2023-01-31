import { FirebaseGetAuth } from "@fireBS/config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AsideMenu from "./components/AsideMenu";
import ContainerContent from "./components/ContainerContent";
import { HomeStyled } from "./styled-components/layout.styled";

const Home = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const auth = FirebaseGetAuth;
		const user = auth.currentUser;
		if (!user) {
			return navigate("/login");
		} else {
			const id = user.uid;
			return navigate("/", { replace: true });
		}
	}, []);

	return (
		<HomeStyled>
			<AsideMenu />
			<ContainerContent />
		</HomeStyled>
	);
};

export default Home;
