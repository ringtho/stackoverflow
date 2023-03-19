import React, { useState } from "react"


export default function Register(){
    const [formData, setFormData] = useState({
        username:"",
        email:"", 
        firstName:"", 
        lastName: "", 
        gender: "",
        password:""
    })

    const handleOnChange = (e) => {
        const { value, name } = e.target
        setFormData(prevState => {
            return {...prevState,
                [name]: value 
            }
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    console.log(formData)

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
                    type="email"
                    name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleOnChange} 
                />
                <input 
                    type="text"
                    name="firstName" 
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={handleOnChange} 
                />
                <input 
                    type="text"
                    name="lastName" 
                    placeholder="Last Name" 
                    value={formData.lastName}
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
                />
                <button>Register</button>
            </form>
        </div>
    )
}