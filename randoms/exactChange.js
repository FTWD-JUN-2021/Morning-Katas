// Write a function that takes 1 number (1-100) and returns the smallest combination of coins that equal that number
// for example exactChange(77)
// would return [25, 25, 25, 1, 1]
// so 25 cents, another 25 cents, another 25 cents, 1 penny and 1 penny
// exactChange(12) would return [10, 1, 1]
// 10 cents, 1 penny, 1 penny
// if u return [5, 5, 1, 1] that would be incorrect because [10, 1, 1] uses fewer coins

//Solution 1
function exactChange(change) {
  let coinsArr = [];
  if (change > 100) {
    return "Enter one number 1-100";
  }
  while (change >= 25) {
    change -= 25;
    coinsArr.push(25);
  }
  while (change >= 10) {
    change -= 10;
    coinsArr.push(10);
  }
  while (change >= 5) {
    change -= 5;
    coinsArr.push(5);
  }
  while (change > 0) {
    change -= 1;
    coinsArr.push(1);
  }
  return coinsArr;
}

//Solution 2 with while loop
const exactChange = (cents) => {
  let newChange = [];
  let coins = [25, 10, 5, 1];
  for (let i = 0; i < coins.length; i++) {
    while (cents - coins[i] >= 0) {
      newChange.push(coins[i]);
      cents -= coins[i];
    }
  }
  return newChange;
};
