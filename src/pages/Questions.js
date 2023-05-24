import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getQuestions, postQuestion } from '../api'
import PropTypes from 'prop-types'

export default function Questions ({ token }) {
  const [question, setQuestion] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    stack: ''
  })

  useEffect(() => {
    async function questionsData () {
      const data = await getQuestions()
      setQuestion(data.questions)
    }
    questionsData()
  }, [])

  const display = question.map((question) => {
    return (
      <div key={question.id} className="questions">
        <Link to={`${question.id}`}>
          <h1 className="title">{question.title}</h1>
        </Link>
        <p>{question.description}</p>
        <p>{question.stack}</p>
        <small>@{question.author} || {question.created_on}</small>
      </div>
    )
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    async function postData () {
      const data = await postQuestion(formData, token)
      console.log(data)
    }
    postData()
  }

  return (
    <div className="app">
        <header className="app-container">
        <form className="question-form" onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            name="description"
            type="text"
            placeholder="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            name="stack"
            type="text"
            placeholder="Stacks"
            value={formData.stack}
            onChange={handleChange}
            required
          />
          <button>Submit</button>
        </form>
        {display}
        </header>
    </div>
  )
}

Questions.propTypes = {
  token: PropTypes.string
}
