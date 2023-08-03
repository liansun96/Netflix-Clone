import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from './api/movieApi'
import favoritMovieSlice from './services/favoritMovieSlice'

export const store = configureStore({
    reducer : {
        [movieApi.reducerPath]: movieApi.reducer,  
        favoriteMovieSlice : favoritMovieSlice,      
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
})

