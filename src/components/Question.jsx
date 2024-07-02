import { useState } from 'react'
import OptionButton from './OptionButton'
import '../styles.css'

const Question = ({ question, number, answers, setAnswers }) => {

    return (
        <>
            {
                question ?
                <>
                    <h1>{question.question}</h1>
                    <div>
                        <OptionButton option={question.option1} question={question} optionNumber="option1" number={number} answers={answers} setAnswers={setAnswers}/>
                        <OptionButton option={question.option2} question={question} optionNumber="option2" number={number} answers={answers} setAnswers={setAnswers}/>
                        <OptionButton option={question.option3} question={question} optionNumber="option3" number={number} answers={answers} setAnswers={setAnswers}/>
                        <OptionButton option={question.option4} question={question} optionNumber="option4" number={number} answers={answers} setAnswers={setAnswers}/>
                    </div>
                </>
                :
                null
            }
        </>
    )
}

export default Question