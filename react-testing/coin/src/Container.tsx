//modules
import React , { useState } from 'react';
//imports
import Coin from './Coin';
import heads from './head.jpeg';
import tails from './tail.jpeg';
import { ICount, ICoin } from './interfaces'

const random = () => Math.floor(Math.random() * 10);

const defaultCount: ICount = {
  heads: 0,
  tails: 0
}

const head: ICoin = {
  side: heads,
  alt: 'heads'
}

const tail: ICoin = {
  side: tails,
  alt: 'tails'
}

function Container(){
  const [coin, setCoin] = useState<ICoin>({side:'',alt:''});
  const [count, setCount] = useState<ICount>(defaultCount)

  /** chooses a heads or tails on 50/50 chance */
  function flipCoin(){
    let side = random() > 4 ? head : tail;
    setCoin(side);
    updateCount(side);
  }

  /** keep track of which side is flipped, updates state object */
  function updateCount(coin:ICoin){
    if(coin.alt === 'heads'){
      setCount(c => {
        c.heads++
        return c
      })
    } else {
      setCount(c => {
        c.tails++
        return c
      })
    }
  }

  return (
    <div>
      <Coin side={coin.side} alt={coin.alt} />
      <p>tails: {count.tails} heads {count.heads}</p>
      <button onClick={flipCoin}>Flip me</button>
    </div>
  )
};

export default Container;