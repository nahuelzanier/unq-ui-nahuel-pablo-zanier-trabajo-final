import { useState, useEffect } from 'react'
import { Api } from '../api/PreguntadosApi'
import '../styles.css'

const OptionButton = ({ option, question, optionNumber, number, answers, setAnswers  }) => {

    const [answer, setAnswer] = useState()

    const handleClick = () => {
        Api.postAnswer(question.id, optionNumber, setAnswer)
    }

    useEffect(() => {
        if (answer) {
            setAnswers(answers.map( (a, index) => number==index ? answer.answer : a ))
        } 
    }, [answer])

    return (
        <>
            <button disabled={answers[number]!="not answered"} onClick={handleClick}>{option}</button>
        </>
    )
}

export default OptionButton