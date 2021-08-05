// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

// array.forEach(user => user.username = user.username + "!");

const shoutArray = [];
array.forEach((user) => {
    shoutArray.push(user.username + "!");
})
console.table(shoutArray);

//Create an array using map that has all the usernames with a "? to each of the usernames

const questionArray = array.map(user => user.username = user.username + "?")
console.table(questionArray);

//Filter the array to only include users who are on team: red

const teamRed = array.filter(user => user.team === "red");
console.table(teamRed);

//Find out the total score of all users using reduce

const totalScore = array.reduce((accumulator, user) => {
  return accumulator + user.score;
}, 0);

// (1), what is the value of i?  The index in the array

// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

const newArray = arrayNum.map(num => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const answer = array.map((user) => {
    let shoutItems = user.items.map((item, i) => {
        return user.items[i] = user.items[i] + "!";
    })
    user.items = shoutItems;
    return user;
})

console.table(answer);


