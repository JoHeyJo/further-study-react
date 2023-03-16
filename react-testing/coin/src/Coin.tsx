//module
import React, { useState } from 'react';
//imports
import { ICoin } from './interfaces';

function Coin({ side, alt }: ICoin) {
  return (
    <div>
      <img style={{ width: '300px' }} src={side} alt={alt} />
    </div>
  )
}

export default Coin;