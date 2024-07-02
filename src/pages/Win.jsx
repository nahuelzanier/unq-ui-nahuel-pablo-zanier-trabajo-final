import Start from './Start'
import '../styles.css'

const Win = ({ difficulty, answers, setPage }) => {

    const positiveAnswers = () => {
        let ans = answers.filter( a => a )
        return ans.length
    }

    return (
        <>
            <h1>RESULTS</h1>
            <h1>Difficulty: {difficulty}</h1>
            <h1>Correct answers: {positiveAnswers()}/10</h1>
            <button onClick={() => setPage(<Start setPage={setPage}/>)}>MAIN MENU</button>
        </>
    )
}

export default Win