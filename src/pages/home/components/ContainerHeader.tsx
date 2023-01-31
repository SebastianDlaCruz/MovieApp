import {
	ButtonNotificationStyled,
	Container,
} from "../styled-components/layout.styled";
import notification from "/icons/Notification.svg";
import avatar from "/img/avatar.png";

function ContainerHeader() {
	return (
		<Container>
			<ButtonNotificationStyled img={notification} />
			<img src={avatar} alt="avatar" />
		</Container>
	);
}

export default ContainerHeader;
