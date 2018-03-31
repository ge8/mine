// Definitions
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];
    for (let rows = 0; rows < numberOfRows; rows++) {
        let row = [];
        for (let columns = 0; columns < numberOfColumns; columns++) {
            row.push(null);
        }
        board.push(row);
    }
    return board;
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    for (let rows = 0; rows < numberOfRows; rows++) {
        let row = [];
        for (let columns = 0; columns < numberOfColumns; columns++) {
            row.push(null);
        }
        board.push(row);
    }

    numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        board[randomRowIndex][randomColumnIndex] = 'B';
        // An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
        numberOfBombsPlaced++;
    }
    return board;
}

const printBoard = board => {
    let result = board.map(row => row.join(' | ')).join('\n');
    return result;
}

// Start Here
let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: \n' + printBoard(playerBoard));
console.log('Bomb Board: \n' + printBoard(bombBoard));