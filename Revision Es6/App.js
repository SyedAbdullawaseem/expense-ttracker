/*import {multiply} from './node.js'
import add from './index.js'
function subtract(a,b){
    return a-b;
}

let sub =subtract(10,2);
console.log(sub)

console.log(add(2,6))

console.log(multiply(2,4))*/

//class
/*class Humans{
    constructor(){
        this.name = 'maxwel';
    }
    age= 27;
    
    printName(){
        console.log(this.name)
    }

}

class persion extends Humans{
   constructor(g){
    super();
    this.gender= g
   }
   printgendr(){
    console.log(this.gender)
   }
}
const h1 = new persion('male');

 console.log(h1)
h1.printName();
h1.printgendr()*/

//spred operator
/*
const arr= ['honda','bmw','Audi'];
console.log(arr);

const newArr= [...arr,'Jaguar'];
console.log(newArr)

//rest operator

const person={
    firstName: 'Azmat'
}

const newPerson= {
    ...person,
    lastname: 'khan'

}
console.log(newPerson)*/

//Dstructuring
/*
let list =['honda','bmw','Audi'];
let [car1,car2,car3]=list;
console.log(car1)

const person={
    name:'Azmat',
    age: '27'
}
let {name,age}=person;
console.log(name)
console.log(age)*/
const studentArr = [
  {
    name: "Yash",

    age: "25",
  },

  {
    name: "Vaibhav",

    age: "23",
  },
];

function changeAge(studentObj) {
  studentObj.age = "30";
}

changeAge(studentArr[0]);

console.log(studentArr[0].age);