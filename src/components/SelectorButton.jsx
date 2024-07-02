import '../styles.css'

const SelectorButton = ({ number, answer, question, setCurrentQuestion, setCurrentNumber }) => {

    const handleClick = () => {
        setCurrentQuestion(question)
        setCurrentNumber(number)
    }

    return (
        <button className='selectorButton' onClick={handleClick}>
            {
                (answer==="not answered") ? "?" : (answer ? "O" : "X")
            }
        </button>
    )
}

export default SelectorButton