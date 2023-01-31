import { ErrorStyled } from "./styled-components/layout";
const ErrorPages = () => {
	return (
		<ErrorStyled>
			<h1>!Ups 😬</h1>
			<p> Esta ruta no fue encontrada por favor ingrese un ruta existente </p>
		</ErrorStyled>
	);
};

export default ErrorPages;
