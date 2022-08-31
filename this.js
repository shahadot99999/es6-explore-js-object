// console.log(this);

//always time this focus object . 
const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],

    //regular function this can normally see. but arrow functyion it show global or window. it means it show up one step.

    //regular function
    exam: function () {
        console.log(this);
        return this.name + ' is participating in an exam';
    },
    //arrow function
    examArrow: () => {
        console.log(this);
    },
    examNested: () => {
        const arrow = () => {
            console.log(this);
        }
        arrow();
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}
kodomAli.exam();

const badamAli = {
    name: 'kacha badam Ali',
    money: 8000
}

badamAli.exam = kodomAli.exam;
badamAli.exam();

function clickHandler() {
    console.log('inside click handler', this);
}
document.getElementById('btn-click2').addEventListener('click', function () {
    console.log(this);
})