// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
let user = {
	username: "Rob",
	password: "supersecret"
}

// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [user];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
let newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt = prompt("Your username?")
var passwordPrompt = prompt("Password?")

console.log(userNamePrompt + passwordPrompt);
console.log(database[0].userName + database[0].password)

signIn(userNamePrompt, passwordPrompt);

function signIn(user, pass) {
	database.forEach(person)
	if (user === person.username && pass === person.password) {
		console.table(newsfeed);
	} else {
		alert("Sorry, wrong username and password");
	}
	}	
}		