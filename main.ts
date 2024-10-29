//print person name

import { addAbortListener } from "events";

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


23// let car = "subaru";


// console.log("Is car == 'subaru'? I predict true");
// console.log(car == "subaru");

// console.log("Is car == 'toyota'? I predict false");
// console.log(car == "toyota");

// 24 pending



// Alien Colors #1: Imagine an alien was just shot down in a game.
//  Create a variable called alien_color and assign it a value of green, yellow, or red. full-question

// let alien_color:string="green"
// if (alien_color =="green")
// console.log("you earn 5 points")

// let alien_color:string ="red"
// if(alien_color =="green")
// console.log("no out put")

// Alien Colors #2: Choose a color for an alien as you did in Exercise 
// 25, and write an if-else chain. full-question

// let alien_color: string ="green"
// if (alien_color =="green"){
// console.log("you earn 5 points")
// }else {
//    console.log("you earn 10 points")
// };
// let alien_color: string= "red"
// if (alien_color =="green"){
// }else{
//    console.log("you earn 10 points")
// };

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain. - If the alien is green, 
// print a message that the player earned 5 points, full-question

// let alien_color: string= "red"
// if (alien_color =="green"){
//  console.log("you earn 10 points")
// }else if (alien_color == "red"){
//    console.log("you earn 5 points")
// }else if (alien_color == "yellow"){
//    console.log("you earn 15 points")
// }
// let alien_color: string= "green"
// if (alien_color =="green"){
//  console.log("you earn 10 points")
// }else if (alien_color == "red"){
//    console.log("you earn 5 points")
// }else if (alien_color == "yellow"){
//    console.log("you earn 15 points")
// }
// let alien_color: string= "yellow"
// if (alien_color =="green"){
//  console.log("you earn 10 points")
// }else if (alien_color == "red"){
//    console.log("you earn 5 points")
// }else if (alien_color == "yellow"){
//    console.log("you earn 15 points")
// }

// Stages of Life: Write an if-else chain that determines a person’s stage of life. 
// Set a value for the variable age, and then, full-question

// let age:number=55
// if (age < 2) {
//    console.log("you are baby")
// }else if (age < 4){
//    console.log("you are toddler")
// }else if (age < 13){
//    console.log("you are kid")
// }else if (age < 18){
//    console.log("you are teenager")
// }else if (age < 65){
//   console.log ("you are adult")
// }else {
//    console.log("you are older")
// }

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
// if statements that check for certain fruits in your array. full-question

// let fvrt_fruit:string[]=["orange","mango","grapes","peach"]

// if (fvrt_fruit.includes("orange")){
// console.log("you also like orange")
// }
// if(fvrt_fruit.includes("grapes")){
//    console.log("you also like grapes")
// }
// if (fvrt_fruit.includes("mango")){
//    console.log("you also like mango")
//    }
//  if (fvrt_fruit.includes("peach")){
      // console.log("you also like banana")
      // }

      // Hello Admin: Make a array of five or more usernames, including the name admin. 
      // Imagine you are writing code that will print a greeting to each user after they 
      // log in to a website. Loop through the array,
      //  and print a greeting to each user,
   
//  let users:string []= ["admin","ali","raza","asad"] 
//  for(let user of users)  {
//    if (user ==="admin"){
//       console.log("hello, admin would you like to see status report")
//    }else{
//       console.log(`hello ${users} thank you for login again`)
//    }
//  }  

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. 
// - If the list is empty, 
// print the message We need to find some users! full-question

// let users:string []= ["admin","ali","raza","asad"] 

// users=[]
// if(users.length === 0){
//    console.log("you need to find some users")
// }

// Checking Usernames: Do the following to create a program that simulates
//  how websites ensure that everyone has a unique username. 
// - Make a list of five or more usernames called current_users

// let current_users: string[] = ["Ali","admin","Raza","saad","Asad","Bilal"];

// let new_users: string[] = ["Samad","Hasan","admin","Salman","noman"];

// new_users.forEach((newUser) => {
//   if (
//     current_users.some(
//       (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
//     )
//   ) {
//     console.log(`${newUser} will need to enter a new username.`);
//   } else {
//     console.log(`${newUser} is available.`);
//   }
// });

// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
//  Most ordinal numbers end in th, except 1, 2, and 3. full-question

// let numbers:number [] = [1,2,3,4,5,6,7,8,9]
// for (let number of numbers)
// if (number === 1){
//    console.log(`${number}st`)

// }else if (number === 2){
//    console.log(`${number}nd`)
// }else if (number === 3){
//    console.log(`${number}rd`)
// }else {
//    console.log(`${number}th`)
// }

// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
//  and then use a for loop to print the name of each pizza.

// let pizza:string [] = ["paproni", "fajita", "chicken"]

// // for (let pizzas of pizza){
// //    console.log(pizzas)
// // }
// for (let pizzas of pizza){
//    console.log(`i really love ${pizzas}, pizza`)
// }

// Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list,
//  and then use a for loop to print out the name of each animal.

// let animal:string [] = ["lion","tiger","cat"]

// for( let animals of animal) {
//    console.log(animals)

// }
// for (let animals of animal){
//    console.log(`a ${animals} ,have a tail`)
// }
// console.log("all of these animals are great but i like cat")


// Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list,
//  and then use a for loop to print out the name of each animal.


//  function shirtOrder(size:string, text:string): void{
//    console.log(`you order a ${size} only you ${text}`)
//  }
//  shirtOrder('large',"all buy")
//  shirtOrder('medium',"pay in account")


// Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list, 
// and then use a for loop to print out the name of each animal.

// function makeShirt (size: string ='larger', text: string = 'i like this') :void{
//    console.log(`you have order ${size} it has printed ${text}`)
// }
// makeShirt();
// makeShirt('medium');
// makeShirt('small',`i want this shirt`);

// Cities: Write a function called describe_city() that accepts the name of a city and its country.
//  The function should print a simple sentence, such as Karachi is in Pakistan.
//   Give the parameter for the country a default value. Call your function for three different cities,
//  at least one of which is not in the default country.

//  function describe_city( city:string, country:string ='pakistan') :void{
//    console.log(`${city}, is in ${country}`)
//  }
//  describe_city('karachi')
//  describe_city('delhi','india')
//  describe_city('makkah','ksa')

// City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this

// function city_country(city:string, country:string):string{
//    return (`${city},${country}`)
// }
// let c1 = city_country('lahore','pakistan')
// let c2 = city_country('delhi','india')
// let c3 = city_country('makkah','ksa')

// console.log(c1)
// console.log(c2)
// console.log(c3)

// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, 
// and it should return a Object containing these two pieces of information.
//  Use the function to make three dictionaries representing different albums. Print each return value to 
// show that Objects are storing the album information correctly

// function make_album(artist:string,title:string,):{artist:string, title:string } {
//    const dictionaries ={
//     artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//     title: title.charAt(0).toUpperCase() + title.slice(1)

//    };
//    return dictionaries;
// }

// let album = make_album("atif","jal")
// console.log(album)
// album = make_album("ali","top")
// console.log(album)
// album = make_album("shazad","new",10 )
// console.log(album);


// other way

// function make_album(artist: string, title: string, tracks: number) {
//    let album = { artist, title };
//    if (tracks) {
//      album["track"] = tracks;
//    }
//    return album;
//  }
 
//  console.log(make_album("Artist One", "The First Album"));
//  console.log(make_album("Artist Two", "The Second Album"));
//  console.log(make_album("Artist Three", "The Third Album", 12));

//  41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//  which prints the name of each magician in the array.

// let magician: string[] = ["peter","jack","alien"];

// function show_magicians(magician:string[]){
//   magician.forEach ((magician) => {
//     console.log(magician);
//   });
// }
// show_magicians(magician);

// 42 .Great Magicians: Start with a copy of your program from Exercise 41.
//  Write a function called make_great() that modifies the array of magicians
//   by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

// let magician: string[] = ["peter","jack","alien"];
// function show_magicians(magician:string[]){
//     magician.forEach ((magician) => {
//       console.log(magician);
//     });
//   }
// function greet (magician:string[]){
//   for(let i = 0;i <magician.length;i++) {
//     magician[i] = magician[i] +  ",is the great";
//   }
// }
// greet(magician);
// show_magicians(magician)

// 43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged,
//  return the new array and store it in a separate array. Call show_magicians() 
//  with each array to show that you have one array of the original names and one 
// array with the Great added to each magician’s name.


// let magicians: string[] = ["Alice", "David", "Chris"];

// function make_great(magicians: string[]): string[] {
//   let greatMagicians: string[] = [];
//   magicians.forEach((magician) => {
//     greatMagicians.push(`${magician} the Great`);
// });
// return greatMagicians;
// }

// function show_magicians(magicians: string[]) {
//   magicians.forEach((magician) => {
//     console.log(magician);
//   });
// }

// // Creates a new modified array
// let greatMagicians = make_great(magicians.slice()); 

// console.log("Original magicians:");
// show_magicians(magicians); // Shows original names
// console.log("Great magicians:");
// show_magicians(greatMagicians); // Shows modified names

// 44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//   and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.


// function sandwich(...item:string[]){
//   console.log(`enjoy your sandwic with:${item}`);
// }
// sandwich("cheese","chicken")
// sandwich("mayo","garlic")
// sandwich("special","cheese loadedd","sauces")


// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name.
//   It should then accept an arbitrary number of keyword arguments. 
//   Call the function with the required information and two other name-value pairs,
//    such as a color or an optional feature. Print the Object that’s returned to
//  make sure all the information was stored correctly.

type car = {
  manufacture: string
  model:number
  [key:string]:any
}
function create_car (manufacture:string, model:number, optional:Record<string,any>): car{
  return{
    manufacture,
    model,
    ...optional,
  }
}
const my_car = create_car("toyota", 2008,{color:"black" , Registerd: "2010"})  
console.log(my_car)