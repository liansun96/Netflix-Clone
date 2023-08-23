import React from 'react'
import { useSelector } from 'react-redux'

const MyList = () => {
    const favMoives = useSelector(state=>state)
    console.log(favMoives);
  return (
    <div>
      
    </div>
  )
}

export default MyList
