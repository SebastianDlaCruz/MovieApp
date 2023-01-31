export const destructureDate = (date: string) => {
	const newDate = date.split("-");

	const [year, month, day] = newDate;

	return {
		year,
		month,
		day,
	};
};
