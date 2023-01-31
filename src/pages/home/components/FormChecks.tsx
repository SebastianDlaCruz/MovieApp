import { Fragment } from "react";
import {
	ContainerInput,
	FormChecksStyled,
} from "../styled-components/layout.styled";
import check from "/icons/CheckedCheckbox.svg";
type Props = {
	nameCheck: string[];
};

const FormChecks = ({ nameCheck }: Props) => {
	return (
		<FormChecksStyled>
			<>
				{nameCheck.map((element, index) => (
					// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<Fragment key={index}>
						<ContainerInput img={check}>
							<label htmlFor={element}>{element}</label>
							<input type="checkbox" name={element} id={element} />
						</ContainerInput>
						<hr />
					</Fragment>
				))}
				<input type="submit" value="See more" />
			</>
		</FormChecksStyled>
	);
};

export default FormChecks;
