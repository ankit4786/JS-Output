let student1 = { name: "Ankt", age: 10 };
console.log(student1);
let student2 = student1;
student2.age = 20;
console.log(student2);
let student3 = {};
Object.assign(student3, student2);
console.log(student3);
let student4 = {};
let clas = { class: "MCA" };
Object.assign(student4, student1, clas);
console.log(student4);
