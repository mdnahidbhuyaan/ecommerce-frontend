import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/ShardComponents/Header/Header'

const Root = () => {
  return (
    <div>
    <Header></Header>
     <Outlet></Outlet>
     <footer>Footer</footer>
    </div>
  )
}

export default Root
