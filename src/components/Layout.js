import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout () {
  return (
        <>
            <div className="header">
                <h1>Stackoverflow</h1>
                <Link to="questions" className="questions-link">Questions</Link>
                <Link to="login" className="questions-link">Login</Link>
            </div>
            <Outlet />
        </>
  )
}
