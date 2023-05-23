//SYNCHRONOUS AND ASYNCHRONOUS OPERATIONS
/* function msg(){
    console.log("Thanks for waiting")
}
setTimeout(msg,3000); 
console.log("Hello 1");
console.log("Hello 2");
console.log("Hello 3");
*/

//Creating a promise object

//CALLBACK FUNCTION-- where one function is passed as argument in another function

/* //ONE WAY
function fun(resolve, reject) {   
    resolve("success");
 };
const promise1 = new Promise(fun);
console.log(promise1);

//SECOND WAY
const fun1 = (resolve, reject) => { 
    reject("fail");
}
const promise2 = new Promise(fun1);
console.log(promise2);
 */
/* 

const promise1 = new Promise((resolve, reject)=>{
    resolve(true);
});
console.log(promise1);

promise1.then((successValue)=>{
    console.log("success message "+successValue)
    return successValue;
    })

const fun2 = (resolve, reject) => {
    reject("error occured");    
}
const promise2 = new Promise(fun2);
console.log(promise2);

promise2.catch((failureValue)=>{
    console.log("failure message "+failureValue) 
});
 */

/* function test(num) {
    return new Promise((resolve,reject) => {
        if (num == 0) {
            resolve("zero")
        }
        else {
            resolve("not zero")
        }
    });
}

test(0).then((value) => {
    console.log(value);
});
 */

///////////////// PROMISE ALL //////////////////////////////////////////
/* let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1");
    }, 2000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2");
    }, 5000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 3");
    }, 7000);
})

/* p1.then((value) => {
    console.log(value);
})
p2.then((value) => {
    console.log(value);
})
p3.then((value) => {
    console.log(value);
})  

let prArray = Promise.allSettled([p1, p2, p3]);
prArray.then((value) => {
    console.log(value);
}) */


//ASYNC KEYWORD
/* async function test() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("P1");
        }, 2000);
    });


    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("P2");
        }, 5000);
    });

    //    p1.then(alert);
    //   p2.then((value) => { console.log(value); })
    let var1 = await p1;
    let var2 = await p2;
    return [p1, p2];

}

let result = test();
console.log(result);
 */

// let rq = fetch("https://api.postalpincode.in/postoffice/Delhi")
// rq.then((val1) => {
//     console.log(val1.status);
//     console.log(val1.ok);
//     console.log(val1.headers);
//     return val1.json();
// }).then((val2) => {
//     console.log(val2);

// })


let val=fetch();
val.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    return response.json;
}).then((input)=>{console.log(input);});


let p = new Promise((resolve, reject) => {
    reject("my error");
});

p.then((value) => {
    console.log(value)
}).catch((value) => {
    console.log("the problem is "+value);
});