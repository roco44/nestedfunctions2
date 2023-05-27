
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


  






