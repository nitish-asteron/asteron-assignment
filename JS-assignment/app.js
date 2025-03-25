// // let sum=0;
// // for(let i=1; i<=10; i++){
// //     sum=sum+i;
// // }
// // console.log(sum);

// let pattern1='', pattern2='', pattern3='';

// let rows=5;

// // left triangle
// for(let i=1; i<=rows; i++){
//     pattern1 += '*';
//     console.log(pattern1);
// }

// // right triangle
// for(let i=1; i<=rows; i++){

//     for(let spaces=1 ; spaces<=rows-i; spaces++){
//         pattern2 += ' ';
//     }

//     for(let star=1; star<=i; star++){
//         pattern2 += '*';
//     }
//     pattern2 += "\n";
// }
// console.log(pattern2);

// // pyramid triangle
// for(let i=1; i<=rows; i++){

//     for(let spaces=1 ; spaces<=rows-i; spaces++){
//         pattern3 += ' ';
//     }

//     for(let star=1; star<=2*i-1; star++){
//         pattern3+= '*';
//     }
//     pattern3 += "\n";
// }
// console.log(pattern3);

// // recursion
// function printStars(n){
//     if(n<=0){
//         return;
//     }
//     console.log('*');
//     printStars(n-1);
// }

// printStars(5);

// // DOB to seconds
// let currTime= Date.now();
// // console.log(currTime);

// let dob='2003-10-27';
// let birthDate= new Date(dob);
// // console.log(birthDate.getTime());

// let milliAge = currTime-birthDate.getTime();
// console.log(Math.floor(milliAge/1000));

// *********** Calculator *******************
// let display = document.querySelector("#display");

// function addToDisplay(value){
//     display.value += value;

// }

// function clearDisplay(){
//     display.value = "";
// }

// function calculate(){
//     let expression = display.value;
//     let result = eval(expression);
//     display.value = result;
// }

// function delLast(){
//     let expression = display.value;
//     display.value = expression.slice(0,-1);
//}

//*************** Assignment task beginner level ************
//  Write a function that returns an array of all even numbers between 1 and 100

// function evenNumbers(){
//     let evenNum=[];
//     for(let i=2; i<=100; i++){
//         if(i%2==0){
//             evenNum.push(i);
//         }
//     }
//     console.log(evenNum);
// }
// evenNumbers();

// Write a function that Convert Minutes into Seconds - convert(5) ➞ 300
// function convert(num){
//     console.log(num*60);
// }

// convert(5);

// Write a function that Convert Age to Days - calcAge(65) ➞ 23725
// function calcAge(age){
//     console.log(age*365);
// }
// calcAge(65);

// Write a function that accepts min and max integer value and Generate a random number between it. Max and min values should also be included while generating that random number - generateRandom(1, 10) ➞ 5
// function generateRandom(min,max){
//     let random = Math.floor(Math.random()*(max-min+1))+min;
//     console.log(random);
// }
// generateRandom(1,10);

// Write a function that reverse a given string. reverse(“Hello World”) ➞ dlroW olleH
// function reverse(str) {
//   let reverseStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i];
//   }
//   console.log(reverseStr);
// }
//  reverse("Hello World");

// Write a function that captialise first character of word in a string - capitalise(“this is an example of lowercase string”) ➞ This Is An Example Of LowerCase String
// function capitalise(str) {
//   let strArray = str.split(" ");
//   for (let i = 0; i < strArray.length; i++) {
//     strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
//   }
//   console.log(strArray.join(" "));
// }
// capitalise("this is an example of lowercase string");

// Write a function that returns the sum of parameter passed to it - calculateSum(1, 2, 3, 4, 5) ➞ 15
// function calculateSum(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   console.log(sum);
// }
// calculateSum(1, 2, 3, 4, 5);



//******** Intermediate level ********


// Prepare a function that returns current timezone of the system - getTimezone() ➞  Asia/Calcutta
// function getTimezone() {
//   let timezone = new Intl.DateTimeFormat();
//   console.log(timezone.resolvedOptions().timeZone);
// }
// getTimezone();



// Prepare a function that returns the file_extension using file_name provided
// getExtension(‘abc_file_name_example.png’) ➞ .png
// function getExtension(name){
//     let ext = name.split('.').pop();
//     console.log(`.${ext}`);
// }

// getExtension('abc_file_name_example.png');


// Prepare a function that validates an email isValidEmail(‘email@domain.com’) ➞ true
// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }
// console.log(isValidEmail('email@domain.com'));



// Prepare a function that takes url with query parameters and returns query parameters as an object. For example
// Url = https://www.google.com/?search=microsoft&sorting=asc&department=it
// Result = { search: ‘microsoft’, sorting: ‘asc’, department: ‘it’ }

// function query(url){
//     let obj = {};
//     let params = url.split('?')[1].split('&');
//     params.forEach((param)=>{
//         let [key, value] = param.split('=');
//         obj[key] = value;
//     })
//     console.log(obj);
// }
// query('https://www.google.com/?search=microsoft&sorting=asc&department=it');



// Create a calculator with arithmetic calculations
// already created in the above code




const person = {
    name: 'john',
    age: 30,
    vehicle: {
        type: 'car',
        year: 2020
    }
}

const vehicleYear = person.vehicle?.year;
console.log(vehicleYear);