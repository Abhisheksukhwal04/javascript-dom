console.log('bhure haal');

//function declaration ->
function run() {
    console.log('running');
}
//function call or invoke
run(); 

// Hoisting => automate - function to top - shift only declaration  not assignment

               //function Assignment <->
//Named function Assignment ->
let stand = function walk(){
    console.log('walking');
};
stand();

//Annonymous function Assignment ->
let stand1 = function (){
    console.log('walking');
};
stand1();

let x = 1;
x = 'a';
console.log(x);

//dynamic sum  
function sum(a,b){
    let total = 0;
    for(let value of arguments)
    total = total + value;
    return total;
};
console.log(sum(1,2));
// console.log(sum(1)); O/P NaN
// console.log(sum());  O/P NaN
// console.log(sum(1,2,3,4,5)); O/P NaN
console.log(sum(1,2,3,4,5));

//Rest  Operator
function sum1(num,value,...args){
    console.log(args);
}
sum1(1,2,3,4,5);

//Default parameter
function interest(p,r=5,y=10){
    return p*r*y/100;
}

console.log(interest(1000, 10));

//GETTER SETTER
//Getter -> access properties
//Setter -> change or mutate properties
let person ={
    fName : 'Abhi',
    lName : 'Sukh'
};
// console.log(person);
function fullName() {
    return `${person.fName} ${person.lName}`
};
//issue - > read only 
console.log(fullName());

let person1 ={
    fName : 'Jinal',
    lName : 'Ahir',
    get fullName() {
        return `${person1.fName} ${person1.lName}`
 },
    set fullName(value){
        if(typeof value !== String){
            throw new Error("You have not sent a string")
        }
        let parts = value.split(' ');
        this.fName =parts[0];
        this.lName = parts[1];
    }
};
// person1.fullName = 'Abhishek Sukhwal';

//  console.log(person1.fullName);

 try {
    person.fullName = 'krishna sukhwal';
 }
 catch (e) {
    alert(e);
 }
 console.log(person.fullName);

//  {
//     var a = 5;
//     console.log(a);

//  }
//  console.log(a);

 function walk1() {
     var b = 6;
     console.log(b);
 }
 
 for(var i = 0; i<10; i++){

 }
 console.log(i);

 if (true){
    var a = 5;

 }
 console.log(a);

 let arr = [1,2,3,4];
//  let total = 0;

//  for(let value of arr)
//  total = total + value;
//  console.log(total);

 let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue ,0);
  console.log(totalSum);