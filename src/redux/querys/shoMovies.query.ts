import { getEnvironment } from "@adapters/getEnvironment.adapter";
import responseApiMovie from "@models/responseApiMovie.model";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { VITE_API_KEY } = getEnvironment();

const baseUrl = "https://api.themoviedb.org/3";

export const showMovies = createApi({
	reducerPath: "movies",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getShowMovie: builder.query<responseApiMovie, void>({
			query: () => `/trending/movie/week?api_key=${VITE_API_KEY}`,
		}),
		getShowSeries: builder.query<responseApiMovie, void>({
			query: () => `/trending/tv/week?api_key=${VITE_API_KEY}`,
		}),
	}),
});

export const { useGetShowMovieQuery, useGetShowSeriesQuery } = showMovies;
