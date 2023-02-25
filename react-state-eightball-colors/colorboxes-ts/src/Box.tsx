import React, { useState } from "react";

/** Box component
 * 
 * props:
 * - color
 * 
 * Cointainer -> Box
 */

interface IBox {
  color: string
}

function Box({ color }: IBox) {
  const [changed, setChanged] = useState<boolean>(false)

  return (
    <div className="Box-outline"
      style={{
        width: '120px',
        height: '120px',
        backgroundColor: color,
        padding: '5px'
      }}>
      {changed ? 'changed' : ''}
    </div>
  )
}

export default Box;