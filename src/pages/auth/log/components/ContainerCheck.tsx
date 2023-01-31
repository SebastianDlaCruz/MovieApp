import { ContainerCheckStyled } from "../styled-components/layout";

export default function ContainerCheck() {
	return (
		<ContainerCheckStyled>
			<div>
				<label htmlFor='checkbox'>Remember me for 30 days</label>
				<input type="checkbox" id='checkbox' name='checkbox' />
			</div>
			<a href="#aa">Forgot password</a>
		</ContainerCheckStyled>
	);
}
