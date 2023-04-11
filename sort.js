const numbers = [2, 4, 1, 0, 234, 12];
numbers.sort(compareNumbersShort);
console.log(numbers);

function compareNumbersShortAscending(number1, number2){
    return number1 - number2;
}

function compareNumbersShortDescending(number1, number2){
    return number2 - number1;
}


// function compareNumbersAscending(number1, number2){
//     if (number1 > number2) {
//         return +1;
//     } else if( number1 < number2) {
//         return -1;
//     } else {
//         return 0;
//     }
// }

// function compareNumbersDescending(number1, number2){
//     if (number1 > number2) {
//         return -1;
//     } else if( number1 < number2) {
//         return +1;
//     } else {
//         return 0;
//     }
// }



// const strings = ['pollo', 'carta', 'alto', 'paperino', '100pippe'];
// strings.sort(compareStrings);
// console.log(strings);

// function compareStrings(string1, string2) {
//     return string1.localeCompare(string2) * -1;
// }


// const booleans = [false, true, true, false, false];
// booleans.sort();
// console.log(booleans);


// const mixed = [2, 4, 1, 0, 234, 12, 'pollo', 'carta', 'alto', 'paperino', '100pippe', false, true, true, false, false];
// mixed.sort();
// console.log(mixed);


// const st1 = {name: 'simone', yob: 2003};
// const st2 = {name: 'davide', yob: 1989};
// const st3 = {name: 'jing', yob: 1993};
// const st4 = {name: 'simone', yob: 1999};


// const students = [st1, st2, st3, st4];
// students.sort(compareStudentsByNamaAndYob);
// console.log(students);

// function compareStudentsByName(student1, student2){
//     return student1.name.localeCompare(student2.name);
// }

// function compareStudentsByYob(student1, student2){
//     if (student1.yob > student2.yob) {
//         return -1;
//     } else if( student1.yob < student2.yob ){
//         return +1;
//     } else {
//         return 0;
//     }
// }

// function compareStudentsByNamaAndYob(student1, student2){
//     if (student1.name.localeCompare(student2.name) === 0) {
//         if (student1.yob > student2.yob) {
//             return +1;
//         } else if( student1.yob < student2.yob ){
//             return -1;
//         } else {
//             return 0;
//         }
//     } else {
//         return student1.name.localeCompare(student2.name);
//     }
// }