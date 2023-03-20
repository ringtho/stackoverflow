import React from "react"


export default function Error(props){
    const { error } = props

    console.log(props)
    return (
        <h2 className="error">{error}</h2>
    )
}
