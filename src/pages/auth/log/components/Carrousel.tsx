import Image from "@components/Image";
import { useState } from "react";
import { UseContextCarrousel } from "../context/useContextCarrousel";
import { ContainerCarrouselStyle } from "../styled-components/layout";
import ContainerStatistics from "./ContainerStatistics";
type Props = {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	images: any[];
};

const Carrusel = ({ images }: Props) => {
	const [activeElement, setActiveElement] = useState(0);

	const moveImageRight = () => {
		if (activeElement === images.length - 1) {
			setActiveElement(0);
		} else {
			setActiveElement(activeElement + 1);
		}
	};

	const moveImageLeft = () => {
		if (activeElement === 0) {
			setActiveElement(images.length - 1);
		} else {
			setActiveElement(activeElement - 1);
		}
	};

	return (
		<UseContextCarrousel.Provider value={{ moveImageRight, moveImageLeft }}>
			{images.map((element, index) => (
				<ContainerCarrouselStyle
					key={element.id}
					isActive={activeElement}
					current={index}
				>
					<Image
						isResponsive={false}
						src={`https://image.tmdb.org/t/p/original${element.poster_path}`}
						alt={element.name}
					/>
					<ContainerStatistics
						subTitle={element.name}
						genres="2022 | PG-13 | 2h 10m"
						infoText={element.media_type}
						numberOne={element.vote_average}
						numberTwo={element.vote_count}
					/>
				</ContainerCarrouselStyle>
			))}
		</UseContextCarrousel.Provider>
	);
};

export default Carrusel;
