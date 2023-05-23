
async function test() {

    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 1")
        }, 2000);
    });

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2")
        }, 4000);
    });
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Promise 3"))
        }, 6000);
    });

 p3.catch((errorMsg)=>{
     console.log(errorMsg);
 })

    console.log("Promise 1 started");
    let state1 = await p1;
    console.log("Promise 1 completed");

    console.log("Promise 2 started");
    let state2 = await p2;
    console.log("Promise 2 completed");
    
    console.log("Promise 3 started");
    let state3 = await p3;
    console.log("Promise 3 completed");
}

test();