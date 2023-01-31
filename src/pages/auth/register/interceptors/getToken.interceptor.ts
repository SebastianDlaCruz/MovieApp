import { getEnvironment } from "@adapters/getEnvironment.adapter";

export const getToken = async () => {
	const { VITE_API_KEY } = getEnvironment();

	const url = `https://api.themoviedb.org/3/authentication/token/new?api_key=${VITE_API_KEY}`;

	const signal = new AbortController().signal;

	try {
		const response = await fetch(url, { signal });

		const { success, expires_at, request_token, err, status } =
			await response.json();
		if (!success) throw new Error(`error ${err} , status : ${status}`);

		return {
			ok: true,
			request_token,
		};
	} catch (error) {
		return {
			ok: false,
			error,
		};
	}
};
