import React, { useState } from 'react';



/** Box component
 * 
 * Prop:
 * - color
 * 
 */

function Box({ color }) {

  return (
    <div
      className='Box-outline'
      style={{
        width: '120px',
        height: '120px',
        backgroundColor: color,
        padding: '5px'
      }}>

    </div>
  )
}

export default Box;
