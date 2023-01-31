interface responseApiMovie {
	pages: number;
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	results: any[];
	total_pages: number;
	total_results: number;
}

export default responseApiMovie;
