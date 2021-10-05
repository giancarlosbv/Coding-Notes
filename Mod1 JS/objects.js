const person = {
    firstName : "John",
    lastName : "Doe",
    address : "101 some street",
    age: 35,
    fullName: () => person.firstName + " " + person.lastName
}

console.log(person.fullName())


const student = {
    firstName: "Jane",
    lastName : "Doe",
    class: "10th",
    age: 16,
    gender: "Woman",
    math: 75,
    science: 96,
    english: 88,
    getAverage: function (sc1,sc2,sc3) {
        var average = (this.math+this.science+this.english)/3
        return average
    },
    profile () {return this.firstName + this.lastName + " is a " + this.age + 'year old ' + this.class + ' grader.'}
}
console.log(student.getAverage())
console.log(student.profile())