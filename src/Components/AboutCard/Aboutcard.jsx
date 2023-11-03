import React from 'react'

const Aboutcard = ({name, Img, profassion, Point,about}) => {
  return (
    <div className="border-1  m-3 p-3 rounded-3 drop-shadow-sm">
    <div className="flex justify-between">
    <div className="flex gap-2 ">
    <img src={Img} className="w-[50px] h-[50px] rounded-full"/>
    <div>
    <p className=" fs-4 text-gray-500 m-0">{name}</p>
    <p className="text-xs text-gray-500">{profassion}</p>
    </div>
    </div>
    <i className="fa-solid fa-star text-yellow-500"> <span className="text-gray-500">{Point}</span></i>
    </div>
    <p className='text-xs p-2'>{about}</p>
    </div>
  )
}

export default Aboutcard