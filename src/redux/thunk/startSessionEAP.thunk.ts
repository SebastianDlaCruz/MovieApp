import dataLogin from "@pages/auth/log/models/dateLogin.model";
import userLogin from "@pages/auth/log/models/userLogin.model";
import { starSession } from "@pages/auth/log/services/startSession.services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userDateDB } from "@services/userDateDB";

export const startSessionEAP = createAsyncThunk<
	userLogin,
	dataLogin,
	{ rejectValue: userLogin }
>("user/login", async (user: dataLogin, thunkApi) => {
	const responseDateUser = await userDateDB("user");
	let emailIsValid = "";
	let passwordIsValid = "";

	responseDateUser.forEach((userDB) => {
		if (userDB.data().email !== user.email)
			emailIsValid = "email invalido , no se tiene registro de ese email";
		if (userDB.data().password !== user.password)
			passwordIsValid = "password invalido";
	});

	if (emailIsValid !== "" || passwordIsValid !== "") {
		return thunkApi.rejectWithValue({
			status: "error",
			message: "error al ingresar a la plataforma",
			emailError: emailIsValid,
			passwordError: passwordIsValid,
			password: "",
			email: "",
		} as userLogin);
	}

	const response = await starSession(user.email, user.password);

	return {
		status: response.ok,
		message: response.message,
		email: "",
		emailError: "",
		password: "",
		passwordError: "",
	} as userLogin;
});
