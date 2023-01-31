import { ErrorMessageStyle } from "@styled/components/ErrorMessage.styled";
type Props = {
	errorMessage: string;
};

function ErrorMessage({ errorMessage }: Props) {
	return <ErrorMessageStyle>{errorMessage}</ErrorMessageStyle>;
}

export default ErrorMessage;
