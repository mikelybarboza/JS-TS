// Não podemos criar constantes com palvras reservadas
// Constantes precisam ter nome significativos
// Não pode começar o nome de uma constante com um número
// Utiizamos camelCase
// Case-sensitive
// Não pode modificar o valor de uma constane
// NÃO UTILIZE VAR, UTILIZE CONST
// String = Text | Number = Número
const primeiroNumero = 5; //Number
const segundoNumero = '10';
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(typeof primeiroNumero);
console.log(typeof segundoNumero)
console.log(typeof (primeiroNumero + segundoNumero))