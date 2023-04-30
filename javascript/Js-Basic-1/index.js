// line below is uses to print on the console window
console.log('Namaste Duniya kese ho app saare')


//   declared only inside the block
{
let a='Abhishek';
let b=6;
console.log(a );
}
 
//   declared  inside/outside the block
{
var c='Abhi';
var d=25;
console.log(c);
}
console.log(d); 


    var e=10;
    console.log(e);
var e=50;
e=60;

console.log(e);

//  const num=15;
//  let p;
//  console.log(p)

 let firstName="abhi";
 console.log(firstName);

 
  firstName=1;
 console.log(firstName);

// ternary operator
let age=22;
let status = (age >=18) ? 'ye vote' : 'no vote';
console.log(status);


// control statement
  //  if-else 
let marks =1000;
if(marks >=90){
    console.log('A');
}
else if(marks>=80){
    console.log('B');
}
else if(marks>=70){
    console.log('C');
}
else {
    console.log('D');
}

// switch case
let num =2;
switch(num) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    case 4: console.log('D');
    break;

}


// loops
console.log("for loop")
//    for loop
for(let i=0; i<5; i=i+1)
{
    console.log(i);
}
console.log("while")

// while loop
let i=0;
while( i<5)
{
    console.log(i);
    i++;
}

console.log("do-while")
// do-while loop
let y=0;
do{
    console.log(y);
    y++;
}
while(y<5);
