// Form Validation Part ******
// const form = document.getElementById('myForm');
// const username = document.getElementById('username');
// const error = document.getElementById('error');

// form.addEventListener('submit', (event)=>{
//     if(username.value === ''){
//         error.textContent = 'Username is required';
//         event.preventDefault();
//     } else {
//         error.textContent = ''
//     }
// });

// username.addEventListener('input', ()=>{
//   if (username.vaalue !== ''){
//     error.innerText = ''
//   }
// });


// Event Delegation Part *******
// const list = document.getElementById("list");
// const input = document.getElementById("input");
// const button = document.getElementById("button");

// list.addEventListener("click", (e) => {
//   if (e.target.matches("li")) {
//     const allItems = list.querySelectorAll("li");
//     allItems.forEach((item) => {
//       item.style.background = "white";
//       item.style.padding = "0px";
//     });

//     switch (e.target.innerText) {
//       case "React JS":
//         e.target.style.background = "orange";
//         e.target.style.padding = "10px";
//         break;

//       case "JavaScript":
//         e.target.style.background = "purple";
//         e.target.style.padding = "10px";
//         // e.target.style.color = 'white';
//         break;

//       case "Python":
//         e.target.style.background = "skyblue";
//         e.target.style.padding = "10px";
//         break;

//       default:
//         e.target.style.background = "skyblue";
//         e.target.style.padding = "10px";
//         break;
//     }
//   }
  
// });


// button.addEventListener("click", (e) => {
//   let inputText = input.value.trim();
//   if (inputText !== "") {
//     const li = document.createElement("li");
//     li.innerText = inputText;
//     list.appendChild(li);
//     li.style.marginBottom = "10px";
//     input.value = "";
//   } else {
//     alert("Please enter a value before adding to the list.");
//   }
// });

// console.log(list);
// console.dir(list);



// **********
// Debounce Part *******
// const formInput = document.getElementById('form-input')
// const button = document.getElementById('button');

//Debounce Handler
// function debounce(fn, delay){

//   let timerID
//   return function(...args){
//     if(timerID){
//       clearTimeout()
//     };

//     timerID = setTimeout(()=>fn.apply(this, args), delay);
//   };

// };


//  formInput.addEventListener('input', debounce((e)=>{
//     console.log(e.target.value);
//  }, 3000));

 
//debounce handler for button
// function debounce (fn, delay){
//   let timeoutID
//   return function (){
//     if(timeoutID){
//       clearTimeout(timeoutID)
//     }
//     timeoutID = setTimeout(()=>{
//       fn()
//     }, delay)
//   };
// }

// button.addEventListener('click', debounce(()=> console.log('clicked'), 500));


//Asynchronous javaScript Part *************************************************************
// console.log("Start Here");

// function fetchData (){
//   for (let i = 0; i < 10000000000; i++){
//     //do some computations
//   }
//   console.log('data fetched');
// };
// fetchData()

// console.log('executing');
// console.log('end');

// {
//   console.log('Start Now');

//   function fetchData() {
//     return new Promise((resolve)=>{
//       setTimeout(() => {
//         console.log('Data Fetching Done');
//         resolve();
//       }, 3000);
//     });
//   };

//   async function processData(){
//     await fetchData();
//     console.log('Processing data');
//   }

//   processData();
//   console.log('end');
// }

// //Asynchronous task in a synchronous way
// {
//   console.log('Started');
//   async function getUser() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//       if (!response.ok){
//         throw new Error ('Failed to fetch user data')
//       };
//       const user = await response.json();
//       console.log(user);
//     }

//     catch(error){
//       console.log(error.message);
//     }

//     console.log('data fetched');
//     console.log('end');
//   }
//   getUser()
// }

// {
//  function fetchData() {
//     return new Promise((resolve)=>{
//       setTimeout(() => {
//         resolve('data fetched');
//       }, 3000);
//     });
//   };

//   async function processData(){
//     console.log('Start');
//     try {
//       const data = await fetchData();
//       console.log(data);
//       console.log('processing data');
//     }

//     catch (error) {
//       console.log('Error', error);
//     }

//     console.log('end');
//   }

//   processData();
// }

//***************************************************************************************
//For loop
let Array = [];

for (let i = 0; i < 10; i++){
  function loopingArr (val){
    Array.push(val);
    return Array
  };

  console.log(loopingArr(i));
};

// While loop
let i = 0;
while(i <= 10){
  console.log(i);
  i++;
}

// For OF Loop (এই লুপ ফিয়ে অবজেক্টে iterate করা যায়না)
let result = [];
let array = [2,4,6,8,9,12,14,16]

for (items of array){
  if (items > array.length){
    function resMaker (items){
        result.push(items);
        return result;
      }
      resMaker(items)
  }
}
console.log(result);

//For in loop (অবজেক্টে iterate করার জন্য for in loop ব্যবহার হয়)
let person = {
  fullName: 'Omar Faruque',
  mobile: '01923832106',
  age: '30',
  location: 'Dhaka'
};

for (const key in person){
  console.log(key+ ' : '+ person[key]);
}

// console.log(person['age']);

//************************************************************************************
// Spread Operator
let user = {
  firstName: "Omar",
  lastName: 'Faruque',
  City: 'Dhaka'
};

let user2 = {...user, Country: 'UK'}; // {...user} এটা হলো Spread Operator 
console.log(user2);

user2.City = "London";
console.log(user);
console.log(user2);


//******************************************************************************************
//Array Destructuring

let colorArray = ['red', 'green', 'purple', 'orange', 'blue'];

const [firstColor,,,thirdColor] = colorArray;
console.log(firstColor);
console.log(thirdColor);

let colorArray2 = [...colorArray, 'navyblue'];//[...colorArray] এটা হলো অ্যারে Destructuring
console.log(colorArray2);

colorArray2.push('brown');
colorArray2.unshift('white');
console.log(colorArray2);
// console.log(colorArray2.pop());
console.log(colorArray2);