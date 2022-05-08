//1
const arr = ["1","2","3"];
var text = "";
for(let i of arr){
    text += i + " ";
}
console.log(text)

//2
const string = "SurekhaTech";
for(let x of string){
    console.log(x);
}

//3 Map
const fruits = new Map();
fruits.set("apple",100);
fruits.set("banana",50);
console.log(fruits);

//4 Set
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
console.log(mySet);



//7 Symbols
const person = {
    name: "Riddhi",
    age: "21"
}
let id = Symbol("id");
person[id] = 1;
console.log(person.id);
console.log(person[id]);

//8 Default Parameter
function add(x,y=10){
    return x+y;
}
console.log(add(5));

//9 Function Rest Parameter
function addition(...args){
    let sum = 0;
    for(let arg of args){sum += arg}
    return sum;
}
console.log(addition(3,4,5));
console.log(addition(1,2," ",4));

//10

const strArr = Array.from("LANGUAGE");
console.log(strArr);

//11
numbers = [1,2,3,4,5];
let first = numbers.find(myFunction);

function myFunction(value,index,array){
    return value > 3;
}
console.log(first);

//12
console.log(Number.EPSILON);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

//13
console.log(Number.isSafeInteger(1234567812345678123456));
console.log(Number.isInteger(1234567812345678123456));

//14
let str = "5";
console.log(str.padStart(4,0));
console.log(str.padEnd(4,0));

//15
var text = "";
for(let [key,value] of Object.entries(person)){
    text += key + ":" + value + " ";
}
console.log(text);
document.getElementById("id2").innerHTML = "<br>"+text;

// Promices
const myPromice = new Promise(function(myResolve,myReject){
    const str1 = "Hello";
    const str2 = "Hii";

    if(str1 == str2){
        myResolve("Both Strings are equal");
    }else{
        myReject("Both Strings are not equal");
    }
});
myPromice.then(value => {
    console.log(value);
}).catch(ex => {console.log(ex);});

//Async function

async function display(){
    const myPromice = new Promise(function(myResolve,myReject){
    setTimeout(function(){myResolve("finished");},3000);
    });

    document.getElementById("id3").innerHTML = await myPromice;
    document.getElementById("id4").innerHTML = "Complete";

}
display();

//Promise.all()
const promise1 = Promise.resolve("Hello");
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve,2000,"goodbye");
});
Promise.all([promise1,promise2,promise3]).then(value => {console.log(value)});



//Object Rest Properties

const {x, y, ...z} = {
    x:1, 
    y:2, 
    a:1, 
    b:2, 
    c:3
};
console.log(x);
console.log(y);
console.log(z.a,z.b,z.c);

// Class
class Person{
    constructor(name,city){
        this.name = name;
        this.city = city;
    }
    getDetails(){
        return this.name + " is from " + this.city;
    }
}
class Employee extends Person{
    constructor(id,name,city){
        super(name,city);
        this.id = id;
    }
   static hello(employee){
       return "Hello " + employee.name;
   }
   getDetails(){
       return this.id;
   }
}

const employee = new Employee(1,"Riddhi","Rajkot");
console.log(Employee.hello(employee));
console.log(employee.id + ":" + employee.getDetails());


//class expressions

let Rectangle = class{
    length;
    width;
    constructor(length,width){
        this.length = length;
        this.width = width;
    }
}
let rectangleObject = new Rectangle(5,3);
console.log("Rectangle Length = "+rectangleObject.length);
console.log("Rectangle Name = "+Rectangle.name);

//Object Prototype

function Car(brand){
    this.brand = brand;
}
Car.prototype.getDetails = function() {
    return this.brand;
};
var myCar = new Car("Ford");
console.log("My Car: "+myCar.getDetails());
