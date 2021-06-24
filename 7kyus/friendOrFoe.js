// `Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Angel", "Brito", "Lisa", "Val", "Niko"],
// Ex Output = ["Lisa", "Niko"]`;

// https://www.codewars.com/kata/55b42574ff091733d900002f

//solution 1 with for loop
function friend(friends) {
  let pals = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      pals.push(friends[i]);
    }
  }
  return pals;
}

//solution 2 with filter
function friend(friends) {
  return friends.filter((pals) => pals.length === 4);
}
