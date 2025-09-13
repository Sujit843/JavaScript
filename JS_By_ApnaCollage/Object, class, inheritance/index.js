const employee = {
    calcTax () {
        console.log("tax rate is 10%");
    },
};

const sujit = {
    salary : 50000,
};

const sujitKumar1 = {
    salary : 50000,
};

const sujitKumar2 = {
    salary : 50000,
};

sujit.__proto__ = employee;

// Class 

class ToyotaCar  {
    constructor(brand, mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    Start(){
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortuner", 10);  // constructor
fortuner.Start();

// Inheritance

class Person {
constructor(){
    this.species = "homo sapiens";
}
eat(){
    console.log("eat");
}
sleep(){
    console.log("sleep");
}
}

class Engineer extends Person {
    work(){
        console.log("solve problem ")
    }
}

let engObj = new Engineer();

// Ques: create user data 

let data = "secret information";

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data = ", data);
    }
}

class Admin extends User {
    constructor(name, email){
        super(name,email);
    }
    ediData(){
        data = "some new data";
    }
}

let student1 = new User("sujit", "sujit@email.com");
let student2 = new User("gautam", "gautam@email.com");

let Admin1 = new Admin("admin", "admin@college.com");