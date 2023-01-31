import dataUser from "@pages/auth/register/models/dataUser.model";
import userRegister from "@pages/auth/register/models/userResgister.model";
import { createUserWithEAP } from "@pages/auth/register/services/createUserWithEAP.services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk<
	userRegister,
	dataUser,
	{ rejectValue: userRegister }
>("user/register", async (user: dataUser, thunkApi) => {
	const response = await createUserWithEAP(
		user.displayName,
		user.email,
		user.password,
	);

	if (response.ok) {
		return {
			status: "success",
			message: "Usuario Registrado Exitosamente",
			displayName: response.displayName,
			email: response.email,
			password: response.password,
			uid: response.uid,
		} as userRegister;
	}

	return thunkApi.rejectWithValue({
		status: "error",
		message: "Este usuario ya tiene registrado este email , intente con otro",
		displayName: "",
		email: "",
		idSession: "",
		password: "",
		photoUrl: "",
		uid: "",
	} as userRegister);
});
