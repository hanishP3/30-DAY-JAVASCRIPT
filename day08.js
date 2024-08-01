//ES6+ FEATURES
//Activity 01 - template literals
//Task 01
console.log("-----ACTIVITY 01-----")
let name = "hanish"
let age = 21;
console.log(`the name is ${name} and age is ${age}.`)

//Task 02 - Multiline string

let address =`33-00-987
tokyo ghaol
vinland saga
oppa`

console.log(address)

//Activity 02
console.log("-----ACTIVITY 02-----")

//Task 03 - destructuring of an array, Extracing first and secound elements
let numbers = [1,2,3,4,5]
let [first,secound] = numbers
console.log(`the first element ${first} and the secound one is ${secound}`)

//Task 04 - destructuring of an obejct, Extracing title and author

let myBookDetails = {
    title: "how to be poor",
    author: "hanish",
    version: 3,
}

const { title, author } = myBookDetails;
console.log(`This is the title ${title} and the author is ${author}`);

//Activity 03
console.log("-----ACTIVITY 03-----")
//Task 05 - use spread operator to create and array that includes all elements of an existing array plus additional elements and log them.

let num1 = [1,2,3,4,5,6,7]
let spreadNum = [...num1,8,9,10]
console.log(spreadNum)

// The rest operator (...) is used to collect multiple elements into a single array or object.
//Task 06 - use the rest operator as a function to accept  an arbitary number of elements, sum it and return it.

function rest(...userNum){
    let sum = 0;
    for (const nums of userNum) {
        sum = sum+nums;
    }
    return sum;

}
console.log(rest(1,2,3,4,5))

//Activity 04
//Default parameters
console.log("-----ACTIVITY 04-----")
//task 07 - write a function that takes 2 parameters secound one is dafult value as 1.


function paraFun(userInp,secoundNum=1){
    return userInp+secoundNum
}
//With parameter
console.log(paraFun(1))
//Without parameter
console.log(paraFun(5,5))

//Activity 05
//Enchanced object literals
console.log("-----ACTIVITY 05-----")
//Task 08 - use enhanced object literals to create an object with methods and parameters and log it

const myobj1 = {
    name:"toyoto",
    year:1999,
    getDetails(){                          //   METHOD
        return `the name is ${this.name} and the year us ${this.year}`;
    },
    howOld(presentYear){
         return presentYear - this.year;
    }
} 
console.log(myobj1.getDetails())            //CALLING METHOD
console.log(myobj1.howOld(2024))            //CALLING WITH PARAMETER

//Task 09 - create an object with computed property  names and based on varaibles and log the object.
const key1 = 'name';
const key2 = 'age';
const value1 = 'hanish';
const value2 = 21;

const person = {
    [key1]: value1,  // Computed property name: 'name'
    [key2]: value2,  // Computed property name: 'age'
    ['occupation']: 'Engineer' // Using an expression: 'occupation'
};
console.log(person.name); 
console.log(person.age); 
console.log(person.occupation); 

