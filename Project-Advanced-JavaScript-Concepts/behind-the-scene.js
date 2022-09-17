const hobbies = ['Sports', 'Cooking']; // a pointer to the array is strored
const age = 32; //the value itself is stored

hobbies.push('Reading'); //the adressof the array doesn't change

console.log(hobbies);

const person = {age: 32};

function getAdultYears(p){
    p.age -= 18;
    return p.age
    // return p.age - 18;
}
console.log(getAdultYears({...person})); //{age: person.age}
console.log(person);