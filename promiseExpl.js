

console.log("hi 1");
const msg = () => {
    console.log("Wait for 3 second");
}
console.log("hi 2");

setTimeout(msg, 3000);

/* const executeFun=(resolve,reject)=>{


}
 */
var p1 = new Promise((resolve, reject) => {
    console.log("My promise resolved")
    resolve(true);
});

var p2 = new Promise((resolve, reject) => {
    console.log("My promise reject")
    reject(new Error("This is an error"));
});

p1.then((successValue) => {
    console.log("I kept my promise "+successValue)
});

p2.catch((rejectValue) => {
    console.log("I couldnt keep my promise "+rejectValue)
});


console.log(p1);
//console.log(p2);
