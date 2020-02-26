// if (1 === "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// if (1 != "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

//let age = 25

// if ( age > 17 ) {
//     console.log("can serve you")
// }
// else {
//     console.log("sorry i can not serve you")
// }

// let country = "uk"

// if (age > 17 && country == "uk"){
//     console.log("i can serve you")
// }
// else {
//     console.log( "i can not serve you")
// }

// || is or 


// chalage 1

// let password = "here987"

// if (password.length < 8){
//     console.log("too short")
// }
//  else {
//      console.log(password)
//  }

//  //challage 2

// let num = 20
// if (num%3==0 || num%5==0){
//     console.log("is a division of 3 or 5")
// }
// else {
//     console.log("is not a division of 3 or 5")
// }


// //challage 3

// num = 5

// if(num%5==0 && num%3==0){
//     console.log("fizz buzz")
// }
// else if(num%5==0){
//     console.log("buzz")
// }
// else if(num%3==0){
//     console.log("fizz")
// }
// else{
//     console.log(num)
// }
  
// // challage 4
// let time = 17
// let townOfHome = "ellesmere port"
// let placeOfWork = "shop"

// if(time<8 && time >=0 || time>18 && time<25 ){
//     console.log(`i am currently ${townOfHome}`)
// }
// else if (time == 8 || time == 18){
//     console.log("commuting")
// }
// else if (time>8 && time<18){
//     console.log(`i at my place of work ${placeOfWork}`)
// }

// //challage 5

// let word = "race car"
// let wordlength = (word.length-1)
// if(word.charAt(0) === word.charAt(wordlength)){
//     console.log("the first letter and the last are the same")
// }
// else{
//     console.log("the first and late letter are differnt")
// }
    

// //challage 6
// let num1 = 5
// let num2 = 4

// if ((num1+num2)%2==0){
//     console.log(`even ${num1+num2}`)
// }
// else {
//     console.log(`odd ${num1*num2}`)
// }

// //challage 7

// num = 10101
// let numstring = String(num)
// let numdivid = numstring.length/2
// let num2round= Math.round(numdivid)
// let numsubtrack1 = num2round-1





let space1 = "x";
let space2 = "x";
let space3 = "o";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";
//Draw the grid
console.log("   |   |");
console.log(` ${space1} | ${space2} | ${space3}  `);
console.log("   |   |");
console.log("-----------");
console.log("   |   |");
console.log(` ${space4} | ${space5} | ${space6}  `);
console.log("   |   |");
console.log("-----------");
console.log("   |   |");
console.log(` ${space7} | ${space8} | ${space9}  `);
console.log("   |   |");

if(space1=="x" && space2=="x" && space3=="x"){
    console.log("X wins")
}
else if(space1=="o" && space2=="o" && space3=="o"){
    console.log("O wins")
}
else if(space1=="o" || space2=="o" || space3=="o"){
    console.log("x can not win on top row")
}
else if(space1=="x" || space2=="x" || space3=="x"){
    console.log("o can not win on top row")
}

else{
    console.log("everbody has a chance")
}


let age = 61

if(age<18){
    console.log("you pay £8")
}
else if (age>17 && age<60){
    console.log("you pay £10.95")
}
else if (age>=60){
    console.log("you pay £7.50")
}
