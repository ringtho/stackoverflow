import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"


export default function Questions(){
    const [question, setQuestion] = useState([])
    const [formData, setFormData] = useState({title: "", description: "", stack: ""})

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

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prevState => {
      return {...prevState,
        [name] : value
        }
    } )
  }

  return (
    <div className="app">
        <header className="app-container">
        <form className="question-form">
          <input 
            name="title" 
            type="text" 
            placeholder="Title"
            value={formData.title}
            onChange={handleChange} 
          />
          <input 
            name="description" 
            type="text" 
            placeholder="description"
            value={formData.description}
            onChange={handleChange} 
          />
          <input 
            name="stack" 
            type="text" 
            placeholder="Stacks"
            value={formData.stack}
            onChange={handleChange} 
          />
          <button>Submit</button> 
        </form>
        {display}
        </header>
    </div>
  )
}