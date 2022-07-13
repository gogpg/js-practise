const marks = [2, 8, 7, 10, 5];

const doubleMarks = marks.map(n => n * 2);
const anonDoubleMarks = marks.map(function (n) { return n * 2 });

console.log(marks);
console.log(doubleMarks);
console.log(anonDoubleMarks);