// let binaryAccum = "";
// let binary = "";

// function convertToBinary(num) {
//     let quotient = parseInt(num / 2);

//     let remainder = num % 2;
//     binaryAccum += remainder;

//     if (quotient != 0) {
//         convertToBinary(quotient);
//     } else {
//         for (let i = 0; i < binaryAccum.length; i++) {
//             binary += binaryAccum[binaryAccum.length - 1 - i];
//         }
//     }

//     return binary;
// }

// console.log(convertToBinary(3));

// let binaryAccum = "";
// let binary = "";

// function addBinary(a, b) {
//     let sum = a + b;
//     return returnBinary(sum);
// }

// function returnBinary(num) {
//     let quotient = parseInt(num / 2);

//     let remainder = num % 2;
//     binaryAccum += remainder;

//     if (quotient != 0) {
//         returnBinary(quotient);
//     } else {
//         for (let i = 0; i < binaryAccum.length; i++) {
//             binary += binaryAccum[binaryAccum.length - 1 - i];
//         }
//     }

//     return binary;
// }

// console.log((addBinary(51, 12)));

// function getMiddleCharacter(str) {
//     // let middleCharacter = "";
//     // if (str.length % 2 == 0) {
//     //     middleCharacter = str[str.length / 2 - 1] + str[str.length / 2];
//     // } else {
//     //     middleCharacter = str[Math.floor(str.length / 2)];
//     // }

//     return str.substr(Math.ceil(str.length /
//         2 - 1), str.length % 2 == 0 ? 2 : 1);

// }

// console.log(getMiddleCharacter("testing"));


// CENTURY FROM YEAR
// function yearToCentury(year) {

//     return Math.ceil(year / 100);
// }

// console.log(yearToCentury(1900));


//SUM OF TWO LOWEST POSITIVE INTEGERS
// function sumTwoSmallestNumbers(numbers) {
//     const sortedNumbers = numbers.sort((a, b) => a - b);
//     const sum = sortedNumbers[0] + sortedNumbers[1];
//     return sum;
// }

// console.log(sumTwoSmallestNumbers([5, 4, 1, 3, 2]));


// BUS STOP
// var number = function(busStops) {
//         // RESPUESTA 1
//         // let peopleGetIn = 0;
//         // let peopleGetOff = 0;
//         // let peopleStillIn = 0;
//         // busStops.forEach(busStop => {
//         //     peopleGetIn += busStop[0];
//         //     peopleGetOff += busStop[1];
//         // });
//         // peopleStillIn = peopleGetIn - peopleGetOff;
//         // return peopleStillIn;

//         //RESPUESTA 2
//         // return busStops.reduce((peopleStillIn, [peopleGetIn, peopleGetOff]) => peopleStillIn + peopleGetIn - peopleGetOff, 0);
//     }    

// console.log(number([
//     [3, 0],
//     [9, 1],
//     [4, 8],
//     [12, 2],
//     [6, 1],
//     [7, 8]
// ]));

// //MUMBLING
// function accum(s) {
//     // // RESPUESTA 1
//     // let mumbling = '';
//     // for (let i = 0; i < s.length; i++) {
//     //     mumbling += s[i].toUpperCase() + (s[i].repeat(i)).toLowerCase();
//     //     if (i < s.length - 1) {
//     //         mumbling += '-';
//     //     }
//     // }
//     // return mumbling;

//     // RESPUESTA 2
//     // let mumbling = [];
//     // for (let i = 0; i < s.length; i++) {
//     //     mumbling[i] = s[i].toUpperCase() + (s[i].repeat(i)).toLowerCase();
//     // }
//     // return mumbling.join('-');

//     // RESPUESTA 3
//     const lettersInArray = [...s].map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index));
//     return lettersInArray.join('-');
// }

// console.log(accum("cwAt"));


// // FORMATTING A STRING
// function list(names) {
//     let formattedNames = '';
//     names.forEach((name, index) => {
//         formattedNames += name.name;
//         if (index < names.length - 2) {
//             formattedNames += ', ';
//         } else if (index < names.length - 1) {
//             formattedNames += ' & ';
//         }
//     })
//     return formattedNames;
// }

// console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));


// // DESCENDING ORDER
// function descendingOrder(n) {
//     // Convert number to array of strings: shorturl.at/ACHNT
//     const numberToArray = n.toString(10);
//     const orderedNumbers = [...numberToArray].sort((a, b) => b - a);
//     return parseInt(orderedNumbers.join(''));
// }

// console.log(descendingOrder(42145));

// // EXES AND OHS
// function XO(str) {
//     // //RESPUESTA 1
//     // const stringArray = [...str.toLowerCase()];
//     // let xCount = 0;
//     // let oCount = 0;
//     // stringArray.forEach(element => {
//     //     element == 'x' ? xCount++ : 0;
//     //     element == 'o' ? oCount++ : 0;
//     // });
//     // return xCount == oCount ? true : false;

//     //RESPUESTA 2
//     const xCount = str.match(/x|X/g);
//     const oCount = str.match(/o|O/g);
//     return (xCount && xCount.length) == (oCount && oCount.length);
// }

// console.log(XO("XoXo"));

// // TOWER BUILD
// function towerBuilder(nFloors) {
//     let tree = [];
//     const spaces = ' ';
//     const branches = '*';
//     for (let i = 0; i < nFloors; i++) {
//         tree.push(spaces.repeat(nFloors - 1 - i) + branches.repeat(i * 2 + 1) + spaces.repeat(nFloors - 1 - i));
//     }
//     return tree;
// }
// console.log(towerBuilder(20));

// // SORT THE ODD
// function sortArray(array) {
//     let oddArray = [];
//     let indexArray = [];
//     let sortedOddArray = [];
//     let finalSortedArray = array;
//     array.forEach((e, index) => {
//         if (e % 2 != 0) {
//             oddArray.push(e);
//             indexArray.push(index);
//         }
//     });
//     sortedOddArray = oddArray.sort((a, b) => a - b);
//     for (let i = 0; i < sortedOddArray.length; i++) {
//         finalSortedArray[indexArray[i]] = sortedOddArray[i];
//     }
//     return finalSortedArray;
// }
// console.log(sortArray([5, 3, 2, 8, 1, 4]));

// // WHO LIKES IT?
// function likes(names) {
//     let msg = "";
//     if (names.length == 0) {
//         msg = "no one likes this";
//     } else if (names.length == 1) {
//         msg = `${names[0]} likes this`;
//     } else if (names.length == 2) {
//         msg = `${names[0]} and ${names[1]} like this`;
//     } else if (names.length == 3) {
//         msg = `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     } else if (names.length > 3) {
//         msg = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//     }
//     return msg;
// }
// console.log(likes(["Alex", "Rodrigo", "Mirley", "Jesús", "Hehe"]));

// // ROT13
// function rot13(message) {
//     let newMessageArray = [];
//     let newMessageString = "";
//     for (let i = 0; i < message.length; i++)  {
//         newMessageArray[i] = (message.charCodeAt(i) +
//             (message[i].match(/[a-m]|[A-M]/g) ? 13 : message[i].match(/[n-z]|[N-Z]/g) ? -13 : 0));
//         newMessageString += String.fromCharCode(newMessageArray[i]);
//     }
//     return newMessageString;
// }
// console.log(rot13("Test"));

// // YOU'RE A SQUARE
// var isSquare = function(n) {
//     // RESPUESTA 1
//     // return Number.isInteger(Math.pow(n, 0.5));

//     // RESPUESTA 2
//     return Number.isInteger(Math.sqrt(n));
// }
// console.log(isSquare(144));

// // PERSISTENT BUGGER
// function persistence(num, count) {
//     //Return num immediately if is 1 digit:
//     if (num < 10) { return 0; }
//     let numbersString = num.toString();
//     let numbersArray = [...numbersString];
//     let newNumber = numbersArray.reduce((accumulator, currentValue) => accumulator * currentValue);
//     if (newNumber < 10) {
//         // Ref del count, del return 1 y del return 1 + persistence... : https://stackoverflow.com/questions/29312432/javascript-recursion-counter
//         return 1;
//     } else {
//         // Ref del return: https://stackoverflow.com/questions/10719480/javascript-return-of-recursive-function

//         return 1 + persistence(newNumber, count);
//     }
// }
// console.log(persistence(39));

// // REMOVE THE MINIMUM
// function removeSmallest(numbers) {
//     let indexMin = numbers.indexOf(Math.min(...numbers))
//     let numbersArray = [...numbers];
//     numbersArray.splice(indexMin, 1);
//     return numbersArray;
// }
// console.log(removeSmallest([2, 1, 3, 0, -1]));

// // WRITE A NUMBER IN EXPANDED FORM
// function expandedForm(num) {
//     let numString = num.toString();
//     let numArr = [...numString];
//     let expandedFormArr = [];
//     numArr.map((e, index) => {
//         if (e != 0) {
//             expandedFormArr.push(`${e}${('0').repeat(numArr.length-1-index)}`);
//         }
//     });
//     return expandedFormArr.join(" + ");
// }
// console.log(expandedForm(703040));

// // ROMAN NUMERAL CONVERTER
// function convertToRoman(num) {
//     let numArray = [...num.toString()];
//     return numArray;    
// }

// console.log(convertToRoman(36));

// // YOUR ORDER, PLEASE
// function order(words) {
//     let wordsArr = [...words.split((" "))];
//     let sortedWords = []
//     wordsArr.map(e => {
//         [...e].map(i => {
//             let iToNumber = parseInt(i);
//             if (Number.isInteger(iToNumber)) {
//                 sortedWords[i - 1] = e;
//             }
//         });
//     });

//     return sortedWords.join(" ");
// }
// console.log(order("is2 Thi1s T4est 3a"));

// // STRINGS MIX
// function mix(s1, s2) {
//     // your code
// }
// console.log(mix())

// WORD A10N (ABBREVIATION)
function abbreviate(string) {
    let stringArray = string.split(/ |-/);
    let abbreviation = stringArray.map(e => `${e[0]}${e.length-2}${e[e.length-1]}`);
    return string;
}

console.log(abbreviate("elephant-ride"));