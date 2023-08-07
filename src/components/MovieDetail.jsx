import React from 'react'
import { useParams } from 'react-router'
import { useGetMovieDetailQuery } from '../redux/api/movieApi';

const MovieDetail = () => {

    const {id} = useParams();
    const {data} = useGetMovieDetailQuery({id})
    console.log(data);

  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail