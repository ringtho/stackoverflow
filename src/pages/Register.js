import React, { useState } from "react"
import { Navigate, Link } from "react-router-dom"
import { registerUser } from "../api"
import Error from "../components/Error"

export default function Register(){
    const [formData, setFormData] = useState({
        username:"",
        email:"", 
        firstname:"", 
        lastname: "", 
        gender: "",
        password:""
    })

    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const handleOnChange = (e) => {
        const { value, name } = e.target
        setFormData(prevState => {
            return {...prevState,
                [name]: value 
            }
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const user = await registerUser(formData)
        if(user?.user){
            setUser(user)
        }else if (user?.error){
            setError(user.error)
        }    
    }

    return (
        <div className="login-container">
            {error && <Error error={error} />}
            {user && <Navigate to="/login" />}
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
                    type="email"
                    name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleOnChange}
                    required 
                />
                <input 
                    type="text"
                    name="firstname" 
                    placeholder="First Name" 
                    value={formData.firstname}
                    onChange={handleOnChange} 
                />
                <input 
                    type="text"
                    name="lastname" 
                    placeholder="Last Name" 
                    value={formData.lastname}
                    onChange={handleOnChange} 
                />
                 <input 
                    type="text"
                    name="gender" 
                    placeholder="Gender" 
                    value={formData.gender}
                    onChange={handleOnChange} 
                />
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleOnChange}
                    required
                />
                <button>Register</button>
                <p>Already a member?</p>
                <Link to="../login">Login</Link>
            </form>
        </div>
    )
}