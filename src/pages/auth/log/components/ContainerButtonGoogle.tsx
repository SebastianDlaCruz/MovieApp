import GoogleButton from "@components/GoogleButton";
import { ContainerButtonGoogleStyled } from "../styled-components/layout";

const ContainerButtonGoogle = () => {
	return (
		<ContainerButtonGoogleStyled>
			<GoogleButton
				textButton='Sign up with Google'
				backgroundColor='#191919'
				padding=' .6em'
				color='#FEFEFE'
			/>
			<div>
				<hr />
				<p>or</p>
				<hr />
			</div>
		</ContainerButtonGoogleStyled>
	);
};

export default ContainerButtonGoogle;
