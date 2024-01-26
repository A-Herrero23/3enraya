const board = document.getElementById('board');
const winMessageElement = document.getElementById('winMessage');
const resetButton = document.querySelector('.reset-button');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;


for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => handleCellClick(i));
    board.appendChild(cell);
}

function handleCellClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        updateBoard();
        const winner = checkWinner();
        if (winner) {
            showWinMessage(winner);
            highlightWinnerCells();
            gameActive = false;
        } else if (!gameBoard.includes('')) {
            showDrawMessage();
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function updateBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = gameBoard[index];
    });
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }

    return null;
}

function showWinMessage(winner) {
    winMessageElement.textContent = `¡Jugador ${winner} ha ganado!`;
    winMessageElement.classList.add('win-animation');
    winMessageElement.style.display = 'block';
}

function showDrawMessage() {
    winMessageElement.textContent = '¡Empate!';
    winMessageElement.classList.add('win-animation');
    winMessageElement.style.display = 'block';
}

function highlightWinnerCells() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        const cells = document.querySelectorAll('.cell');
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            cells[a].classList.add('winner-cell');
            cells[b].classList.add('winner-cell');
            cells[c].classList.add('winner-cell');
            break;
        }
    }
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    winMessageElement.style.display = 'none';

    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.textContent = '';
        cell.classList.remove('winner-cell');
    });
}


function highlightWinnerCells() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        const cells = document.querySelectorAll('.cell');
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            cells[a].classList.add('winner-cell');
            cells[b].classList.add('winner-cell');
            cells[c].classList.add('winner-cell');

            
            const line = document.createElement('div');
            line.classList.add('line-through');

            
            if (a % 3 === b % 3 && a % 3 === c % 3) {
                // Línea horizontal
                line.classList.add('line-horizontal');
            } else if (Math.floor(a / 3) === Math.floor(b / 3) && Math.floor(a / 3) === Math.floor(c / 3)) {
                
                line.classList.add('line-vertical');
            } else {
                
                line.classList.add('line-diagonal');
            }

            
            document.getElementById('board').appendChild(line);

            break;
        }
    }
}



