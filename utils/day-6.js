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

export const simulateBigLanternfishes = () => {
  let tempLanternfieshes = lanternfishes;
  let lanternfishesObject = {
    zero: 0,
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
  };

  // Fill the obect
  lanternfishesObject.zero = tempLanternfieshes.filter((x) => x === 0).length;
  lanternfishesObject.one = tempLanternfieshes.filter((x) => x === 1).length;
  lanternfishesObject.two = tempLanternfieshes.filter((x) => x === 2).length;
  lanternfishesObject.three = tempLanternfieshes.filter((x) => x === 3).length;
  lanternfishesObject.four = tempLanternfieshes.filter((x) => x === 4).length;
  lanternfishesObject.five = tempLanternfieshes.filter((x) => x === 5).length;
  lanternfishesObject.six = tempLanternfieshes.filter((x) => x === 6).length;
  lanternfishesObject.seven = tempLanternfieshes.filter((x) => x === 7).length;
  lanternfishesObject.eight = tempLanternfieshes.filter((x) => x === 8).length;

  for (let i = 0; i < 256; i++) {
    let newLanternfishCounter = 0;

    for (const property in lanternfishesObject) {
      // console.log(`${property}: ${lanternfishesObject[property]}`);
      // lanternfishesObject[property]--;
      if (lanternfishesObject['zero'] > 0) {
        newLanternfishCounter++;
      } else {
        lanternfishesObject[property]--;
      }
    }

    if (newLanternfishCounter > 0) {
      lanternfishesObject['zero'] = 0;
      lanternfishesObject['six'] += newLanternfishCounter;
      lanternfishesObject['eight'] += newLanternfishCounter;
    }
  }

  let allLanternfishes = 0;

  for (const property in lanternfishesObject) {
    // console.log(`${property}: ${lanternfishesObject[property]}`);
    allLanternfishes += lanternfishesObject[property];
  }

  console.log(allLanternfishes);
};
