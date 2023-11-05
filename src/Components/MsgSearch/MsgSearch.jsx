import React from 'react'

const MsgSearch = () => {
  return (
    <div className=' m-3 flex  border rounded-3 p-2 gap-3'>
    <span className=' flex justify-center items-center '><i class="fa-solid fa-magnifying-glass"></i> </span>
    <input type='search' className=' w-[100%] border-0' placeholder='Search ' />
    </div>
  )
}

export default MsgSearch