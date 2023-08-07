import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.themoviedb.org/3` }),

  tagTypes: ["movieApi"],
  endpoints: (builder) => ({
    getMovie: builder.query({
      query: () =>
        "/discover/movie?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1",
      providesTags: ["movieApi"],
    }),
    getMovieGeners: builder.query({
      query: () =>
        "/genre/movie/list?api_key=7fe0fbe72550cf27a1a5a738cabda3db",
      providesTags: ["movieApi"],
    }),
    getTv: builder.query({
      query: () =>
        "/discover/tv?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=3",
      providesTags: ["movieApi"],
    }),
    getTvGeners: builder.query({
      query: () =>
        "/discover/tv?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=3",
      providesTags: ["movieApi"],
    }),
    getNowPlaying: builder.query({
      query: () =>
        "/movie/now_playing?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1",
      providesTags: ["movieApi"],
    }),
    getPopular: builder.query({
      query: () =>
        "/movie/popular?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1",
      providesTags: ["movieApi"],
    }),
    getTopRated: builder.query({
      query: () =>
        "/movie/top_rated?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1",
      providesTags: ["movieApi"],
    }),
    getUpcoming: builder.query({
      query: () =>
        "/movie/upcoming?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=2",
      providesTags: ["movieApi"],
    }),
  }),
});

export const {
  useGetMovieQuery,
  useGetMovieGenersQuery,
  useGetTvQuery,
  useGetTvGenersQuery,
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery
} = movieApi;
