import React from 'react'

const CategoryItems = ({Images,ItemName}) => {
  return (
    <div className='flex gap-3 flex-col cursor-pointer h-[144]'>
    <div className='border-2 border-red-100  h-[70px] w-[70px] rounded-full flex justify-center items-center shadow-sm  '>
    <img src={Images} className='h-[50px] mix-blend-darken '/>
    </div>
    <p className='text-gray-500'>{ItemName}</p>
    </div>
  )
}

export default CategoryItems
