import React from 'react'

const NotificationCard = ({Img,Name,Text,num}) => {
  return (
    <div className='border-1 p-3 flex justify-between items-center'>
    <div className=' flex gap-3 items-center'>
    <img src={Img} alt='' className='h-[50px] w-[50px] rounded-full'/>
    <div>
    <h1 className='text-blue-500'>{Name}</h1>
    <p className='text-xs'>{Text}</p>
    </div>
    </div>
    <div className='h-[30px] w-[30px] rounded-full border flex items-center justify-center '>{num}</div>
    </div>
  )
}

export default NotificationCard