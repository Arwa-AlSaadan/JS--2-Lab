
// #1


let highet = 1.60
let weight = 60


BMI = weight/(highet*highet)
console.log(BMI);


if (BMI < 15) {
    console.log("نقص حاد جدًا في الوزن");
    
} else if(BMI == 15 || BMI <16) {
    console.log("نقص حاد في الوزن");
   
} else if(BMI == 16 || BMI <18.5) {
    console.log("نقص في الوزن");

} else if(BMI == 18.5 || BMI <25) {
    console.log("وزن طبيعي");

} else if(BMI == 25 || BMI <30) {
    console.log("زيادة في الوزن");

} else if(BMI == 30 || BMI <35) {
    console.log("سمنة درجة أولى");

} else if(BMI == 35 || BMI <40) {
    console.log("سمنة درجة ثانية");
} else {
    console.log("سمنة مفرطة جدا");
}


console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// console.log("continue");

// let i
// for (i=0;i<=10;i++){
//     if ((i/2) % 0 ){
//         console.log(i);
//     } 
// }

// console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

//Loop

// Even numbers 0-25
for (let i=0; i<= 25;i++){
    if(i%2 == 0){
        console.log(i);
    }
}


console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

//squares of numbers
for (let i=0 ; i<=10 ; i++){
    console.log(i*i);
}

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

//odd numbers
for (let i=0; i<= 20;i++){
    if(i%2 != 0){
        console.log(i);
    }
}

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

//Fibonacci sequence
console.log("Fibonacci sequence:");

let num1=0 
let num2=1
let next

for (let i=1; i<=10 ; i++){ 
    console.log(num1);
    next= num1 + num2
    // num1 = next
    num1 = num2
    num2 = next
}

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

//squares of numbers
for (let i=0 ; i<=10 ; i++){
    console.log(i*i);
}

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

//Multiplication table

for (let i=1;i<=3;i++){
    for (let j=1 ; j<=10 ; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}









