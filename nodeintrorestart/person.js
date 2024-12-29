class Person {
    constructor(name, msg) {
        this.name = name
        this.msg = msg
    }
    greet() {
        console.log(`My name is ${this.name} and ${this.msg}`)
    }
}

module.exports = Person