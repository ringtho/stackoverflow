import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"


export default function Questions(){
    const [question, setQuestion] = useState([])

  useEffect(()=>{
    fetch(`http://127.0.0.1:5000/questions`)
      .then(res => res.json())
      .then(data => setQuestion(data.questions))

  }, [])

  const display = question.map((question) => {
    return (
        <div key={question.id} className="questions">
          <Link to={`${question.id}`}><h1 className="title">{question.title}</h1></Link>
          <p>{question.description}</p>
          <p>{question.stack}</p>
          <small>@{question.author} || {question.created_on}</small>
        </div>
    )
    
  })

    return (
        <div className="app">
            <header className="app-container">
            <form className="question-form">
              <input type="text" placeholder="Title" />
              <input type="textarea" placeholder="description" />
              <input type="text" placeholder="Stacks" />
              <button>Submit</button> 
            </form>
            {display}
            </header>
        </div>
    )
}