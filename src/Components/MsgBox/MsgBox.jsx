import React from 'react'

const MsgBox = ({Img,Name,Text,num,view}) => {
  return (
    <div className='border-1 p-3 flex justify-between items-center'>
    <div className=' flex gap-3 items-center'>
    <img src={Img} alt='' className='h-[50px] w-[50px] rounded-full'/>
    <div>
    <h1 className='text-blue-500'>{Name}</h1>
    <p className='text-xs'>{Text}</p>
    </div>
    </div>
    <div>
    <p className='text-xs'>{view}</p>
    <span className='h-[20px] w-[20px] rounded-full border flex items-center justify-center text-xs bg-blue-500 text-white text-center'>{num}</span>
    </div>
    </div>
  )
}

export default MsgBox
