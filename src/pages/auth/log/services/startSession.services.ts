import { FirebaseGetAuth } from "@fireBS/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const starSession = async (email: string, password: string) => {
	try {
		const response = await signInWithEmailAndPassword(
			FirebaseGetAuth,
			email,
			password,
		);

		if (response) {
			return {
				ok: "success",
				message: "",
			};
		}
		throw new Error("Error el usuario ingresado es muy xd");
	} catch (error) {
		return {
			ok: "error",
			message: "Erro al Consumir el servicio",
		};
	}
};
