import dataLogin from "../models/dateLogin.model";
export const formValidation = (form: dataLogin) => {
	const errors: dataLogin = {
		email: "",
		password: "",
	};

	const regexEmail =
		/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
	const regexPassword =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}$/;

	if (form.email.trim() === "") {
		errors.email = "Campo vació";
	} else if (!regexEmail.test(form.email)) {
		errors.email = "Error campo email incorrecto";
	}

	if (form.password.trim() === "") {
		errors.password = "Campo vació";
	} else if (!regexPassword.test(form.password)) {
		errors.password =
			"contraseña mayor de 8 caracteres , por lo menos una mayúscula , numero y un símbolo. Ejemplo(@,$)";
	}

	return errors;
};
