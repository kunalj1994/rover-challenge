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

export const getRoverPosition = (input) => {
    console.log(input);
    const plateau = input.plateau
    const coordinates = input.rover
    const commands = input.rover.command
    console.log(commands);
    console.log(coordinates);
    console.log(plateau);
    for(let i = 0; i < commands.length; i++) {
        const command = commands[i]
        if(command === 'M') {
            moveRover(plateau, coordinates)
        }
        else {
            coordinates.dir = getDirection(turns[command], coordinates.dir)
        }
    }
    return `${coordinates.x} ${coordinates.y} ${coordinates.dir}`
}

function moveRover(plateau, currentPos) {
    let x = plateau.x
    let y = plateau.y
    let nextMove = directions[currentPos.dir]
    if((currentPos.x + nextMove.x) < x && (currentPos.y + nextMove.y) < y) {
        currentPos.x += nextMove.x
        currentPos.y += nextMove.y
    }
}