import { useGetShowMovieQuery } from "@rdx/querys/shoMovies.query";

export const getScrImg = () => {
	const { data: movie } = useGetShowMovieQuery();

	let votMaX = 0;
	let path = "";
	let name = "";

	movie?.results.forEach((movie, index) => {
		if (index === 0) {
			votMaX = movie.vote_count;
		} else if (movie.vote_count > votMaX) {
			votMaX = movie.vote_count;
			path = movie.poster_path;
			name = movie.title;
		}
	});

	let src = `https://image.tmdb.org/t/p/original${path}`;

	return {
		src,
		name,
	};
};
