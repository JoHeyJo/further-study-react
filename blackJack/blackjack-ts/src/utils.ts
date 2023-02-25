import { Ideck } from './interfaces';

/** generates random number between 0-51 */
function randomCard(): number {
  return Math.floor(Math.random() * 52);
}

/** create array of 52 strings representing a deck of cards */
function createDeckOfCards(): Ideck[] {
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
  const suits = ['H', 'S', 'D', 'C'];
  let deck: Ideck[] = [];
  for (let v of values) {
    for (let s of suits) {
      // deck.push(v + s)
      // deck = [...deck, v + s]
      deck = [...deck, { value: v, suit: s }]
    }
  }
  return deck;
}

export { randomCard, createDeckOfCards }
