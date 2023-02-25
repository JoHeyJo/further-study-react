import React, { useState } from 'react';
import Cell from './Cell';
// import '.Board.css';
import { IBoard } from './interfaces';
/** Game board of Lights out.
 * 
 * Properties:
 * 
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLIghtStartsOn: float, chance any cell is lit at start of game
 * 
 * State: - board: matrix of true/false
 * 
 *  For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *  This would be: [[f, f, f], [t, t, f], [f, f, f]]
 * 
 * This should render an HTML table of individual <Cell /> components.
 * 
 * 
 */

function Board({ nrows, ncols, chanceLIghtStartsOn }: IBoard) {
  const [board, setBoard] = useState<boolean[]>(createBoard());

  /** Create a board nrows high/ ncols wide, each cell randomly lit or unlit */
  function createBoard(): boolean[] {
    let initialBoard: [] = [];
    for (let i = 0; i < nrows; i++) {
      for (let j = 0; j < ncols; j++) {
        // [...initialBoard, <Cell flipCellsAroundMe={flipCellsAround} isLit={chanceLIghtStartsOn} />]
      }
    }
    return initialBoard;
  }

  /** Checks the board in state to determine whether the player has won */
  function hasWon() {

  }

  /** Flips current cell and all cells around it */
  function flipCellsAround(coord: string) {
    setBoard(oldBoard => {
      const [x, y] = coord.split('-').map(Number);

      const flipCell = (y: number, x: number, boardCopy:boolean) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          // boardCopy[y][x] = !boardCopy[y][x];
        }
      };
      // TODO: Make a (deep) copy of the oldBoard

      // TODO: in the copy, flip this cell and the cells around it

      // TODO: return the copy
      console.log(oldBoard)
      return oldBoard;
    })
  };
  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board

  // TODO
  return (
    <div>
      {board}
    </div>
  )
}
export default Board;


