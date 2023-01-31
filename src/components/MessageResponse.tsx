import { MessageResponseStyle } from "@styled/components/MessgaResponseStyle.styled";
type Props = {
	status: string;
	message: string;
};

const MessageResponse = ({ status, message }: Props) => {
	return (
		<>
			{status === "success" ? (
				<MessageResponseStyle status={status}>{message}</MessageResponseStyle>
			) : (
				<MessageResponseStyle status={status}>{message}</MessageResponseStyle>
			)}
		</>
	);
};

export default MessageResponse;
