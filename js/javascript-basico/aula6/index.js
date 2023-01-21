/**
 * Mikely Barboza tem 26 anos, pesa 72kg tem 1.65 de altura e seu IMC é de ...
 * Mikely Barboza Nasceu em ...
 */

const nome = 'Mikely';
const sobrenome = 'Barboza';
const idade = 26;
const peso = 72;
const altura = 1.65;
let imc = peso / (altura * altura) 
let anoNascimento = 1996;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${altura}  e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`)