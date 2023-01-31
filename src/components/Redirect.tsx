import { RedirectStyled } from "@styled/components/Redirect.styled";
import { Link } from "react-router-dom";

type props = {
	text: string;
	redirect: string;
	textRedirect: string;
};

export default function Redirect({ text, redirect, textRedirect }: props) {
	return (
		<RedirectStyled colorSpan='#BABABA' colorLink='#fff'>
			{text}
			<Link to={redirect}>{textRedirect}</Link>
		</RedirectStyled>
	);
}
