export function countDistance(directions) {
  let horizontalDistance = 0;
  let verticalDistance = 0;
  let aim = 0;
  directions.forEach((direction, index) => {
    if (direction === 'forward') {
      horizontalDistance += directions[index + 1];
      verticalDistance += directions[index + 1] * aim;
    }
    if (direction === 'down') {
      aim += directions[index + 1];
    }
    if (direction === 'up') {
      aim -= directions[index + 1];
    }
  });
  console.log(horizontalDistance * verticalDistance);
}
