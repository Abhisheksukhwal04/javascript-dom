
// function eventFunction(){
//     console.log('you clicked on document');
// }
// document.addEventListener('click',eventFunction); 


// document.removeEventListener('click',eventFunction);

// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(event){
//     console.log(event);
// })

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('acha lga mja aya')
// });
 
                            ////AVOID TO MANY EVENts  <-->

        //// in there are 100 listener
// let myDiv = document.createElement('div');
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i;

//     newElement.addEventListener('click', function(event){
//         console.log('i have clicked on para')
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);



// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('i have clicked on para')
// }

//     ////in this 1 listener on p tag 
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i;

//     newElement.addEventListener('click', paraStatus);
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


  ////in this 1 listener on div tag 

// let myDiv = document.createElement('div');

// function paraStatus(event){
//     console.log('i have clicked on para')
// }
// myDiv.addEventListener('click', paraStatus);
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

////in this every p gets there listner 
// let myDiv = document.createElement('div');

// function paraStatus(event){
//     console.log('Para ' + event.target.textContent);
// }
// myDiv.addEventListener('click', paraStatus);

// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// let element = document.querySelector('#wrapper');
// element.addEventListener('click', function(event){
//         console.log('you click on span ' + event.target.textContent);
// }); 

let element = document.querySelector('#wrapper');
element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('you clicked on ' + event.target.textContent);
    }
})