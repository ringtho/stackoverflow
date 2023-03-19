import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"


export default function Question(){
    const [question, setQuestion] = useState(null)
    const params = useParams()

    useEffect(()=>{
        const url = `http://127.0.0.1:5000/questions/${params.id}`
        fetch(url)
            .then(res => res.json())
            .then(data =>  {
                setQuestion(data)
                console.log(data)
            })

    }, [params])

    const questionDetails = question? question.question : null
    const answers = question?.answers || null
    
    const answersEl = answers?.map((answer) => {
        return (
            <div key={answer.id} className="answer">
                <p>{answer.answer}</p>
                <small>@{answer.author} || {answer.created_on}</small>
            </div>
        )
    })

    // console.log(questionDetails)

    return (
        <>
        {question ?
            <div className="question">
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