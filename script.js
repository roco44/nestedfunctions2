
//From Educba
// Have given up on Educba exercises due to document.write commands not working!
//Back to Java*Script Info
// function sayHiBye(firstName, lastName) {

//     // helper nested function to use below
//     function getFullName() {
//       return firstName + " " + lastName;
//     }
  
//     alert( "Hello, " + getFullName() );
//     alert( "Bye, " + getFullName() );
  
//   }

//     sayHiBye("Finn", "Jackson")
//     sayHiBye("Freya", "Jackson")
//     sayHiBye("Shona", "Jackson-Russell")
//     sayHiBye("Ben", "Jackson")
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

function makeCounter(counterName) {
  let count = 0;

  let counterObj = {
      name: counterName,
      increment: function () {
          ++count;
          console.log("name %s count %d",this.name,count)
          return count
      }
  }

  return counterObj 
}


counter1=makeCounter("Counter1")
counter2=makeCounter("Counter2")

counter1.increment()
counter2.increment()
counter2.increment()
counter1.increment()
counter1.increment()
counter2.increment()
//------------------





  






