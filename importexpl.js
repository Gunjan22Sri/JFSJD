const abc=require("./Exportexpl");
setTimeout(()=>{
    console.log("waiting");
},4000);
abc.fun(2);
abc.fun1();
console.log(abc.fun2);

