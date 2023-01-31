import { HeaderTitleStyled } from "@styled/components/HeaderTitle.styled";

type props = {
	title: string;
	paragraph: string;
};
const HeaderTitle = ({ title, paragraph }: props) => {
	return (
		<HeaderTitleStyled>
			<h1>{title}</h1>
			<p>{paragraph}</p>
		</HeaderTitleStyled>
	);
};
export default HeaderTitle;
