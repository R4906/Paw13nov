import React from 'react'
import { Outlet } from 'react-router'

const publiclayout = () => {
  return (
    <div>
        <h1>HEADER</h1>
        <Outlet/>
        <footer>FOOTER</footer>
    </div>
  )
}

export default publiclayout