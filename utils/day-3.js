export function decode(binaries) {
  // let test = ['1010', '0001'];
  let indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let binaryCoutner = 0;
  const gamma = []; // Most common bits
  const epsilon = []; // Least common bits

  indexes.forEach((index) => {
    binaryCoutner = 0;
    binaries.forEach((binary) => {
      binary[index] === '1' ? binaryCoutner++ : binaryCoutner--;
    });
    binaryCoutner > 0 ? gamma.push(1) : gamma.push(0);
    binaryCoutner > 0 ? epsilon.push(0) : epsilon.push(1);
  });

  console.log('Gamma: ', gamma);
  console.log('Epsilon: ', epsilon);
  // GAMMA DECIMAL: 3529
  // EPSILON DECIMAL: 566
}
