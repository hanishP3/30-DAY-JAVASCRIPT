//DOM MANIPULATION
//ACTIVITY 01
//TASK 01 - SELECT AN HTML ELEMENT BY ITS ID AND CHANGE ITS ELEMENT
console.log("-----ACTIVITY 01-----")
document.querySelector("#title").innerHTML = "HANISH CLOTHING";

//TASK 02 - SELECT AN HTML ELEMENT BY ITS CLASS AND CHANGE THE B.COLOUR

document.querySelector(".para").style.backgroundColor = "yellow";

//ACTIVITY 02
//TASK 03 - CREATE A NEW DIV ELEMENT WITH SOME CONTEXT AND APPEND IT TO TYHE BODY.
console.log("-----ACTIVITY 02-----")

let var1 = document.createElement('div');
var1.innerHTML= "this is created through append";
let through1=document.querySelector('#throughappend');
through1.append(var1)

//Task 04 -CREATE A LI ELEMENT AND ADD IT TO AN EXIXTING UL LIST

let newLi = document.createElement('li');
newLi.innerText = "this is new li created throgh dom";
document.getElementById('ul').appendChild(newLi)

//ACTIVITY 03
//TASK 05 - SELECT AN HTML ELEMENT AND REMOVE IT FROM THE DOM
console.log("-----ACTIVITY 03-----")

let var2 = document.querySelector('#para2')
var2.remove()

//TASK 06 - REMOVE A LAST CHILD OF SPECIFIC ELEMENT

let var3 = document.querySelector('#removeLC')
var3.lastElementChild.remove()

//ACTIVITY 04
//TASK 07 - SELECT AN HTML ELEMENT AND CHANGE ONE OF ITS ATTRIBUTES 
console.log("-----ACTIVITY 05-----")
let var4 = document.querySelector('#imgid')
var4.setAttribute('src','newimagepath.jpg')

//TASK 08 - ADD AND REMOVE A CSS CLASS TO/FORM AN HTML ELEMENT

// Select the element with the ID 'details'
  let detailsElement = document.querySelector('#details');
        
// Add the 'highlight' class to the 'details' element
  detailsElement.classList.add('highlight');
  
// Remove the 'highlight' class from the 'details' element
//   detailsElement.classList.remove('highlight');

//ACTIVITY 05
//TASK 09 - ADD A CLICK EVENT LISTENER

let var5 = document.querySelector('button')
let paraadd = document.querySelector('#para1')
var5.addEventListener('click',function (){
    paraadd.innerHTML = "changed"
})

//TASK 10 - ADD A MOUSE EVENT TO CHANGE BORDER COLOR
let var6 = document.querySelector('#button2');
let mouseB = document.querySelector('#details');
button2.addEventListener('click', function() {
    // Change the border color of the paragraph to purple
details.classList.add('borderPurple')
})

