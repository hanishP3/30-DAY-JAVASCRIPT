//Activity 01
//Function Declarations
//Task 1 - Even or Odd

function checkNum(number){
    if((number%2)==0){
        console.log(`${number} is even`);
    }else{
        console.log(`${number} is odd`);
    }
}
// checkNum(2)

//Task 2 - Square of a number and return it.
function sqNum(num){
                                            //Return statement just returns the value,Doesnt print it.
    return  (Math.pow(num,2));              //Return statement doesnt allow to  run anything after its execution.
}
console.log(sqNum(6))

//Activity 02
//Function Expression
//Task 3 - Find the max of 2 numbers and log the result.

function max(number1,numer2){
    return Math.max(number1,numer2)
}
console.log( max(44,88))


//Task 4 - Concatinate two Strings and return it.

function userString(str1,str2){
    return `${str1} ${str2}`                   //Simple cancatination using string interpolation
}
console.log(userString('hanish',"leo"))

//Activity 03
//Arrow functions
//Syntax - () => expression
//Syntax - (param1, paramN) => { statement }

//Task 05
//Write an arrwo function to return the sum of 2 numbers.

const arrowFun = (num1,num2) => {
    return num1+num2
}
console.log(arrowFun(1,2))

//Task 06
//Write a Arrow function to check if the string contains a specified char in it and return with boolean value.

const stringCat = (str1)=> {
    let name = "hanish "
    return name.includes(str1)                     // includes() Determines if a string contains another substring and returns true if found, false otherwise.
}
console.log(stringCat('h'))

//Activity 04
//Task 07
//Function parameters and Default values.
//Return the Product of 2 numbers.

function numProduct(num1,num2 = 5){
    return num1 * num2
}
console.log(numProduct(3))

//Task 08
//Write a function that takes a persons name and age and return greeting.provide a defualt value for age

function personGreeting(name1,age1=18){

    return `the name is ${name1} and age is ${age1}`           //The function personGreeting accepts a person's name and age (with a default age of 18). It returns a formatted string stating the provided name and age. When called with personGreeting('Hanish', 21), it outputs "The name is Hanish and age is 21".
                                                               
}
console.log(personGreeting('hanish','21'))


//Activity 05
//Task 09
//Higher order function

function higherOrder(normalFunction, num1) {
    for (let i = 0; i < num1; i++) {
        normalFunction();               // Call the provided normalFunction num1 times
    }
}
    function normalFunction() {
    console.log('Returned number');
    }
higherOrder(normalFunction, 15);         // Call normalFunction() 5 times


//Task 10
function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}

function double(x) {
    return x * 2;
}
function square(x) {
    return x * x;
}
                                                // Applying double to square of a number
const result = applyFunctions(double, square, 5);
console.log(result);                            // Output: 50 (double(25))