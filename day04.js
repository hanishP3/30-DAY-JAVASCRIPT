//Activity 01
//For - loop
//Task 01
//Program to print numbers from 1 to 0
for(let i =1 ; i<=10;i++){
    // console.log(`${i}`)
}

//Task 02
//Program to print multiplication of 5 table using a loop

for(let i =1;i==1;i--){
    for(let j =1;j<=20;j++){
        var1 = (5*j);
    //    console.log(`5 x ${j} = ${var1}`);
    }
}

//Activity 02
//Task 03
//While loop
//Calculate the sum of numbers form 1 to 10
function sum(n){
let i = 1;
let a = 0;
while(i<=n){
    a = a+i;
    i++;
}
// console.log(`${a}`)
}
// sum(10)

//Task 04
//Print numbers from 10 to 1 using while loop

let num = 10;
while(num>=1){
    // console.log(`${num}`)
    num--;
}

//Activity 03
//Task 05
//Do-while
//Program to print numbers from 1 to 5

let a = 1;
do{
    // console.log(a)
}while(a++ && a<=5);

//Task 06
//Program to calculate the factorial of a number using do-while

function factorial(n){
    let result = 1;
    let  var1 =1;
    do{
        var1 = var1*result
        result++
    }while(result<=n);
     console.log(`${var1}`)
}
// factorial(66)

//Activity 04
//task 07
//Progarm to print pattern 
// for(let i = 1;i<=5;i++){
//     for(let j =1;j<=i;j++){
//         process.stdout.write("*");      //the process.stdout.write() is same like console.log() but it doesnt add any new like.
//         // console.log("*")
//     }
//     console.log(" ")
// }

//Activity 05
//Task 08
//Continue statement
let i = 1;
while(i<=10){
    if(i==5) {
    i++;
    continue;                           //By using coninue statement the iteration come out of the block.
}
console.log(`${i}`)
i++;
}


//Task 09
//Break Statement
let ii =1;
while(ii<=10){
    if(ii==7){
        break;                          //Break effectively ends the loop prematurely based on the condition provided. 
    }
    console.log(`${ii}`)
    ii++;
}
