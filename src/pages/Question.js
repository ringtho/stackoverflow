import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getQuestions } from '../api'

export default function Question () {
  const [question, setQuestion] = useState(null)
  const params = useParams()

  useEffect(() => {
    async function questionsData () {
      const data = await getQuestions(params.id)
      setQuestion(data)
    }
    questionsData()
  }, [params])

  const questionDetails = question ? question.question : null
  const answers = question?.answers || null
  const answersEl = answers?.map((answer) => {
    return (
            <div key={answer.id} className="answer">
                <p>{answer.answer}</p>
                <small>@{answer.author} || {answer.created_on}</small>
            </div>
    )
  })

  return (
        <>
        {question
          ? <div className="question">
                <h1 className="title">{questionDetails.title}</h1>
                <p>{questionDetails.description}</p>
                <p>{questionDetails.stack}</p>
                <small>@{questionDetails.author} || {questionDetails.created_on}</small>
            </div>
          : <h2>Loading...</h2>
        }
        {answersEl}
        </>
  )
}
