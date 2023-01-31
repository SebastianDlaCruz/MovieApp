import CardMovie from "./CardMovie";

import LoadingImages from "@components/LoadingImages";
import {
	ContainersCardStyled,
	SectionStyled,
} from "../styled-components/layout.styled";
type Props = {
	subTitle: string;
	id?: string;
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	images: any[] | undefined;
};

const Section = ({ subTitle, id, images }: Props) => {
	return (
		<SectionStyled id={id}>
			<header>
				<h2>{subTitle}</h2>
			</header>
			<ContainersCardStyled>
				{images !== undefined ? (
					images.map((image) => (
						<CardMovie
							key={image.id}
							img={`https://image.tmdb.org/t/p/w500/${image.poster_path}`}
							alt={image.title}
							points={image.vote_average}
						/>
					))
				) : (
					<LoadingImages />
				)}
			</ContainersCardStyled>
		</SectionStyled>
	);
};

export default Section;
