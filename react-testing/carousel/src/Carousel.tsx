import React, { useState } from 'react';
import { ICarousel, ICard } from './interfaces';
import Card from './Card'
import './Carousel.css';


/** Carousel: displays images and arrows to navigate through them 
 * 
 * Props:
 * - photos; array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current index
 * 
 * App --> Carousel --> Card
*/


function Carousel({ photos, title }: ICarousel) {
  const [currCardIdx, setCurrCardIdx] = useState<number>(0);

  const currCard: ICard = photos[currCardIdx];
  const total: number = photos.length;

  // const leftIconHidden = (currCardIdx === 0) ? "hidden" : "";
  // const rightIconHidden = (currCardIdx === total - 1) ? "hidden" : "";

  /** Decrements currCardIdx state by 1 */
  function prev() {
    setCurrCardIdx(currCardIdx - 1);
  }
  /** Increments currCardIdx state by 1 */
  function next() {
    setCurrCardIdx(currCardIdx + 1);
  }
  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className="fas fa-chevron-circle-left fa-2x" 
          style={{ visibility: currCardIdx === 0 ? "hidden" : 'visible' }}
          onClick={prev}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className="fas fa-chevron-circle-right fa-2x"
          onClick={next}
          style={{ visibility: currCardIdx === total - 1 ? "hidden" : 'visible' }}
        />
      </div>
    </div>
  );
}

export default Carousel;