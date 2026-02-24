import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const OutletComponent = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        </>
    )
}

export default OutletComponent
