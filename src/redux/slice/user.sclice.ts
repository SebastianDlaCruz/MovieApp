import user from "@models/user.model";
import { getUser } from "@rdx/thunk/getUser.thunk";
import { createSlice } from "@reduxjs/toolkit";
const initialState: user = {
	displayName: "",
	email: "    ",
	idSession: "",
	password: "",
	photoUrl: "",
	uid: "",
};
export const user = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getUser.fulfilled, (state, { payload }) => {
			state.displayName = payload.displayName;
			state.email = payload.email;
			state.idSession = payload.idSession;
			state.photoUrl = payload.photoUrl;
			state.uid = payload.uid;
			state.password = payload.password;
		});
	},
});

export default user.reducer;
