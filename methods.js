const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],

    //method no parameter
    exam: function () {
        //object property
        return this.name + 'is participating in an exam';
    },

    //method one parameter
    improveExam: function (subject) {
        //one method inside method call
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
    },

    //method muliple parameter
    treatDey: function (amount, tips) {
        //inside method you can acess object property.
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const output = student.exam();
// console.log(output);
const reExam = student.improveExam('Algebra');
// console.log(reExam);
const remaining = student.treatDey(900, 100);
console.log(remaining);
const dolaRemaining = student.treatDey(500, 50);
console.log(dolaRemaining)