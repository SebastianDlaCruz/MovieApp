import userLogin from "@pages/auth/log/models/userLogin.model";
import { startSessionEAP } from "@rdx/thunk/startSessionEAP.thunk";
import { createSlice } from "@reduxjs/toolkit";

const initialState: userLogin = {
	email: "",
	password: "",
	emailError: "",
	passwordError: "",
	status: "",
};

export const login = createSlice({
	name: "login",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(startSessionEAP.pending, (state, { payload }) => {
				state.status = "pending";
			})
			.addCase(startSessionEAP.fulfilled, (state, { payload }) => {
				state.status = payload.status;
			})
			.addCase(startSessionEAP.rejected, (state, { payload }) => {
				if (payload !== undefined) {
					state.status = payload.status;
					state.emailError = payload.emailError;
					state.passwordError = payload.passwordError;
				}
			});
	},
});
/* export const {} = registerSlice.actions; */

export default login.reducer;
