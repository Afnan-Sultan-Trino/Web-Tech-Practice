
let person ={

    name: "Trino",
    age:23,
    CGPA: 3.7,
    isEngineer: true,
    address : {  //nested object 
            city:"Dhaka",
            PsCode:2348,
            country:"Bangladesh"
    },
    hobbies:["Painting","Gardening","Travelling"],
};

var objAcess = person.CGPA;
var nameAcess = person.name;
var objAcess = person.age;
var objAcess = person.isEngineer;
console.log(objAcess);  // here, only latest one will print, such as: only true will print because latest call was isEngineer
console.log(nameAcess);
console.log(person.address.city)
console.log(person["address"]["country"]) //alternative of previous output calling for nested object
console.log(person.hobbies[2]) //for displaying array inside an object

for(let hobby of person.hobbies){ //using "for of" array but "for in" will only print the index number
    console.log(hobby)
}


// Alternative way of declaring Object

let person2=new Object();

person2.name="Afnan";
person2.age=23;
person2.address=new Object();
person2.address.city="Bashundhara";

console.log(person2.address.city)

//calling function inside object

let person3={
    firstName:"Nadim",
    lastName:"Abir",
    fullName: function(){
    return this.firstName + " " + this.lastName;
    }
}
console.log(person3.fullName());



