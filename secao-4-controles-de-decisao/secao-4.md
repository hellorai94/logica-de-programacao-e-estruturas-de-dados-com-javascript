# Controles de Decisão
## `if` e `else`
A estrutura condicional `if` e `else` permite a execução de blocos de código dependendo de uma condição.  

```javascript
// if e else - Estruturas condicionais
let idade = parseInt(prompt("Digite sua idade:"));

if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}

// typeof - Identificando tipos de variáveis
console.log(typeof 10);        // "number"
console.log(typeof "Hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof {});        // "object"
console.log(typeof undefined); // "undefined"

// isNaN - Verificando se um valor não é um número

console.log(isNaN(10));     // false (10 é um número)
console.log(isNaN("abc"));  // true  ("abc" não pode ser convertido em número)
console.log(isNaN("10"));   // false (é uma string, mas pode ser convertida para número)
console.log(isNaN(NaN));    // true  (NaN é Not a Number)

// isFinite - Verificando se um número é finito

console.log(isFinite(100));      // true  (100 é um número finito)
console.log(isFinite(Infinity)); // false (Infinity não é finito)
console.log(isFinite(NaN));      // false (NaN não é um número finito)
console.log(isFinite("50"));     // true  (convertido para número 50, que é finito)
console.log(isFinite("abc"));    // false ("abc" não pode ser convertido para número)
