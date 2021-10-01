
const shoppingList = ["bread","coffee","soda","wire"];

//for each
shoppingList.forEach((element, g)=>{
console.log(`The index is ${g} and the product is ${element}`);
});

//map
const newlist = shoppingList.map(item=> item + "new");
console.log(newlist);

//filter
const filterlist = shoppingList.filter(item => item === "soda");
console.log(filterlist);


//this syntax
function Person(name,age,haircolor) {
    this.name = name;
    this.age = age;
    this.haircolor = haircolor;
}
Person.prototype.sayName = function(){
    console.log("My name is" + this.name);
};

// var Ed =new person("John", 25, "notnice");
// console.log(Ed);

// Ed.sayName();

function Ed(occupation,hobbies,name,age,haircolor){
    Person.call(this, name, age, haircolor);
    this.occupation = occupation;
    this.hobbies = hobbies;

}
Ed.prototype = Object.create(Person.prototype);
const person = new Ed("Dev", "Dancing", "Stein", 25, "notnice");
person.sayName();


class myList {
    constructor(items, no){
        this.items = items;
        this.no = no;
    }
    sayList(){
        console.log(this.items);
    }
}

const list = new myList(["milk, choco, Redbull"], 3);

class Product extends myList {
    constructor(items, no, amount, cost){
        super(items, no);
        this.amount = amount;
        this.cost = cost;
    }
}

const product = new Product(["Redbull, chocolate, candy"], 3, 2, 20);
console.log(product);
product.sayList();

