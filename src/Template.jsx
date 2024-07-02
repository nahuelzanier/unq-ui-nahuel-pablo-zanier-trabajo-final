import { Api } from './api/PreguntadosApi'
import { useEffect, useState } from 'react'
import './App.css'

function Template() { 

  const [difficulty, setDifficulty] = useState([])
  const [questions, setQuestions] = useState([])
  const [answer, setAnswer] = useState()

  useEffect(() => {
    Api.getDifficulty(setDifficulty)
    Api.getQuestions(difficulty[0], setQuestions)
    Api.postAnswer("5ee20004d8f42f0017bae7b3", "option1", setAnswer)
  }, [])

  return (
    <>
      <div>
        {
          difficulty
        }
        
        {
          questions[0] ?
          questions[0].id
          :
          null
        }
        {
          answer ?
          console.log(answer.answer)
          :
          null
        }
      </div> 
    </>
  )
}

export default Template
