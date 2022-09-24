function greetUser(greetingPrefix, userName = 'user'){
    // console.log(greetingPrefix + ' ' + userName + '!');
    console.log(`${greetingPrefix} ${userName}!`);
}

greetUser('hi', 'Adam');
greetUser('hello');

function sumUp(...numbers){
    let result = 0;
    for (const number of numbers){
        result += number; // result = result + number
    }
    return result
}

console.log(sumUp(1,5,6,34,9,54));


const inputNumbers = [1,5,6,34,9,54];

console.log(sumUp(...inputNumbers));
console.log(sumUp);