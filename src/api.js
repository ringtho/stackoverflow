

export async function getQuestions(id){
    const url = id ? `http://127.0.0.1:5000/questions/${id}` 
    : `http://127.0.0.1:5000/questions`
    const res = await fetch(url)
    const data = res.json()
    return data
}

export async function postQuestion(formData, token){
    const url = `http://127.0.0.1:5000/questions`
    try {
        const res = await fetch(url, 
            {
                method : "post", 
                body : JSON.stringify(formData), 
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
        const data = await res.json()
        return data
    }catch(err){
        return err
    }
}

export async function loginUser(formData){
    const url = `http://127.0.0.1:5000/auth/login`
    const res = await fetch(url, {
        method: "post",
        body: JSON.stringify(formData),
        headers : {
            "Content-Type": "application/json"
        }
    })
    
    const data = await res.json()
    return data
}