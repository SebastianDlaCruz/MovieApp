import { useStateRedux } from "@rdx/hook/useStateRedux";
import {
	ButtonNotificationStyled,
	ButtonUserProfileStyled,
	Container,
} from "../styled-components/layout.styled";
import notification from "/icons/Notification.svg";
import avatar from "/icons/avatar.svg";

type props = {
	handleClick: () => void;
};

function ContainerHeader({ handleClick }: props) {
	const user = useStateRedux((state) => state.user);

	return (
		<Container>
			<ButtonNotificationStyled img={notification} />
			<ButtonUserProfileStyled
				img={user.photoUrl || avatar}
				onClick={handleClick}
			/>
		</Container>
	);
}

export default ContainerHeader;
