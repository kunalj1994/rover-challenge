import React, { useState } from 'react'

const Form = () => {
    let init = {
        plateau: {
            x: '',
            y: ''
        },
        robot: {
            x: '',
            y: '',
            dir: ''
        }
    }
    const [input, handleInput] = useState(init)
    const [formError, setError] = useState('')

    const onChange = (target) => {
        let value = target.value
        let key = target.id
        handleInput(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const submitForm = async (input) => {
        console.log('Submitting form');
    }

    return (
        <form onSubmit={submitForm}>
            <div>
                <label> Plateau Size: </label>
                <input type="number" onChange={ e=> onChange(e.target) } max={1} maxLength={1} /> &nbsp;
                <input type="number" onChange={ e=> onChange(e.target) } maxLength={1} />
            </div>
            <div>
                <label> Position of Rover: </label>
                <input type="number" onChange={ e=> onChange(e.target) } max={1} maxLength={1} /> &nbsp;
                <input type="number" onChange={ e=> onChange(e.target) } maxLength={1} />
                <input type="text" onChange={ e=> onChange(e.target) } max={1} maxLength={1} /> &nbsp;
            </div> 
        </form>
    )
}

export default Form