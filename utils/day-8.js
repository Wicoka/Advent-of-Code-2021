// import { fs } from 'fs';
import * as fs from 'fs';
// const fs = require('fs');

export const readFile = (fileName) => {
  const data = fs.readFileSync(`../inputs/${fileName}`, {
    encoding: 'utf8',
    flag: 'r',
  });

  // Display the file data
  console.log(data);

  // let contents = await fs.readFileAsync(`../inputs/${fileName}`, 'utf8');
  // console.log(contents);
};
