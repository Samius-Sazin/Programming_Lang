// 1 normal way
const student1 = {name: 'Sami', age: 21};

// or,
const student2 = {};
student2.name = 'Sami';
student2.age = 21;
// print(student 1 & 2) { name: 'Sami', age: 21 }


//2 object way
const student3 = new Object();
student3.name = 'Sami';
student3.age = 21;
// print(student3) { name: 'Sami', age: 21 }

// or,
const student4 = Object.create(null);
//[Object: null prototype] {}

//here with s5 we can access s1's values, but s5 is empty
const student5 = Object.create(student1);// print(student5) {}
// Print(student5.name) = Sami

//change s5.name value
student5.name = 'Sazin'; //print(student5) = 'Sazin'


// 3 function way
function stu_Func(name, age){
    this.name = name;
    this.age = age;
}
const stdent6 = new stu_Func('Sami', 21);
// print(student6) // stuFunc { name: 'Sami', age: 21 }


//4 class way
class stu_Class{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const student7 = new stu_Class('Sami', 21);
// print(student7) // stu_Class { name: 'Sami', age: 21 }