import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { loginUser } from '../api'
import Error from '../components/Error'

export default function Login (props) {
  const [formData, setFormData] = useState({username:"", password: ""})
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const { setToken } = props

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
        e.preventDefault()
        const user = await loginUser(formData)
        if(user?.access_token){
            setUser(user)
            setToken(user.access_token)
        }else if (user?.error){
            setError(user.error)
        }
    }

    return (
        
        <div className="login-container">
            {user?.access_token && <Navigate to="/questions" /> }
            {error && <Error error={error} />}
            <form className="login-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username" 
                    placeholder="Username" 
                    value={formData.username}
                    onChange={handleOnChange} 
                    required
                />
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleOnChange}
                    required
                />
                <button>Sign In</button>
                <p>New User?</p>
                <Link to="../register">Register</Link>
            </form>

        </div>
    )
}