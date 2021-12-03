import { binaries } from './inputs/day-3.input.js';
import { getCO2, getOxygen } from './utils/day-3.js';

let test = [
  '000111111001',
  '111011110110',
  '101111111000',
  '111100100110',
  '001111011000',
  '011100010110',
  '000101001001',
  '100001100101',
  '000011111100',
  '110000101000',
  '011110110101',
  '011000111100',
  '011000001011',
  '010111101101',
  '011111100010',
  '100110001111',
  '100111100100',
  '111110010100',
  '101001001110',
];

let tempBinaries = binaries;
let tempBinaries2 = binaries;

// countDepths(depths);
// countWindows(depths);
// countDistance(directions);
// decode(binaries);

while (tempBinaries.length !== 1) {
  for (let index = 0; index < 12; index++) {
    tempBinaries = getOxygen(tempBinaries, index);
  }
}

console.log('OXYGEN: ', tempBinaries);

while (test.length >= 1) {
  for (let index = 0; index < 12; index++) {
    test = getCO2(test, index);
  }
}

console.log('CO2: ', test);
