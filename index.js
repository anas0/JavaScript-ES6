//ES6 fat arrow function
function number(){
    return 10;
}

console.log(number());

let number2 = () =>{
    return 10;
}

console.log(number2());

let number3 = () => 10;

console.log(number3());


function number4(n){
    return n;
}

console.log(number4(20));

let number5 = (n) => n;

console.log(number5(20));

let number6 = n => n;

console.log(number6(20));

let number7 = (n, y) => n + y;

console.log(number7(10, 20));
