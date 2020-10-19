/* FALTAN LOS BONUS EJERCICIOS */ 

//Ejercicios de Ironhack: https://github.com/ironhack-labs/lab-javascript-basic-algorithms

let hacker1 = "RossFromFriends"; //Driver's Name
let hacker2 = "Nonotak";  //Navigator's Name
let capital = "";
let rev = "";
let lexi = 0;

console.log("//ITERATION 1");
console.log("The driver's name is " + hacker1);
console.log("NavigatorName name is " + hacker2);

console.log("\n//ITERATION 2");
if(hacker1.length == hacker2.length) {
  //console.log("Wow, you both have equally long names, " + hacker1.length + " characters!.")
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
} else if(hacker1.length > hacker2.length) {
  //console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else {
  //console.log(" It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

console.log("\n//ITERATION 3");
for(let i=0; i < hacker1.length; i++) {
  capital += hacker1[i].toUpperCase() + " ";
}
console.log(capital);

for(let i=0; i < hacker2.length; i++) {
  rev += hacker2[hacker2.length-i-1];
}
console.log(rev);

for(let i=0; i < hacker1.length; i++) {
  lexi += hacker1[i].localeCompare(hacker2[i]);
  if(lexi < 0) {
    console.log("The driver's name goes first.");
    break;
  } else if(lexi > 0) {
    console.log("Yo, the navigator goes first definitely.");
    break;
  } else if(i == hacker1.length-1 && lexi == 0) {
    if(hacker1.length > hacker2.length) {
      console.log("The driver's name goes first.");
    } else if(hacker1.length < hacker2.length) {
      console.log("Yo, the navigator goes first definitely.");
    } else {
      console.log("What?! You both have the same name?");
    }  
  }
}

console.log("\n//BONUS 1");