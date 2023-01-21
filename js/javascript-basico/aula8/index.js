// String, number, undefined, null, boolean, symbol
const nome = 'Mikely'; //string  
const nome1 = "Mikely"; //string 
const nome2 = `Mikely`; //string   
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta para loca nenhum na mémoria
const sobrenomeAluno = null; // Nulo -> Não aponta pra local nenhum na memória
const aprovado = false; ;; // Boolean = true, false

let a = 2;
const b = a; 
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2


// typeof tipo, valor
console.log(typeof nome, nome);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);