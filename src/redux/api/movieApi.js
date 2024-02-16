import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.themoviedb.org/3` }),

  tagTypes: ["movieApi"],
  endpoints: (builder) => ({
    getMovie: builder.query({
      query: () =>
        `/discover/movie?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1`,
      providesTags: ["movieApi"],
    }),
    getMovieById: builder.query({
      query: ({ movieGenreId }) =>
        `/discover/movie?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1&with_genres=${movieGenreId}`,
      providesTags: ["movieApi"],
    }),
    getMovieByCountry: builder.query({
      query: ({ iosName }) =>
        `/discover/movie?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1&primary_release_year=2022&with_original_language=${iosName}`,
      providesTags: ["movieApi"],
    }),
    getMovieByCountryTwo: builder.query({
      query: ({ iosName }) =>
        `/discover/movie?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=2&primary_release_year=2022&with_original_language=${iosName}`,
      providesTags: ["movieApi"],
    }),
    getMovieByCountryThree: builder.query({
      query: ({ iosName }) =>
        `/discover/movie?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=2&primary_release_year=2022&with_original_language=${iosName}`,
      providesTags: ["movieApi"],
    }),
    getMovieGenres: builder.query({
      query: () => "/genre/movie/list?api_key=7fe0fbe72550cf27a1a5a738cabda3db",
      providesTags: ["movieApi"],
    }),
    getTv: builder.query({
      query: () =>
        `/discover/tv?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1`,
      providesTags: ["movieApi"],
    }),
    getTvById: builder.query({
      query: ({ tvGenreId }) =>
        `/discover/tv?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1&with_genres=${tvGenreId}`,
      providesTags: ["movieApi"],
    }),
    getTvGenres: builder.query({
      query: () => "genre/tv/list?api_key=7fe0fbe72550cf27a1a5a738cabda3db",
      providesTags: ["movieApi"],
    }),
    getNowPlaying: builder.query({
      query: ({ movieGenreId }) =>
        `/movie/now_playing?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1&with_genres=${movieGenreId}`,
      providesTags: ["movieApi"],
    }),
    getNowPlayingTwo: builder.query({
      query: ({ movieGenreId }) =>
        `/movie/now_playing?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=2&with_genres=${movieGenreId}`,
      providesTags: ["movieApi"],
    }),
    getNowPlayingTv: builder.query({
      query: ({ tvGenreId }) =>
        `/tv/on_the_air?api_key=7fe0fbe72550cf27a1a5a738cabda3db&page=2&with_genres=${tvGenreId}`,
      providesTags: ["movieApi"],
    }),
    getPopular: builder.query({
      query: ({ movieGenreId }) =>
        `/movie/popular?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1&with_genres=${movieGenreId}`,
      providesTags: ["movieApi"],
    }),
    getPopularTwo: builder.query({
      query: ({ movieGenreId }) =>
        `/movie/popular?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=2&with_genres=${movieGenreId}`,
      providesTags: ["movieApi"],
    }),
    getPopularTv: builder.query({
      query: ({ tvGenreId }) =>
        `/tv/popular?api_key=7fe0fbe72550cf27a1a5a738cabda3db&&page=3with_genres=${tvGenreId}`,
      providesTags: ["movieApi"],
    }),
    getTopRated: builder.query({
      query: ({ movieGenreId }) =>
        `/movie/top_rated?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1&with_genres=${movieGenreId}`,
      providesTags: ["movieApi"],
    }),
    getTopRatedTwo: builder.query({
      query: ({ movieGenreId }) =>
        `/movie/top_rated?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=2&with_genres=${movieGenreId}`,
      providesTags: ["movieApi"],
    }),
    getTopRatedTv: builder.query({
      query: ({ tvGenreId }) =>
        `/tv/top_rated?api_key=7fe0fbe72550cf27a1a5a738cabda3db&with_genres=${tvGenreId}`,
      providesTags: ["movieApi"],
    }),
    getUpcoming: builder.query({
      query: () =>
        "/movie/upcoming?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1",
      providesTags: ["movieApi"],
    }),
    getUpcomingTwo: builder.query({
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
      query: ({ movieId }) =>
        `/movie/${movieId}/images?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&include_image_language=null,en,fr,pt,de`,
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
      query: ({ movieId }) =>
        `/tv/${movieId}/images?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&include_image_language=null,en,fr,pt,de`,
      providesTags: ["movieApi"],
    }),
    getTvDetailVideo: builder.query({
      query: ({ id }) =>
        `tv/${id}/videos?api_key=7fe0fbe72550cf27a1a5a738cabda3db`,
      providesTags: ["movieApi"],
    }),
    getTvDetailRecommendations: builder.query({
      query: ({ id }) =>
        `tv/${id}/recommendations?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&append_to_response=credits`,
      providesTags: ["movieApi"],
    }),
    getTvDetailSimilar: builder.query({
      query: ({ id }) =>
        `tv/${id}/similar?api_key=7fe0fbe72550cf27a1a5a738cabda3db`,
      providesTags: ["movieApi"],
    }),
    getSearch: builder.query({
      query: ({ search, page }) =>
        `/search/multi?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&include_adult=false&page=${page}&query=${search}}`,
      providesTags: ["movieApi"],
    }),
    getGenreSearch: builder.query({
      query: ({ id }) =>
        `/discover/movie?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&sort_by=release_date.desc&page=1&with_genres=${id}`,
      providesTags: ["movieApi"],
    }),
    getLanguage: builder.query({
      query: () =>
        `/configuration/languages?api_key=7fe0fbe72550cf27a1a5a738cabda3db`,
      providesTags: ["movieApi"],
    }),
    getCountry: builder.query({
      query: () =>
        `/configuration/countries?api_key=7fe0fbe72550cf27a1a5a738cabda3db`,
      providesTags: ["movieApi"],
    }),
  }),
});

export const {
  useGetMovieQuery,
  useGetMovieByIdQuery,
  useGetMovieByCountryQuery,
  useGetMovieByCountryTwoQuery,
  useGetMovieByCountryThreeQuery,
  useGetMovieGenresQuery,
  useGetTvQuery,
  useGetTvByIdQuery,
  useGetTvGenresQuery,
  useGetNowPlayingQuery,
  useGetNowPlayingTvQuery,
  useGetPopularQuery,
  useGetPopularTvQuery,
  useGetTopRatedQuery,
  useGetTopRatedTvQuery,
  useGetUpcomingQuery,
  useGetUpcomingTwoQuery,
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
  useGetSearchQuery,
  useGetNowPlayingTwoQuery,
  useGetTopRatedTwoQuery,
  useGetPopularTwoQuery,
  useGetGenreSearchQuery,
  useGetLanguageQuery,
  useGetCountryQuery,
} = movieApi;
