//Activity 01
console.log("Activity 01")
let num1 = 6;
let num2 = 3;
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)
console.log(num2%num1)

//Activity 02
console.log("Activity 02")
let num3 = 10;
num3 += 10
// num3 = 10 + num3
console.log(num3)
let num4 = 15;
num4 -= 4;
console.log(num4)

//Activity 03
console.log("Activity 03")
const comNum1 = 6
const comNum2 = 10
console.log(comNum1>comNum2)
console.log(comNum1<comNum2)
console.log(comNum1>=comNum2)
console.log(comNum1<=comNum2)
console.log(comNum1==comNum2)
console.log(comNum1===comNum2)

//Activity 04
console.log("Activity 04")
console.log(comNum1<comNum2 && comNum1<=10)     //BOTH THE CONDITIONS SHOLD BE TRUE.
console.log(comNum1<comNum2 || comNum2>=20)     //ANY ONE CONDITION SHOULD BE TRUE.
console.log(!(comNum1<comNum2))                 //THE LOGICAL NOT REVERSES THE ACTUAL OUTPUT VALUE.

//Activity 05
//Ternary operator ?
//Syntax -- condition ? exprIfTrue : exprIfFalse
console.log("Activity 05")
console.log(comNum1<comNum2?"first num is bigger than secound num":"secound num is bug than first num")