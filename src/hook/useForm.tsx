import { useState } from "react";

const useForm = (
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	initialState: any,
	formValidation: (
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
		initialState: any,
	) => // rome-ignore lint/suspicious/noExplicitAny: <explanation>
	any,
) => {
	const [form, setForm] = useState(initialState);
	const [error, setError] = useState(initialState);
	const [response, setResponse] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const confirmForm = () => {
		const errorResponse = formValidation(form);
		setResponse(
			!Object.entries(errorResponse).some(([key, value]) => value !== ""),
		);
		setError(errorResponse);
		setForm({ ...initialState });
	};

	return {
		form,
		error,
		response,
		handleChange,
		confirmForm,
	};
};

export default useForm;
