import ContainerUncheckAll from "./ContainerUncheckAll";
import FormChecks from "./FormChecks";
type Props = {
	nameCheck: string[];
	name: string;
};

function ContainerCheck({ nameCheck, name }: Props) {
	return (
		<>
			<ContainerUncheckAll name={name} />
			<FormChecks nameCheck={nameCheck} />
		</>
	);
}

export default ContainerCheck;
