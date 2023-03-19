

export async function getQuestions(id){
    const url = id ? `http://127.0.0.1:5000/questions/${id}` 
    : `http://127.0.0.1:5000/questions`
    const res = await fetch(url)
    const data = res.json()
    return data
}