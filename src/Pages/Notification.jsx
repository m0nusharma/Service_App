import React from 'react'
import Layout from '../Components/Layout/Layout'
import Profile_header from '../Components/Header/Profile_header'
import Back_header from '../Components/Header/Back_header'

const Notification = () => {
  return (
    <Layout header={<Back_header PageName="Notification"/> } bgColor="bg-blue-100"> 
    <h1>Notification</h1>
    
    </Layout>
  )
}

export default Notification