import user from "@models/user.model";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userDateDB } from "@services/userDateDB";

export const getUser = createAsyncThunk<user, string, { rejectValue: user }>(
	"user/state",
	async (uid: string, thunkApi) => {
		const responseUser = await userDateDB("users");

		const state: user = {
			displayName: "",
			email: "",
			idSession: "",
			password: "",
			photoUrl: "",
			uid: "",
		};

		let isValid = false;

		responseUser.forEach((userDB) => {
			if (userDB.data().uid === uid) {
				isValid = true;
				state.displayName = userDB.data().displayName;
				state.email = userDB.data().email;
				state.password = userDB.data().password;
				state.idSession = userDB.data().idSession;
				state.photoUrl = userDB.data().photoUrl;
				state.uid = userDB.data().uid;
				return;
			}
		});

		if (!isValid) {
			return thunkApi.rejectWithValue({
				displayName: "",
				email: "",
				idSession: "",
				password: "",
				photoUrl: "",
				uid: "",
			} as user);
		}

		return state;
	},
);
