const input = require('readline-sync');

//let marks = new Array();

// function getValues (){
// marks[0] = input.question("enter grade of first student\n> ");
// marks[1] = input.question("enter grade of second student\n> ");
// marks[2] = input.question("enter grade of third student\n> ");
// marks[3] = input.question("enter grade of fourth student\n> ");
// marks[4] = input.question("enter grade of fifth student\n> ");
// }

//getValues();

//let getDifference = (marks) => console.log(marks[0] - marks[marks.length - 1]);

//getDifference(marks);

let n = 0;
let k = 10;
let res = 0;
for (; n < k; n++) {
    res += n + k;
    k--;
}
console.log(res);