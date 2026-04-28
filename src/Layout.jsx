import React from 'react'
import { Outlet } from 'react-router'
import {Header, Footer} from "./index.js"

function Layout({children}) {
  return (
    <div className='min-h-screen min-w-screen flex flex-col'>
        <Header/>
            <div className='grow mt-15'>
                <Outlet/>
            </div>
        <Footer/>
    </div>
  )
}

export default Layout