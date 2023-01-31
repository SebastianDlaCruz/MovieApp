import { FirebaseGetAuth } from "@fireBS/config";
import { updateProfileUser } from "@services/updateProfileUser.services";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const createUserWithEAP = async (
	displayName: string,
	email: string,
	password: string,
) => {
	try {
		const res = await createUserWithEmailAndPassword(
			FirebaseGetAuth,
			email,
			password,
		);

		updateProfileUser(res, displayName, "");
		if (!res) throw new Error(res);
		const { uid } = res.user;
		return {
			ok: true,
			displayName,
			email,
			password,
			uid,
		};
	} catch (error) {
		const statusError = error;
		return {
			ok: false,
			statusError,
			displayName: "",
			email: "",
			password: "",
			uid: "",
		};
	}
};
