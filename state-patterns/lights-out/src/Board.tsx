import React, { useState } from "react";

import Cell from './Cell';

import { IBoard } from './interfaces';

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
  const [board, setBoard] = useState<[][]>(createBoard());

  /** create a board nrows hight/ ncols wide, each cell is randomly lit or unlit */
  function createBoard(){
    let initialBoard:[][] = [];
    // TODO: create array-of-arrays of true/false values
    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
  }

  function flipCellsAround(coord:string) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y: number, x:number, boardCopy:boolean[][]) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard

      // TODO: in the copy, flip this cell and the cells around it

      // TODO: return the copy
    });
  }
    // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board

  // TODO
}

export default Board;