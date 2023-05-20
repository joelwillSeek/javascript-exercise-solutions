/**
 *
 * @param {Array<Object>} myArrayOfObjects
 * @returns {Object}
 */
const findTheOldest = function (myArrayOfObjects) {
  let oldestDude = {
    name: "",
    age: 0,
  };
  let dead = {
    name: "",
    age: 0,
  };
  for (let i = 0; i <= myArrayOfObjects.length - 1; i++) {
    let deathYear = myArrayOfObjects[i].yearOfDeath;
    let birthYear = myArrayOfObjects[i].yearOfBirth;
    let nameOfDude = myArrayOfObjects[i].name;
    //check if "yearofdeath" exists
    if (deathYear == undefined) {
      dead.name = nameOfDude;
      dead.age = birthYear;
    }
    //checks if oldestdude is older than current dude also makes death is a property
    if (
      (oldestDude.age < birthYear || oldestDude.age == 0) &&
      deathYear != null
    ) {
      oldestDude.age = birthYear;
      oldestDude.name = nameOfDude;
    }
  }

  if (dead.name != "" && oldestDude.age > dead.age) {
    oldestDude.name = dead.name;
    oldestDude.age = dead.age;
  }
  return oldestDude;
};

// Do not edit below this line
module.exports = findTheOldest;
