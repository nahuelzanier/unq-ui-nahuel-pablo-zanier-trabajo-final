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
            {
                difficulties.map( diff => 
                    <div key={diff}>
                        <button onClick={() => setPage(<Questions difficulty={diff}/>)}>
                            {diff}
                        </button>
                    </div> )
            }
        </>
    )
}

export default Start