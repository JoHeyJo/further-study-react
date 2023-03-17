import React, { useState } from "react";

import Cell from './Cell';

import { IBoard, ICell } from './interfaces';

import './Board.css';

/** Renders game board
 * 
 * Props:
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 * 
 * State:
 * 
 * - board: matrix of true/false
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 * 
 *    Renders HTML table of individual <Cell />
 * 
 *    click function is defined in Cell
 * 
 */

function Board({ nrows, ncols, chanceLightStartsOn }: IBoard) {
  const [board, setBoard] = useState<boolean[][]>(createBoard());

  /** create a board nrows high/ ncols wide, each cell is randomly lit or unlit */
  function createBoard(): boolean[][] {
    return Array.from({ length: nrows }).map(
      row => Array.from({ length: ncols }).map(
        cell => Math.random() < +chanceLightStartsOn
      )
    );
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    return board.every(row => {
      return row.every(cell => cell === cell)
    })
  }

  function flipCellsAround(coord: string) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y: number, x: number, boardCopy: boolean[][]) => {
        // if this coord is actually on board, flip it
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };
      // TODO: Make a (deep) copy of the oldBoard
      const newBoard = [...oldBoard];

      // TODO: in the copy, flip this cell and the cells around it
      flipCell(x - 1, y, newBoard);
      flipCell(x + 1, y, newBoard);
      flipCell(x, y - 1, newBoard);
      flipCell(x, y + 1, newBoard);
      // TODO: return the copy
      return newBoard
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board
  createBoard();

  // TODO
  return (
    <div>

      {!hasWon() && board}
    </div>
  )
}

export default Board;