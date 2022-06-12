// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(array, name) {
  return array.filter((match) => match.toLowerCase() === name.toLowerCase());
}
