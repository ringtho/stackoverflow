import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Questions from './pages/Questions'
import Question from './pages/Question'
import Login from './pages/Login'
import Register from './pages/Register'
import Layout from './components/Layout'
import React, { useState } from 'react'

function App () {
  const [token, setToken] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login setToken={setToken} />} />
          <Route path="register" element={<Register />} />
          <Route path="questions" element={<Questions token={token} />} />
          <Route path="questions/:id" element={<Question />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
