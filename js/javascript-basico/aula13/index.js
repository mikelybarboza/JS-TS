//                01234567
let umaString = "o rato roeu a roupa do rei de roma. ";

console.log(umaString[4]);
console.log(umaString.charAt(6));
console.log(umaString.concat(' em', ' um', ' lindo', ' dia' ));
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('texto'));
console.log(umaString.lastIndexOf('x', 6));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/));
console.log(umaString.replace('Um', 'Outro'));
console.log(umaString.length);
console.log(umaString.slice(-3));
console.log(umaString.slice(-5));
console.log(umaString.slice(-5, umaString.length - 1));
console.log(umaString.slice(32));
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));
console.log(umaString.split(' ', 2));
console.log(umaString.split(' ', 3));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());