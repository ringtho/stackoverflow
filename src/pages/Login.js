import React, { useState } from "react"
import { loginUser } from "../api"


export default function Login(){
    const [formData, setFormData] = useState({username:"", password: ""})
    const [token, setToken] = useState(null)

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => {
            return {...prevState,
                [name] : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        async function getUser(){
            const data = await loginUser(formData)
            setToken(data.access_token)
        }
        getUser()
    }

    console.log(token)

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username" 
                    placeholder="Username" 
                    value={formData.username}
                    onChange={handleOnChange} 
                />
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleOnChange}
                />
                <button>Sign In</button>
            </form>
        </div>
    )
}