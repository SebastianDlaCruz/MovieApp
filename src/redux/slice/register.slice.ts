import userRegister from "@pages/auth/register/models/userResgister.model";
import { RootState } from "@rdx/store";
import { createUser } from "@rdx/thunk/createUser.thunk";
import { createSlice } from "@reduxjs/toolkit";

const initialState: userRegister = {
	displayName: "",
	email: "",
	password: "",
	idSession: "",
	photoUrl: "",
	uid: "",
	status: "",
	message: "",
};

export const register = createSlice({
	name: "register",
	initialState,
	reducers: {
		resetRegister: (state, { payload }) => {
			state.status = payload.status;
		},
		getSessionId: (state, { payload }) => {
			state.idSession = payload.idSession;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(createUser.pending, (state, { payload }) => {
				state.status = "pending";
			})
			.addCase(createUser.fulfilled, (state, { payload }) => {
				if (payload !== undefined) {
					state.status = payload.status;
					state.message = payload.message;
					state.displayName = payload.displayName;
					state.email = payload.email;
					state.password = payload.password;
					state.uid = payload.uid;
				}
			});
	},
});

export const { resetRegister, getSessionId } = register.actions;
export const selectDisplayName = (state: RootState) =>
	state.register.displayName;
export default register.reducer;
