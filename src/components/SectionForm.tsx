import { SectionFormStyled } from "@styled/components/SectionForm.styled";
type props = {
	children: JSX.Element[];
	flex: string;
};
export default function SectionForm({ children, flex }: props) {
	return <SectionFormStyled flex={flex}>{children}</SectionFormStyled>;
}
