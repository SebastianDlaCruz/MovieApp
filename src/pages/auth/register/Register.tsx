import ErrorMessage from "@components/ErrorMessage";
import HeaderTitle from "@components/HeaderTitle";
import Image from "@components/Image";
import Input from "@components/Input";
import MessageResponse from "@components/MessageResponse";
import Redirect from "@components/Redirect";
import SectionForm from "@components/SectionForm";
import useForm from "@hook/useForm";
import { useStateRedux } from "@rdx/hook/useStateRedux";
import { getSessionId } from "@rdx/slice/register.slice";
import { AppDispatch } from "@rdx/store";
import { ContainerImageStyled } from "@styled/components/ContainerImage.styled";
import { FormStyled } from "@styled/components/Form.styled";
import { SubmitStyled } from "@styled/components/Submit.styled";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Confirmed from "./components/Confirmed";
import ContainerInfo from "./components/ContainerInfo";
import Modal from "./components/Modal";
import useStateKey from "./hook/useStateKey";
import { getScrImg } from "./interceptors/getSrcImg.interceptor";
import dataUser from "./models/dataUser.model";
import { ContainerRegister } from "./styled-components/layout";
import { validationForm } from "./utilities/validationForm.utilities";

const Register = () => {
	document.title = "Register";
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const user = useStateRedux((state) => state.register);
	const { open, handleOpen, returnSessionId } = useStateKey();
	const { src, name } = getScrImg();
	const initialState: dataUser = {
		displayName: "",
		email: "",
		password: "",
	};

	const { form, error, response, handleChange, confirmForm } = useForm(
		initialState,
		validationForm,
	);

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		confirmForm();
		if (!response) {
			returnSessionId().then((res) => {
				dispatch(
					getSessionId({
						idSession: res,
					}),
				);
			});
		}
	};

	return (
		<ContainerRegister>
			<Modal open={open} handleOpen={handleOpen} />

			{response && (
				<MessageResponse status={user.status} message={user.message} />
			)}

			{user.status === "pending" && <Confirmed />}

			<ContainerImageStyled flex='2'>
				<Image src={src} alt={name} isResponsive={false} />
				<ContainerInfo />
			</ContainerImageStyled>

			<SectionForm flex='1'>
				<HeaderTitle
					title='Create an account'
					paragraph='Let’s get started with your 30 days free trial.'
				/>
				<FormStyled onSubmit={handleSubmit}>
					<Input
						type="name"
						forHtml='name'
						name='displayName'
						labelText="Name"
						handleOnChange={handleChange}
						value={form.displayName}
					/>
					{error.displayName && (
						<ErrorMessage errorMessage={error.displayName} />
					)}

					<Input
						type="email"
						forHtml='email'
						labelText="Email"
						name='email'
						handleOnChange={handleChange}
						value={form.email}
					/>

					{error.email && <ErrorMessage errorMessage={error.email} />}

					<Input
						type="password"
						forHtml='password'
						labelText="Password"
						name='password'
						handleOnChange={handleChange}
						value={form.password}
					/>

					{error.password && <ErrorMessage errorMessage={error.password} />}

					<SubmitStyled
						type="submit"
						value="Create account"
						padding='.8em 4em'
						backgroundColor='#FEFEFE'
						color='#191919'
					/>
				</FormStyled>
				<Redirect
					text="Already have an account ? "
					redirect='/login'
					textRedirect='Log in'
				/>
			</SectionForm>
		</ContainerRegister>
	);
};

export default Register;
