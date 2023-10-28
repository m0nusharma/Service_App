import React from 'react'
import FootComp from '../FootComp/FootComp'

const Footer = ({footer}) => {
  return (
    <div className=' flex items-center h-[60px] fixed-bottom  bg-white shadow-sm' >{footer}
    <FootComp/>
    </div>
  )
}

export default Footer