const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    1: 1111,
    2: 2222,
    'de mo': 'demo'
}

console.log(person);
console.log(person['age']);
console.log(person['isMarried']);
console.log(person['name']);
console.log(person[1]);
console.log(person['1']);
console.log(person['de mo']);

console.log(person.age);
console.log(person.isMarried);
console.log(person.name);

const marks = [0, 1, 7, 11];

const m = {
    0: 0,
    1: 1,
    2: 7,
    3: 11,
}

console.log(marks[0], m[0]);
console.log(marks[1], m[1]);
console.log(marks[2], m[2]);
console.log(marks[3], m[3]);