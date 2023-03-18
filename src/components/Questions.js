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
        <div key={question.id}>
          <Link to={`${question.id}`}><h1>{question.title}</h1></Link>
          <p>{question.description}</p>
          <p>{question.stack}</p>
          <small>{question.author} || {question.created_on}</small>
        </div>
    )
    
  })

    return (
        <div className="App">
            <header className="App-header">
                {display}
            </header>
        </div>
    )
}