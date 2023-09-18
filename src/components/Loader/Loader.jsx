import React from 'react'
import './loader.css'

const Loader = () => {
  return (
    <div className='h-screen'>
        <div className="w-[95%] mx-auto pt-32">
            <div className="animate-pulse bg-gray-500 h-6 w-36 rounded mb-4"></div>
            <div className="flex gap-3">
                <div className="animate-pulse h-[130px] 2xl:w-[230px] 3xl:w-[300px] 4xl:w-[390px] rounded bg-gray-500"></div>
                <div className="animate-pulse h-[130px] 2xl:w-[230px] 3xl:w-[300px] 4xl:w-[390px] rounded bg-gray-500"></div>
                <div className="animate-pulse h-[130px] 2xl:w-[230px] 3xl:w-[300px] 4xl:w-[390px] rounded bg-gray-500"></div>
                <div className="animate-pulse h-[130px] 2xl:w-[230px] 3xl:w-[300px] 4xl:w-[390px] rounded bg-gray-500"></div>
                <div className="animate-pulse h-[130px] 2xl:w-[230px] 3xl:w-[300px] 4xl:w-[390px] rounded bg-gray-500"></div>
                <div className="animate-pulse h-[130px] 2xl:w-[230px] 3xl:w-[300px] 4xl:w-[390px] rounded bg-gray-500"></div>
            </div>
        </div>        
    </div>
  )
}

export default Loader