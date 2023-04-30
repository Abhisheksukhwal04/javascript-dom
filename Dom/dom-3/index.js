// // Adding 100 para
// let t1 = performance.now();
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para ' + i;

//     document.body.appendChild(newElement);
// }
// let t2 = performance.now();
// console.log("this took " + (t2-t1) + " ms");


// //optimizing a bit
// let t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'this is parag ' + i;
    
//     myDiv.appendChild(element); 

// }
// document.body.appendChild(myDiv);

// let t4 = performance.now();
// console.log("this took " + (t4-t3) + " ms");


////Document Fragment
// let fragment = document.createDocumentFragment()
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para ' + i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment); //REflow,1 Repaint


function addPara() {
    let para = document.createElement('p');
    para.textContent = 'Js is Single';
    document.body.appendChild(para);
}

function appendNewMessage() {
    let para = document.createElement('p');
    para.textContent = 'kyu hai single';
    document.body.appendChild(para);
}

addPara();
appendNewMessage();

document.addEventListener('click', function(){
    console.log('hello bhaiya');
});

