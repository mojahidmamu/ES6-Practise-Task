const jinish = [
   { id: 1, name: 'mojahid', member: 'junior', balance: 23000 },
   { id: 2, name: 'shahin', member: 'parent', balance: 22000 },
   { id: 3, name: 'sadisa', member: 'child', balance: 21000 },
   { id: 4, name: 'salama', member: 'senior', balance: 19000 },
]
// const members = jinish.map(j => j.balance > 21000);
// const members = jinish.filter(j => j.balance > 21000);
// const members = jinish.find(j => j.balance < 22000);
// const members = jinish.reduce(j => j.balance < 22000);
// console.log( members);

// Task-1
let data2 = {
   mojahid: {
      id: 130762,
      study: [{
         primary: [
            { name: 'Khan shaheb mokbul ali academy' },
            { address: 'Illishia' },
         ]
      },
      {
         high: [
            { name: 'Illishia jamila begum h. school' },
            { address: 'Illishia' },
         ]
      }]
   }
}
const hishaddress = data2.mojahid.study[1].high[0].name;
// console.log( hishaddress);
let highSchoolAddress = data2.mojahid.study[1].high[1].address;
// console.log(highSchoolAddress);

// task-2
const catro = {
   1324: {
      name: 'mojahid',
      dept: 'computer',
      shift: 2,
      tikana: {
         union: 'posschim',
         upozila: 'chokoria',
         district: 'cox-s bazar'
      }
   },
   3214: {
      name: 'mahi',
      dept: 'auto-mobile',
      shift: 1,
      tikana: {
         union: 'mahernama',
         upozila: 'pekua',
         district: 'cox-s bazar'
      }
   }
}
// const districts = catro[3214].tikana.district;
// console.log(districts);

// task-3
const data3 = {
   data: [
      {
         boiId: 1,
         boiBistarito: {
            name: 'mojahider first boi',
            price: '12$'
         },
         boiWriter: 'mojahid',
      },
      {
         boiId: 2,
         boiBistarito: {
            name: 'saidurer boi',
            price: '11$',
         },
         boiWriter: 'mahi',

      }
   ]
}
const fristname = data3.data[1].boiWriter;
// console.log( fristname);

function total(a, b) {
   return a + b;
}
// console.log( total(10,10));
const total2 = (a, b) => a + b;
// console.log( total2(10, 12));


// practise
let nam = 'mojahid';
// nam = 'samim'; 
// const age = 18;
// age = 10;
// console.log( nam, age);
// Traditional function
// function great(nam){
//    return `hello, ${nam}`
// }
// arrow function
const name = 'mojahid';
const age = 18;
const greating = `hello ! ${name}, Are you ${age} years old ?`;
console.log(greating);
// arrow destructuring
const [person1, person2] = ['mojahid', 'samaim'];
console.log(person1, 'and', person2);
//  Object destructuring
const peroson = { name1: 'mojahid', age1: 18 };
const { name1, age1 } = peroson;
console.log(name1, age1);

// Default Parameters
function multiply(a, b = 1){
   return a *b;
}
console.log( multiply(5));
console.log( multiply(5, 10));
//  Classes
class person3 {
   constructor(name2, age2){
      this.name2 = name2;
      this.age2 = age2;
   };
   greating(){
      console.log( `Hello, i am ${this.name2} and i am ${this.age2} years old`);
   };
};
// const person4 =new Person4("Alice", 25);
// person4.greet();


// Modules (Import/Export)
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
console.log( add(10, 15));
console.log( substract(12, 8));

// Promiss
const fetchData = new Promise((resolve, reject) => {
   let dataReceived = true;  // simulate fetching data
   if (dataReceived) {
       resolve("Data fetched successfully!");
   } else {
       reject("Failed to fetch data.");
   }
});

fetchData.then((message) => {
   console.log(message);  // Data fetched successfully!
}).catch((error) => {
   console.log(error);
});




