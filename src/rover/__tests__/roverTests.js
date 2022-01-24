import { getRoverPosition } from '../roverPositioning'

describe('Testing rover positioning', () => {
    it('get the final rover correctly', () => {
        const plateau = {
            x: 5,
            y: 5
        }
        const rovers = [
            {
                x: 1,
                y: 2,
                dir: 'N',
                command: 'LMLMLMLMM'
            }
        ]
        let roverPos = getRoverPosition(plateau, rovers)
        expect(roverPos).toStrictEqual(['1 3 N'])
    })

    it('get the final rover correctly', () => {
        const plateau = {
            x: 5,
            y: 5
        }
        const rovers = [
            {
                x: 3,
                y: 3,
                dir: 'E',
                command: 'MMRMMRMRRM'
            }
        ]
        let roverPos = getRoverPosition(plateau, rovers)
        expect(roverPos).toStrictEqual(['4 1 E'])
    })

})
