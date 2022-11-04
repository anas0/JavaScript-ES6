// new keyword in fat arrow function
function Person(name){
    this.name = name;
}

var bismi = new Person('Bismi');


//Person is not a constructor (arrow function dose not work for new keyword)
var  Person = (name) => {
    this.name = name;
}

var bismi2 = new Person('Bismi');
