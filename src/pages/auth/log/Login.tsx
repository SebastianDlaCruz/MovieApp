import ContainerForm from "@components/ContainerForm";
import ErrorMessage from "@components/ErrorMessage";
import HeaderTitle from "@components/HeaderTitle";
import Input from "@components/Input";
import LoadingImages from "@components/LoadingImages";
import Redirect from "@components/Redirect";
import SectionForm from "@components/SectionForm";
import useForm from "@hook/useForm";
import { useStateRedux } from "@rdx/hook/useStateRedux";
import { useGetShowSeriesQuery } from "@rdx/querys/shoMovies.query";
import { selectDisplayName } from "@rdx/slice/register.slice";
import { AppDispatch } from "@rdx/store";
import { startSessionEAP } from "@rdx/thunk/startSessionEAP.thunk";
import { ContainerImageStyled } from "@styled/components/ContainerImage.styled";
import { FormStyled } from "@styled/components/Form.styled";
import { SubmitStyled } from "@styled/components/Submit.styled";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Carrousel from "./components/Carrousel";
import ContainerCheck from "./components/ContainerCheck";
import dataLogin from "./models/dateLogin.model";
import { formValidation } from "./utilities/validateForm.utilities";

const Login = () => {
	document.title = "Login";

	const name = useStateRedux(selectDisplayName);
	const title = `Welcome back, ${name || "user"}`;
	const { data: series } = useGetShowSeriesQuery();
	const user = useStateRedux((state) => state.login);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const initialState: dataLogin = {
		email: "",
		password: "",
	};

	const { form, confirmForm, error, response, handleChange } = useForm(
		initialState,
		formValidation,
	);

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		confirmForm();
		if (!response) {
			dispatch(startSessionEAP(form));
			navigate("/", { replace: true });
		}
	};

	return (
		<ContainerForm>
			<SectionForm flex="1">
				<HeaderTitle
					title={title}
					paragraph="Welcome back! Please enter your details."
				/>
				<FormStyled onSubmit={handleSubmit}>
					<Input
						type="text"
						forHtml='email'
						name='email'
						labelText="Email"
						value={form.email}
						handleOnChange={handleChange}
					/>

					{error && <ErrorMessage errorMessage={error.email} />}

					{user.emailError && <ErrorMessage errorMessage={user.emailError} />}

					<Input
						type="password"
						forHtml='password'
						name='password'
						labelText="Password"
						value={form.password}
						handleOnChange={handleChange}
					/>

					{error && <ErrorMessage errorMessage={error.password} />}
					{user.passwordError && (
						<ErrorMessage errorMessage={user.passwordError} />
					)}

					<ContainerCheck />
					<SubmitStyled
						type="submit"
						value="Log In"
						padding='.8em 4em'
						backgroundColor='#FEFEFE'
						color='#191919'
					/>
				</FormStyled>

				<Redirect
					text="Don’t have an account ?"
					redirect='/register'
					textRedirect='Sign up for free'
				/>
			</SectionForm>
			<ContainerImageStyled flex="1" as='ul'>
				{series === undefined ? (
					<LoadingImages />
				) : (
					<>
						<Carrousel images={series.results} />
					</>
				)}
			</ContainerImageStyled>
		</ContainerForm>
	);
};

export default Login;
