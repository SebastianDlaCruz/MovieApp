import { useEffect, useState } from "react";
import { LiCarrouselStyle } from "../styled-components/layout.styled";

type Props = {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	images: any[] | undefined;
};

const AutomaticCarrousel = ({ images }: Props) => {
	const [activeElement, setActiveElement] = useState(0);

	const increment = () => {
		setActiveElement(activeElement + 1);
	};

	useEffect(() => {
		let res = setInterval(() => {
			increment();
		}, 9000);

		if (activeElement === images?.length) {
			setActiveElement(0);
		}

		return () => {
			clearInterval(res);
		};
	}, [activeElement]);

	return (
		<>
			{images?.map((image, index) => (
				<LiCarrouselStyle
					key={image.id}
					index={index}
					isaActive={activeElement}
					img={`https://image.tmdb.org/t/p/w500/${image.backdrop_path}`}
				>
					<h1>{image.title}</h1>
					<p>{image.overview}</p>
				</LiCarrouselStyle>
			))}
		</>
	);
};

export default AutomaticCarrousel;
