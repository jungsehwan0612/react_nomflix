class Human {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}

const sam = new Human("Sam", "Jung");

console.log(sam);
console.log(sam.name);

class Baby extends Human {
    cry() {
        console.log("으아아아앙~");
    }

    sayName() {
        console.log(`내 이름은 ${this.name}입니다.`)
    }
}

const baby = new Baby("Nick","Kim");
baby.cry()
baby.sayName()