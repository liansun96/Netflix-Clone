import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.themoviedb.org/3` }),

  tagTypes: ["movieApi"],
  endpoints: (builder) => ({
    getMovie: builder.query({
      query: ({genreId}) =>
        `/discover/movie?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1&with_genres=${genreId}`,
      providesTags: ["movieApi"],
    }),
    getMovieGenres: builder.query({
      query: () => "/genre/movie/list?api_key=7fe0fbe72550cf27a1a5a738cabda3db",
      providesTags: ["movieApi"],
    }),
    getTv: builder.query({
      query: ({genreId}) =>
        `/discover/tv?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=5&with_genres=${genreId}`,
      providesTags: ["movieApi"],
    }),
    getTvGenres: builder.query({
      query: () =>
        "genre/tv/list?api_key=7fe0fbe72550cf27a1a5a738cabda3db",
      providesTags: ["movieApi"],
    }),
    getNowPlaying: builder.query({
      query: ({genreId}) =>
        `/movie/now_playing?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1&with_genres=${genreId}`,
      providesTags: ["movieApi"],
    }),
    getNowPlayingTwo: builder.query({
      query: ({genreId}) =>
        `/movie/now_playing?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=2&with_genres=${genreId}`,
      providesTags: ["movieApi"],
    }),
    getNowPlayingTv: builder.query({
      query: ({genreId}) =>
        `/tv/on_the_air?api_key=7fe0fbe72550cf27a1a5a738cabda3db&with_genres=${genreId}`,
      providesTags: ["movieApi"],
    }),
    getPopular: builder.query({
      query: ({genreId}) =>
        `/movie/popular?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1&with_genres=${genreId}`,
      providesTags: ["movieApi"],
    }),
    getPopularTwo: builder.query({
      query: ({genreId}) =>
        `/movie/popular?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=2&with_genres=${genreId}`,
      providesTags: ["movieApi"],
    }),
    getPopularTv: builder.query({
      query: ({genreId}) =>
        `/tv/popular?api_key=7fe0fbe72550cf27a1a5a738cabda3db&with_genres=${genreId}`,
      providesTags: ["movieApi"],
    }),
    getTopRated: builder.query({
      query: ({genreId}) =>
        `/movie/top_rated?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1&with_genres=${genreId}`,
      providesTags: ["movieApi"],
    }),
    getTopRatedTwo: builder.query({
      query: ({genreId}) =>
        `/movie/top_rated?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=2&with_genres=${genreId}`,
      providesTags: ["movieApi"],
    }),
    getTopRatedTv: builder.query({
      query: ({genreId}) =>
        `/tv/top_rated?api_key=7fe0fbe72550cf27a1a5a738cabda3db&with_genres=${genreId}`,
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
        `tv/${id}/recommendations?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&append_to_response=credits`,
      providesTags: ["movieApi"],
    }),
    getTvDetailSimilar: builder.query({
      query: ({ id }) =>
        `tv/${id}/similar?api_key=7fe0fbe72550cf27a1a5a738cabda3db`,
      providesTags: ["movieApi"],
    }),
    getSearch : builder.query({
      query: ({search}) => `/search/multi?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&include_adult=false&query=${search}}`,
      providesTags: ["movieApi"]
    }),
    getGenreSearch : builder.query({
      query: ({id}) => `discover/movie?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&sort_by=release_date.desc&page=1&with_genres=${id}`,
      providesTags: ["movieApi"],
    })
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
  useGetSearchQuery,
  useGetNowPlayingTwoQuery,
  useGetTopRatedTwoQuery,
  useGetPopularTwoQuery,
  useGetGenreSearchQuery,
} = movieApi;
