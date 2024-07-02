import { useState, useEffect } from 'react'
import { Api } from '../api/PreguntadosApi'
import Questions from './Questions'
import '../styles.css'


const Start = ({ setPage }) => {

    const [difficulties, setDifficulties] = useState([])

    useEffect(() => {
        Api.getDifficulty(setDifficulties)
    }, [])

    return (
        <>
            <h1 className='gameTitle'>TRIVIA GAME</h1>
            {
                difficulties.map( diff => 
                    <div key={diff}>
                        <button onClick={() => setPage(<Questions difficulty={diff} setPage={setPage}/>)}>
                            {diff}
                        </button>
                    </div> )
            }
        </>
    )
}

export default Start