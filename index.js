//Q1 Write one example explaining how you can write a callback function?

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum; 
  }
  let result1 = myCalculator(5, 5);
  myDisplayer(result1);
    
  //myDisplayer is the function which is passed as an argument to function myCalculator so it is an example of callback function  
  //Q 2Explain callback hell

  // Ans. Callback Hell: Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. 
  //Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.
    
//Q3  "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
//Example 1
var print = new Promise((resolve,reject)=>{
     
  setTimeout(()=>{
      resolve(console.log("1"))
  },1000) 
}).then( ()=> new Promise((resolve,reject)=>{

 setTimeout(()=>{
  resolve(console.log("2"))
 },2000)

}) ).then( ()=> new Promise((resolve,reject)=>{
 setTimeout(()=>{
  resolve(console.log("3"))
 },3000)
}) ).then(()=> new Promise((resolve,reject)=>{
  setTimeout(()=>{
      resolve(console.log("4"))
  },4000)
})).then(()=> new Promise((resolve,reject)=>{
  setTimeout(()=>{
      resolve(console.log("5"))
  },5000)
})).then( ()=> new Promise((res,rej)=>{
  setTimeout(()=>{
     res(console.log("6"))
  },6000)
})).then(()=> new Promise((res,rej)=>{ 
  setTimeout(()=>{
      res(console.log("7"))
      console.log("end of promises");
  },7000)
}));

// Example 2
 function x(){
  for(let i =1;i<=7;i++){
    setTimeout (function (){
      console.log(i);
},i*1000)
}
  x();
  
 

//Q4 Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and 
//if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
const getPromise =(val) => {
 
  return new Promise((resolve,reject) =>{

   if(val =="yes"){
       resolve(val)
   }else{
       reject("Promise Rejected")
   }
  })
}

getPromise("ye").then((data)=>{
   console.log(data);
}).catch((err)=>{
   console.log(err);
})

//Q 5create an example to explain callback function
// function
function greet(name, callback) {
  console.log('Hi' + ' ' + name);
  callback();
}

// callback function
function callMe() {
  console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

//Q6 create an example to explain callback hell function

doSomething(param1,param2,function(err,paramx){
  do(paramx,function(err,result){
   insertRow(result,function(err){
    yetAnotherOperation(someparameter,function(s)){
      somethingElse(function(x)){

      });
    });
   });
  });


//Q7 Create examples to explain promises function

new Promise((resolveOuter) => {
  resolveOuter(new Promise((resolveInner) => {
    setTimeout(resolveInner, 1000);
  }));
})

//Q8 Create examples to explain async await function
//async function
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
//await function
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
//Q9 Create examples to explain promise.all function
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]

