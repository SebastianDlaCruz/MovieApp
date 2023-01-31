import { FirebaseDB } from "@fireBS/config";
import { collection, getDocs } from "firebase/firestore";

export const userDateDB = async (nameDB: string) => {
	const response = await getDocs(collection(FirebaseDB, nameDB));

	return response;
};
