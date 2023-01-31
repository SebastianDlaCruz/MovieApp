import { destructureDate } from "@adapters/destrutureDate.adapter";
import { HeroImagStyled } from "../styled-components/layout.styled";
import AutomaticCarrousel from "./AutomaticCurrusel";
import Section from "./Section";

import {
	useGetMoviesTrendingDayQuery,
	useGetMoviesTrendingWeekQuery,
	useGetMoviesUpcomingQuery,
	useGetTvQuery,
} from "@rdx/querys/catalogue.query";

const Main = () => {
	const { data: movies } = useGetMoviesTrendingWeekQuery();

	const { data: moviesDay } = useGetMoviesTrendingDayQuery();

	const { data: upcoming } = useGetMoviesUpcomingQuery();

	const { data: tv } = useGetTvQuery();

	const yearPopularMovies = new Date().getFullYear();
	const monthPopularMovies = new Date().getMonth() + 1;

	const nameMonth = new Date().toLocaleString("en-US", { month: "long" });

	const length = movies?.results.length;
	const array = [];
	if (length !== undefined) {
		for (let i = 0; i < length; i++) {
			const { year, month } = destructureDate(movies?.results[i].release_date);
			if (
				yearPopularMovies === Number(year) &&
				monthPopularMovies === Number(month)
			) {
				array.push(movies?.results[i]);
			}
		}
	}

	return (
		<main>
			<HeroImagStyled id='Home'>
				<AutomaticCarrousel images={movies?.results} />
			</HeroImagStyled>
			<Section subTitle='Trending' id='Movies' images={moviesDay?.results} />
			<Section subTitle='Upcoming' id='Upcoming' images={upcoming?.results} />
			<Section subTitle='TV Series' id='TV Series' images={tv?.results} />
			<Section subTitle={`Popular movies on ${nameMonth}`} images={array} />
		</main>
	);
};

export default Main;
