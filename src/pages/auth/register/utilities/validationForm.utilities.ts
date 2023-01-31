import dataUser from "../models/dataUser.model";
export const validationForm = (form: dataUser) => {
	const errors: dataUser = {
		displayName: "",
		email: "",
		password: "",
	};

	const regexName = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
	const regexEmail =
		/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
	const regexPassword =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}$/;

	if (form.displayName.trim() === "") {
		errors.displayName = "Campo vació";
	} else if (!regexName.test(form.displayName)) {
		errors.displayName = "Error campo nombre incorrecto";
	}

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
