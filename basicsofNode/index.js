class Person {
    constructor(name, course) {
        // {}
        this.name = name;
        this.course = course;
        //{name:"Rishabh",course:"WEb Dev"}

    }

    getInfo() {
        return `Hello My name is ${this.name} and currently learning ${this.course}`
    }
}


module.exports = Person
