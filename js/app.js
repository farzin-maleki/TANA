// let rastin = 4;

// let farzin = 10;

// let result = farzin + rastin;

// console.log(result);

// let test = [
//   { id: 1, name: "farzin" },
//   { id: 2, name: "fain" },
//   { id: 3, name: "fz" },
//   { id: 4, name: "fazin" },
// ];

// let test2 = { id: 1, nadd: "ldlds" };

// document.write("<h1>test2.nadd</h1>");

// document.getElementById("ggg").innerText = "helloooooo";

// document.getElementById("h1").innerHTML = "helooo";

// let customerProblem = prompt(
//   "what is your problem ? ( only enter the number we have provided )\n" +
//     "1 - quality problems\n" +
//     "2 - late delivery \n" +
//     "3 - I didn't recive my order",
// );

// if (isNaN(customerProblem) || customerProblem > 3 || customerProblem < 1) {
//   alert("please enter a valid NUMBER");
// } else {
//   if (customerProblem === 1) {
//     alert("fuck you");
//   } else {
//     alert("fuck you");
//   }
// }

// function log(data) {
//   for (let i = 0; i < 10; i++) {
//     console.log(data);
//   }
// }

// log(+prompt(""));

// let username = prompt("please enter your username .");

// let passWord = prompt("please enter your password .");

// if (username === "farzin84" && passWord === "13841348") {
//   alert("wellcome to your account .");
// } else {
//   while (username !== "farzin84" && passWord !== "13841348") {
//     username = prompt("please enter your username .");

//     passWord = prompt("please enter your password .");
//   }
//   alert("wellcome to your account .");
// }

// let userNum = +prompt("please enter the number");

// if (userNum % 2 === 1) {
//   for (let i = userNum - 1; i >= 2; i -= 2) {
//     console.log(i);
//   }
// } else {
//   for (let i = userNum; i >= 2; i -= 2) {
//     console.log(i);
//   }
// }

// let height = +prompt("height ?");

// let width = +prompt("width ?");

// function rectangleArea(height, width) {
//   return height * width;
// }

// let area = rectangleArea(height, width);

// console.log(area);

// let users = [
//   { id: 1, username: "farzin", gender: "male" },
//   { id: 2, username: "selin", gender: "female" },
// ];

// let username = prompt("please enter your username .");
// let gender = prompt("what is  your gender ?");

// function signUP(username, gender) {
//   return {
//     id: users.length + 1,
//     username: username,
//     gender: gender,
//   };
// }

// const userDetails = signUP(username, gender);

// users.push(userDetails);

// console.log(users);

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num === 2) return true;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// let userNumber = +prompt(
//   "please enter your number to check that is prime or not ....",
// );

// if (isNaN(userNumber)) {
//   alert("You can only enter a 'number' .");
// } else if (userNumber !== Math.floor(userNumber)) {
//   alert("please enter -integer- numbers in the field .");
// } else if (userNumber < 0) {
//   alert("The number should be more than 0 .");
// } else {
//   const isPrimeNumber = isPrime(userNumber);

//   if (isPrimeNumber === true) {
//     alert("This is a PRIME number :) \n" + "I LOVE YOUUUUUU BESARRRRRR");
//   } else {
//     alert("This is not a PRIME number :( \n" + "I LOVE YOUUUUUU BESARRRRRR");
//   }
// }

let username = prompt("please enter your username .");

let password = prompt("please enter your password");

while (username !== "TaNa-Farzin-2006" || password !== "farzintana2006") {
  alert("Fuck off and don't try again ( ˘︹˘ )");
  username = prompt("please enter your username .");

  password = prompt("please enter your password");
}

alert("Wellcomeeeeeeee My loveeee ❤️😘");
