import { useState } from "react";
import { getApiKeySession } from "../interceptors/getApiKeySession.interceptor";
import { getToken } from "../interceptors/getToken.interceptor";
function useStateKey() {
	const [open, setOpen] = useState(false);
	const [apiKey, setApiKey] = useState("");

	const handleOpen = () => {
		setOpen(true);
		getToken().then((response) => {
			setApiKey(response.request_token);
			window.open(
				`https://www.themoviedb.org/authenticate/${response.request_token}`,
			);
		});
	};

	const returnSessionId = async () => {
		const { ok, session_id } = await getApiKeySession(apiKey);
		if (ok) return session_id;
	};

	return {
		open,
		handleOpen,
		returnSessionId,
	};
}

export default useStateKey;
