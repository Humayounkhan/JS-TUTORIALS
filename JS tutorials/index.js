//Variables
console.log("NNN")
var number1 = 34;
var number2 = 56;
console.log(number1+number2)


//Numbers
var num1 = 222;
var num2 = 77.07;

// String
var str1 = "This is a string";
var str2 =  "another string";

//Objects 
var marks = {
    HAK: 99,
    Zain: 97,
    Ubaid: 100
}

//Boolean
var a = true;
var b = false;
console.log(a,b)


//Undefined 
// var und = undefined;
var und;
console.log(undefined)
console.log(und)
var n  = null;
console.log(n)

// Primitive data type: undefined, null,number,string, boolean,symbol
// Reference data type: Arrays and objects

// Arrays
var arr = [1,2,3,4,5]
// console.log(arr)
// console.log(arr[0]) //array starts from 0

// var r = 33;
// var y = 45;
// console.log("The value of a+b is ", r+y)
// console.log("The value of a+b is ", r-y)
// console.log("The value of a+b is ", r*y)
// console.log("The value of a+b is ", r/y)

//Assignment operators
// var c = y;
// c +=2;
// c -=2;
// c *=2;
// c /=2;
// console.log(c)

//comparison operator
// var a = 22;
// var b = 65;
// console.log(a==b);
// console.log(a>=b);
// console.log(a<=b);

//Logical operators
// console.log(true && true)
// console.log(false && true)
// console.log(true  || true)
// console.log(false ||  true)
// console.log(!false)

//operands number and operators 

//Functions
// function avg(a,b){
//     return (a+b)/2
// }
// c1 = avg(4,6)
// c2 = avg(33,67)
// console.log(c1,c2)

//conditionals in JS
// var age = 15;
// if(age>22){
//     console.log('you are not a kid')
// }
// else{
//     console.log('You are a kid')
    
// }

// //If else ladder
// if(age>2){
//     console.log("you are not a kid")
// }
// else if(age>26){
//     console.log("Adult")
// }
// else if(age>16){
//     console.log("teen")
// }

//Loops
// var arr = [1,2,3,4,5,6]
// for(var i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element)
// })
// we will you let from now on
let j = 0;
// const ac = 0;
// ac = ac +1;
 
// while(j<arr.length){
//     console.log(arr[j])
//     j++;
// }

// do{
//     console.log(arr[j])
//     j++;
// } while (j<arr.length);

var array = [1,2,3,4,5,6,7,8];
for(var i=0;i<array.length;i++){
    if(i==2){
        continue;
    }
    console.log(array[i])
}
//Array method
let myArr = ["Fan","camera",34,null]
console.log(myArr.length);
// myArr.push("khan")
// myArr.pop("khan")
myArr.shift()
myArr.unshift("khan")

console.log(myArr)
//tostring()
//sort
//splice
//valueof

//string methods in JS
// let myString = 'Good one';
// console.log(myString.length)
// console.log(myString.indexOf('one'))
// console.log(myString.lastIndexOf('one'))

// //Date
// let myDate = new Date();
// console.log(myDate.getTime())
// console.log(myDate.getFullYear())
// console.log(myDate.getDay())
// console.log(myDate.getMinutes())
 
// document.location
// document.getElementById('click').click()
// document.getElementById('click').style.border = 'blue'
// document.getElementById('click').style.border = '5px solid blue'
// let elem = document.getElementById("Click")
// console.log(elem)

// let elemClass = document.getElementsByClassName("container")
// console.log(elemClass)
// elemClass[0].style.background = "Yellow"
// elemClass[1].classList.add("bg-primary")

// console.log(elem.innerHTML)
// console.log(elem.innerText)
// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)

// tn = document.getElementsByTagName('div')
// console.log(tn)
// createdElem = document.createElement('P')
// createdElem.innerText  = "Extra Paragraph"
// tn[0].appendChild(createdElem)
// tn[1].appendChild(createdElem)
// createdElem2 = document.createElement('b')
// createdElem2.innerText = 'Bold statement'
// tn[1].appendChild(createdElem2)
// tn[0].replaceChild(createdElem2, createdElem);

// Selecting using query

// sel =  document.querySelector('.container')
// console.log(sel)
// sel1 =  document.querySelectorAll('.container')
// console.log(sel1)

//Events
// function Clicked(){
//     console.log('The button was clicked')
// }

// Firstcontainer.addEventListener('mouseover',function(){
//     console.log("mouse HERE") 
// })

// Firstcontainer.addEventListener('mouseup',function(){
//     console.log("mouse HERE") 
// })
// Firstcontainer.addEventListener('mouseup',function(){
//     console.log("mouse HERE") 
// })


//Arrow functions
sum = (a,b)=>{
    return a+b;
}

login = ()=>{
    console.log("Hi dude")
}

// clr = setTimeout(login,2000) //CLR will stop after clearinterval syntax
// clr = setTimeout(login,5000)

// // Local storage in JS
//LocalStorage, setITEM, getItem
//localstorage.removeItem
//localStorage.clear();


//JSON object notation
obj = {name: "khan",length:1, a:{this: 'tha\"t'}};
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
parsed = JSON.parse(`{"name": "khan","length":1, "a":{"this": "tha\\"t"}}`)
console.log(parsed)


//ecmascripts versions
//standards of JS by which it is maintained 
//Template litreals- Backticks
a =6;
console.log(`this is my size ${a}`)
