import React from 'react'
import { useParams } from 'react-router'
import { useGetMovieDetailQuery } from '../redux/api/movieApi';

const Detail = () => {

    const {id} = useParams();
    console.log(id);
  const { data } = useGetMovieDetailQuery({ id });
  console.log(data);


  return (
    <div>Detail</div>
  )
}

export default Detail