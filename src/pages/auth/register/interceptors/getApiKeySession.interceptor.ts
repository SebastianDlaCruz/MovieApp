import { getEnvironment } from "@adapters/getEnvironment.adapter";

export const getApiKeySession = async (token: string) => {
	const { VITE_API_KEY } = getEnvironment();

	const url = `https://api.themoviedb.org/3/authentication/session/new?api_key=${VITE_API_KEY}`;

	const signal = new AbortController().signal;

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				request_token: `${token}`,
			}),
			signal,
		});

		const { success, session_id } = await response.json();

		if (!success) throw new Error("error en la petición de datos");

		return {
			ok: true,
			session_id,
		};
	} catch (err) {
		const status = "404";
		const statusText = err;
		return {
			ok: false,
			status,
			statusText,
		};
	}
};
