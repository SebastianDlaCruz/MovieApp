import { useStateRedux } from "@rdx/hook/useStateRedux";
import { ProfileInformationStyled } from "../styled-components/layout.styled";
type Props = {
	active: boolean;
};

const ProfileInformation = ({ active }: Props) => {
	const user = useStateRedux((state) => state.user);

	return (
		<ProfileInformationStyled isActive={active}>
			<img src={user.photoUrl} alt={user.displayName} />
			<ul>
				<li>
					<span>Name:</span>
					<p>{user.displayName}</p>
				</li>
				<li>
					<span>Email:</span>
					<p>{user.email}</p>
				</li>
			</ul>
		</ProfileInformationStyled>
	);
};

export default ProfileInformation;
