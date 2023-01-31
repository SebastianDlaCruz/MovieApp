import { GoogleButtonStyle } from "@styled/components/GoogleButtonStyled.styled";
import GoogleIcon from "/icons/Google.svg";

export default function GoogleButton({
	textButton,
	padding,
	backgroundColor,
	color,
}: {
	textButton: string;
	padding: string;
	backgroundColor: string;
	color: string;
}) {
	return (
		<GoogleButtonStyle
			as="button"
			backgroundColor={backgroundColor}
			color={color}
			padding={padding}
		>
			<div>
				<img src={GoogleIcon} alt="google icon" />
				<span>{textButton}</span>
			</div>
		</GoogleButtonStyle>
	);
}
