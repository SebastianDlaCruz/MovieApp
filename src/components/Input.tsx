import { InputStyled } from "@styled/components/Input.styled";
import { useState } from "react";
type Props = {
	forHtml: string;
	type: string;
	name: string;
	labelText: string;
	handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
};
export default function Input({
	forHtml,
	labelText,
	type,
	name,
	handleOnChange,
	value,
}: Props) {
	const [transition, setTransition] = useState(false);

	const arrayLabelText = [...labelText];

	const handleOnTransition = (
		event: React.ChangeEvent<HTMLInputElement>,
	): void => {
		const value = event.target.value;
		if (value.length === 0) {
			setTransition(true);
		}
	};

	const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value;
		if (value.length === 0) {
			setTransition(false);
		}
	};

	return (
		<InputStyled isActive={transition} color='#fff' margin='1rem 0'>
			<label htmlFor={forHtml}>
				{arrayLabelText.map((text, index) => (
					<span
						// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						style={{
							transitionDelay: `${index * 50}ms`,
						}}
					>
						{text}
					</span>
				))}
			</label>
			<input
				type={type}
				onFocus={handleOnTransition}
				onChange={handleOnChange}
				onBlur={handleOnBlur}
				name={name}
				value={value}
			/>
		</InputStyled>
	);
}
