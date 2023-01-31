import { useContext } from "react";
import { UseContextCarrousel } from "../context/useContextCarrousel";
import { ContainerPointsStyled } from "../styled-components/layout";
import Button from "./Button";
import CircledLeft from "/icons/CircleLeft.svg";
import CircledRight from "/icons/CircleRight.svg";
import Start from "/icons/Start.svg";

type Props = {
	numberOne: string;
	numberTwo: string;
};

const ContainerPoints = ({ numberOne, numberTwo }: Props) => {
	const { moveImageRight, moveImageLeft } = useContext(UseContextCarrousel);

	return (
		<ContainerPointsStyled>
			<div>
				<img src={Start} alt='logo' />
				<span>
					{numberOne}/{numberTwo}
				</span>
			</div>
			<ul>
				<li>
					<Button
						img={CircledLeft}
						paddings='3em'
						handleClick={moveImageRight}
					/>
				</li>
				<li>
					<Button
						img={CircledRight}
						paddings='3em'
						handleClick={moveImageLeft}
					/>
				</li>
			</ul>
		</ContainerPointsStyled>
	);
};

export default ContainerPoints;
