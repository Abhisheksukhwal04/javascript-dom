// console.log('jinal kha ho yrr');
               ///-> synchronous
// function sync() {
//     console.log('first');
// }
// sync();
// console.log('second');

       ///-> Asynchronous
// setTimeout(function() { 
//     console.log('third');
// }, 3000);
// function sync() {
//     console.log('first');
// }
// sync();
// console.log('second');

// let meraPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside promise');    
//     }, 5000); 
//     resolve('kardiya');
//     //reject(new Error('bhai sahab error aye hai'))
// });

// console.log('Phele');
//  //arrow function
// let meraPromise1 = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         console.log('I am inside promise');    
//     }, 5000); 
//     resolve('kardiya');
//     // reject(new Error('bhai sahab error aye hai'))
// });

// console.log('Phele');


// let meraPromise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside promise1');    
//     }, 5000); 
   
//     //resolve(2001);
//     //reject(new Error('error'))
// });
// let meraPromise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside promise2');    
//     }, 3000); 
//     // resolve(2001);
//     //reject(new Error('error'))
// });

// console.log('Phele');


// let meraPromise3 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside promise3');    
//     }, 5000); 
//     //resolve(2001);
//     reject(new Error('bhai error aya'))
// });

// console.log('Phele');




// meraPromise3.then((value) => {console.log(value)},(error) => {console.log('error bhaiy aye hai ')});

//meraPromise3.catch((error) => {console.log("error aya ")});




// let waadaa1 = new Promise(function(resolve, reject) {
//     setTimeout(() =>{
//         console.log('settimeout1 started');
//     },1000);
//     resolve('hello');
// })

// let output = waadaa1.then(() => {
//     let waadaa2 = new Promise(function(resolve, reject) {
//         setTimeout(() =>{
//             console.log('settimeout2 started')
//         },2000);
//         resolve('waada 2 resolved');
//     })
//     return waadaa2;
// })
// output.then((value) => console.log(value));


// async function abcd() {
//     return "kya hua tera";
// }

// async function utility() {

// let delhiMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("delhi both garam hai");
//     },1000);
// });

// let hydraMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hydra both thanda hai");
//     },6000);
// });
// let dM = await delhiMausam;
// let hM =  hydraMausam;
// return[dM, hM];

//}
// utility()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));


////chat gpt example
// function makeRequest() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Success!');
//       }, 2000);
//     });
//   }
  
//   async function example() {
//     console.log('Making request...');
//     const result = await makeRequest();
//     console.log(result);
//     console.log('Request complete!');
//   }
  
//   example();
  

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Tera bhai',
    body: 'karlega',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  

  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  })
    .then(response => console.log('Post deleted'))
    .catch(error => console.error(error));