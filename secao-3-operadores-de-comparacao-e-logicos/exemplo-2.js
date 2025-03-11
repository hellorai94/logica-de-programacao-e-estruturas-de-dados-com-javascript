var num1 = parseFloat(prompt("Digite o número 1 (entre 1-10): "));
var num2 = parseFloat(prompt("Digite o número 2 (entre 1-10): "));

// alert("O segundo número é maior ou igual ao primeiro? " + (num2 >= num1));

var media = (num1 + num2) / 2;
alert("Está reprovado? " + (media <= 4 || num1 === 0 || num2 === 0));


