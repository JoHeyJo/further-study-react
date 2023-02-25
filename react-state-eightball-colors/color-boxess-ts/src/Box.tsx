import React from "react";
import './Box.css';
import { IContainer } from './interface'
/** Renders box
 * 
 * Props:
 * - color
 * 
 * Container -> Box
 * 
 */
function Box({ color, isChanged }: IContainer) {
  /**  */

  return (
    <div
      className="Box-box"
      style={{ backgroundColor: color }}>
      {isChanged ? "Changed" : color}
    </div>
  )
}

export default Box;