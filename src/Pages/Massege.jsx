import React from 'react'
import Layout from '../Components/Layout/Layout'
import Profile_header from '../Components/Header/Profile_header'
import Back_header from '../Components/Header/Back_header'

const Massege = () => {
  return (
    <Layout header={<Back_header PageName="Massege"/> } bgColor="bg-blue-100"> 
    <h1>Massege</h1>
    
    </Layout>
  )
}

export default Massege