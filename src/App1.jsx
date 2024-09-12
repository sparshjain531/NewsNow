import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

const App1 = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default App1
