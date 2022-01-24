//Mapping Letter direction to coordinates
const directions = {
    "N": { x: 0, y: 1 },
    "E": { x: 1, y: 0 },
    "S": { x: 0, y: -1 },
    "W": { x: -1, y: 0 },
}

// Establishing circular array based on the current direction and turn taken
function getDirection(turn, currentDirection) {
    let dirs = Object.keys(directions)
    let n = dirs.length
    return dirs[((dirs.indexOf(currentDirection) + turn) % n + n) % n]
}

// Defining turns as integers
let turns = {   
    L: -1,
    R: 1
}

export const getRoverPosition = (plateau, rovers) => {
    let finalPosArray = []
    for (let i = 0; i < rovers.length; i++) {
        const coordinates = rovers[i]
        const commands = coordinates.command
        for(let j = 0; j < commands.length; j++) {
            const command = commands[j]
            if(command === 'M') {
                // Moving the rover forward
                moveRover(plateau, coordinates, finalPosArray)
            }
            else {
                //Rotating the rover based on the direction specified
                coordinates.dir = getDirection(turns[command], coordinates.dir)
            }
        }
        finalPosArray.push(`${coordinates.x} ${coordinates.y} ${coordinates.dir}`)
    }
    return finalPosArray
}

function moveRover(plateau, currentPos, finalPosArray) {
    let nextMove = directions[currentPos.dir]
    if(canMoveForward(currentPos, nextMove, plateau, finalPosArray)) {
        currentPos.x += nextMove.x
        currentPos.y += nextMove.y
    }
}

function canMoveForward(currentPos, nextMove, plateau, finalPosArray) {
    let x = plateau.x
    let y = plateau.y
    let nextXCoordinate = currentPos.x + nextMove.x
    let nextYCoordinate = currentPos.y + nextMove.y
    let isOccupiedByRover = finalPosArray.filter(el => {
        return el.includes(`${nextXCoordinate} ${nextYCoordinate}`)
    })
    /* Checking for constraints, ensuring the rover doesnt fall of the plateau or the 
    next position doesnt have another rover present */
    return nextXCoordinate < x && nextYCoordinate < y && !isOccupiedByRover.length
}