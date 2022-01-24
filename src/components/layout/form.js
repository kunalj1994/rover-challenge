import React, { useState } from 'react'
import { getRoverPosition } from '../../rover/roverPositioning'

const Form = () => {
    let init = {
        plateau: {
            x: '',
            y: ''
        },
        rover: {
            x: '',
            y: '',
            dir: '',
            command: ''
        }
    }
    const [input, handleInput] = useState(init)
    const [formError, setError] = useState('')

    const onChange = (target) => {
        let value = target.value
        let key = target.id
        if(!target.validity.valid && value != '') {
            return false
        }
        const keys = key.split('.')
        handleInput(prev => ({
            ...prev,
            [keys[0]]: {
                ...prev[keys[0]],
                [keys[1]]: isNaN(parseInt(value)) ? value : parseInt(value)
            }
        }))
        console.log(input);
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(getRoverPosition(input))
        handleInput(init)
        console.log('Submitting form');
    }

    return (
        <form onSubmit={submitForm}>
            <div>
                <label> Plateau Size: </label>
                <input type="tel" value={input.plateau.x} pattern="[0-9]*" maxLength={1} id="plateau.x" onChange={ e => onChange(e.target) } /> &nbsp;
                <input type="tel" value={input.plateau.y} pattern="[0-9]*" maxLength={1} id="plateau.y" onChange={ e=> onChange(e.target) } />
            </div>
            <div>
                <label> Position of Rover: </label>
                <input type="tel" value={input.rover.x} pattern="[0-9]*" id="rover.x" maxLength={1} onChange={ e=> onChange(e.target) } /> &nbsp;
                <input type="tel" value={input.rover.y} pattern="[0-9]*" id="rover.y" maxLength={1} onChange={ e=> onChange(e.target) } /> &nbsp;
                <input type="text" value={input.rover.dir} pattern="[N|W|S|E]*" id="rover.dir" onChange={ e=> onChange(e.target) } maxLength={1} /> 
                <input type="text" value={input.rover.command} pattern="[M|R|L]*" id="rover.command" onChange={ e=> onChange(e.target) } /> 
            </div>
            <button onSubmit={ e => submitForm(e) }> Move Rover </button>
        </form>
    )
}

export default Form