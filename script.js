// let n=5;
// for(i=0; i<n; i++){
//     console.log("Hello World",i);
// }
// console.log("Loop is finished");

/*process=>Process is an global object that provides information about and control over the current node.js process.*/
/*process.argv=>returns an array containing he command line arguments passed when process was launched.*/
// console.log(process.argv);

// let args=process.argv;
// for(i=2; i<args.length; i++){
//     console.log(`Hello to ${args[i]}`);
// }
/*require=>it is a buitl in funtion to include  external module that exists in separate files.*/
// let math=require("./math");
// console.log(math.sum(2,3));
// console.log(math.mul(2,3));
// let info=require("./Fruits");
// console.log(info[0].color);

//usign figlet package globally
// const figlet=require("figlet");

// figlet("MOHAMMED JAHID!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

/*import=>we can selectively load only  pieces we need ,which can save memory & it is loading asynhronously.*/
// import {sum,mul,pi,e} from "./math.js";

// console.log(sum(2,3));
// console.log(mul(2,3));
// console.log(pi);
// console.log(e);

// import package 
import { generate} from "random-words";
console.log(generate());