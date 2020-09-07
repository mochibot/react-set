import { shuffle } from './shuffle';

//generate an array of 81 cards and shuffle them

export const genDeck = () => {
  let cards = [];
  let id = 0;
  let bits;
  for (let number = 0; number < 3; number++) {
    for (let color = 0; color < 3; color++) {
      for (let shape = 0; shape < 3; shape++) {
        for (let shading = 0; shading < 3; shading++) {
          bits = (number << 6) + (color << 4) + (shape << 2) + (shading)
          cards.push({id, number, color, shape, shading, toggled: false, bits});
          id++;
        }
      }
    }
  }
  shuffle(cards);
  return cards;
}