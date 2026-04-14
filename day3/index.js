// const a = [10,20]
// a[0] = 30;
// console.log(a);


// const obj = {
//     id:1,
//     name:"guest",
//     myData: [10,"hello","bye bye"] 
// }
// console.log(obj);
// console.log(obj.name);
// console.log(obj.id)
//console.log(obj.myData);

//adding the elements in object
// obj.loc = "hyd"
// // console.log(obj);




// const users = [
//     {
//     id : 1,
//     name : "user1",
//     loc : "hyd"
//     },
//     {
//     id : 2,
//     name : "user2",
//     loc : "hyd"
//     },
// ]
// console.log(users[0].name);
// console.log(users[0]);
// console.log(users[1].id);


// for of - arrays
// for in - objects

// function myFun(){
//     console.log(-1);
//     return -1;
    
// }
// console.log(myFun);
// console.log(myFun());


//addition of two number
// function add(num1 , num2){
//         return num1 + num2;
// }
// console.log(add(30,46));
// function add(num1 , num2){
//         return num1 - num2;
// }
// console.log(add(30,46));
//first it perform all function in the code  at last what function is there it can give the same output for all the console  

//anonymous(it does not contain method name)
// const myFun = function (num1 , num2){
//         return num1 + num2;
// }
// console.log(myFun(30,2));
//console.log(myFun());


const doMath = (num1, num2, op) => {
    switch (op) {
        case "+":
            console.log(`The addition of ${num1} and ${num2} is ${num1 + num2} `);
            break;
        case "-":
            console.log(`The subtraction of ${num1} and ${num2} is ${num1 - num2} `);
            break;
        case "*":
            console.log(`The multiplication of ${num1} and ${num2} is ${num1 * num2} `);
            break;
        case "/":
            console.log(`The division of ${num1} and ${num2} is ${num1 / num2} `);
            break;
        case "%":
            console.log(`The reminder of ${num1} and ${num2} is ${num1 % num2} `);
            break;
        case "**":
            console.log(`The power of ${num1} and ${num2} is ${num1 ** num2} `);
            break;
        default:
            console.log("Please pass a Valid Input");
            break;
    }
}

doMath(2, 3, "*")

// function add(a,b){
//     return a + b;
// }
// console.log(add(2,3));
 
// let add =function(a,b){
//     return a+b;
// }
// console.log(add(2,3));

// let add=(a,b)=>{
//     return a+b
// }
// console.log(add(2,6));

// let add=(a,b)=>a+b;
// console.log(add(2,3));


 let name = "riya";
 let age = 21;

 console.log("hii this is "+name+"i am "+age);
 console.log(`hii this is ${name} my age is ${age}`);
 
//${}-interpolation ``-templates