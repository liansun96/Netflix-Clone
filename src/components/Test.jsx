import React from 'react'
import { useGetNowPlayingQuery, useGetPopularQuery, useGetTopRatedQuery, useGetUpcomingQuery,  } from '../redux/api/movieApi'

const Test = () => {
    const {data:nowPlaying} = useGetNowPlayingQuery();
    console.log(nowPlaying?.results);

    const {data:popular} = useGetPopularQuery();
    console.log(popular?.results);

    const {data:topRated} = useGetTopRatedQuery();
    console.log(topRated?.results);

    const {data:upcoming} = useGetUpcomingQuery();
    console.log(upcoming?.results);


  return (
    <div>Test</div>
  )
}

export default Test