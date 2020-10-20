/* COMPLETO */ 

//Ejercicios de Ironhack: https://github.com/ironhack-labs/lab-javascript-basic-algorithms

let hacker1 = "RossFromFriends"; //Driver's Name
let hacker2 = "Nonotak";  //Navigator's Name
let capital = "";
let rev = "";
let lexi = 0;

console.log("//ITERATION 1");
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

console.log("\n//ITERATION 2");
if(hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
} else if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else {
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

// BONUS
console.log("\n//BONUS 1");
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quam dui, feugiat sed consequat et, porta sed tortor. Proin eget ex vulputate, varius risus sed, molestie tortor. Sed tincidunt semper tortor, ac rhoncus risus pharetra a. Sed vehicula lorem vitae erat porttitor, eu venenatis ligula congue. Sed faucibus ornare semper. Proin dapibus feugiat ligula id scelerisque. Pellentesque ante est, aliquet nec blandit vulputate, suscipit vitae enim. Praesent luctus est vitae viverra dapibus. Vivamus a nulla commodo, cursus dui non, ullamcorper odio. Etiam egestas sed lectus in faucibus. Aenean vel commodo nibh. Praesent vestibulum semper lorem et porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque maximus, orci vel faucibus cursus, tortor enim suscipit lectus, vitae posuere orci mi ac nulla. Aliquam mauris justo, auctor vel sagittis vel, tempus rhoncus ipsum. Aliquam vel justo non eros eleifend consequat. Integer a purus eu massa elementum fringilla. Praesent pulvinar bibendum nisl, ut iaculis velit. Phasellus feugiat accumsan massa non pellentesque. Aenean ante ipsum, ornare at neque vel, rutrum maximus sapien. Curabitur ullamcorper urna a ligula finibus egestas eget et nunc. Pellentesque facilisis laoreet feugiat. Vivamus facilisis suscipit diam at iaculis. Vestibulum vel vehicula elit. Donec at tristique ex. Donec et metus convallis, vehicula elit et, sodales odio. Etiam ut odio molestie, ultricies leo in, efficitur tellus. Morbi sed dapibus mauris, quis cursus neque. Maecenas eu diam at tortor accumsan tincidunt et non ante. Duis non dui nec nibh consectetur congue id quis justo. Fusce commodo augue velit, vel facilisis sapien aliquam quis. Etiam faucibus porttitor sem, quis dictum massa ultricies vitae. Cras hendrerit vestibulum mauris, imperdiet dapibus diam efficitur vel.";
let numWords = 0;
let matchWord = "ipsum";
let repWord = 0;
if(lorem.length > 0) {
  numWords = 1;
}
for(let i = 0; i < lorem.length; i++) {
  if(lorem[i] == " ") {
    numWords++;
  }
}
console.log(`Number of words in lorem: ${numWords}`);

let splittedLorem = lorem.replace(/[^a-zA-Z0-9 ]/g, "").split(" "); //Remueve todos lo caracteres especiales, excepto el espacio y separa las palabras individuales en un arreglo.
for(let i = 0; i < splittedLorem.length; i++) {
  if (splittedLorem[i] == matchWord) {
    repWord++;
  }
}

console.log(`Number of times "${matchWord}" is repeated in lorem: ${repWord}`);


/* 
  /[A-Z]/    -> coincide con todas las letras mayúsculas.
  /[a-z]/    -> coincide con todas las letras minúsculas.
  /[0-9]/    -> coincide con todos los números.
  /[^A-Z]/    -> coincide con todas las que NO son letras mayúsculas.
  /[^a-zA-Z0-9]/g    -> coincide con todos los cáracteres especiales, incluidos espacios, ?, !.
*/

console.log("\n//BONUS 2");
let phraseToCheck = "A man, a plan, a canal, Panama!";
let phrase = phraseToCheck.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
let palindrome = true;
for(let i = 0; i < parseInt(phrase.length/2); i++) {
  if(phrase[i] != phrase[phrase.length-i-1]) {
    palindrome = false;
    break;
  }
}
console.log(`Phrase to Check: ${phraseToCheck}`);
if(palindrome == true) {
  console.log("Palindrome!");
} else {
  console.log("Not a Palindrome!");
}