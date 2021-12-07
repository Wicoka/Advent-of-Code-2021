import { lanternfishes } from '../inputs/day-6.input.js';

export const simulateLanternfishes = () => {
  let tempLanternfieshes = lanternfishes;

  for (let i = 0; i < 80; i++) {
    let newLanternfishCounter = 0;

    for (let index = 0; index < tempLanternfieshes.length; index++) {
      if (tempLanternfieshes[index] === 0) {
        newLanternfishCounter++;
        tempLanternfieshes[index] = 6;
      } else {
        tempLanternfieshes[index]--;
      }
    }

    if (newLanternfishCounter > 0) {
      for (let j = 0; j < newLanternfishCounter; j++) {
        tempLanternfieshes.push(8);
      }
    }
  }

  console.log('Lanternfishes: ', tempLanternfieshes.length);
};
