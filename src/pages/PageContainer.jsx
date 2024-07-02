import { useState } from 'react'
import Start from './Start'
import '../styles.css'

const PageContainer = () => {

    const [page, setPage] = useState(null)

    return (
    <>
        {
            page ? page : <Start setPage={setPage}/>
        }
    </>
    )
}

export default PageContainer