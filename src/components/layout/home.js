import React, { useState } from 'react'
import Form from './form'

const Home = () => {
    const [output, setOutput] = useState([])

    return (
        <div className="container">
            <div>
                <h1 className="title"> NASA Rover Console </h1>
            </div>
            <div>
                <Form setOutput={setOutput} />
            </div>
            <div>
                { output.map((val, i) => (
                    <div className="output" key={i}>
                        <label className="row-key">Rover {i + 1}: </label>
                        <label className="row-value">{val}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
