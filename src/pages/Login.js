import React from "react"


export default function Login(){
    return (
        <div className="login-container">
            <form className="login-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
            </form>
        </div>
    )
}