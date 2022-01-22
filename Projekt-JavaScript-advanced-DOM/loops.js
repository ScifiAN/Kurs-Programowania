for (let i = 0; i < 10; i++) {
  //i++ => i=i+1
  console.log(i);
}

const users = ["Max", "Adam", "Anna"];

for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: "Adam",
  age: 24,
  isAdmin: true,
};

for (const key in loggedInUser) {
  console.log(key);
  console.log(loggedInUser[key]);
}

let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}

console.log("Done!");
