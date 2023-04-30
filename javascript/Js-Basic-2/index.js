console.log('chaliye suru karte hai');

// object create :->
let rectangle ={
    length:1,
    breadth:2,

     draw:  function(){
        console.log('drawing rectangle');
    }
};

// factory function :->

function createRectangle(len, bre){
    return rectangle ={
        length:len,
        breadth:bre,
    
         draw:  function(){
            console.log('drawing rectangle');
        }
    };
}

let rectangleObj1 = createRectangle(5,4);
let rectangle2 = createRectangle(2,3);
let rectangle3 = createRectangle(8,9);

//Camelcase ->first word is small after that any first letter of every word is capital numberOfStudent (abhiSukhwal)

// constructor fucntion :->
   // constructor fucntion -> Pascal Notation ->first letter of every word is capital (AbhiSukhwal)
   // constructor function -> prop/methods -> intialise/Define
function Rectangle(len , bre){
    this.length =len;
    this.breadth = bre;
    this.draw = function(){
        console.log('drawing');
    }
}
    // object creation using constructor function
let rectangleObject = new Rectangle(4,5);

// Dynamic Nature of Object :->
 
    // To Add / OR property
rectangleObject.color = 'red';
console.log(rectangleObject);
 
// To delete property
delete rectangleObject.length;
delete rectangleObject.breadth;
delete rectangleObject.draw;
console.log(rectangleObject);

// Constructor property :->
Rectangle.constructor;
// internaly Rectangle function
let Rectangle1 = new Function(
    'length','breadth',
    `this.length =length;
     this.breadth = breadth;
     this.draw = function(){
        console.log('drawing');
    }`);

let rect = new Rectangle1(2,3);
console.log(rect);

   
// primitive Type
let a = 10;
let b = a;
a++;
console.log(a);
console.log(b);

// Reference type 
let c = {value: 10};
let d =c; 
c.value++;

console.log(c.value);
console.log(d.value);



// Loops :->
let rectangle0 ={
    length :2,
    breadth  :5
}
// for in loop -> (objects)
for(let key in rectangle0){
    // keys are reflected through key variable
    // values are reflected through rectangle0 {key}
    console.log(key);
}

// for of loop ->  (itrables)
for(let key of Object.entries(rectangle0)){
    console.log(key);
}


if('length'in rectangle0){
    console.log('+');
}
 else {
    console.log('-');
 }

//  object cloning :->
    // Iteration ->
    let src ={
        a:10,
        b:20,
        c:30
    };
    let dest ={};
    for (let key in src)
    {
        dest[key] = src[key];
    }  
    console.log(src);
    console.log(dest);
     
    // Assign ->
    let abc ={
        g:110,
        b:20,
        c:30
    };
    let abc1 ={value:25};
    let bbc = Object.assign({},abc,abc1);
    
    abc.g++;
    console.log(bbc);  
    console.log(abc);

    // Spread
    let gg ={
        ga:10,
        b:20,
        c:30
    };
    let gga ={...gg};
    console.log(gga);