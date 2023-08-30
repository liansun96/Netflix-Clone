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
    getMovieGenres: builder.query({
      query: () => "/genre/movie/list?api_key=7fe0fbe72550cf27a1a5a738cabda3db",
      providesTags: ["movieApi"],
    }),
    getTv: builder.query({
      query: () =>
        "/discover/tv?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=3",
      providesTags: ["movieApi"],
    }),
    getTvGenres: builder.query({
      query: () =>
        "/discover/tv?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=3",
      providesTags: ["movieApi"],
    }),
    getNowPlaying: builder.query({
      query: () =>
        "/movie/now_playing?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1",
      providesTags: ["movieApi"],
    }),
    getNowPlayingTv: builder.query({
      query: () =>
        "/tv/on_the_air?api_key=7fe0fbe72550cf27a1a5a738cabda3db",
      providesTags: ["movieApi"],
    }),
    getPopular: builder.query({
      query: () =>
        `/movie/popular?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1`,
      providesTags: ["movieApi"],
    }),
    getPopularTv: builder.query({
      query: () =>
        `/tv/popular?api_key=7fe0fbe72550cf27a1a5a738cabda3db`,
      providesTags: ["movieApi"],
    }),
    getTopRated: builder.query({
      query: () =>
        "/movie/top_rated?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1",
      providesTags: ["movieApi"],
    }),
    getTopRatedTv: builder.query({
      query: () =>
        "/tv/top_rated?api_key=7fe0fbe72550cf27a1a5a738cabda3db",
      providesTags: ["movieApi"],
    }),
    getUpcoming: builder.query({
      query: () =>
        "/movie/upcoming?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=2",
      providesTags: ["movieApi"],
    }),
    getMovieDetail: builder.query({
      query: ({ id }) =>
        `/movie/${id}?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&append_to_response=credits`,
      providesTags: ["movieApi"],
    }),
    getMovieImage: builder.query({
      query: ({ id }) =>
        `/movie/${id}/images?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&include_image_language=null,en,fr,pt,de`,
      providesTags: ["movieApi"],
    }),
    getDetailVideo: builder.query({
      query: ({ id }) =>
        `movie/${id}/videos?api_key=7fe0fbe72550cf27a1a5a738cabda3db`,
      providesTags: ["movieApi"],
    }),
    getDetailRecommendations: builder.query({
      query: ({ id }) =>
        `movie/${id}/recommendations?api_key=7fe0fbe72550cf27a1a5a738cabda3db`,
      providesTags: ["movieApi"],
    }),
    getDetailSimilar: builder.query({
      query: ({ id }) =>
        `movie/${id}/similar?api_key=7fe0fbe72550cf27a1a5a738cabda3db`,
      providesTags: ["movieApi"],
    }),
    getTvDetail: builder.query({
      query: ({ id }) =>
        `/tv/${id}?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&append_to_response=credits`,
      providesTags: ["movieApi"],
    }),
    getTvImage: builder.query({
      query: ({ id }) =>
        `/tv/${id}/images?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&include_image_language=null,en,fr,pt,de`,
      providesTags: ["movieApi"],
    }),
    getTvDetailVideo: builder.query({
      query: ({ id }) =>
        `tv/${id}/videos?api_key=7fe0fbe72550cf27a1a5a738cabda3db`,
      providesTags: ["movieApi"],
    }),
    getTvDetailRecommendations: builder.query({
      query: ({ id }) =>
        `tv/${id}/recommendations?api_key=7fe0fbe72550cf27a1a5a738cabda3db`,
      providesTags: ["movieApi"],
    }),
    getTvDetailSimilar: builder.query({
      query: ({ id }) =>
        `tv/${id}/similar?api_key=7fe0fbe72550cf27a1a5a738cabda3db`,
      providesTags: ["movieApi"],
    }),
  }),
});

export const {
  useGetMovieQuery,
  useGetMovieGenresQuery,
  useGetTvQuery,
  useGetTvGenresQuery,
  useGetNowPlayingQuery,
  useGetNowPlayingTvQuery,
  useGetPopularQuery,
  useGetPopularTvQuery,
  useGetTopRatedQuery,
  useGetTopRatedTvQuery,
  useGetUpcomingQuery,
  useGetMovieDetailQuery,
  useGetMovieImageQuery,
  useGetDetailVideoQuery,
  useGetDetailRecommendationsQuery,
  useGetDetailSimilarQuery,
  useGetTvDetailQuery,
  useGetTvImageQuery,
  useGetTvDetailVideoQuery,
  useGetTvDetailRecommendationsQuery,
  useGetTvDetailSimilarQuery,
} = movieApi;
