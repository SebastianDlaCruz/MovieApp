import user from "@models/user.model";

interface userRegister extends user {
	status: string;
	message: string;
}

export default userRegister;
