import { ContainerFormStyled } from "@styled/components/ContainerForm.styled";

type Props = {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	children: any;
};

export default function ContainerForm({ children }: Props) {
	return <ContainerFormStyled>{children}</ContainerFormStyled>;
}
