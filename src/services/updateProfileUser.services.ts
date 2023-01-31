import { UserCredential, updateProfile } from "firebase/auth";
export const updateProfileUser = async (
	user: UserCredential,
	displayName: string,
	photoURL: string,
) => {
	await updateProfile(user.user, { displayName, photoURL });
};
