// //to log to console
// console.log("hello")

// //to check length
// console.log("hello".length)

// //to make it all uppercase
// console.log("hello".toUpperCase())

// // to gentina a random number between 0 and 1
// console.log(Math.random())

// //add *10 to time the anser by ten
// console.log(Math.random()*10)

// //add Math.fllor to stop the desimals from appioing
// console.log(Math.floor(Math.random()*10))

// //to show 1 letter in a string use charAt()
// console.log("All Around The World".toLocaleUpperCase().charAt(7))

// //let store infomation for later
// let car = "ford"
// console.log(car)

// //Let variable can be change 
// car= "bmw"
// console.log(car)

// //Const is a variables the can not be change
// const bestgame = "skyrim"
// console.log(bestgame)

// //both Will desplay “my favourite game is skyrim.” in the console 
// console.log(" my faveourite game is "+bestgame+".")
// console.log(`my faveourite game is ${bestgame}.`)

// if (condition1) {
//     //do this
// }
// else if (condition2) {
//     //do this
// }
// else {
//     //if nothing else matched do this
//for exsample
// let condition = "true"
// if (condition == "true"){
//     console.log("its true")
// }
// else if (condition=="false"){
//     console.log("its false")
// }
// else{
//     console.log("how did you mess up true or false")
// }

// //== check if the info is the same, type does not matter
// // ===  check if the info nad type are the same 
// // !=check if the info is the not same, type does not matter
// // !==  check if the info nad type are the not same 

// // For exslple

// // let favouritegame = "skyrim"
// // let favouritefile = "avengers"

// // if (favouritegame=="skyrim" && favouritefile=="avengers"){
// //     console.log("your me")
// // }
// // else if(favouritegame=="skyrim"){
// //     console.log("good taest in game but not film")
// // }

// // else if (favouritefile=="avengers"){
// //     console.log("god teast in film but not games")
// // }
// // else{
// //     console.log("what wrong with you")
// // }
// // // it runs from the top and when it fine somethink it matches with it stops the i will not try the rest
// // // || = or
// // if(favouritegame=="skyrim"||favouritefile=="avegers"){
// //     console.log("you great")
// // }
// // else{
// //      console.log("your wrong")
// // }

// // //functions
// // // on of 
// // let pconoff = true;
// // const turningOnOrOff = () => {
// //     if (pconoff){
// //         console.log("turning on");
// //         pconoff=false;
// //     } 
// //     else{
// //         console.log("turning off");
// //         pconoff=true;
// //     }
// // }
// // turningOnOrOff()

// // let coffeeIsGrinding = true;
// // const pressGrindBeans = () => {
// //  if (coffeeIsGrinding) {
// //  console.log("Stopping the grind");
// //  coffeeIsGrinding = false;
// //  } else {
// //  console.log("Grinding is about to begin");
// //  coffeeIsGrinding = true;
// //  }
// // }
// // pressGrindBeans()



// const cars =(carmake,cartype)=>{
//     console.log(`my car is a ${carmake} ${cartype}`)
// }
// cars("ford","focus")
// cars("bmw","m5")

// //array are lists
// let games =[
//     "fallout",
//     "skyrim",
//     "sonic"
// ]
// console.log(games)

// //to see a persific part of the list do this 
// //it counds form 0 so 0=1st item 1 = 2rd item and so on
// console.log(games[1])

// // to change something in the this from this point on 
// games[2]= "mass effect"
// console.log(games)

// // to see the numbre off items in the list
// console.log(games.length)

// //push add to the bottem of the list
// games.push("red dead")
// console.log(games)

// //pop removes the last item
// games.pop()
// console.log(games)

// //shift remove the first iten in the list
// games.shift();
// console.log(games)

// //unshifr add to the start of the list
// games.unshift("fall out new vegas")
// console.log(games)

// //slice show you port of the list without making changes to it
// console.log(games.slice(1,2))

// //splice can removee parts of the list
// games.splice(1,1)
// console.log(games)
// games.push("skyrim")
// //or it can replace
// games.splice(1,1,"elder scrolls v")
// console.log(games)

// // a loop is someing the redo a task till it is done
// for(gameindex=0;gameindex<games.length;gameindex++){
//     console.log(games[gameindex])
//}
//to make 
//1
//2
//3 
//to 10 appicere this
// for (i=0; i<10; i++){
//     console.log(i);
// }
//for the reverse this
// for (i=10; i>=0; i--){
//     console.log(i);
// }

//randome gentirater

let whatShouldIPlay =["skyrimvr","stardew vally","minecraft","mordeue","overwatch","persona 5","greedfall","filler"];
let whatimcurrentlyplaying="minecraft";
while (whatimcurrentlyplaying!="filler"){
    console.log(whatimcurrentlyplaying)
       whatimcurrentlyplaying = whatShouldIPlay[Math.floor(Math.random()*8)]

}
// console.log(whatimcurrentlyplaying)
// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Heart";
// while(currentCard != "Spade"){
//  console.log(currentCard);
//  currentCard = cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard);

