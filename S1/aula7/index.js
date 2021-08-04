const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 2;
resultadoTriplicado += resultadoTriplicado;
console.log(resultado, resultadoDuplicado, resultadoTriplicado);

console.log(typeof(primeiroNumero), typeof(resultadoDuplicado))