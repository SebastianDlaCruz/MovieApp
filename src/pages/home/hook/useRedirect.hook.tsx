import { FirebaseGetAuth } from "@fireBS/config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useRedirect = () => {
	const [uid, setUid] = useState("");
	const navigate = useNavigate();
	const auth = FirebaseGetAuth;
	const user = auth.currentUser;

	useEffect(() => {
		if (!user) {
			navigate("/login");
		} else {
			setUid(user.uid);
		}
	}, []);

	return {
		uid,
	};
};

export default useRedirect;
