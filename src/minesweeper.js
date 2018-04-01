// Definitions
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];
    for (let rows = 0; rows < numberOfRows; rows++) {
        let row = [];
        for (let columns = 0; columns < numberOfColumns; columns++) {
            row.push(' ');
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
            row.push(' ');
        }
        board.push(row);
    }

    numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        if (board[randomRowIndex][randomColumnIndex] !== 'B') {
            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
        }
    }
    return board;
}

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
    const neighborOffsets = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
    ];
    const numberOfRows = bombBoard.length;
    const numberOfColumns = bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
        const neighborRowIndex = rowIndex + offset[0];
        const neighborColumnIndex = columnIndex + offset[1];
        if (neighborRowIndex >=0 && neighborColumnIndex >=0 && neighborRowIndex < numberOfRows && neighborColumnIndex < numberOfColumns) {
            if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                numberOfBombs++;
            }
        }
    });
    return numberOfBombs;
}

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
    if (playerBoard[rowIndex][columnIndex] !== ' ') {
        console.log('This tile has already been flipped!');
        return;
    } else if (bombBoard[rowIndex][columnIndex] === 'B') {
        playerBoard[rowIndex][columnIndex] = 'B';
        return;
    } else {
        playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
        return;
    }
}

const printBoard = board => {
    let result = board.map(row => row.join(' | ')).join('\n');
    return result;
}

// Start Here
let playerBoard = generatePlayerBoard(5, 5);
let bombBoard = generateBombBoard(5, 5, 5);
console.log('Player Board: \n' + printBoard(playerBoard));
console.log('Bomb Board: \n' + printBoard(bombBoard));

// let testNumber = getNumberOfNeighborBombs (bombBoard, 4, 4);
// console.log(testNumber + " is the number of bombs around 1st-row,3rd-column");

flipTile(playerBoard, bombBoard, 3, 3);

console.log('Updated Player Board: \n' + printBoard(playerBoard));
