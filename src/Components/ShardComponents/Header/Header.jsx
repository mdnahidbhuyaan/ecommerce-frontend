import React from 'react'
import MinHeader from './MinHeader'
import TopHeader from './TopHeader'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <MinHeader></MinHeader>
      <Navbar></Navbar>
    </div>
  )
}

export default Header
