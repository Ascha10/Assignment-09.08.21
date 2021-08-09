/**********************************Question1*****************************/


// function myName (){

//     var name = "bob";
//     for (var i = 0; i < 5 ; i++) {

//         console.log(name);

//     }

// }

// myName ();

/**********************************Question2*****************************/

// function myNameArguement(someName){

//     for (var i = 0; i < 5 ; i++) {

//         console.log(someName);

//     }

// }


// myNameArguement("david");

/**********************************Question3*****************************/


// function sum(){

//     var firstNum = 2;
//     var secondNum = 5;
//     console.log(firstNum + secondNum );
// }

// sum();

/**********************************Question4*****************************/


// function sumWithArguments(firstNum , secondNum){

//     console.log(firstNum + secondNum );

// }

// sumWithArguments(10, 10);

// /******************Question With Return*****************/

// function sumWithReturn(firstNum , secondNum){

//     var sum = firstNum + secondNum;
//     return sum;

// }

// var outSideSum = sumWithReturn(20 , 20);
// console.log(outSideSum);


// the diffrence between return and console.log is that return can save the value even outside the function compre to console.log that
// live only at the function scope..


/**********************************Question5*****************************/

// function minNumbers(firstNum , secondNum){

//     if(firstNum > secondNum){

//         return secondNum;

//     }else{

//         return firstNum;

//     }

// }

// console.log(minNumbers(30,5));


/**********************************Question6*****************************/


// function sumOfNumbers(number){

//     while (number > 0 ) {

//         number%10 
//         number/10



//     }


// }

// sumOfNumbers(123);


/**********************************Question7*****************************/

// var ourArray = [50,50,50];

// function sumArray(someArray) {

//     sum = 0; 

//     for (var i = 0; i < someArray.length; i++) {

//         sum += someArray[i];

//         console.log(sum);

//     }

// }

// sumArray(ourArray);


/**********************************Question7.3*****************************/

// var ourArray = [50,50,50];

// function multiplArray(someArray) {

//     sum = 1; 

//     for (var i = 0; i < someArray.length; i++) {

//         sum *= someArray[i];

//         console.log(sum);

//     }

// }

// multiplArray(ourArray);


/**********************************Question7.4*****************************/

// var ourArray = [10,2,30];

// function minArray(someArray) {

//     var min = someArray[0];

//     for (var i = 0; i < someArray.length; i++) {

//         if(someArray[i] < min  ) {

//             min = someArray[i];
//         }
       
//     }

//     return min;

// }


// console.log(minArray(ourArray));

/**********************************Question7.5*****************************/

// var ourArray = [10,2,30];

// function mixArray(someArray) {

//     var max = someArray[0];

//     for (var i = 0; i < someArray.length; i++) {

//         if(someArray[i] > max  ) {

//             max = someArray[i];
//         }
       
//     }

//     return max;

// }


// console.log(mixArray(ourArray));


/**********************************Question7.6*****************************/

// var ourArray = [10,2,30,15,90];

// function trimArray (someArray) {

//     someArray.splice(3,2)
//     return someArray;

// }

// console.log(trimArray(ourArray));


/**********************************Question8*****************************/

// function lengthOfArray(someString) {

//     sumLength = someString.length;
//     return sumLength;

// }

// console.log(lengthOfArray("bob"));


/**********************************Question9*****************************/

// var myArray = [10,20,30,40,50];
// var userInput = Number (prompt("Please Enter A Number"));

// function removeFromArray(someArray) {

//     for ( var i = 0; i < someArray.length ; i++) {
           
//         if(userInput == someArray[i]) {

//             someArray.splice([i],1);
//             return i;
//         }else{

//             console.log("The Value Doesnt Exist");
//         }
//     }

// }

// console.log(removeFromArray(myArray));
// console.log(myArray);

/**********************************Question10*****************************/

// var myArray = [10,20,30,40,50];

// function multipleBy(someArray) {

//     for (var i = 0 ; i < someArray.length ; i++ ) {

//         someArray[i] = someArray[i]*3;
//     }
//     return someArray;

// }

// console.log(multipleBy(myArray));


/**********************************Question11*****************************/

// var myArray = [10,20,30,40,50,10,30];

// function removeReapet(someArray){

//     for (var i = 0 ; i < someArray.length ; i++) {

//         for (var j = i+1; j < someArray.length ; j++ ) {

//             if (someArray[i] == someArray[j]) {

//                 someArray.splice([i],1);

//             }
//         }
//     }

//     return someArray;
// }

// console.log(removeReapet(myssArray));





