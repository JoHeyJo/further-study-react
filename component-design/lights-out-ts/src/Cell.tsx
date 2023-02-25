import React from 'react';
import { ICell } from './interfaces';

/** A single cell on the board. Handles clicks - calls flipCellsAroundMe
 * 
 * Props:
 * - flipCellsAroundMe(): flips this cell and those around
 * - isLit: boolean.
 * 
 * 
 * 
 *  Board -> Cell
 */

function Cell({ flipCellsAroundMe, isLit }: ICell ){
  const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
  return <td className={classes} onClick={()=>flipCellsAroundMe} />
}

export default Cell;