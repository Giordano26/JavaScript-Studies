const nome = 'Pedro Henrique';
const sobrenome = 'Pagano';
const idade = 20;
const peso = 60;
const altura = 1.75; //em metros
let imc; // peso / altura²
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2000;

console.log(`${nome + ' ' +sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome + ' ' + sobrenome} nasceu em ${anoNascimento}`);



