const url = "https://preguntados-api.vercel.app"

const getDifficulty = async (setDifficulties) => {
    let response = await fetch(url + `/api/difficulty`)
    let data = await response.json()
    setDifficulties(data)
}

const getQuestions = async (difficulty, setQuestions) => {
    let response = await fetch(url + `/api/questions?difficulty=${difficulty}`)
    let data = await response.json()
    setQuestions(data)
}

const postAnswer = async (questionId, option, setAnswer) => {
    let response = await fetch(url + `/api/answer`, {
        method: "POST",
        body: JSON.stringify({
            questionId: questionId,
            option: option
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    let data = await response.json()
    setAnswer(data)
}

export const Api = {
    getDifficulty,
    getQuestions, 
    postAnswer
}