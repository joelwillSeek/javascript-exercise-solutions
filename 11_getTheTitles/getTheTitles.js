/**
 *
 * @param {Array} objectBook
 */
const getTheTitles = function (objectBook) {
  let titleList = [];
  for (let i = 0; i <= objectBook.length - 1; i++) {
    //go through the object and get title
    if (typeof objectBook[i] == "object")
      titleList.push(objectBook[i]["title"]);
  }
  return titleList;
};

// Do not edit below this line
module.exports = getTheTitles;
