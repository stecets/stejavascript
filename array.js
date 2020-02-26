// let faveoriteSong = [
//     "dirty little secret",
//     "devil trigger",
//     "thnks fr th mmry"
// ]
// console.log(faveoriteSong[2])
// faveoriteSong[2] = "dance dance"
// console.log(faveoriteSong)
// console.log(faveoriteSong.length)

// //Push add to list
// faveoriteSong.push("i write sins not tragitys")
// console.log(faveoriteSong) 

// //pop remove last item
// faveoriteSong.pop()
// console.log(faveoriteSong)
//shift unshift slice splice
let faveoritewebsite=[
    "gmail",
    "youtube",
    "steam"
]
console.log(faveoritewebsite);
faveoritewebsite.push("twitter","reddit");
console.log(faveoritewebsite);
faveoritewebsite.pop();
faveoritewebsite.pop();
console.log(faveoritewebsite);

//shift removw the first in the list
faveoritewebsite.shift()
console.log(`shift [${faveoritewebsite}]`);

//unshift add to the start of the list
faveoritewebsite.unshift("facebook","humbulbundle");
console.log(`unshift [${faveoritewebsite}]`);

//slice temporty mack a copy of it or it can show everying after the 1st number and before the second num
console.log(faveoritewebsite.slice())
faveoritewebsite.slice()
console.log(faveoritewebsite)
console.log(`slice [${faveoritewebsite.slice(1)}]`)

//splice add,remove or replace in the list splice(first num is postion, second is how many do it replace 0 = at to list and don remove anytink, and here is where you put the new data)
faveoritewebsite.splice(2,1,"gog")
console.log(`splice [${faveoritewebsite}]`)
faveoritewebsite.splice(3.1)
console.log(faveoritewebsite)

//sort sorteds it
faveoritewebsite.sort()
console.log(faveoritewebsite)

// //sort when it soer number it not large to small it 1,12,1289,2,23,283,3,398
// let num1=[1,2,3,4,12,22,33,44,19,29,39,409]
// num1.sort()
// console.log(num1)


//indexOf tell you the proition of an item
console.log(faveoritewebsite.indexOf("gog"))

