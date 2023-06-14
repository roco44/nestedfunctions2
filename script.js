
//From Educba
// Have given up on Educba exercises due to document.write commands not working!
//Back to Java*Script Info
// function sayHiBye(firstName, lastName) {

//     //helper nested function to use below
//     function getFullName() {
//       return firstName + " " + lastName;
//     }
  
//     alert( "Hello, " + getFullName() );
    
//     alert( "Bye, " + getFullName() );
    
//   }
//     sayHiBye("Finn", "Jackson");
    
//     sayHiBye("Finn", "Jackson");
   
//     sayHiBye("Freya", "Jackson");
//     sayHiBye("Shona", "Jackson-Russell");
//     sayHiBye("Ben", "Jackson");
//----------------------------------------

// function makeCounter() {
//     let count = 0;
  
//     return function() {
//       return count++;
//     };
//   }
  
//   let counter = makeCounter();
  
//   alert( counter() ); // 0
//   alert( counter() ); // 1
//   alert( counter() ); // 2
  //--------------------------

//TutorialsPoint
// function add_two(a,b) {
//     let result =a+b;
    
//     //function add_three(c)   PS I debugged this !
//     {
//        function add_three(c) {
//           result = result+c;
//        }
//        add_three(2); 
//        return result;
//     }
//  }
//  let answer = add_two(22,6);
//  document.getElementById("1demo").innerHTML = answer;
//------------------------------------------------------

//tektutorialshub
//version without nested function
// function addnum(a,b)
// {
//     return (a + b);
// }
//     console.log("this result addnum is: " + addnum(1,2))
// //---------------------------
// //version with nested function
// function addNum(a,b)
// {
//   //nested function
//   function logToConsole(message)
//   {
//     console.log(message);
//   }
//   let result=a+b;
//   //invoking the nested function
//   logToConsole("and this result addNum is: "+result)
// }
//   addNum(1,2)

//--------------------------------------

//with lexical scope
// function addNum(a,b)
// {

//   function logToConsole()
//   {
//     console.log(`result of %d + %d is %d`,a ,b,result);
//   }

//   let result=a+b;
//   logToConsole()
// }

// addNum(11 ,21)
//-------------------------------------------------------

// function makeCounter() {
//     let count = 0;

//     increment = function () {
//         return ++count;
//     };

//     return increment;
// }

// //storing the inner or nested function
// counter = makeCounter()


// //Invoking the nested function. This will increment the count property by 1
// console.log(counter());
// console.log(counter());
// console.log(counter());

//----------------------
//Will look at Educba again and try to use a modified document.get as copied below
//document.getElementById("1demo").innerHTML = answer;

// function triangleHypotenuse(base,height)
// {
// function square(side){
// return side*side;
// }
// return Math.sqrt(square(base)+square(height));
// }
// document.getElementById("2demo").innerHTML = ("Hypotenuse of triangle is : " + triangleHypotenuse(3,4));
//------------------------------------------------------------------------------------------------------

//I think name,age is not a nested function but two functions
//Given up on Educba again
//------------------------------------------------------------

//Back to tektutorialshub
// function makeCounter() {
//   let count = 10;

//   decrement = function () {
//       return --count;
//   };

//   return decrement;
// }

// counter1= makeCounter()
// counter2= makeCounter()

// console.log(counter1());  //1
// console.log(counter1());  //2
// console.log(counter1());  //3

// console.log(counter2());  //1
// console.log(counter2());  //2
// console.log(counter2());  //3
//----------------------------

// function makeCounter(counterName) {
//   let count = 0;

//   let counterObj = {
//       name: counterName,
//       increment: function () {
//           ++count;
//           console.log("name %s count %d",this.name,count)
//           return count
//       }
//   }

//   return counterObj 
// }


// counter1=makeCounter("Counter1")
// counter2=makeCounter("Counter2")

// counter1.increment()
// counter2.increment()
// counter2.increment()
// counter1.increment()
// counter1.increment()
// counter2.increment()
//------------------

// function outerfunc(a) {
//   innerFunc = function (b) {
//       console.log("a %d  b %d",a,b)
//       document.getElementById("5demo").innerHTML = (a)
//       document.getElementById("6demo").innerHTML = (b)
//   };
//   return innerFunc;
// }
// //Get Inner Function
// InnerFunc=outerfunc(5);
// //Invoke it
// InnerFunc(3);
// //Invoke invoke inner Function directly
// outerfunc(10)(2);

//---------------------------------------

// function outerfunc(a) {
//   innerFunc = function (b) {
//       a=5
//       innermostFunc = function (c) {
          
//           console.log("a %d  b %d c %d", a, b, c)
//       }

//       return innermostFunc;
//   };

  
//   return innerFunc;
// }


// //Invoke it
// outerfunc(10)(2)(7);    //a 5  b 2 c 7


// //Another way
// a = outerfunc(10)
// b = a(2)
// c = b(7)                 //a 5  b 2 c 7
//--------------------------------------

// function myFunc(theObject) {
//   theObject.make = "Toyota";
// }

// const mycar = {
//   make: "Honda",
//   model: "Accord",
//   year: 1998,
// };

// console.log(mycar.make); // "Honda"
// myFunc(mycar);
// console.log(mycar.make); // "Toyota"
//----------------------------------

//golinuxcloud Quackers
// var migrating = true;
// var fly = function(num) {
//     var sound = "Flying";
//     function wingFlapper() {
//         console.log(sound)
//     }
//     for (var i = 0; i < num; i++) {
//         wingFlapper();
//     }
// };
// function quack(num) {
//     var sound = "Quack";
//     var quacker = function() {
//         console.log(sound)
//     };
//     for (var i = 0; i < num; i++) {
//         quacker();
//     }
// }
// if(migrating) {
//     quack(4);
//     fly(4);
//     quack(4);
//     fly(4)
// }








  






