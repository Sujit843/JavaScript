// If Statement

let age = 34;

if( age >= 18){
console.log("vote");
}
else{
    console.log("not vote");
}


// question check number is a multiple of 5 using promt

let num = promt("Enter any number");

if(num % 5 ===0){
    console.log(num, "is a number multiple of 5");
}
else{
    console.log(num, "ia a number is not multiple of 5");
}


// question: give the grade

let score = 78;
let grade;

if(score <= 90 && score >= 100){
    gradeA;
}else  if(score <= 50 && score >= 90){
    gradeB;
}else if(score <= 30 && score >= 50){
    gradeC;
}

console.log(grade);