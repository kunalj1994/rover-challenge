# Getting Started with NASA Rover Console

## Summary: The NASA Rover Console app calculates the final position of the rover from a set of given input parameters.

### Input: Plateau dimmensions as X and Y coordinates

### Input: Number of Rovers desired

### Input: Rover coordinates (X, Y), direction and command for each rover

## Assumptions

### The rovers run sequentially, which means the next rover starts only after the previous rover has finished its commands

### Rovers lands on the plateau only when its time for it to move. It lands on the spot which is provided as the initial position by the user

### The initial position provided by the rover lies under the paradigm of the plateau and the initial position of the rover is empty

## How to run the application:

### `Step 1: npm install`

This step will install all the required dependencies needed to be able to run the application successfully.

### Requires Node version greater than 14.

### `Step 2: npm start`

This step will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `Step 3: npm test`

This step will launch the test runner in the interactive watch mode to run all the written tests.
