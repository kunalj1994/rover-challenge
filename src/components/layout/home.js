import React, { useState } from 'react'
import Form from './form'

const Home = () => {
    const [output, setOutput] = useState('')

    return (
        <div>
            <Form setOutput={setOutput} />
            <div>
                {output}
            </div>
        </div>
    )
}

export default Home
