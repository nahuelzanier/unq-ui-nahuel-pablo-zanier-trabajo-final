import { useEffect, useState } from "react"
import { Api } from "../api/PreguntadosApi"
import Question from "../components/Question"
import SelectorButton from "../components/SelectorButton"
import Win from "./Win"
import '../styles.css'

const Questions = ({ difficulty, setPage }) => {

    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(null)
    const [currentNumber, setCurrentNumber] = useState(0)
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        Api.getQuestions(difficulty, setQuestions)
    }, [])

    useEffect(() => {
        setCurrentQuestion(questions[currentNumber])
        let ans = questions.map(() => "not answered")
        setAnswers(ans)
    }, [questions])

    useEffect(() => {
        if (questions && answers.length==10 && !answers.includes("not answered")) {
            setPage(<Win difficulty={difficulty} answers={answers} setPage={setPage}/>)
        }
    }, [answers])

    return (
        <>
            {
                questions ?
                <>
                    {questions.map( (q, index) => <SelectorButton 
                                                    key={index}
                                                    number={index}
                                                    answer={answers[index]}
                                                    question={q}
                                                    setCurrentQuestion={setCurrentQuestion}
                                                    setCurrentNumber={setCurrentNumber}
                                                  /> )}
                    <Question question={currentQuestion} number={currentNumber} answers={answers} setAnswers={setAnswers}/>
                </>
                : null
            }
        </>
    )
}

export default Questions