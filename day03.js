//Activity 01
//if-else
//task 01
//finding a number is positive,negative or zero.
function fun(a){
    if(a<0){
        console.log(`the number ${a} is negative`)    
    }else if(a==0){
        console.log(`the number ${a} is zero`)
    }
    else{
        console.log(`the number${a} is positive`)
    }}
    // fun(0)
    
    //task02
    //person is eligible to vote or not
    function userAge(age){
        if(age>=18){
            console.log("you are eligible to vote")
        }else{
            console.log("you are not eligible to vote")
        }
    }
    // userAge(99)
    
    //Activity 02
    //Task 03
    //largest of 3 numbers
    function userInput(num1,num2,num3){
        if(num1>num2 & num1>num3){
            console.log(`${num1} is greater than ${num2},${num3}`)
        }else if(num2>num3 & num2>num1){
            console.log(`${num2} is greater than ${num3},${num1}`)
        }else if(num3>num1 & num3>num2){
            console.log(`${num3} is greater than ${num1},${num2}`)
        }
    }
    // userInput(11,2,3)
    
    //Activity 03
    //task 04
    //Determine the day of the week by number(1-7) using switch.
    
    function userDayNum(dayNum){
        switch(dayNum){
            case 1 :
                console.log("Monday");
            break
            case 2 :
                console.log("Tuesday");
            break
            case 3 :
                console.log("Wednesday");
            break
            case 4 :
                console.log("Thursday");
            break
            case 5 :
                console.log("Friday");
            break
            case 6 :
                console.log("Saturday");
            break
            case 7 :
                console.log("Sunday");
            break
    
        }
    }
    // userDayNum(5)
    
    //Task 05
    //checking the grade of the user using switch.
    function userGrade(grade){
        switch(true){
            case (grade>=90 && grade<=100) :
                  console.log("A");
                break;
            case (grade>=80 && grade<=89) :
                  console.log("B");
                break;
            case (grade>=70 && grade<=79) :
                    console.log("c");
                break;
            case (grade>=60 && grade<=39) :
                console.log("D");
                break;
            case (grade>=40):
                console.log("F");
                break;
        }
    }
    // userGrade(40)
    
    //Activity 04
    //Task 06
    //Cheking a number is even or odd using ternary operator
    function userInt(num){
        console.log((num%2)==0?"the number is even":"the number is odd")
    }
    // userInt(8)
    
    //Activity 05
    //Task 07
    //Determine the year is leap year or not.
    function getYear(year){
        if((year%4)==0 || (year!=100)==0&&(year%400)==0){
            console.log(`the year ${year} is leap year`);
        }else{
            console.log(`the year ${year} is not leap year`)
        }
    }
    getYear(2020)