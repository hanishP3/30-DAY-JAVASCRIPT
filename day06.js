//Activity 01
//Arrays
//Task 01 - create an array of nos frfom 1 to 5 and log it.

let numbers = [1,2,3,4,5]
console.log(numbers)

//Task 02
//Access the first and last element of an arry and log it.

console.log(numbers[0])
console.log(numbers[4])

//Activity 02
//Task 03 - use push() to add a new item at the end of the array.

numbers.push(333)
console.log(numbers)

//task 04 - use pop() to remove the last element of an array

numbers.pop()
console.log(numbers)

//Task 05 - use shift() to remove first element from the array

numbers.shift()
console.log(numbers)

//Task 06 - use unshift() to add a new number at the start of the array.

let numbers1 = [22,33,44,55,66]
numbers1.unshift(777)
console.log(numbers1)

//Activity 03
//Task 7 - use map() to create a new array where each number is doubled.
//map() syntax - array.map(function(currentValue, index, arr), thisValue).

let numbers2 = [12,34,56,78]
const newNum2 = numbers2.map(x=>x*2)
console.log(newNum2)

//Task 8 - use filter() to create a new array with only even numbers and log it.

let numbers3 = [1,2,3,4,5,6,7,8,9,10]
const newNum3 = numbers3.filter(x=>(x%2)==0)
console.log(newNum3)

//Task 9 - use reduce() to calculate the sum of all  numbers 

let numbers5 = [1, 2, 3, 4, 5];
let sum = numbers5.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum);

//Activity 04
//for loop to iterate each element in an array
//Task 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < 1; i++) {
  console.log(arr);
}         

//Task 11 - use the foreach() to iterate over the array and log it.
//syntax foreach - array.forEach(function(element) {
//code to execute for each element
//});

let arr1 = [44,55,66,88,99];
arr1.forEach(function (x) {
  console.log(x)
}) 

console.log('task 11')
//Activity 05
//Task 11
//2D- matrix
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

matrix.forEach(row => {
  row.forEach(element => {
    console.log(element);
  });
});

console.log('task 12')
//Task 12
//access and log any specfic element in it.

let specificElement = matrix[1][2];       // second row, third column (indices are zero-based)
console.log(specificElement);       
