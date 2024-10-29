"use strict";
//print person name
Object.defineProperty(exports, "__esModule", { value: true });
// let personName: string= "eric";
// console.log(`hello ${personName}, would you like to some pyhon today?`);
//Name cases
//lower case
// let personName: string="Hadi"
// console.log("lowercase:",personName.toLowerCase());
// //upper case
// console.log("uppercase:",personName.toUpperCase());
// //title case
// console.log(personName.replace(/\bw/g,c=> c.toUpperCase()))
//famous quote
// let quote: string= "A person who made never mistake never tried anything."
// let author:string= "Albert einstien"
// console.log(`${author} once said,"${quote}`);
// famous person
// let quote:string= "A person who made  never mistake never tried anything.";
// let famous_person:string="albert Einstien"
// let message=`${famous_person} once said ${quote}`;
// console.log(message);
//Striping name
// let personName: string=`\n\t Hadi Shah\t\n`;
// console.log(personName);
// let stripped: string = personName.trim();
// console.log(stripped);
// Number eiht
// console.log(5+3)
// console.log(10-2)
// console.log(4*2)
// console.log(16/2)
// favorite number
// let favrtNo: number=7;
// console.log(`my favourite number is ${favrtNo}`);
// exercise 10 comment
// Array
// let guest: string[]=['ali','raza','asad','saad'];
// guest.forEach(member => {
//    console.log(`dear ${member} ,you are invited for dinner`);
// });
// array print message
// let member: string[]=['ali?','raza?','asad?','saad?','ibrahim'];
// let message: string="how are you ";
// for(let i=0; i<member.length; i++) {
//     console.log(message + member[i])
// }
// Array print message direct
// let transporation:string[]=[`civic`,`carolla`,`taxi`,`bus`,`bike`]
// for(let i=0; i<transporation.length; i++) {
//     console.log( `i would like to buy a `+ transporation[i])
// }
// guest invitation message
// let guest:string[]=[`ali`,`raza`,`asad`,];
// guest.map((item)=>(console.log(`Dear ${item},\n you are invited`))) ;
// modify guest list add person & remove person with message
// let guest:string[]=[`ali`,`raza`,`asad`,`saad`,];
// let absent_guest="asad";
// console.log(`Dear ${absent_guest} you are not invited`);
// let new_guest="hadi"
// guest[guest.indexOf(absent_guest)] = new_guest;
// guest.forEach(inv => {
//    console.log(`Dear \n\t${inv}, \n \twould you like to join me for dinner?`);
// });
// add guest in first,middle,& end
// let guest:string[]=[`ali`,`raza`,`asad`,`saad`,];
// console.log("good news we found new table so we invite 3 more");
// guest.unshift("Wali")
// guest.splice(2,0,"bilal");
// guest.push("hasan")
// for (let i=0; i<guest.length; i++) {
// console.log(`your welcome \n` + guest[i] + ` \nfor coming\n`)
//     }
// remove all guest and just invite only 2 guest & prnt msg
// let guest:string[]=[`ali`,`raza`,`asad`,`saad`,];
// while (guest.length > 2) {
//    let removedGuest = guest.pop();
//    console.log(`Sorry \n, ${removedGuest},\n I can't invite you to dinner.`);
// }
// guest.forEach(guest => {
//    console.log(`Dear \n ${guest}, \tyou're still invited to dinner.`);
// });
// guest.splice(0, guest.length);
// console.log(guest);
// store array but not in alphabatical
// let places:string[]=[`karaachi`,"islamabad","lhr","pwr","mltn"]
// console.log("orgnl order",places);
// console.log("alphabatical",[...places].sort());
// console.log("orgnl order",places);
// console.log(" reverse alphabatical",[...places].reverse());
// console.log("orgnl order",places);
// console.log(" reverse alphabatical",places.reverse());
// console.log(" orgnl alphabatical",places.reverse());
// console.log("alphabatical",places.sort());
// console.log(" reverse alphabatical",places.reverse());
// let guests: string[] = ["Albert Einstein", "Marie Curie", 
//    "Leonardo da Vinci", "Isaac Newton", "Charles Darwin"];
//    console.log(`I am inviting ${guests.length} people to dinner.`);
// Think of something you could store in a array. For example, you could make a list of 
// mountains, languages, or anything else you’d like. Write a program that creates a list containing these items.
// let language: string[]=["english","arbic","french","russian"]
// console.log("i would like to laern" ,language);
// They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.
// let student: {Name:string ,class:number, rollNo:number } ={
//    Name:"Ali",
//    class:10,
//    rollNo:101010,
// };
// console.log(`student Details :
//    ${student.Name} 
//    ${student.class} 
//    ${student.rollNo}`);
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
//  Change an index in one of your programs to produce an index error.
//  Make sure you correct the error before closing the program.
// let guest:string[]=[`ali`,`raza`,`asad`,`saad`,];
// // console.log(guest{3});
// console.log(guest[3]);
// Conditional Tests: Write a series of conditional tests. 
// Print a statement describing each test and your prediction for the results of each test.
// //  Your code should look something like this, full-questionTest 1: Evaluates to True because the variable "car"
//  is assigned the value "subaru", and the comparison using "===" checks for both value and type equality.
//   2. Test 2: Also evaluates to True because the variable "car" is not assigned the value "toyota", 
//   so the comparison using "!==" is true. 3. Test 3: Evaluates to False because JavaScript is case-sensitive,
//    so "subaru" is not equal to "Subaru". 4. Test 4: Evaluates to True because "car" is equal to "subaru" 
//    and not equal to "toyota". 5. Test 5: Evaluates to True because "car" is not equal to "Subaru".
//     6. Test 6: Evaluates to False because "subaru" is not equal to "Subaru". 7. Test 7:
//      Evaluates to False because "car" is not assigned the value "toyota". 8. Test 
//      8: Evaluates to True because "car" is not "subaru" but also not "toyota". 9. Test
//       9: Evaluates to False because "car" is not assigned the value "ford".
//        10. Test 10: Evaluates to False because "car" is assigned the value "subaru"
23; // let car = "subaru";
function create_car(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const my_car = create_car("toyota", 2008, { color: "black", Registerd: "2010" });
console.log(my_car);
