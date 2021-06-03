const userNameOne = 'Sacha';
const userNameTwo = 'Zero';
// console.log(userNameOne, userNameTwo);

const userNameOneInUpperCase = userNameOne.toUpperCase();
const userNameTwoInLowerCase = userNameTwo.toLowerCase();
// console.log(userNameOneInUpperCase, userNameTwoInLowerCase);

const firstLetterOfUserNameOne = userNameOne.charAt(0);
const userNameOneLength = userNameOne.length;
// console.log(firstLetterOfUserNameOne, totalLettersOfUserNameOne);

const userNames = userNameOne + userNameTwo;
const userNamesWithSpace = `${userNameOne} ${userNameTwo}`;
// const userNamesWithSpace = `${userNameOne.toUpperCase()} ${userNameTwo}`;
// console.log(userNamesWithSpace)

const string = userNameOne.substr(0,3) + userNameTwo.substr(2,3)
console.log(string)
