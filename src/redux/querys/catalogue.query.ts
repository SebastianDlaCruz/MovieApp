import { getEnvironment } from "@adapters/getEnvironment.adapter";
import responseApiMovie from "@models/responseApiMovie.model";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const { VITE_API_KEY } = getEnvironment();

const baseUrl = "https://api.themoviedb.org/3";

export const catalogue = createApi({
	reducerPath: "catalogue",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getMoviesTrendingWeek: builder.query<responseApiMovie, void>({
			query: () => `/trending/movie/week?api_key=${VITE_API_KEY}`,
		}),
		getMoviesTrendingDay: builder.query<responseApiMovie, void>({
			query: () => `/trending/movie/week?api_key=${VITE_API_KEY}`,
		}),
		getMoviesUpcoming: builder.query<responseApiMovie, void>({
			query: () =>
				`/movie/upcoming?api_key=${VITE_API_KEY}&language=en-US&page=1`,
		}),
		getTv: builder.query<responseApiMovie, void>({
			/*    query: () => `/discover/tv?api_key=${VITE_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0` */
			query: () => `/trending/tv/week?api_key=${VITE_API_KEY}`,
		}),
	}),
});

export const {
	useGetMoviesTrendingWeekQuery,
	useGetMoviesTrendingDayQuery,
	useGetMoviesUpcomingQuery,
	useGetTvQuery,
} = catalogue;
