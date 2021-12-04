import { boards } from '../inputs/day-4-boards.input.js';
import { numbers } from '../inputs/day-4-numbers.input.js';

export const calculateBingo = () => {
  let allInOneBoard = boards.filter((x) => x !== null || x !== undefined);
  let winCounter = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < allInOneBoard.length; j++) {
      if (allInOneBoard[j] === numbers[i]) {
        allInOneBoard[j] = 0;

        for (let index = 0; index < allInOneBoard.length; index++) {
          // Check the board if it's bingo
          if ((index + 1) % 25 === 0) {
            const temporaryBoard = [];
            for (let i = 0; i < 25; i++) {
              temporaryBoard.push(allInOneBoard[index - i]);
            }
            if (checkBingo(temporaryBoard)) {
              winCounter++;
              // Find the first winner
              if (winCounter < 2) {
                console.log('Winner number: ', numbers[i]);
                console.log('Winner board: ', temporaryBoard);

                console.log(
                  'Win result: ',
                  temporaryBoard.reduce((a, b) => a + b, 0) * numbers[i]
                );
              }
            }
          }
        }
      }
    }
  }
};

export const calculateLastBingo = () => {
  let allInOneBoard = boards.filter((x) => x !== null || x !== undefined);
  let winResults = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < allInOneBoard.length; j++) {
      if (allInOneBoard[j] === numbers[i]) {
        allInOneBoard[j] = 0;

        for (let index = 0; index < allInOneBoard.length; index++) {
          // Check the board if it's bingo
          if ((index + 1) % 25 === 0) {
            const temporaryBoard = [];
            for (let i = 0; i < 25; i++) {
              temporaryBoard.push(allInOneBoard[index - i]);
            }
            if (checkBingo(temporaryBoard)) {
              // If bingo, put the result in the winResults array and fill with 999
              winResults.push(
                temporaryBoard.reduce((a, b) => a + b, 0) * numbers[i]
              );
              for (let j = 0; j < 25; j++) {
                // Fill the board if it wins
                // Decrease redunancy
                allInOneBoard[index - j] = 999;
              }
            }
          }
        }
      }
    }
  }

  console.log('Last result: ', winResults[winResults.length - 1]);
};

//Check the board
const checkBingo = (board) => {
  if (board[0] + board[1] + board[2] + board[3] + board[4] === 0) {
    return true;
  }
  if (board[5] + board[6] + board[7] + board[8] + board[9] === 0) {
    return true;
  }
  if (board[10] + board[11] + board[12] + board[13] + board[14] === 0) {
    return true;
  }
  if (board[15] + board[16] + board[17] + board[18] + board[19] === 0) {
    return true;
  }
  if (board[20] + board[21] + board[22] + board[23] + board[24] === 0) {
    return true;
  }

  if (board[0] + board[5] + board[10] + board[15] + board[20] === 0) {
    return true;
  }
  if (board[1] + board[6] + board[11] + board[16] + board[21] === 0) {
    return true;
  }
  if (board[2] + board[7] + board[12] + board[17] + board[22] === 0) {
    return true;
  }
  if (board[3] + board[8] + board[13] + board[18] + board[23] === 0) {
    return true;
  }
  if (board[4] + board[9] + board[14] + board[19] + board[24] === 0) {
    return true;
  }

  return false;
};
