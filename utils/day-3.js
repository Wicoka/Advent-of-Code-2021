// PART 1
export function decode(binaries) {
  // let test = ['1010', '0001'];
  let binaryCoutner = 0;
  const gamma = []; // Most common bits
  const epsilon = []; // Least common bits

  for (let index = 0; index < 11; index++) {
    binaryCoutner = 0;
    binaries.forEach((binary) => {
      binary[index] === '1' ? binaryCoutner++ : binaryCoutner--;
    });
    binaryCoutner > 0 ? gamma.push(1) : gamma.push(0);
    binaryCoutner > 0 ? epsilon.push(0) : epsilon.push(1);
  }

  console.log('Gamma: ', gamma);
  console.log('Epsilon: ', epsilon);
  // GAMMA DECIMAL: 3529
  // EPSILON DECIMAL: 566
}

// PART 2
export function getOxygen(inputBinaries, index) {
  let oxygen = [];
  let binaryCoutner = 0;
  inputBinaries.forEach((binary) => {
    binary[index] === '1' ? binaryCoutner++ : binaryCoutner--;
  });

  inputBinaries.forEach((binary) => {
    if (binaryCoutner >= 0 && binary[index] === '1') {
      oxygen.push(binary);
    }
    if (binaryCoutner < 0 && binary[index] === '0') {
      oxygen.push(binary);
    }
  });

  // OXYGEN BINARY: 110111110101
  return oxygen;
}

export function getCO2(inputBinaries2, index) {
  let co = [];
  let binaryCoutner = 0;
  inputBinaries2.forEach((binary) => {
    binary[index] === '1' ? binaryCoutner++ : binaryCoutner--;
  });

  inputBinaries2.forEach((binary) => {
    if (binaryCoutner >= 0 && binary[index] === '0') {
      co.push(binary);
    }
    if (binaryCoutner < 0 && binary[index] === '1') {
      co.push(binary);
    }
  });

  console.log('INDEX', index);
  console.log('CO', co);

  // CO2 BINARY: 000100100001
  return co;
}
