let depthIncreaseCount = 0;
let prevWindow = 0;
let currentWindow = 0;

export function countDepths(depths) {
  depthIncreaseCount = 0;
  depths.forEach((depth, index) => {
    if (index > 0 && depth > depths[index - 1]) {
      depthIncreaseCount++;
    }
  });
  console.log(depthIncreaseCount);
}

export function countWindows(depths) {
  depthIncreaseCount = 0;
  depths.forEach((x, index) => {
    if (index > 2) {
      prevWindow = depths[index - 3] + depths[index - 2] + depths[index - 1];
      currentWindow = depths[index - 2] + depths[index - 1] + depths[index];
      if (currentWindow > prevWindow) {
        depthIncreaseCount++;
      }
    }
  });
  console.log(depthIncreaseCount);
}
