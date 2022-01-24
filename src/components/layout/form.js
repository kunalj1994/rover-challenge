import React, { useState } from 'react'
import { getRoverPosition } from '../../rover/roverPositioning'

const Form = ({ setOutput }) => {
    let initPlateau = {
        x: '',
        y: ''
    }
    const [plateau, setPlateau] = useState(initPlateau)
    const [rovers, setRovers] = useState([])
    const [num, setNum] = useState(0)
    const [formError, setError] = useState('')

    const onChange = (target, index) => {
        let value = target.value
        let keyString = target.id
        if(!target.validity.valid && value != '') {
            return false
        }
        let keys = keyString.split('.')
        switch (keys[0]) {
            case 'plateau':
                setPlateau(prev => ({
                    ...prev,
                    [keys[1]]: parseInt(value) || ''
                }))
                break;
        
            case 'rover':
                let roverArr = [...rovers]
                roverArr[index][keys[1]] = parseInt(value) || value
                setRovers(roverArr)
                break;
        
            default:
                break;
        }
       
    }

    const createRovers = (target) => {
        let value = target.value
        if(!target.validity.valid && value != '') {
            return false
        }
        let rovers = []
        
        for (let i = 0; i < parseInt(value); i++) {
            const rover = {
                x: '',
                y: '',
                dir: '',
                command: ''
            }
            rovers.push(rover)
        }
        setRovers(rovers)
    }

    const submitForm = (e) => {
        e.preventDefault()
        let output = getRoverPosition(plateau, rovers)
        setOutput(output)
    }

    return (
        <form onSubmit={submitForm}>
            <div>
                <label> Plateau Size: </label>
                <input type="tel" value={plateau.x} pattern="[0-9]*" maxLength={1} id="plateau.x" onChange={ e => onChange(e.target) } /> &nbsp;
                <input type="tel" value={plateau.y} pattern="[0-9]*" maxLength={1} id="plateau.y" onChange={ e => onChange(e.target) } />
            </div>
            <div>
                <label> Number of Rovers: </label>
                <input type="tel" pattern="[0-9]*" maxLength={1} onChange={ e => createRovers(e.target) } /> &nbsp;

                {
                    rovers.map((rover, i) => (
                        <div key={i}>
                            <label> Position of Rovers: </label>
                            <input type="tel" value={rover.x} pattern="[0-9]*" id="rover.x" maxLength={1} onChange={ e=> onChange(e.target, i) } /> &nbsp;
                            <input type="tel" value={rover.y} pattern="[0-9]*" id="rover.y" maxLength={1} onChange={ e=> onChange(e.target, i) } /> &nbsp;
                            <input type="text" value={rover.dir} pattern="[N|W|S|E]*" id="rover.dir" onChange={ e=> onChange(e.target, i) } maxLength={1} /> &nbsp;
                            <input type="text" value={rover.command} pattern="[M|R|L]*" id="rover.command" onChange={ e=> onChange(e.target, i) } /> 
                        </div>
                    ))
                }
            </div>
            <button onSubmit={ e => submitForm(e) }> Move Rover </button>
        </form>
    )
}

export default Form