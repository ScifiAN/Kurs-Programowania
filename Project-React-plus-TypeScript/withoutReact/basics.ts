// primitives: number, string, boolean
// more complex types: arrays, object
// function types, parameters

//primitives

let age: number;

age = 12;

let username: string = "max";

let isIntructor: boolean = true;

//more complex types

let hobbies: string[];

hobbies = ["storts", "cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "max",
  age: 32,
};

let people: Person[];

// type inference, union type

let course: string | number = 'React - the complete guide'
course = 123456;

//Functions & types

function add(a: number, b: number): number {
  return a + b;
}

const printed = (value: any) => {
  console.log(value);
}

//generics
const insertAtBeginning = <T>(array: T[], value: T) => {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
