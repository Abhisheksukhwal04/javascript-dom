console.log('hello Jii');

// // String in primitive
// let lastName = 'Sukhwal';


// // String in object
// let firstName = new String('abhi');
 
// let message = 'This is my first Message';
// let message1 =
// `Hello love ,

// Thanks for the opportunity

// Regards,
// ABhishek`;

// console.log(message); 
// console.log(message1); 

// let fName = "Abhishek";
// let lName = 'sukhwal';
// let userName = `${fName} ${lName}`;
// console.log(userName)



// // let words = message.split(' ');

// // console.log(words);

 
// let date = new Date();
// let date1 = new Date('2001 04 10');
// let date2 = new Date(2005, 2, 17);
// console.log(date);
// // console.log(date1);
// console.log(date2);

// // getter and settter
// date1.setDate(25)
// console.log(date1);
// date1.getDate()
// console.log(date1);


 

// <-> Arrays -> Object/reference type  <-> 
let numbers = [1,4,5,7,9];
    console.log(numbers);

// <- Insertion(add) ->
// numbers.push(9);  //Too Add at end
// numbers.unshift(0); //Too Add at Start
numbers.splice(2,0,'a','b'); //Too Add at middle
//             //2-position,0-delete=(Index) 
console.log(numbers);

// // <- Removing(remove)->
// numbers.pop(9); //Too remove at end
// numbers.shift(0); //Too remove at start
// numbers.splice(1,2); //Too remove at middle
// console.log(numbers);


// // <- Searching ->
console.log(numbers.indexOf(7)); 
console.log(numbers.includes(7));

// // we want to check if a number exist in an array
// if (numbers.indexOf(4) != -1)
//   console.log("present"); //This is not a Rightway

// console.log(numbers.includes(7)); //This is a Rightway
// console.log(numbers.indexOf(4,5)); // both of primitive

// let courses =[
//   {no:1, naam:'Abhi'},
//   {no:2, naam:'Jinal'}
// ];
// console.log(courses); 
// // console.log(courses.indexOf({no:1, naam:'Abhi'})); {Not working}

// // this is for Object Searching 
// let course = courses.find(function(course){
//   return course.naam ==='Abhi'
// })
// console.log(course);
//   // both are same
// console.log(courses.find(function(course) {
//   return course.naam == 'Abhi';
// }));

//   //Arrow Function
// let course1 = courses.find(course =>course.naam =='Abhi');
// console.log(course1);


// //Emptying an Array
//  let numbers1 =[2,3,4];
//  let numbers2 = numbers1;
//  console.log(numbers1);

// //  numbers1 =[]; {in the previos are save in garbage }
//  numbers1.length =0; // in is there is no saved value
//  console.log(numbers1);
//  console.log(numbers2);

//  let numbers4 =[1,2,3,4,5];
//  numbers4.splice(0,5);
//  console.log(numbers4);

// //  <- Combining & slicing Array ->
//      //combinig
// let first = [1,2,3];
// let second = [4,5,6];
// let combined = first.concat(second);
// console.log(combined);

//       //slicing
// let marks = [1,2,3,4,5,6];
// let sliced = marks.slice(2,4);
// console.log(sliced);

// // Spread Operator->
// let third = [9,5,3,7];
// let fourth = [1,9,2,6];
// let combined1 = [...third,7,...fourth,6];
// console.log(combined1);

// //copy kaise create karu bhai
// let another = combined1;
// console.log(another);

// //Iterating an Array

// let arr =[10,20,30,40,50];

// for(let value of arr){   //for off loop
//   console.log(value);
// }
// arr.forEach(function(numbers){   //forEach loop
//   console.log(numbers);
// })
//      //in Arrow function
// arr.forEach(numbers  =>console.log(numbers));

// // Joining Array
// let numbers5 = [10,20,30,40,50];
// let joined = numbers5.join(',');
// console.log(joined);
// console.log(numbers5);


// //split 
// // iska code upper hai
// console.log(words);
// //joining Array
// let joined1 = words.join('_');
// console.log(joined1);

// //Sorting Arrays: ->
// // allways in ascending
// let numbers6 = [40,50,60,10,20];
// numbers6.sort();
// console.log(numbers6);  //try this another method
 
// //  reverse {descending }
// numbers6.reverse();
// console.log(numbers6);

// //Filtering Arrays: ->
//  let numbers7 =[1,2,-1,-4];

//  let filtered = numbers7.filter(function(value){
//       return value >=0;
//     })
//     console.log(filtered);
 
//     //another way to write
//     console.log(numbers7.filter(function(value){
//       return value >=0;
//     }));        

//           //in Arrow function
// let filtered1 = numbers7.filter(value => value >=0 );
//     console.log(filtered1);

// //Mapping Arrays: ->
//    let numbers8 = [9,10,11,12];
//    console.log(numbers8);
//   let items = numbers8.map(function(value){
//     return 'student_no' + value;
//    });
//    console.log(items); 
//    //Arrow function
// let items1 = numbers8.map(value => 'student_no' + value );
//         console.log(items1); 

// // mapping with objects
// console.log(filtered1);
// //o/p [1,2]
// let item = filtered.map(function(num){
//   return {value : num}
// });
// console.log(item);

// //numbers7.filter(value => value >=0 );

// //Arrow function
// let item1 = filtered.map(num => ({value:num}));
// console.log(item1);
// //chaining
// let item2 = numbers7.filter(value => value >=0 ).map(num => ({value: num}));
// console.log(item2);
